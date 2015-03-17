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
	info.ww = $(window).width();
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
//Hack to add the movinf functionality
info.fire_piece = function(){
	if (info.ww > 640){
		if( info.scrollPercent >= (0*info.scroll_divider) && info.scrollPercent <= (1*info.scroll_divider) ){
				info.move_down('.piece1', '.nav1');
				info.click_temp = 0;
				$('.key_instruct').removeClass('remove');
				$('.aftereights').addClass('remove');
				console.log('hit me baby one more time 1')
				return;


		} else if ( info.scrollPercent >= (0.75*info.scroll_divider) && info.scrollPercent <= (2*info.scroll_divider) ){
				info.move_on('.piece1', '.nav1');
				info.move_down('.piece2', '.nav2');
				info.move_down('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				info.click_temp = 1;
				$('.key_instruct').addClass('remove');
				$('.aftereights').addClass('remove');
				console.log('hit me baby one more time 2')
				return;


		} else if( info.scrollPercent >= (2*info.scroll_divider) && info.scrollPercent <= (3*info.scroll_divider) ){
				info.move_up('.piece1', '.nav1');
				info.move_on('.piece2', '.nav2');
				info.move_down('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				info.click_temp = 2;
				$('.key_instruct').addClass('remove');
				$('.aftereights').addClass('remove');
				console.log('hit me baby one more time 3')
				return;
				

		} else if( info.scrollPercent >= (3*info.scroll_divider) && info.scrollPercent <= (4*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_on('.piece3', '.nav3');
				info.move_down('.piece4', '.nav4');
				info.click_temp = 3;
				$('.key_instruct').addClass('remove');
				$('.aftereights').addClass('remove');
				return;

		} else if( info.scrollPercent >= (4*info.scroll_divider) && info.scrollPercent <= (5.25*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_up('.piece3', '.nav3');
				info.move_on('.piece4', '.nav4');
				info.click_temp = 4;
				$('.key_instruct').addClass('remove');
				$('.aftereights').addClass('remove');
				return;

		} if( info.scrollPercent >= (5.25*info.scroll_divider) && info.scrollPercent <= (6*info.scroll_divider)  ){
				info.move_up('.piece1', '.nav1');
				info.move_up('.piece2', '.nav2');
				info.move_up('.piece3', '.nav3');
				info.move_up('.piece4', '.nav4');
				info.click_temp = 5;
				$('.key_instruct').addClass('remove');
				$('.aftereights').removeClass('remove');
				return;
	}
}
}
//Create click functions for the side nav
info.click_nav = function(p){
	$('.nav'+ p).on('click', function(){
		info.height_checker(p);
		info.click_holder = p;
		console.log(info.click_holder + '-----------');
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
	$('html, body').animate( {scrollTop: info.placer + 'px'}, 550, 'swing' ); //Moves the div holding the portfolio pieces
};
// Goofy fun link and header stuff
info.fun_links = [
	'You know you want to...',
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
		$('.link_swap').html('View it live  <i class="fa fa-chevron-right">' + ' <span class="easter_egg">' + info.fun_links[info.ranNum] + '</span>');
	});
	$('.try_it_out a').on('mouseout', function(){
		$('.link_swap').html('View it live  <i class="fa fa-chevron-right">');
	});
}

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
	//
	info.click_holder = info.click_temp;
});
//

//
$(window).on('resize', function(){
	info.get_scroll_data();
	info.fire_piece();
	console.log('Screen Width: ' + info.ww)
});
//
$(window).on('scroll', function(){
	info.get_scroll_data();
	info.fire_piece();
	// console.log(info.st + '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	//
});
//FFFFFFFFFUUUUUUUUUUCCCCCCCCCCKKKKKKKKKKK!!!!!!!!!
info.find_scroll = function(i){
    $('html, body').animate( {scrollTop: info.click_checker[i] + 'px'}, 550, 'swing' );

}
// info.keydown = function(){
//
info.click_checker = [0, 640, 1280, 1920, 2560, 2982 ];
info.click_holder = 0;
//
$(document).keydown(function(e) {
	if(info.click_holder === 5 && e.which === 40) {
		// info.click_holder = 5; 
		return;
	}

	if(info.click_holder === 0 && e.which === 38) {
		// info.click_holder = 0; 
		return;
	}
	if( info.click_holder >= 0 && info.click_holder <= 5 ){
			    switch(e.which) {
			        case 40: // Down
			        info.click_holder++;
			        info.find_scroll( info.click_holder  );
			        break;

			        break;

			        case 38: // Up
			        info.click_holder--;
			        info.find_scroll( info.click_holder  );
			        break;

			        default:
			        return;
			    }
		    e.preventDefault(); // prevent the default action (scroll / move caret)
	}
});

//Reveal Mobile Menu
$('.open').on('click', function() {
	$('.mobile_contact_items').toggleClass('hide');
});
