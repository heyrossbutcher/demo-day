<footer>
  <div class="container">
	<div class="home_link">
		<a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home">
		    <?php bloginfo( 'name' ); ?>
		</a>
	</div>
	<div class="credentials">
		<strong>Email: </strong><a href="mailto:heyross@rossbutcher.ca?subject=Hey ">heyross@rossbutcher.ca</a><div class="divider">|</div><strong>Call: </strong> 647.668.6850
	</div>
	<div class="sml_credentials hide">
		<div class="stack"><strong>Email: </strong><a href="mailto:heyross@rossbutcher.ca?subject=Hey ">heyross@rossbutcher.ca</a></div>
		<div class="stack"><strong>Call: </strong> 647.668.6850</div>
	</div>


		<?php //we are going to pull in the latest portfolio pieces ?>
		<?php $latestPosts = new wp_query(array(
			'post_type' => 'social',//we only want portfolio pieces
			'posts_per_page' => -1
		)) ?>
		
		<div class="social">
			<?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>

				<div class="social_btns <?php the_field('which_social');  //Assign the class ?>">
					<a href="<?php the_field('link_to');  //put the link ?>" target="blank">
						<?php the_field('font_awesome_link');  //Get the icon ?>
					</a>
				</div>
				
			<?php endwhile; ?><!-- //end custom loop -->
		</div>
  </div>
</footer>

<script>
/* Google Analytics! */
 var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]]; // Change UA-XXXXX-X to be your site's ID
 (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
 g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
 s.parentNode.insertBefore(g,s)}(document,"script"));
</script>

<?php wp_footer(); ?>
</body>
</html>