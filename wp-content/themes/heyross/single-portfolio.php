<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content">
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        
        <h2><?php the_title(); ?></h2>
        <p><strong>Client name: </strong><?php the_field('client_name'); ?></p>
        <p><?php the_field('short_desc') ?></p>

        <div class="images">
            <?php while(has_sub_field('images')) : ?>
              <div class="examples">
                  <?php //for every image caption combo, this code is run ?>
                  <figure>
                    <?php 
                       $image = get_sub_field('image');
                       // pre_r($image); 
                     ?>
                     <img src="<?php echo $image['sizes']['square']; ?>" alt="<?php echo $image['title'] ?>">
                    <figcaption>
                      <?php the_sub_field('caption') ?>
                    </figcaption>
                  </figure>
                  <div class="btn">
                   <a href="<?php the_sub_field('site_link') ?>" target="blank">
                      <?php the_field('click_through_button') ?>
                    </a>
                  </div>
              </div>
            <?php endwhile //end images loop ?>
        </div>

        <?php //the_content(); ?>

      <?php endwhile; // end of the loop. ?>

    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>