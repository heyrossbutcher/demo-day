jQuery(document).ready(function(){

	if ( typeof bgvideo=='object' ) {
	
		jQuery('body').append( buildBgVideoHtml );
		jQuery('body').append( '<button class="taptoplay">Tap to play/pause video</button>' );
		
		if (bgvideo.fixed=='fixed') jQuery('.bgvideo-wrapper').css({'position':'fixed'});
	
		resizeBgVideo();
	
		jQuery(window).resize( resizeBgVideo );
		
		jQuery('.taptoplay').click(function(){
		
			var myVideo = document.getElementById("bgVideo");
			
			if (myVideo.paused) {
				myVideo.play();
			} else {
				myVideo.pause();
			}
			
			//jQuery('.taptoplay').hide();
		
		});
				
	}
	
});	

function buildBgVideoHtml(){

	var bgvhtml = '<div class="bgvideo-wrapper"><video id="bgVideo" preload="none" ';

	if (bgvideo.muted == 'muted') bgvhtml = bgvhtml.concat(' muted');

	if (bgvideo.autoplay == 'autoplay') bgvhtml = bgvhtml.concat(' autoplay');
	
	if (bgvideo.loop == 'loop') bgvhtml = bgvhtml.concat(' loop');	

	if (bgvideo.poster) {
		bgvhtml = bgvhtml.concat(' poster="', bgvideo.poster, '"');
	}	

	bgvhtml = bgvhtml.concat(' class="bgvideo">');

	if (bgvideo.mp4) {
		bgvhtml = bgvhtml.concat('<source src="', bgvideo.mp4, '" type="video/mp4"/>');
	}	

	if (bgvideo.webm) {
		bgvhtml = bgvhtml.concat('<source src="', bgvideo.webm, '" type="video/webm"/>');
	}
	
	if (bgvideo.ogg) {
		bgvhtml = bgvhtml.concat('<source src="', bgvideo.ogg, '" type="video/ogg"/>');
	}			
		
	bgvhtml = bgvhtml.concat('</video></div>');

	return bgvhtml;
	
}


function resizeBgVideo(){
	
	var newHeight, newWidth;

	jQuery('html').css({'overflow':'hidden'});
	
	var $wrapper = jQuery('.bgvideo-wrapper');
	
	// Get parent element height, width, ratio
    var parentHeight = $wrapper.height();
	var parentWidth = $wrapper.width();
	var parentRatio = parentHeight / parentWidth;
	
	// Get native ratio
	var nativeRatio = bgvideo.height / bgvideo.width;
	
	console.log('height = ' + parentHeight + ' width = ' + parentWidth);
	
	newWidth = parseInt(parentHeight / nativeRatio);

	// If not wide enough then recalculate height
	if (newWidth < parentWidth) {
		
		newWidth = parentWidth;
		newHeight = parseInt(newWidth * nativeRatio);

	} else {
	
		newWidth = parseInt(parentHeight / nativeRatio);
		newHeight = parentHeight;

	}	
	
	console.log('new height = ' + newHeight + ' width = ' + newWidth);	
			
    jQuery('.bgvideo').css({
        'height': newHeight,
        'width': newWidth,
        'max-width' : newWidth
    }); 
    
    jQuery('.bgvideo-wrapper').css({'visibility':'visible'});
    
    jQuery('html').css({'overflow':'auto'});

};