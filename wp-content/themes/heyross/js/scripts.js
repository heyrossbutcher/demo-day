var info ={};//Why hello namespace
/////////////////////////////////////////////////////////////
// SINGLE PAGE CODE
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
// HOME PAGE CODE
/////////////////////////////////////////////////////////////
//Create click functions for the side nav
info.click_nav = function(p){
	$('.nav'+ p).on('click', function(){
		console.log('I\'m clicked!!!!!!!!!!!!');
		info.height_checker(p);
		
		// info.whatPiece = p;
 	});
};
//Create button functions for the side nav
info.side_nav = function(){
	for (i = 1; i <= info.divs; i++) {
		console.log('nav' + i);
		info.click_nav(i);
		$('.nav' + i).attr('data-num', i);
		// info.scale(i);
	}
};
//Get's window height, retuens offsets does positioning math
info.height_checker = function(p){
	info.mt_calc = (info.port_height*p)-info.port_height; //Take the height of window and do the math to assign to each portfolio piece
 	info.mt_hldr = info.mt_calc; //Takes the assigned the number and centers in the page
	$('html, body').animate( {scrollTop: info.mt_hldr + 'px'}, 1150, 'swing' ); //Moves the div holding the portfolio pieces
	console.log('What is this ' + info.mt_hldr);
};

//Get all the window and offsets data
info.get_window_data = function(){ 
	info.windowHeight = $(window).height();
	//
	info.piece_height = 350;
	info.port_height = 640; //what the individual pieces were set to
	//
	info.div_hgt = $(document).height();//Portfolio holder height
	info.divs = info.div_hgt/info.port_height;
	info.footerOffset = info.windowHeight/20;
	//
	info.initialPlace = ((info.windowHeight - info.piece_height) / 2) - info.footerOffset;
	// $('.selects-holder').css('marginTop', info.initialPlace);
	info.get_scroll_data();
};

//
info.get_scroll_data = function(){
	info.st = $(window).scrollTop();
    info.dh = $(document).height();
    info.scrollPercent = (info.st / (info.dh-info.windowHeight)) * 100;
	// console.log("Scroll percent: " + info.scrollPercent);
};
//Scroll jacking
info.moveit = function(t) {
	// $(document).on('scrollstop', function(){
			// info.timeOut = setTimeout(function(){ 
			// 	// info.height_checker(t); 
			// 	$('html,body').animate({
			// 		scrollTop: $('.piece'+t).offset().top
			// 	})
			// 	clearTimeout(info.timeOut);
			// },5000);
			// break;
	// });
		//
	// $(document).on('scroll', function(){
		// clearTimeout(info.timeOut);
	// });
};


//Scaling functionality    data-num
info.scale = function(){
	info.get_rnd_num = (info.div_hgt-info.st) / info.port_height ;
	info.get_num =  info.divs - info.get_rnd_num; 
	//
	info.low_pt = (info.divs - info.get_rnd_num);
	info.high_pt = Math.round(info.divs - info.get_rnd_num);
	//

	info.prod = Math.round(info.st);
	if( info.low_pt > -0.5 && info.high_pt < 0.75){
		$('.piece1').addClass('scale');
		$('.piece1 .title').removeClass('hide');
		info.moveit(1);

	}else{
		$('.piece1').removeClass('scale');
		$('.piece1 .title').addClass('hide');
	}
	//
	if( info.low_pt >= 0.75 && info.high_pt <= 1.75){
		$('.piece2').addClass('scale');
		$('.piece2 .title').removeClass('hide');
		info.moveit(2);

	}else{
		$('.piece2').removeClass('scale');
		$('.piece2 .title').addClass('hide');
	}
	//
	if( info.low_pt >= 1.75 && info.high_pt <= 2.75){
		$('.piece3').addClass('scale');
		$('.piece3 .title').removeClass('hide');
		info.moveit(3);

	}else{
		$('.piece3').removeClass('scale');
		$('.piece3 .title').addClass('hide');
	}
	//
	if( info.low_pt >= 2.75 && info.high_pt <= 3.75){
		$('.piece4').addClass('scale');
		$('.piece4 .title').removeClass('hide');
		info.moveit(4);

	}else{
		$('.piece4').removeClass('scale');
		$('.piece4 .title').addClass('hide');
	}
	//

	// console.log('This is the low point: ' + info.low_pt);
	// console.log('This is the high point: ' + info.high_pt);
	// // console.log('This is piece: ' + info.prod);

};
/////////////////////////////////////////////////////////////
// DOCUMENT READY
/////////////////////////////////////////////////////////////
$(function() {
	//Single page
	info.setInfomenu();
	//front page
	info.get_window_data();
	info.side_nav();
	
	//
	// console.log('Get key: ' + info.div_hgt/info.windowHeight);
});
//
$(window).on('resize', function(){
	info.get_window_data();
});
//
$(window).on('scroll', function(){
	info.get_scroll_data();
	info.scale();
	// info.moveit(info.setter);
	console.log('This is the scrollTop: ' + info.st);
});
	

