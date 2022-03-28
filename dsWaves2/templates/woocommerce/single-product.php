<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>

<?php
get_header('shop'); ?>

<?php while (have_posts()) : ?>
            <?php the_post(); ?>
            <?php 
                $brand_id = false;
                // this will allow you to preview products from console.mpd2.com
                // just pass in the product_id and use that for syncID
                if (isset($_REQUEST['sync_id'])) 
                {
                    $syncID = $_REQUEST['sync_id'];
                    $productURL = '//console.myproductdata.com/api/v1/syndication/export/product/' . $syncID;
                    $product_json = file_get_contents('https:'.$productURL);  
                    $product_json_data = json_decode($product_json, true);

                    
                    $brand = $product_json_data['categories'][0]['name'];
                    $brand_id = $product_json_data['brand_id'];
                    //$brandURL = '//console.myproductdata.com/api/v1/syndication/export/brand/'.$product_json_data['brand_id'];  

                    //$brand_json = file_get_contents('https:'.$brandURL);  
                    //$brand_json_data = json_decode($brand_json, true);
                    //$brand = $brand_json_data['name'];
                }
                else
                {
                    //lets do some weird shit here
                    $syncID = get_post_meta( get_the_ID(), 'dsWavesID');
                    if (is_array ($syncID))
                        $syncID = $syncID[0];
                        
                    $brand = get_post_meta(get_the_ID(), 'dswaves_brand', true); // Brand of the product
                }
                
                if($syncID && ( $brand == 'Hot Spring Spas' ||
                                $brand == 'Caldera Spas' ||
                                $brand == 'Freeflow Spas' ||
                                $brand == 'Fantasy Spas' ||
                                $brand == 'Endless Pools')) { 
                      
                    wc_get_template_part('content', 'single-product-sync'); //sync Template for Vue JS to do its thing
                }
                elseif($syncID && ($brand || $brand_id == 1)) {

                    wc_get_template_part('content', 'single-simple-product-sync'); //simple product from console

                } 
                
                else { ?>
                
                <div class="entry-content container">
                <div class="mb-2"></div>
                    <?php

                    /**
                     * woocommerce_before_main_content hook.
                     *
                     * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
                     * @hooked woocommerce_breadcrumb - 20
                     */
                    //do_action('woocommerce_before_main_content');
                    
                    wc_get_template_part('content', 'single-product'); // normal template for normies

                                        /**
                     * woocommerce_after_main_content hook.
                     *
                     * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
                     */
                    do_action('woocommerce_after_main_content');




                }
            
             ?>

        <?php endwhile; // end of the loop. ?>

   
        <?php

        /**
         * woocommerce_sidebar hook.
         *
         * @hooked woocommerce_get_sidebar - 10
         */
        //do_action('woocommerce_sidebar');
        ?>

        <?php
        get_footer('shop'); ?>
    </div>
<?php

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
