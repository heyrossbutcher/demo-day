<?php
/*
Plugin Name: Background Video
Plugin URI: http://premium.wpmudev.org/
Description: Background Video
Author: Chris Knowles
Version: 1.0
Author URI: http://twitter.com/ChrisKnowles
*/

/*
 *  Enqueue Background Video Scripts
 */
function bgvideo_enqueue_scripts() {

	/* only need to enqueue if a single page */
	if ( !is_admin() ) {
	
		// Register the init script
		wp_register_script( 'bgvideo',  plugins_url( 'js/bgvideo.js', __FILE__ ), array('jquery'), null, true );

		// Enqueue the scripts.
		wp_enqueue_script( 'bgvideo' );
		wp_enqueue_style( 'bgvideo', plugins_url( 'css/bgvideo.css', __FILE__ ) );

	}
	
}
 
add_action( 'wp_enqueue_scripts' , 'bgvideo_enqueue_scripts' );

/*
 * Handle bgvideo shortcode
 */

function bgvideo_shortcode( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'height' => '',
			'width' => '',
			'muted' => 'muted',
			'autoplay' => 'autoplay', 
			'loop' => 'loop',
			'poster' => '',
			'mp4' => '',
			'webm' => '',
			'ogg' => '',
			'fixed' => 'fixed'
		), $atts, 'bgvideo' );
			
	// write out the javascript object 
	$sc_jso = '<script type="text/javascript">
				var bgvideo = {
					"height" : "' . $atts['height'] . '",
					"width" : "' . $atts['width'] . '",
					"muted" : "' . $atts['muted'] . '",
					"autoplay" : "' . $atts['autoplay'] . '",
					"loop" : "' . $atts['loop'] . '",										
					"poster" : "' . $atts['poster'] . '",
					"mp4" : "' . $atts['mp4'] . '",
					"webm" : "' . $atts['webm'] . '",
					"ogg" : "' . $atts['ogg'] . '",
					"fixed" : "' . $atts['fixed'] . '"																																			
				};
			</script>';

	return $sc_jso;
				
}

add_shortcode( 'bgvideo', 'bgvideo_shortcode' );

?>