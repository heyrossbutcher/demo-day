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
}
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
}
//Hack to add the movinf functionality
info.fire_piece = function(){
	if( info.scrollPercent >= (0*info.scroll_divider) && info.scrollPercent <= (1*info.scroll_divider) ){
		info.move_down('.piece1', '.nav1');
		

	} else if ( info.scrollPercent >= (0.75*info.scroll_divider) && info.scrollPercent <= (2*info.scroll_divider) ){
			info.move_on('.piece1', '.nav1');
			info.move_down('.piece2', '.nav2');
			info.move_down('.piece3', '.nav3');
			info.move_down('.piece4', '.nav4');

	} else if( info.scrollPercent >= (2*info.scroll_divider) && info.scrollPercent <= (3*info.scroll_divider) ){
			info.move_up('.piece1', '.nav1');
			info.move_on('.piece2', '.nav2');
			info.move_down('.piece3', '.nav3');
			info.move_down('.piece4', '.nav4');
			
	} else if( info.scrollPercent >= (3*info.scroll_divider) && info.scrollPercent <= (4*info.scroll_divider) ){
			info.move_up('.piece1', '.nav1');
			info.move_up('.piece2', '.nav2');
			info.move_on('.piece3', '.nav3');
			info.move_down('.piece4', '.nav4');
			
	} else if( info.scrollPercent >= (4*info.scroll_divider) && info.scrollPercent <= (5.25*info.scroll_divider) ){
			info.move_up('.piece1', '.nav1');
			info.move_up('.piece2', '.nav2');
			info.move_up('.piece3', '.nav3');
			info.move_on('.piece4', '.nav4');
			
	} if( info.scrollPercent >= (5.25*info.scroll_divider) && info.scrollPercent <= (6*info.scroll_divider) ){
			info.move_up('.piece1', '.nav1');
			info.move_up('.piece2', '.nav2');
			info.move_up('.piece3', '.nav3');
			info.move_up('.piece4', '.nav4');
			
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
});
//
//
$(window).on('resize', function(){
	info.get_scroll_data();
});
//
$(window).on('scroll', function(){
	info.get_scroll_data();
	info.fire_piece();
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
