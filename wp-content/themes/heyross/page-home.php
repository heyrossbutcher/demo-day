<?php

/*
	Template Name: Custom Home Page
*/

get_header();  ?>

<div class="main">
  <div class="container">

    <?php // Start the loop ?>
    <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

    <?php endwhile; // end the loop?>

	<?php //we are going to pull in the latest blog posts ?>
	<?php $latestPosts = new wp_query(array(
		'post_type' => 'portfolio',//we only want blog posts
		'posts_per_page' => 4
	)) ?>

	<?php if($latestPosts->have_posts()) while($latestPosts->have_posts()) : $latestPosts->the_post() ?>

		 <h2><?php the_title(); ?></h2>
	     <?php the_excerpt(); ?>
	     <?php the_terms($post->ID,'technologies'); ?>

	<?php endwhile; ?><!-- //end custom loop -->
	<?php wp_reset_postdata(); ?><!-- //return to regular formatiing -->


  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>