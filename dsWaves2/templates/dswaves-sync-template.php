<?php
/**
* Template Name: DSWaves Sync
*
* @package WordPress
*/
get_header();

// error_reporting(E_ALL); // remove me
// ini_set("log_errors", 1); // remove me
// ini_set('display_errors', true); // remove me
// ini_set("error_log", "php-error.log"); // remove me

$url = $_SERVER['HTTP_HOST'];
$template = get_post_meta( get_the_ID(), 'dswavestemplate', true);
$brand = get_post_meta( get_the_ID(), 'dswavesbrand', true);
$brand = strtolower($brand);
$syncID = get_post_meta(get_the_ID(), 'dsWavesID', true);

//because I know the brand I can find the brand colors but how?! 
if($brand === "hot-spring-spas" OR $brand === "highlife-collection" OR $brand === "limelight-collection" OR $brand === "hot-spot-collection") {
$brandColor1 = '#09A6B5';
$brandColor2 = '#1788C2';
}
if($brand === "caldera-spas" OR $brand === "utopia-series" OR $brand === "vacanza-series" OR $brand === "paradise-series") {
    $brandColor1 = '#F47A55';
    $brandColor2 = '#707070';
}
if($brand === "freeflow-spas" OR $brand === "freeflow-sport-series" OR $brand === "freeflow-premier-series") {
    $brandColor1 = '#293B97';
    $brandColor2 = '#F8A16B';
} 
if($brand === "fantasy-spas" OR $brand === "fantasy-sport-series" OR $brand === "fantasy-premier-series") {
    $brandColor1 = '#0CBAB4';
    $brandColor2 = '#F78E20';
} 
if($brand === "endless-pools") {
    $brandColor1 = '#09A6B5';
    $brandColor2 = '#1788C2';
}
if($brand === "finnleo-saunas") {
    $brandColor1 = '#48721B';
    $brandColor2 = '#FFFFFF';
}

if($template == "hot-tubs") { ?>

    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tubs/app.css">
    <div id="app" class="dsw-watkins-brand-landing-page"></div>
    <script>
        const pageurl = '/wp-content/plugins/dsWaves2/website-content/pages/hot-tubs/main.json';
        const pageurl2 = '//<?php echo $url; ?>/wp-json/dswaves/v1/get_products?category=hot-tubs';
    </script>
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tubs/app.js' defer></script>

<?php } else if($template == "hot-tub-brand") { ?>

    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    
    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tubs/app.css">
    <div id="app" class="dsw-watkins-brand-landing-page"></div>
    <script>
        const pageurl = '/wp-content/plugins/dsWaves2/website-content/pages/hot-tub-brand/<?php echo $brand; ?>.json';
        const pageurl2 = '//<?php echo $url; ?>/wp-json/dswaves/v1/get_products?category=<?php echo $brand; ?>';
        document.documentElement.style
                    .setProperty('--primary-color', '<?php echo $brandColor1; ?>');
                document.documentElement.style
                    .setProperty('--secondary-color', '<?php echo $brandColor2; ?>');

    </script>
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tubs/app.js' defer></script>

<?php } else if($template == "category-brand-lp") { ?>
    
    <?php get_template_part('template-parts/block-hero'); ?>
    
    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/category-brand-lp/app.css">
    <div id="app" class="dsw-category-brand-landing-page"></div>
    
    <?php 

        $brandCategories = [];
        $terms = get_term_by('slug', $brand, 'product_cat', array( 'orderby' => 'term_order', 'order'    => 'ASC'));
        $parent_cat_ID = $terms->term_id;

        //display sub categories
        $args = array(
            'post_status' => 'publish',
            'hierarchical' => 1,
            'show_option_none' => '',
            'hide_empty' => 0,
            // 'orderby'   => 'term_order',
            //'order' => 'DESC',
            'parent' => $parent_cat_ID,
            'taxonomy' => 'product_cat');
        $subcats = get_categories($args);
        //print_r ($subcats); exit ();

        usort($subcats, "cmp");
       
        foreach ($subcats as $sc) { 
          
            if ($page)
                $link = get_permalink($page);

            $thumb_id = get_woocommerce_term_meta( $sc->term_id, 'thumbnail_id', true );
            $term_img = wp_get_attachment_url(  $thumb_id );
            // mark
            if ($sc->count > 0)
            {

                // ensure there is a page linked with this category
                $page_args = array(
                    'post_type' => 'page',
                    'post_status' => 'publish',
                    'meta_query' => array(
                        array(
                            'key' => 'dswavesbrand',
                            'value' => $sc->slug,
                            'compare' => '=',
                        )
                    )
                 );
                 $page_query = new WP_Query($page_args);
                 
                 if ($page_query->post_count)
                 {
                    $brandCategories[] = [
                        'name' => $sc->name,
                        'url' => '/' . $brand . '/' . $sc->slug,
                        'image' => $term_img,
                        'description' => $sc->description
                    ];
                 }
                
            }
        } 

        // dont show categories if we only have one to show at the top
        if (count ($brandCategories) < 2)
            $brandCategories = [];
       

        $brandID = get_field('dsWavesID');
        $brandJson = '/wp-content/plugins/dsWaves2/website-content/json/Brand/'. $brandID.'.json';

        $fullUrl = $_SERVER['DOCUMENT_ROOT'] . $brandJson;
        $content_json = file_get_contents($fullUrl);
        $content_json_data = json_decode($content_json, true);

        $title = $content_json_data['name'];
        if ($content_json_data['register_mark'])
            $title .= $content_json_data['register_mark'];

        $brandLogo = null;
        if ($content_json_data['main_image'] && $content_json_data['main_image']['file_full_url'])
            $brandLogo = $content_json_data['main_image']['file_full_url'];
        
        $desktopHeroMedia = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['media'])
            $desktopHeroMedia = $content_json_data['hero']['media']['file_full_url'];

        $desktopMediaType = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['media'])
            $desktopMediaType = $content_json_data['hero']['media']['file_type'];

        $mobileHeroMedia = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['mobile'] && $content_json_data['hero']['mobile']['media'])
            $mobileHeroMedia = $content_json_data['hero']['mobile']['media']['file_full_url'];    

        $mobileMediaType = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['mobile'] && $content_json_data['hero']['mobile']['media'])
            $mobileMediaType = $content_json_data['hero']['mobile']['media']['file_type'];    

        $desktopVideoCover = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['cover'] && $content_json_data['hero']['cover']['media'])
            $desktopVideoCover = $content_json_data['hero']['cover']['media']['file_full_url']; 

        $mobileVideoCover = null;
        if ($content_json_data['hero'] && $content_json_data['hero']['mobile'] && $content_json_data['hero']['mobile']['cover'] && $content_json_data['hero']['mobile']['cover']['media'])
            $mobileVideoCover = $content_json_data['hero']['mobile']['cover']['media']['file_full_url']; 

        $buttons = [];
        if ($content_json_data['hero'] && $content_json_data['hero']['buttons'])
        {
            foreach ($content_json_data['hero']['buttons'] as $btn)
            {
                $buttons[] = [
                    'title' => $btn['title'],
                    'url' => $btn['url'],
                ];
            }
        }

        // this.pageInfo.primary_colors[0].color

        $brandJson = [
            'brandLogo' => $brandLogo,
            'desktopMediaType' => $desktopMediaType,
            'mobileMediaType' => $mobileMediaType,
            'desktopHeroMedia' => $desktopHeroMedia,
            'mobileHeroMedia' => $mobileHeroMedia,
            'desktopVideoCover' => $desktopVideoCover,
            'mobileVideoCover' => $mobileVideoCover,
            'buttons' => $buttons,
            'title' => $title,
            'tag_line' => $content_json_data['tag_line'],
            'description' => $content_json_data['description'],
            'brand_color' => $content_json_data['primary_colors'][0]['color'],
        ];

        $disableVueHero = 'false';
        $wp_heroes = get_field( 'hero_slider_selector' );
        if ($wp_heroes && count ($wp_heroes))
            $disableVueHero = 'true';

       
    ?>
    <script>
        const disableVueHero = <?php echo $disableVueHero;?>;
        const pageurl2 = '//<?php echo $url; ?>/wp-json/dswaves/v1/get_products?category=<?php echo str_replace ("&", '%26', $brand); ?>';
        const brandJson = '<?php echo base64_encode (json_encode ($brandJson)); ?>';
        const dswWavesCategories = '<?php echo base64_encode (json_encode ($brandCategories));?>';
    </script>
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/category-brand-lp/app.js' defer></script>


<?php } else if ($template == "hot-tub-collection") { ?>

    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    
    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tub-collection/app.css">
    <div id="app" class="dsw-watkins-collection-page"></div>
    <script>
        const pageurl = '/wp-content/plugins/dsWaves2/website-content/pages/hot-tub-collection/<?php echo $brand; ?>/data.json';
        const productsurl = '//<?php echo $url; ?>/wp-json/dswaves/v1/get_products?category=<?php echo $brand; ?>';
        const primaryColor = '<?php echo $brandColor1; ?>';
        const secondaryColor = '<?php echo $brandColor2; ?>';
    </script>
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/hot-tub-collection/app.js' defer></script>

<?php } else if($template == "endless-pools-brand") { ?>
    
    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    
    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/endless-pools-brand/app.css">
    <div id="app" class="dsw-watkins-endless-pools-page"></div>
    <script>
        const pageurl = '/wp-content/plugins/dsWaves2/website-content/pages/endless-pools-brand/<?php echo $brand; ?>/main.json';
        document.documentElement.style
                    .setProperty('--primary-color', '<?php echo $brandColor1; ?>');
                document.documentElement.style
                    .setProperty('--secondary-color', '<?php echo $brandColor2; ?>');
    </script>
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/endless-pools-brand/app.js' defer></script>

<?php } else if($template == 'accessories-category') { ?>
    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    <?php 
    $terms = get_term_by('slug', $brand, 'product_cat', array( 'orderby' => 'term_order', 'order'    => 'ASC'));
    $parent_cat_ID = $terms->term_id;
    $main_thumb_id = get_woocommerce_term_meta( $terms->term_id, 'thumbnail_id', true );
    $main_term_img = wp_get_attachment_url(  $main_thumb_id );

    $term_description = $terms->description;
    ?>
    <div class="dsWavesSyncPage dsw-accessories-category-page mb-28">
        <?php //if ($main_term_img) { ?>
            <!-- <header style="height:385px; position:relative; width:100%; background-image:url('<?php echo $main_term_img; ?>');
                        background-size:cover;">
                <h1 style="color:white; text-align:center; position:absolute; bottom:0px; margin:0;
                width:100%; padding:30px 20px;
                background: linear-gradient(180deg, rgba(2,0,36,0) 31%, rgba(0,0,0,0.607814072894783) 78%);
                "> <?php echo formatSubScript(get_the_title()); ?></h1>
            </header>
            <?php if ($term_description) { ?>
                <div class="container pt-10 w-full mx-auto relative">
                    <div class="md:px-20 lg:px-28 md:max-w-screen-md md:mx-auto md:text-center">
                        <p><?php echo formatSubScript($term_description);?></p>
                    </div>
                </div>
            <?php } ?>
            -->
        <?php //} else { ?>
        <header style="">
            <h1 style="font-size:38px; color:black; text-align:center; 
                width:100%; padding-top:30px; padding-bottom:30px;"> <?php echo formatSubScript(get_the_title()); ?></h1>
            </header>
            <?php if ($term_description) { ?>
                <div class="container text-left pb-16"><div style="font-size:18px;max-width: 36rem; margin: 0 auto;text-align: center;"><?php echo formatSubScript($term_description);?></div></div>
            <?php } ?>
        <?php// } ?>

        

        <div class="container grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 product-brands">
        <?php 
            //display sub categories
            $args = array(
                'post_status' => 'publish',
                'hierarchical' => 1,
                'show_option_none' => '',
                'hide_empty' => 0,
                // 'orderby'   => 'term_order',
                //'order' => 'DESC',
                'parent' => $parent_cat_ID,
                'taxonomy' => 'product_cat');
            $subcats = get_categories($args);
            //print_r ($subcats); exit ();

            usort($subcats, "cmp");
           
            foreach ($subcats as $sc) { 

                // find the page via by matching the category ids
                $dsWavesCatID = get_term_meta($sc->term_id, 'dsWavesCatID');
                $dsWavesCatChildID = get_term_meta($sc->term_id, 'dsWavesCatChildID');
                $dsWavesCatGrandChildID = get_term_meta($sc->term_id, 'dsWavesCatGrandChildID');

                $args = false;
                if ($dsWavesCatGrandChildID && $dsWavesCatGrandChildID[0])
                {
                    $args = array(
                        'posts_per_page' => '1',
                        'post_type' => 'Page',
                        'meta_query' => [
                            array(
                                'key' => 'dsWavesCatGrandChildID',
                                'value' => $dsWavesCatGrandChildID[0],
                                'compare' => '='
                            ),
                        ],
                    );
                }
                else if ($dsWavesCatChildID && $dsWavesCatChildID[0])
                {
                    $args = array(
                        'posts_per_page' => '1',
                        'post_type' => 'Page',
                        'meta_query' => [
                            array(
                                'key' => 'dsWavesCatChildID',
                                'value' => $dsWavesCatChildID[0],
                                'compare' => '='
                            ),
                            array(
                                'key' => 'dsWavesCatGrandChildID',
                                'value' => '',
                                'compare' => '='
                            ),
                        ],
                    );
                }
                else if ($dsWavesCatID && $dsWavesCatID[0])
                {
                    $args = array(
                        'posts_per_page' => '1',
                        'post_type' => 'Page',
                        'meta_query' => [
                            array(
                                'key' => 'dsWavesCatID',
                                'value' => $dsWavesCatID[0],
                                'compare' => '='
                            ),
                            array(
                                'key' => 'dsWavesCatChildID',
                                'value' => '',
                                'compare' => '='
                            ),
                            array(
                                'key' => 'dsWavesCatGrandChildID',
                                'value' => '',
                                'compare' => '='
                            ),
                        ],
                    );
                }

                if ($args)
                {
                    $query = new WP_Query($args);

                    if ($query->have_posts()) {

                        
                        while ($query->have_posts()) {
                            
                            $query->the_post();
                            $post_id = get_the_ID();
                        }
                    }

                    $page = get_page($post_id);

                   
                }
                else
                {
                    // backup for safty, shouldnt ever get called
                    $page = get_page_by_title($sc->name);

                    // somebody added a category from wp-admin
                    // aka, not syndicated
                    if (!$page)
                    {
                        $link = get_category_link ($sc->term_id);
                    }
                }
              
                if ($page)
                    $link = get_permalink($page);

                $thumb_id = get_woocommerce_term_meta( $sc->term_id, 'thumbnail_id', true );
                $term_img = wp_get_attachment_url(  $thumb_id );
                
                $term_description = term_description($sc->term_id);

                $showLink = true;

                $args2 = array(
                    'post_status' => 'publish',
                    'hierarchical' => 1,
                    'show_option_none' => '',
                    'hide_empty' => 0,
                    'parent' => $sc->term_id,
                    'taxonomy' => 'product_cat');
                $subcats2 = get_categories($args2);
                
                $args3 = array( 'post_status' => 'publish', 'post_type' => 'product', 'posts_per_page' => -1, 'product_cat' => $sc->name );
                $loop3 = new WP_Query( $args3 );
                $post_count3 = $loop3->post_count;

                if (count($subcats2) == 0 && $post_count3 == 1)
                {
                    $link = get_permalink( $loop3->post->ID ) ;
                }
                
                // if have sub categories or products within this category then show
                if (count($subcats2) > 0 || $post_count3 > 0) {
                    ?>
                <div class="bg-gray-600" style="position:relative;">
                    <a href="<?php echo $link; ?>">
                        <?php if ($term_img) { ?>
                        <img width="100%" src="<?php echo $term_img; ?>"  alt="<?php echo $page->post_title; ?>"/>
                        <h3 style="position:absolute; top:0px; padding:15px 5px; color:white; text-align:center; width:100%; margin:0;
                    background: -webkit-linear-gradient(rgba(0,0,0,0.6) 40%, transparent 100%);
                background: -moz-linear-gradient(rgba(0,0,0,0.6) 40%, transparent 100%);
                background: -o-linear-gradient(rgba(0,0,0,0.6) 40%, transparent 100%);
                background: linear-gradient(rgba(0,0,0,0.6) 40%, transparent 100%);"><?php echo formatSubScript($page->post_title); ?></h3>
                        <?php } else { ?>
                            <h3 class="text-center dsw-primary-site-link"><?php echo formatSubScript($page->post_title); ?></h3>
                        <?php } ?>
                    </a>
                    <?php if ($term_description) { ?>
                        <div class="p-5 bg-gray-600 text-white dsWavesSyncPageTermDescription">
                            <p><?php echo formatSubScript($term_description); ?></p>
                        </div>
                    <?php } ?>
                </div>
            <?php
                } } ?>            
        </div>
    </div>
    <br /><br />
<?php } else if($template == 'accessories-sub-category') { ?>
<div class="dsWavesSyncPage dsw-accessories-sub-category-page mb-28">
    <?php if (function_exists ('dswPageBreadCrumbs')) echo dswPageBreadCrumbs () ;?>
    <?php 
    $terms = get_term_by('slug', $brand, 'product_cat');
    $parent_cat_ID = $terms->term_id;
    
    //print_r ($terms);
    //echo '<hr />';
    //print_r ($category); exit ();
    $main_thumb_id = get_woocommerce_term_meta( $terms->term_id, 'thumbnail_id', true );
    $main_term_img = wp_get_attachment_url(  $main_thumb_id );
    $term_description = $terms->description;

    ?>

    <?php if ($main_term_img && !$parent_cat_ID) { ?>
        <!--<header style="margin-top:-40px; height:385px; position:relative; width:100%; background-image:url('<?php echo $main_term_img; ?>');
                    background-size:cover; margin-bottom:65px;">
            <h1 style="font-size:38px; color:white; text-align:center; position:absolute; bottom:0px; margin:0;
            width:100%; padding:30px 20px;
            background: linear-gradient(180deg, rgba(2,0,36,0) 31%, rgba(0,0,0,0.607814072894783) 78%);
            "> <?php echo formatSubScript(get_the_title()); ?></h1>

            <?php if ($term_description) { ?>
                <div class="container text-left pb-14"><div style="font-size:18px;max-width: 36rem; margin: 0 auto;text-align: center;"><?php echo formatSubScript($term_description);?></div></div>
            <?php } ?>

        </header> -->
        
    <?php } else { ?>
        <div class="container pt-10 w-full mx-auto relative">
            <h1 class="text-center"><?php echo formatSubScript(get_the_title()); ?></h1>
            <?php if ($term_description) { ?>
                <div class="md:px-20 lg:px-28 md:max-w-screen-md md:mx-auto md:text-center">
                    <p><?php echo formatSubScript($term_description);?></p>
                </div>
            <?php } ?>
        </div>
    <?php } ?>

   
    <?php

        $args = array( 
            'post_type' => 'product', 
            'post_status' => 'publish', 
            'posts_per_page' => -1, 
            'product_cat' => $brand, 
            'orderby' => 'meta_value_num',
            'meta_key' => '_price',
            'order' => 'desc' );

        $loop = new WP_Query( $args );

        //print_r ($loop); exit ();
        $columns = $loop->post_count;
        if ($columns > 3)
            $columns = 3;

        $image_size = 'full';    
        if ($columns < 3)
            $image_size = 'medium';     
    ?>

    <div class="md:flex md:flex-wrap pt-10 container">
        <?php 
            // display the accessories
            while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
                <div class="md:p-5 mx-auto flex-col-3 mb-10 md:mb-1 w-full md:w-1/2 lg:w-1/3">
                <a href="<?php echo get_permalink( $loop->post->ID ) ?>" title="<?php echo esc_attr($loop->post->post_title ? $loop->post->post_title : $loop->post->ID); ?>">
                    <div class="group inline-block overflow-hidden w-full">
                        <?php if (has_post_thumbnail( $loop->post->ID )) { ?>
                            <img src="<?php echo get_the_post_thumbnail_url($loop->post->ID, $image_size);?>" class="block transform transition-all ease-in-out duration-300 w-full" />
                        <?php } else { ?>
                            <img src="<?php echo woocommerce_placeholder_img_src();?>" class="block transform transition-all ease-in-out duration-300 w-full" />
                        <?php } ?>
                    </div>
                    <h3 class="text-center dsw-primary-site-link"><?php echo formatSubScript (get_the_title()); ?></h3>
                    </a>
                </div>
                        
                <!--<div class="product">
                    <a href="<?php echo get_permalink( $loop->post->ID ) ?>" title="<?php echo esc_attr($loop->post->post_title ? $loop->post->post_title : $loop->post->ID); ?>">
                    <?php if (has_post_thumbnail( $loop->post->ID )) echo get_the_post_thumbnail($loop->post->ID, $image_size); else echo '<img src="'.woocommerce_placeholder_img_src().'" alt="Placeholder" width="100%" />'; ?>
                    <p class="text-center pt-2"><strong><?php echo formatSubScript (get_the_title()); ?></strong></p>
                    </a>
                </div>-->
        <?php endwhile; 
            wp_reset_query();
        ?>
    </div>
    <br /><br />
</div>
<?php } else if($syncID == 256) { ?>

<link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/finnleo-101/app.css">
<div id="app" class="dsw-finnleo-101-page"></div>
<script>
    const brandurl = '/wp-content/plugins/dsWaves2/website-content/json/Brand/8.json';
    const contenturl = '/wp-content/plugins/dsWaves2/website-content/json/Page/<?php echo $syncID;?>.json';
</script>
<script src='/wp-content/plugins/dsWaves2/website-content/templates/main/finnleo-101/app.js' defer></script>

<?php } else if($syncID == 232) { ?>

<link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/saunas-101/app.css">
<div id="app" class="dsw-saunas-101-page"></div>
<script>
    const brandurl = '/wp-content/plugins/dsWaves2/website-content/json/Brand/8.json';
</script>
<script src='/wp-content/plugins/dsWaves2/website-content/templates/main/saunas-101/app.js' defer></script>

<?php } else if ($template == '' || $template == 'none') { ?>

    
<main id="main" class="site-main">

<?php

while ( have_posts() ) : the_post();?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>  >
    <?php 
    
    //$url = $_SERVER['HTTP_HOST'];
    
    if (isset($_REQUEST['sync_id'])) 
    {
        $syncID = $_REQUEST['sync_id'];
        $pageURL = 'https://console.myproductdata.com/api/v1/syndication/export/content/' . $syncID;
        $content_json = file_get_contents($pageURL);  
        $content_json_data = json_decode($content_json, true);

        $brandURL = '/wp-content/plugins/dsWaves2/website-content/json/Brand/'. $content_json_data['brand_id'].'.json';
        $brand_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . $brandURL);  
        $brand_json_data = json_decode($brand_json, true);

        if ($content_json_data['type'] == 'Post' || $content_json_data['type'] == 'Knowledgebase Article')
        {
            echo '<div class="dsw-container dsw-m-auto dsw-pt-20 dsw-pb-10">
            <header>   
                <h1 class="dsw-text-2xl dsw-text-center dsw-p-10">' . $content_json_data['title'] . $content_json_data['mark'] . '</h1>
            </header>
        </div>';
        }
    }
    else
    {
        
        $postType = get_post_type(get_the_ID());
    
        $pageURL = '/wp-content/plugins/dsWaves2/website-content/json/Page/'.$syncID.'.json';
  
        $fullUrl = $_SERVER['DOCUMENT_ROOT'] . $pageURL;
        $content_json = file_get_contents($fullUrl);  
        $content_json_data = json_decode($content_json, true);
        //print_r ($content_json_data); exit ();
        
        $brandURL = '/wp-content/plugins/dsWaves2/website-content/json/Brand/'. $content_json_data['brand_id'].'.json';
        $brand_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . $brandURL);  
        $brand_json_data = json_decode($brand_json, true);
        
        
        $primaryColor = $brand_json_data['primary_colors'][0]['color'];
        $secondaryColor = $brand_json_data['secondary_colors'][0]['color'];
    }

    if (!$primaryColor)
        $primaryColor = '#0088c2';
    if (!$secondaryColor)
        $secondaryColor = '#0088c2';  
        
        
    ?>

    <link rel="stylesheet" href="/wp-content/plugins/dsWaves2/website-content/templates/main/content/app.css">
    
    <div id="app" class="dsw-content-page"></div>
    
    <script>
    const pageurl = '<?php echo $pageURL; ?>';
    const jsonData = '<?php echo base64_encode (json_encode ($content_json_data)); ?>';
    const primary_color = '<?php echo $primaryColor;?>';
    const secondary_color = '<?php echo $secondaryColor;?>';
    </script>
    
    <script src='/wp-content/plugins/dsWaves2/website-content/templates/main/content/app.js' defer></script>

</article><!-- #post-<?php the_ID(); ?> -->


<?php endwhile; // End of the loop. ?>

</main><!-- #main -->

<?php } ?>

<?php

function formatSubScript ($text)
{
    $text = str_replace ("<sup>™</sup>", "™", $text);
    $text = str_replace ("<sup>®</sup>", "®", $text);
            
    $text = str_replace ("™", '<sup class="dsw-sync-sup">™</sup>', $text);
    $text = str_replace ("®", '<sup class="dsw-sync-sup">®</sup>', $text);
    
    return $text;
}

function cmp($a, $b) {
    return strcmp($a->term_order,$b->term_order);
}


?>

<style>
/* #app {
    margin-top: -50px;
} */

/**
    Template CSS For Accessories dswaves-sync-template.php in Waves 2 Plugin
    */


    @media (max-width: 1399px)
    {
        .dsWavesSyncPage .container {
            max-width: 991px !important;
        }
    }

    @media (min-width: 1400px)
    {
        .dsWavesSyncPage .container {
            max-width: 1300px !important;
        }
    }


.dsWavesSyncPage .container {
    width:100%;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
} 
.dsWavesSyncPage .grid { display:grid; }
.dsWavesSyncPage .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } 
.dsWavesSyncPage .gap-4 { gap: 1rem; } 
.dsWavesSyncPage .mb-20 { margin-bottom: 5rem; }
.dsWavesSyncPage .text-center, .dsWavesSyncPage .md\:text-center {	text-align: center; }
.dsWavesSyncPage .pt-2 { padding-top: 0.5rem; }
.dsWavesSyncPage .pt-10 { padding-top: 2.5rem; }
.dsWavesSyncPage .p-5 {	padding: 1.25rem;}
.dsWavesSyncPage .bg-gray-600 {--tw-bg-opacity: 1;
background-color: rgba(75, 85, 99, var(--tw-bg-opacity));}
.dsWavesSyncPage .text-white {color:white;}
.dsWavesSyncPage .product { text-align:center; margin: 0 auto; }

@media (min-width: 1024px){
    .dsWavesSyncPage .md\:px-20 {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    .dsWavesSyncPage .md\:p-5 {
        padding: 1.25rem;
    }
    .dsWavesSyncPage .md\:mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    .dsWavesSyncPage .md\:max-w-screen-md {
        max-width: 1024px;
    }
    .dsWavesSyncPage .md\:w-1\/2 {
        width: 50%;
    }

    .dsWavesSyncPage .md\:mb-1 {
        margin-bottom: 0.25rem;
    }
    .dsWavesSyncPage .md\:flex { display: flex; } 

    .dsWavesSyncPage .md\:flex-wrap { flex-wrap: wrap; } 
    
}

@media (min-width: 1400px){
    .dsWavesSyncPage .lg\:px-28 {
        padding-left: 7rem;
        padding-right: 7rem;
    }

    .dsWavesSyncPage .lg\:w-1\/3 {
        width: 33.333333%;
    }
    .dsWavesSyncPage .lg\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

}

@media(max-width: 1024px) {
    .dsWavesSyncPage .grid-cols-3, .dsWavesSyncPage .lg\:grid-cols-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media(max-width: 856px) {
    .dsWavesSyncPage .grid-cols-3, .dsWavesSyncPage .lg\:grid-cols-3 { grid-template-columns: 1fr; }
}


.dsw-breadcrumb a
{
    color: inherit;
}

.dsWavesSyncPage .dsWavesSyncPageTermDescription a
{
    color: #fff !important;
    text-decoration: underline;
}

.dsw-sync-sup
    {
        position: relative;
        font-size: 40%;
        line-height: 0;
        vertical-align: baseline;
        top: -1.2em;
    }

</style>

<?php get_footer(); ?>