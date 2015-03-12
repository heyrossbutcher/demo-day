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
		//
		info.height_checker(p);
		info.whatPiece = p;
 	});
};
//Create button functions for the side nav
info.side_nav = function(){
	for (i = 1; i <= info.divs; i++) {
		// console.log('nav' + i);
		info.click_nav(i);
	}
};
info.height_checker = function(p){

	info.mt_calc = (info.port_height*p)-info.port_height; //Take the height of window and do the math to assign to each portfolio piece
 
 	info.mt_hldr = (-Math.abs(info.mt_calc))+info.marker - info.div_offset; //Takes the assigned the number and centers in the page

	$('.selects-holder').animate( {marginTop : info.mt_hldr + 'px'}, 1000, 'swing' ); //Moves the div holding the portfolio pieces
	// console.log('What is this ' + info.mt_hldr);
}
/////////////////////////////////////////////////////////////
// DOCUMENT READY CODE
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// WINDOW VARIABLES
/////////////////////////////////////////////////////////////
info.get_window_data = function(){ 
	info.windowHeight = $(window).height();
	// info.scrollPercentage =  (info.scrollHeight / info.windowHeight).toFixed(2);
	// console.log('Scrollheight: ' + info.scrollPercentage);
	info.marker = info.windowHeight/2;
	info.footerOffset = info.windowHeight/10;
	info.div_offset = (( $('.select-holder').height() )/2) + info.footerOffset;
	console.log(info.div_offset);
	//your jQuery here
	info.setInfomenu();
	//
	info.port_height = 600; //what the individual pieces were set to
	info.div_hgt = $('.selects-holder').height();//Portfolio holder height
	info.divs = info.div_hgt/info.port_height;
	//
	// console.log('Div holder height is: ' + info.div_hgt);
	// console.log('This is the number of cells: ' + info.divs);
	//
	info.side_nav();
}
$(function(){
	info.get_window_data();

	$(window).on('resize', function(){
		info.scrollHeight = $(window).scrollTop();info.windowHeight = $(window).height();
		info.scrollHeight = $(window).scrollTop();
		info.marker = info.windowHeight/2;
		// var h = window.innerHeight;
		// console.log($(this).scrollTop() + ' !!!!!!!!!!!!!!!');
		// console.log('This is the window height: ' + h);
		//
		//Getting the scroll percentage
		
	});

	//
});