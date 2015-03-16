// changes height of entry-header

jQuery(document).ready(function() {

	var the_height = jQuery('.bgvideo-wrapper').height();
	jQuery('header.entry-header').height( the_height );

});

jQuery(window).resize(function() {

	var the_height = jQuery('.bgvideo-wrapper').height();
	jQuery('header.entry-header').height( the_height );

});