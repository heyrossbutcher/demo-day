var info ={};//Why hello namespace
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// SINGLE PAGE CODE
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//set in the initial namespace
info.spotlight = '.desc';
info.hilight = '.nav-item-desc';
//set the show hide code function
info.show_hide = function(clicker, shower){
	$(clicker).on('click', function(){
		$(info.spotlight).toggleClass('hide');
		$(shower).toggleClass('hide');
		//
		$(this).toggleClass('current-selection');
		$(info.hilight).toggleClass('current-selection');
		//
		info.spotlight = shower;
		info.hilight = clicker;
		//
	});
};
//Apply show-hide to the code nav items
info.setInfomenu = function(){
	info.show_hide('.nav-item-desc', '.desc');
	info.show_hide('.nav-item-js', '.js');
	info.show_hide('.nav-item-html', '.html');
	info.show_hide('.nav-item-css', '.css');
};
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// HOME PAGE CODE
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//Get all the viewport and scroll data
info.get_scroll_data = function(){
	info.wh = $(window).height();
	info.st = $(window).scrollTop();
    info.dh = $(document).height();
    info.scrollPercent = (info.st / (info.dh-info.wh)) * 100;
	info.scroll_divider_num = 6;
	info.scroll_divider = 100 / info.scroll_divider_num;
};
//Adding the movement classes
info.move_on = function(the_piece, the_nav){
	$(the_piece).addClass('moveOn');
	$(the_piece).removeClass('moveUp');
	$(the_piece).removeClass("moveDown");
	//
	$(the_piece).addClass('scale');
	//
	$(the_nav).addClass('current_state');
	//
}
info.fire_counter = 0;
//
info.move_up = function(the_piece, the_nav){

	$(the_piece).addClass('moveUp');
	$(the_piece).removeClass('moveOn');
	$(the_piece).removeClass("moveDown");
	//
	$(the_piece).removeClass('scale');
	//
	$(the_nav).removeClass('current_state');
}
info.move_down = function(the_piece, the_nav){
	$(the_piece).addClass('moveDown');
	$(the_piece).removeClass('moveOn');
	$(the_piece).removeClass("moveUp");
	//
	$(the_piece).removeClass('scale');
	//
	$(the_nav).removeClass('current_state');
	//
}
// info.move_excerpt = function(the_piece){
// 	var where_is_it = the_piece.position().top;
// 	if (where_is_it == 0){
// 		$(this + ' .excerpt').addClass('excerpt_on');
// 	} else {
// 		$(this + ' .excerpt').removeClass('excerpt_on');
// 	}
// }
// info.move_the_excerpt = function(){
// 	info.move_excerpt('piece2');
// }
//Hack to add the movinf functionality
info.fire_piece = function(){

		if( info.scrollPercent >= (0*info.scroll_divider) && info.scrollPercent <= (1*info.scroll_divider) ){
				info.move_down('.piece1', '.nav1');
				console.log('11111111111111111111');

		} else if ( info.scrollPercent >= (0.75*info.scroll_divider) && info.scrollPercent <= (2*info.scroll_divider) ){
				info.move_on('.piece1', '.nav1');
				info.move_down('.piece2', '.nav2');
				info.move_down('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				console.log('22222222222222222');

		} else if( info.scrollPercent >= (2*info.scroll_divider) && info.scrollPercent <= (3*info.scroll_divider) ){
				info.move_up('.piece1', '.nav1');
				info.move_on('.piece2', '.nav2');
				info.move_down('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				console.log('33333333333333333');

		} else if( info.scrollPercent >= (3*info.scroll_divider) && info.scrollPercent <= (4*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_on('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				console.log('444444444444444444');

		} else if( info.scrollPercent >= (4*info.scroll_divider) && info.scrollPercent <= (5.25*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_up('.piece3', '.nav3');
				info.move_on('.piece4', '.nav4');
				console.log('555555555555555555')
				
		} if( info.scrollPercent >= (5.25*info.scroll_divider) && info.scrollPercent <= (6*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_up('.piece3', '.nav3');
				info.move_up('.piece4', '.nav4');
				console.log('666666666666')
	}
}
//Create click functions for the side nav
info.click_nav = function(p){
	$('.nav'+ p).on('click', function(){
		info.height_checker(p);
		// console.log(info.placer + '!!!!!!!!!!!!');
		// info.whatPiece = p;
 	});
};
//Create button functions for the side nav
info.side_nav = function(){
	for (i = 1; i <= 4; i++) {
		console.log('nav' + i);
		info.click_nav(i);
		$('.nav' + i).attr('data-num', i);
	}
};
//Get's window height, retuens offsets does positioning math
info.height_checker = function(p){
	info.placer = (info.dh/info.scroll_divider_num) * (p);
	$('html, body').animate( {scrollTop: info.placer + 'px'}, 750, 'swing' ); //Moves the div holding the portfolio pieces
};
//Goofy fun link and header stuff
info.fun_links = [
	'You know you want to...',
	'What? Are you chicken?',
	'I\'ll give you an After Eight!',
	'Take your time, I can wait',
	'Or not, it\'s a free country. :)',
	'You\'re just one click away!',
	'Successful people like to click.',
	'9 out of 10 doctors recommend it.',
	'Hope you like it!'
];
info.pick_link = function(){
	$('.try_it_out a').on('mouseover', function(){
		info.ranNum = Math.floor(Math.random()*info.fun_links.length);
		$('.link_swap').html('Try it out  <i class="fa fa-chevron-right">' + ' ' + info.fun_links[info.ranNum]);
	});
	$('.try_it_out a').on('mouseout', function(){
		$('.link_swap').html('Try it out  <i class="fa fa-chevron-right">');
	});
}
// info.header_colour = [
// 	'rgba(0,206,209,1)',
// 	'rgba(119,136,153,1)',
// 	'rgba(218,165,32,1)',
// 	'rgba(222,184,135,1)',
// 	'rgba(70,130,180,1)',
// 	'rgba(210,105,30,1)',
// 	'rgba(165,42,42,1)',
// ];
// info.pick_color = function(){
// 	info.ranNumHead = Math.floor(Math.random()*info.header_colour.length);
// 	$('.excerpt h3').css('color', info.header_colour[info.ranNumHead]);
// }

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// DOCUMENT READY
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
$(function() {
	//Single page
	info.setInfomenu();
	//front page
	info.get_scroll_data();
	info.side_nav();
	info.fire_piece();
	//
	info.pick_link();
});
//
//
$(window).on('resize', function(){
	info.get_scroll_data();
});
//
$(window).on('scroll', function(){
	info.fire_piece();
	info.get_scroll_data();
	// info.move_excerpt();
	//
});
//FFFFFFFFFUUUUUUUUUUCCCCCCCCCCKKKKKKKKKKK!!!!!!!!!
info.find_scroll = function(){
	info.keyplacer_data = info.dh/info.scroll_divider_num;
	console.log(info.keyplacer + '!!!!!!!!!!!!!!!!');
	info.keyplacer = info.st + info.keyplacer_data ;
    $('html, body').animate( {scrollTop: info.keyplacer + 'px'}, 750, 'swing' );
}
info.find_scroll2 = function(){
	info.keyplacer_data = info.dh/info.scroll_divider_num;
	info.keyplacer = info.st + -Math.abs( info.keyplacer_data );
    $('html, body').animate( {scrollTop: info.keyplacer + 'px'}, 750, 'swing' );
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 40: // Down
        info.find_scroll( );
        break;

        case 38: // Up
        info.find_scroll2( );
        break;

        default:
        return;
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
