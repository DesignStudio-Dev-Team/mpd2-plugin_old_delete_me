<?php

/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
    echo get_the_password_form(); // WPCS: XSS ok.
    return;
}
?>
<div id="product-<?php the_ID(); ?>">
    <?php

    $url = '//' . $_SERVER['HTTP_HOST'];

    // Mark King
    // this will allow you to preview products from console.mpd2.com
    // just pass in the product_id and use that for syncID
    if (isset($_REQUEST['sync_id'])) {
        $syncID = $_REQUEST['sync_id'];
        $productURL = '//console.myproductdata.com/api/v1/syndication/export/product/' . $syncID;
        $product_json = file_get_contents('https:' . $productURL);
        $product_json_data = json_decode($product_json, true);
        $brandURL = '//console.myproductdata.com/api/v1/syndication/export/brand/' . $product_json_data['brand_id'];

        $brand_json = file_get_contents('https:' . $brandURL);
        $brand_json_data = json_decode($brand_json, true);
        $brand = $brand_json_data['name'];

        $relatedURL = 'https://v2.myproductdata.com/wp-json/dswaves/v1/get_products?productid=';
        $catURL = 'https://v2.myproductdata.com/wp-json/dswaves/v1/get_product_category?category=';
    } else {
        $syncID = get_post_meta(get_the_ID(), 'dsWavesID', true);
        $productURL = $url . '/wp-content/plugins/dsWaves2/website-content/json/Product/' . $syncID . '.json';
        $product_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/website-content/json/Product/' . $syncID . '.json');
        $product_json_data = json_decode($product_json, true);
        $brand_id = $product_json_data['brand_id'];
        $brandURL = $url . '/wp-content/plugins/dsWaves2/website-content/json/Brand/' . $brand_id . '.json';
        $brand = get_post_meta(get_the_ID(), 'dswaves_brand', true); // Brand of the product
        $relatedURL = $url . '/wp-json/dswaves/v1/get_products?productid=';
        $catURL = $url . '/wp-json/dswaves/v1/get_product_category?category=';
    }

    //$syncID = get_post_meta( get_the_ID(), 'dsWavesID', true); // syncID to pass to the vue template 
    // $dataSet = get_post_meta( get_the_ID(), 'dsWavesDataSet', true); // What vue template to display here


    $class = "";
    if ($brand && $syncID) {
        $brandName = strtolower($brand);
        $brandName = preg_replace('/[[:space:]]+/', '-', $brandName);

        $cssURL = $url . '/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tub/app.css';
        $jsURL = $url . '/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tub/app.js';
    }
    if ($brand === 'Hot Spring Spas') {
        $class = "hot-spring-spas-product";
    }
    if ($brand === 'Caldera Spas') {
        $class = "caldera-spas-product";
    }

    if ($brand === 'Freeflow Spas') {
        $class = "freeflow-spas-product";
    }

    if ($brand === 'Fantasy Spas') {
        $class = "fantasy-spas-product";
    }

    if ($brand === 'Endless Pools') {
        $cssURL = $url . '/wp-content/plugins/dsWaves2/website-content/templates/main/endless-pools/app.css';
        $jsURL = $url . '/wp-content/plugins/dsWaves2/website-content/templates/main/endless-pools/app.js';
        $class = "endless-pools-product";
    }

    $navIsSticky = 'false';
    if ( get_field('sticky_header', 'option') ) 
        $navIsSticky = 'true';

    ?>
    <link href='<?php echo $cssURL; ?>' rel=stylesheet>

    <script type="text/javascript">
        const producturl = "<?php echo $productURL; ?>";
        const brandurl = "<?php echo $brandURL; ?>";
        const brandName = "<?php echo $brandName; ?>";
        const getrelatedurl = "<?php echo $relatedURL; ?>";
        const getcaturl = "<?php echo $catURL; ?>";
        const navIsSticky = <?php echo $navIsSticky;?>;
    </script>

    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>

    <div id="app" class="dsw-single-product <?php echo $class; ?>"></div>

    <script src='<?php echo $jsURL; ?>' defer></script>

</div>