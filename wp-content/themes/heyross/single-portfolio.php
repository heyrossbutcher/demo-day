<?php get_header(); ?>

<div class="main">
  <div class="container">

    <div class="content portfolio-upclose">
      <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        
        <div class="ex-holder">
            kdkdkdk          
        </div>

        <div class="info-holder">
          <div class="info-holder-title">
            <h2><?php the_title(); ?></h2>
          </div>
          <div class="code-nav">
            <div class="nav-item-desc current-selection">
              Info
            </div>
            <div class="nav-item-js">
              JS
            </div>
            <div class="nav-item-html">
              HTML
            </div>
            <div class="nav-item-css">
              CSS
            </div>

          </div>
          <div class="info-holder-code desc">
            <?php the_field('full_description');  //Get the JavaScript ?>
          </div>
          <div class="info-holder-code js hide">
            <?php the_field('javascript_code');  //Get the JavaScript ?>
          </div>
          <div class="info-holder-code html hide">
            <?php the_field('html_code');  //Get the HTML ?>
          </div>
          <div class="info-holder-code css hide">
            <?php the_field('css');  //Get the CSS code ?>
          </div>

        </div>
        

        <?php //the_content(); ?>

      <?php endwhile; // end of the loop. ?>

    </div> <!-- /.content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>