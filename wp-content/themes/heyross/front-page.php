<?php

/*
	Template Name: Custom Home Page
*/

get_header();  ?>

<div class="main">
	<div class="key_instruct clearfix">


<svg width="15%" version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 274.3 178.2" enable-background="new 0 0 274.3 178.2" xml:space="preserve">

 <g class="keys">
	<path fill="#FFFFFF" stroke-miterlimit="10" d="M168.3,85.4h-61.6c-6.6,0-12-5.4-12-12V13.2c0-6.6,5.4-12,12-12
	h61.6c6.6,0,12,5.4,12,12v60.2C180.3,80,174.9,85.4,168.3,85.4z"/>
<path fill="none" stroke-miterlimit="10" d="M165.8,77h-56.7c-2.2,0-4-1.8-4-4V9.1c0-2.2,1.8-4,4-4h56.7
	c2.2,0,4,1.8,4,4V73C169.8,75.2,168,77,165.8,77z"/>
<polygon points="129.8,31.8 123.1,17.6 116,31.8 121.5,31.8 121.5,52.1 124.7,52.1 124.7,31.8 "/>
<path fill="#FFFFFF" stroke-miterlimit="10" d="M168.3,177h-61.6c-6.6,0-12-5.4-12-12v-60.2c0-6.6,5.4-12,12-12
	h61.6c6.6,0,12,5.4,12,12V165C180.3,171.6,174.9,177,168.3,177z"/>
<path fill="none" stroke-miterlimit="10" d="M165.8,168.6h-56.7c-2.2,0-4-1.8-4-4v-63.9c0-2.2,1.8-4,4-4h56.7
	c2.2,0,4,1.8,4,4v63.9C169.8,166.8,168,168.6,165.8,168.6z"/>
<polygon points="116,133.8 122.7,148 129.8,133.8 124.3,133.8 124.3,113.5 121.2,113.5 121.2,133.8 "/>
<path fill="none" #troke-miterlimit="10" d="M260.4,177h-61.6c-6.6,0-12-5.4-12-12v-60.2c0-6.6,5.4-12,12-12h61.6
	c6.6,0,12,5.4,12,12V165C272.4,171.6,267,177,260.4,177z"/>
<path fill="none" stroke-miterlimit="10" d="M257.9,168.6h-56.7c-2.2,0-4-1.8-4-4v-63.9c0-2.2,1.8-4,4-4h56.7
	c2.2,0,4,1.8,4,4v63.9C261.9,166.8,260.1,168.6,257.9,168.6z"/>
<polygon points="232.6,137.6 246.8,130.9 232.6,123.8 232.6,129.3 212.3,129.3 212.3,132.5 232.6,132.5 "/>
<path fill="none" stroke-miterlimit="10" d="M75.5,177H13.9c-6.6,0-12-5.4-12-12v-60.2c0-6.6,5.4-12,12-12h61.6
	c6.6,0,12,5.4,12,12V165C87.5,171.6,82.1,177,75.5,177z"/>
<path fill="none" stroke-miterlimit="10" d="M73,168.6H16.4c-2.2,0-4-1.8-4-4v-63.9c0-2.2,1.8-4,4-4H73
	c2.2,0,4,1.8,4,4v63.9C77,166.8,75.2,168.6,73,168.6z"/>
<polygon points="41.7,123.8 27.4,130.5 41.7,137.6 41.7,132.1 61.9,132.1 61.9,129 41.7,129 "/>

</g>

</svg>

	</div>
  <div class="container clearfix">

	<?php //we are going to pull in the latest portfolio pieces ?>
	<?php $aboutMe = new wp_query(array(
		'post_type' => '1',//we only want portfolio pieces
		'posts_per_page' => 1
	)) ?>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

		<?php $about = the_post_thumbnail('full');  //Get the image for processing ?>

		<div class="select-holder piece1">

				<?php pre_r($about); ?>
				<h2><?php the_title(); ?></h2>
			    <?php the_content(); ?>
			    <?php  //the_post_thumbnail('full'); ?>

		</div> 
			<?php endwhile; ?><!-- //end custom loop -->





	<?php //we are going to pull in the latest portfolio pieces ?>
	<?php $latestPosts = new wp_query(array(
		'post_type' => 'portfolio',//we only want portfolio pieces
		'posts_per_page' => -1
	)) ?>
			
			<?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
			
			<?php //LOAD IN THE PORTFOLIO PIECES ?>
				<?php $image = get_field('screenshot');  //Get the image for processing ?>

				<div class="select-holder piece<?php the_field('nav_select');  ?>" style="background-image: url(<?php echo $image['sizes']['portfolio']; //Print the screenshot?>)">

	                <?php //pre_r($post); ?>
				    
				    <?php $postid = get_the_ID(); //Get the portfolio piece id?>
						<!-- <div class="title hide clearfix"> -->
							<div class="wrap clearfix">
								<div class="excerpt clearfix">
									<h3>
										<?php the_field('project_title');  //Project title ?> 
									</h3>

									<div class="e_text">
										<p><?php the_field('excerpt_description');  //Get the image ?></p>
									</div>

									<div class="tech_list">
						               
						                    <?php $taxonomyItems = get_the_terms($post->ID, 'technologies');
						                    // pre_r($taxonomyItems[4][1]);			
						                    foreach ($taxonomyItems as $taxonomyItem) {
						                      echo '<div class="tech_item '.$taxonomyItem->name.'">'.$taxonomyItem->name.'</div>';
						                    };

						                    ?>
									</div>
				                	<div class="try_it_out">
				                		<a href="<?php echo get_permalink( $postid ); //Get Portfolio Piece Link ?>"><div class='link_swap'>Try it out  <i class="fa fa-chevron-right"></div></i></a>
				                	</div>
								</div>
								

							</div>
						<!-- </div> -->

							<?php //pre_r($image) ?>
							<?php //$tech = the_terms($post->ID, 'technologies') ?>
		
				</div>
	
			<?php endwhile; ?><!-- //end custom loop -->

		<div class="portfolios-nav">
				<div class="portfolio-nav nav1">
					 
				</div>
			<?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
				<?php //LOAD IN THE PORTFOLIO NAV CIRCLES ?>
				<div class="portfolio-nav nav<?php the_field('nav_select');  //Project title ?> ">
					 <?php //the_field('nav_select');  //Project title ?> 
				</div>

			     <?php //the_terms($post->ID,'technologies'); ?>
			<?php endwhile; ?><!-- //end custom loop -->
		</div>
	<?php wp_reset_postdata(); ?><!-- //return to regular formatiing -->


  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>