<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 * 
 * 
 */

?>
	<footer id="colophon" class="site-footer">
        <div class="footer-flowers">
            <img class="footer-sunflower" src="wp-content\themes\foce-child\assets\sunflower.png" alt="Marguerite">

            <img class="footer-orchid" src="wp-content\themes\foce-child\assets\orchid.png" alt="Orchidée">
        </div>
        
        <?php get_template_part('nomination'); ?>
  
        <ul>
            <li><a href="#">Mentions Légales</a></li>
            <li><a href="#">STUDIO KOUKAKI</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
