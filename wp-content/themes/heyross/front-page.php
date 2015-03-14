<?php

/*
	Template Name: Custom Home Page
*/

get_header();  ?>

<div class="main">
  <div class="container video clearfix">

	<?php //we are going to pull in the latest portfolio pieces ?>
	<?php $aboutMe = new wp_query(array(
		'post_type' => 'post',//we only want portfolio pieces
		'posts_per_page' => 1
	)) ?>

	<div class="selects-holder">
		<div class="select-holder piece1">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
				<h2><?php the_title(); ?></h2>
		      <?php the_content(); ?>
			<?php endwhile; ?><!-- //end custom loop -->
		</div> 





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
						<div class="title hide clearfix">
							<div class="name">
								<?php the_field('project_title');  //Project title ?> 
							</div>
							<div class="wrap clearfix">
								<div class="excerpt">
									<div class="e_text">
										<?php the_field('excerpt_description');  //Get the image ?>
									</div>
									<div class="tech">
						                <p><?php the_terms($post->ID, 'technologies', ' ', '&nbsp;&nbsp;|&nbsp;&nbsp;');  //Load the tech categories ?> was used.</p>
									</div>
								</div>
								<div class="try_it_out">
									<a href="<?php echo get_permalink( $postid ); //Get Portfolio Piece Link ?>">Try it out -></a>
								</div>

							</div>
						</div>

							<?php //pre_r($image) ?>
							<?php //$tech = the_terms($post->ID, 'technologies') ?>
		
				</div>
	
			<?php endwhile; ?><!-- //end custom loop -->
		</div>

		<div class="portfolios-nav">
				<div class="portfolio-nav nav1">
					 1
				</div>
			<?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>
				<?php //LOAD IN THE PORTFOLIO NAV CIRCLES ?>
				<div class="portfolio-nav nav<?php the_field('nav_select');  //Project title ?> ">
					 <?php the_field('nav_select');  //Project title ?> 
				</div>

			     <?php //the_terms($post->ID,'technologies'); ?>
			<?php endwhile; ?><!-- //end custom loop -->
		</div>
	<?php wp_reset_postdata(); ?><!-- //return to regular formatiing -->


  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>