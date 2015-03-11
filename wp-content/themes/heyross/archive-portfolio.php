<?php get_header(); ?>

<div class="main clearfix">
  <div class="container p_arc clearfix">

    <div class="content clearfix">
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

        <div class="gallery clearfix">
                <div class="heading">
                  <h2><?php the_title(); ?></h2>
                  <p><strong>Client name: </strong><?php the_field('client_name'); ?></p>

                  <?php $postid = get_the_ID(); ?>
                  <?php //pre_r($post); ?>
                  <?php the_terms($post->ID, 'technologies','- - ','  |  ', ' - -'); ?>

                  <a href="<?php echo get_permalink( $postid ); ?>">

                    <?php the_post_thumbnail('portfolio'); ?>

                  </a>
                    <p><?php the_field('short_desc') ?></p>
                  <!--   <div class="btn clearfix">
                        <?php the_field('click_through_button') ?>
                    </div> -->
                </div>

               <!--  <div class="images clearfix">
                    <?php while(has_sub_field('images')) : ?>
                      <?php //for every image caption combo, this code is run ?>
                      <!-- <figure> -->
                        <?php //$image = get_sub_field('image'); ?>
                         <!-- <img src="<?php echo $image['sizes']['square']; ?>" alt="<?php echo $image['title'] ?>"> -->
                        <!-- <figcaption>
                          <?php the_sub_field('caption') ?>
                        </figcaption> -->
                      <!-- </figure> -->
                    <?php endwhile //end images loop ?>
                <!-- </div>  -->
                <?php //the_content(); ?>

              <?php endwhile; // end of the loop. ?>
        </div>
    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>