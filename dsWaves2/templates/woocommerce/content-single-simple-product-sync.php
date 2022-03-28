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

//print_r ($product); exit ();
?>
<div id="product-<?php the_ID(); ?>">

<?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>

<?php 

$url = '//' . $_SERVER['HTTP_HOST'];

// Mark King
// this will allow you to preview products from console.mpd2.com
// just pass in the product_id and use that for syncID
if (isset ($_REQUEST['sync_id']))
{
    $syncID = $_REQUEST['sync_id'];
    $productURL = '//console.myproductdata.com/api/v1/syndication/export/product/' . $_REQUEST['sync_id'];
    $product_json = file_get_contents('https:'.$productURL);  
    $product_json_data = json_decode($product_json, true);
    $brand_id = $product_json_data['brand_id'];
    $brandURL = '//console.myproductdata.com/api/v1/syndication/export/brand/'.$product_json_data['brand_id'];  
    $brand_json = file_get_contents('https:'.$brandURL);  
    $brand_json_data = json_decode($brand_json, true);
    $brand = $brand_json_data['name'];

    $can_purchase_online = true;
    $dswaves_can_purchase = 'Yes';
    $product_type = 'Other';

    if ($product_type == 'Other')
    {
        $allow_customer_purchase = 'false';
        if ($can_purchase_online && $dswaves_can_purchase == 'Yes')
        {
            $allow_customer_purchase = 'true';

            $regular_price = $brand_json_data['commerce']['price'];
            $sale_price = $brand_json_data['commerce']['sale_price'];

            if (!$regular_price && !$sale_price)
                $allow_customer_purchase = 'false';    
        }
    }
    

    if ($product_json_data['type'] == 'Variable' && $product_json_data['commerce']['can_purchase_online'])
    {
        $allow_customer_purchase = 'true';
    }

    $sold_individually =  $brand_json_data['individual_only'];
            
    if ($sold_individually) 
        $ask_quantity = 'false';
    else
        $ask_quantity = 'true';
    

    $show_inquiry_button = 'When Cant Buy';

    if ($product_json_data['cta_buttons'])
    {
        foreach ( $product_json_data['cta_buttons'] as $cta_button )
        {
            $btns[] = $cta_button;
        }
    }

    $attributes = [];
    if ($product_json_data['attributes'])
    {
        foreach ( $product_json_data['attributes'] as $attribute )
        {
            if ($attribute['items'])
            {
                $values = [];

                foreach ($attribute['items'] as $value )
                {
                    $values[] = $value['name'];
                }

                $attributes[] = [
                    'name' => $attribute['name'],
                    'values' => $values
                ];
            }
                
        }
    }


    $variations = [];
    if ($product_json_data['variations'])
    {
        foreach ( $product_json_data['variations'] as $variation )
        {
            if (!$variation['sale_price'] && $variation['price'])
                $variation['sale_price'] = $variation['price'];

            $var_image = null;
            if ($variation['media'] && $variation['media']['file_full_url'])
                $var_image = $variation['media']['file_full_url'];

            
            $_attributes = [];    
            if ($variation['keys'])
            {
                foreach (json_decode ($variation['keys']) as $key) 
                {
                    if ($product_json_data['attributes']) 
                    {       
                        foreach ($product_json_data['attributes'] as $attribute) 
                        {
                            if ($key->key == $attribute['id'])
                            {
                                foreach ($attribute['items'] as $value )
                                {
                                    if ($value['id'] == $key->value)
                                    {
                                        $_attributes = [
                                            'attribute_' . strtolower ($attribute['name']) => $value['name']
                                        ];
                                    }
                                } 
                            }
                        }
                    }
                }
            }

            $variations[] = [
                'id' => $variation['id'],
                'image' => $var_image,
                'price' => $variation['price'],
                'sale_price' => $variation['sale_price'],
                'attributes' => $_attributes,
            ];
                
        }
    }

    $relatedURL = 'https://v2.myproductdata.com/wp-json/dswaves/v1/get_products?productid=';
    $catURL = 'https://v2.myproductdata.com/wp-json/dswaves/v1/get_product_category?category=';
}
else
{
    $syncID = get_post_meta( get_the_ID(), 'dsWavesID', true);
    $productURL = $url.'/wp-content/plugins/dsWaves2/website-content/json/Product/'.$syncID.'.json';
    $product_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/website-content/json/Product/'.$syncID.'.json');
    $product_json_data = json_decode($product_json, true);
    $brand_id = $product_json_data['brand_id'];
    $brandURL = $url.'/wp-content/plugins/dsWaves2/website-content/json/Brand/'.$brand_id.'.json';
    $brand = get_post_meta(get_the_ID(), 'dswaves_brand', true); // Brand of the product
    $relatedURL = $url.'/wp-json/dswaves/v1/get_products?productid=';
    $catURL = $url.'/wp-json/dswaves/v1/get_product_category?category=';


    $can_purchase_online = get_post_meta(get_the_ID(), 'can_purchase_online', true);
    $dswaves_can_purchase = get_post_meta(get_the_ID(), 'dswaves_can_purchase', true);

    $product_type = get_post_meta(get_the_ID(), 'product-type', true);

    if ($product_type == 'Other')
    {
        $allow_customer_purchase = 'false';
        if ($can_purchase_online && $dswaves_can_purchase == 'Yes')
        {
            $allow_customer_purchase = 'true';

            $regular_price = get_post_meta(get_the_ID(), '_regular_price', true);
            $sale_price = get_post_meta(get_the_ID(), '_sale_price', true);

            if (!$regular_price && !$sale_price)
                $allow_customer_purchase = 'false';    
        }
    }
    else
    {
        $allow_customer_purchase = 'true';
    }

    $sold_individually =  get_post_meta(get_the_ID(), '_sold_individually', true);
            
    if ($sold_individually) 
        $ask_quantity = 'false';
    else
        $ask_quantity = 'true';
    

    $show_inquiry_button =  get_post_meta(get_the_ID(), 'dswaves_show_inquiry_button', true);
    if (!$show_inquiry_button)
    {
        $show_inquiry_button = 'When Cant Buy';
    }

    // cta buttons
    $btns = [];
    $cta_button_options = get_post_meta(get_the_ID(), 'cta_buttons', true);
    $cta_button_options = json_decode ($cta_button_options);

    if ($product_json_data['cta_buttons'])
    {
        foreach ( $product_json_data['cta_buttons'] as $cta_button )
        {
            foreach ($cta_button_options as $cta_button_option)
            {
                if ($cta_button_option->label == $cta_button['label'] && $cta_button_option->show == 'Show')
                {
                    $btns[] = $cta_button;
                }
            }
        }
    }

    // attributes and variations
    $wp_attributes = $product->get_attributes ();
    $attributes = [];
    if ($wp_attributes)
    {
        foreach ($wp_attributes as $attribute)
        {
            $attributes[] = [
                'name' => $attribute['name'],
                'values' => $attribute['options']
            ];
        }

        $allow_customer_purchase = 'true'; 
    }
   
    if (get_class ($product) == 'WC_Product_Variable')
        $wp_variations = $product->get_available_variations ();

    $variations = [];
    if ($wp_variations)
    {
        foreach ($wp_variations as $wp_variation)
        {
            $image = null;
            if ($wp_variation['image'] && $wp_variation['image']['url'])
                $image = $wp_variation['image']['url'];
            
            if (!$wp_variation['display_price'] && $wp_variation['display_regular_price'])
                $wp_variation['display_price'] = $wp_variation['display_regular_price'];
            
            if ($wp_variation['display_price'])
                $variations[] = [
                    'id' => $wp_variation['variation_id'],
                    'image' => $image,
                    'sale_price' => $wp_variation['display_price'],
                    'price' => $wp_variation['display_regular_price'],
                    'attributes' => $wp_variation['attributes'],
                ];
        }
    }
    
}  

    if($brand && $syncID) {
        $brandName = strtolower($brand);
        $brandName = preg_replace('/[[:space:]]+/', '-', $brandName);
    }

    $cssURL = $url.'/wp-content/plugins/dsWaves2/website-content/templates/main/simple-product/app.css';
    $jsURL = $url.'/wp-content/plugins/dsWaves2/website-content/templates/main/simple-product/app.js';
  
    // reviews and ratings
    // $comment_id = wp_insert_comment( array(
        //     'comment_post_ID'      => 1046467, // <=== The product ID where the review will show up
        //     'comment_author'       => 'Mark',
        //     'comment_author_email' => 'mark@designstudio.com', // <== Important
        //     'comment_author_url'   => '',
        //     'comment_content'      => 'content here another one',
        //     'comment_type'         => '',
        //     'comment_parent'       => 0,
        //     'user_id'              => 5, // <== Important
        //     'comment_author_IP'    => '',
        //     'comment_agent'        => '',
        //     'comment_date'         => date('Y-m-d H:i:s'),
        //     'comment_approved'     => 1,
        // ) );
        // update_comment_meta( $comment_id, 'rating', 1 );



        $comments = get_comments(['post_id' => $product->get_id()]); 

        $hasRated = false;
        $loggedInUserId = get_current_user_id ();
        $i = 0;
            foreach($comments as $comment) {
                $comments[$i]->rating = get_comment_meta($comment->comment_ID, 'rating', true);
                $comments[$i]->formmated_date = date( 'F j, Y', strtotime ($comments[$i]->comment_date));

                if ($comments[$i]->user_id == $loggedInUserId)
                    $hasRated = true;
                $i++;
            }

    $nonce = wp_create_nonce( 'wp_rest' )  ; // for posting a rating  

    $navIsSticky = 'false';
    if ( get_field('sticky_header', 'option') ) 
        $navIsSticky = 'true';

    $dswaves_inquiry_button_text = get_post_meta($post->ID, 'dswaves_inquiry_button_text', true);
    if(!$dswaves_inquiry_button_text) {
        $dswaves_inquiry_button_text = "Product Inquiry";
    }
    $dswaves_inquiry_button_url = get_post_meta($post->ID, 'dswaves_inquiry_button_url', true);
    if(!$dswaves_inquiry_button_url) {
        $dswaves_inquiry_button_url = "/product-inquiry/";
    }
        
?>
<link href='<?php echo $cssURL; ?>' rel=stylesheet>
  
<script type="text/javascript">
    const pageurl  = "<?php echo $productURL; ?>";
    const showBtns = <?php echo json_encode ($btns);?>;
    const allowCustomerPurchase = <?php echo $allow_customer_purchase;?>;
    const askQuantity = <?php echo $ask_quantity;?>;
    <?php if ($regular_price) { ?>
    const regularPrice = '<?php echo number_format($regular_price, 2);?>';
    <?php } else { ?>
        const regularPrice = '';
    <?php } ?>
    <?php if ($sale_price) { ?>
    const salePrice = '<?php echo number_format ($sale_price, 2);?>';
    <?php } else { ?>
        const salePrice = '';
    <?php } ?>
    const wordpressId = '<?php echo get_the_ID();?>';
    const navIsSticky = <?php echo $navIsSticky;?>;
    const showInquiryButton = '<?php echo $show_inquiry_button;?>';
    const inquiryButtonText = '<?php echo $dswaves_inquiry_button_text; ?>';
    const inquiryButtonUrl = '<?php echo $dswaves_inquiry_button_url; ?>';

    const dswProductType = '<?php echo $product_json_data['type'];?>';
    const dswProductAttributes = <?php echo json_encode ($attributes);?>;
    const dswProductVariations = <?php echo json_encode ($variations);?>;
    const dswDisplayReviews = <?php if (wc_review_ratings_enabled() && comments_open()) echo 'true'; else echo 'false';?>;
    const dswRatingsReviews = '<?php echo addslashes (json_encode ($comments)); ?>'; 
    const dswRatingsUserLoggedIn = <?php if (is_user_logged_in ()) echo 'true'; else echo 'false';?>; 
    const dswUserCanRate  = <?php if (!$hasRated && ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' || wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) ) echo 'true'; else echo 'false';?>;
    const dswRatingsLogInUrl = '<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) );?>';   
    const dswNonce = '<?php echo $nonce;?>';
</script>

<div id="app" class="dsw-single-product"></div>

<script src='<?php echo $jsURL; ?>' defer></script> 
 
</div>
