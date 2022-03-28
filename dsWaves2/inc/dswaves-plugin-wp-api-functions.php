<?php
/**
 * WordPress API Extender
 *
 * Returns the current content from WordPress site back to the plugin
 * via the WordPress API so it can be consumed via vue/axios
 *
 */

// error_reporting(E_ALL); // remove me
// ini_set("log_errors", 1); // remove me
// ini_set('display_errors', true); // remove me
// ini_set("error_log", "php-error.log"); // remove me

//Get Pages
function dswaves_get_pages()
{
    $pages = get_pages();
    return $pages;
}

//Get Custom Post Types
function dswaves_get_post_types()
{
    $postsTypes = get_post_types('', 'objects');
    return $postsTypes;
}


function dswaves_check_plugin_key_valid ()
{
    $waves_plugin_key = get_option ('dswaves_plugin_key');
    if (!$waves_plugin_key)
    {
        return 'Empty.';
    }

    if ($waves_plugin_key == 'staging')
    {
        return 'good';
    }

    $token = $waves_plugin_key; 
    //$url = "http://console.test/api/v1/syndication/check_key";
    $url = "https://console.myproductdata.com/api/v1/syndication/check_key";

    $ch = curl_init();

    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'Authorization: Bearer ' . $token;

    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POSTFIELDS, 'token='.$token);
    curl_setopt($ch,CURLOPT_POST, 1); 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $handle = curl_exec($ch);
    $response = json_decode ($handle, true);

    if($handle === false)
    {
        return 'Error contacting authentication server.';
    }

    curl_close ($ch);

    if ($response['message'] == 'Unauthenticated.')
    {
        return 'Invalid key.';
    }
    else if ($response['message'] == 'Paused.')
    {
        return 'Site is paused from getting updates.';
    }
    else if ($response['message'] == 'Good.')
    {
        return 'good';
    }
    
}

function dswaves_save_plugin_key (WP_REST_Request $request)
{
    $key = $request->get_param('key');

    if ($key == 'staging')
    {
        update_option ('dswaves_plugin_key', $key);
        return [
            'valid' => true
        ];
    }

    $token = $key; 
    //$url = "http://console.test/api/v1/syndication/check_key";
    $url = "https://console.myproductdata.com/api/v1/syndication/check_key";
    
    $ch = curl_init();

    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'Authorization: Bearer ' . $token;

    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POSTFIELDS, 'token='.$token);
    curl_setopt($ch,CURLOPT_POST, 1); 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $handle = curl_exec($ch);
    $response = json_decode ($handle, true);

    curl_close ($ch);

    if($handle === false)
    {
        return [
            'valid' => false,
            'message' => 'Error contacting authentication server.'
        ];
    }

    if ($response['message'] == 'Unauthenticated.')
    {
        return [
            'valid' => false,
            'message' => 'Invalid key. Please try again.'
        ];
    }
    else if ($response['message'] == 'Paused.')
    {
        return [
            'valid' => true,
            'message' => 'Site is paused from getting updates.'
        ];
    }
    else if ($response['message'] == 'Good.')
    {
        update_option ('dswaves_plugin_key', $token);
        $waves_plugin_key = get_option ('dswaves_plugin_key');
        return [
            'valid' => true
        ];
    }
    
}

function dswaves_deactivate_plugin ()
{
    $waves_plugin_key = get_option ('dswaves_plugin_key');
    
    update_option ('dswaves_plugin_key', null);
    return $waves_plugin_key;

}

//Get brands and categories from console in the website-content folder
function dswaves_get_sync_brands(WP_REST_Request $request) {

 
    $search_terms = $request->get_param('search_terms');
    $sort_by = $request->get_param('sort_by');
    $industry = $request->get_param('industry');
    $pagination = $request->get_param('pagination');
    
    $page = $pagination['current_page'];
    if (!$page) $page = 1;
    $products_per_page = $pagination['items_per_page'];
    if (!$products_per_page)
        $products_per_page = 50;
    
    //get files from /website-content/json/Brand/
    $dir = 'wp-content/plugins/dsWaves2/website-content/json/Brand/';
    $files = scandir($dir);
    $brands = array();

    $sortByName = [];
    $sortByIndustry = [];

    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            $json = file_get_contents($dir . $file);
            $json_data = json_decode($json, true);

            $args = array(
                'posts_per_page'   => -1,
                'post_type' => ['post','page','product', 'learning'],
                'meta_query' => array(
                    array(
                        'key'     => 'dsWavesBrandID',
                        'value'   => $json_data['id']
                    ),
                ),
            );
            
            $query = new WP_Query($args);
           
            $syndicated_content = $query->found_posts;

            $brand = [];
            $brand['id'] = $json_data['id'];
            $brand['name'] = $json_data['name'];
            $brand['industry'] = $json_data['industry'];
            $brand['image'] = $json_data['main_image']['file_full_url'];
            $brand['syndicated_content'] = $syndicated_content;

            $sortByName[] = $brand['name'];
            $sortByIndustry[] = $brand['industry'];

            $brands[] = $brand;
        }
    }

    $true_total_brand_count = count ($brands);

    if ($sort_by)
    {
        if ($sort_by == 'name_asc')
        {
            array_multisort(
                $sortByName, SORT_ASC,
                $brands
            );
        }
        else if ($sort_by == 'name_desc')
        {
            array_multisort(
                $sortByName, SORT_DESC,
                $brands
            );
        }
        else if ($sort_by == 'industry_asc')
        {
            array_multisort(
                $sortByIndustry, SORT_ASC,
                $brands
            );
        }
        else if ($sort_by == 'industry_desc')
        {
            array_multisort(
                $sortByIndustry, SORT_DESC,
                $brands
            );
        }   
    }

    if ($industry)
    {
        $tempBrands = $brands;
        $brands = [];
        foreach ($tempBrands as $tempBrand)
        {
            if (str_contains (strtolower ($tempBrand['industry']), strtolower ($industry)))
            {
                $brands[] = $tempBrand;
            }
        }
    }

    if ($search_terms)
    {
        $tempBrands = $brands;
        $brands = [];
        foreach ($tempBrands as $tempBrand)
        {
            $search_term_words = explode(" ", $search_terms);
            $use = true;
            foreach ($search_term_words as $search_term_word)
            {
                if (!str_contains (strtolower ($tempBrand['name'] . ' ' . $tempBrand['industry']), strtolower ($search_term_word)))
                {
                    $use = false;
                    break;
                }
            }

            if ($use)
            {
                $brands[] = $tempBrand;
            }
        }
    }

    $total_results_count = count ($brands);

    $current_page_first_index = $page * $products_per_page - $products_per_page + 1;
    $current_page_last_index = $page * $products_per_page;
    if ($current_page_last_index > $total_results_count)
        $current_page_last_index = $total_results_count;

    $returnData = [];
    $returnData['pagination'] = [
        'current_page_first_index' => $current_page_first_index,
        'current_page_last_index' => $current_page_last_index,
        'total_results_count' => $total_results_count,
        'current_page' => $page,
        'total_pages' => ceil ($total_results_count / $products_per_page),
        'items_per_page' => $products_per_page
    ];
    $returnData['results'] = array_slice($brands, ($current_page_first_index-1), $products_per_page);
    $returnData['true_total_brand_count'] = $true_total_brand_count;

    return $returnData;

}

function dswaves_get_sync_brand(WP_REST_Request $request) {
    $id = $request->get_param('id');
    //get only one brand from the files in /website-content/json/Brand/

    $json = @file_get_contents('wp-content/plugins/dsWaves2/website-content/json/Brand/' . $id . '.json');

    if (!$json)
    {
        return [
            'error' => true,
            'message' => 'Error getting brand data within WordPress.',
            'data' => null
        ];
    }
    

    $token = get_option ('dswaves_plugin_key');
    //$token = '3|iheEBkvOOcL0RTJP0IU7NBcYSvpe1xYhv00rRmYq'; 
    //$url = "http://console.test/api/v1/syndication/brand";
    $url = "https://console.myproductdata.com/api/v1/syndication/brand";
    
    $ch = curl_init();

    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'Authorization: Bearer ' . $token;

    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POSTFIELDS, 'token='.$token.'&id='.$id);
    curl_setopt($ch,CURLOPT_POST, 1); 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $handle = curl_exec($ch);
    $response = json_decode ($handle, true);

    curl_close ($ch);
    

    if($handle === false)
    {
        return [
            'error' => true,
            'message' => 'Error contacting authentication server.',
            'data' => null
        ];
    }
    else
    {
        $json_data = json_decode($json, true);
        $response['data']['image'] = $json_data['main_image']['file_full_url'];
        $response['data']['product_categories'] = $json_data['product_categories'];

        $response['data']['estore'] = false;
        $dsShowcaseTheme = wp_get_theme ($stylesheet = 'dsShowcase');
        if ($dsShowcaseTheme->exists())
            $response['data']['estore'] = true;

        return [
            'error' => false,
            'message' => null,
            'data' => $response['data']
        ];
    }

}

function dswaves_save_sync_brand(WP_REST_Request $request) {

 
    $brand =  $request['params']['brand'];

    $i = 0;
    foreach ($brand['pages'] as $item) 
    {
        $brand['pages'][$i]['name'] = null;
        $i++;
    }

    $i = 0;
    foreach ($brand['posts'] as $item) 
    {
        $brand['posts'][$i]['name'] = null;
        $i++;
    }

    $i = 0;
    foreach ($brand['products'] as $item) 
    {
        $brand['products'][$i]['name'] = null;
        $i++;
    }

    $i = 0;
    foreach ($brand['knowledgebase_articles'] as $item) 
    {
        $brand['knowledgebase_articles'][$i]['name'] = null;
        $i++;
    }


    $token = get_option ('dswaves_plugin_key');
    //$token = '3|iheEBkvOOcL0RTJP0IU7NBcYSvpe1xYhv00rRmYq'; 
    //$url = "http://console.test/api/v1/syndication/update_brand_and_push";
    $url = "https://console.myproductdata.com/api/v1/syndication/update_brand_and_push";

    $ch = curl_init();

    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'Authorization: Bearer ' . $token;

    //return 'token='.$token.'&brand='.json_encode ($brand);
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POSTFIELDS, 'token='.$token.'&brand='.json_encode ($brand));
    curl_setopt($ch,CURLOPT_POST, 1); 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $handle = curl_exec($ch);
    return $handle;
    $response = json_decode ($handle, true);

    return $response;

    curl_close ($ch);

}

function dswaves_get_site_sync_queue_count() {

    $token = get_option ('dswaves_plugin_key');
    
    //$token = '3|iheEBkvOOcL0RTJP0IU7NBcYSvpe1xYhv00rRmYq'; 
    //$url = "http://console.test/api/v1/syndication/get_syndication_queue_count";
    $url = "https://console.myproductdata.com/api/v1/syndication/get_syndication_queue_count";

    $ch = curl_init();

    $headers[] = 'Accept: application/json';
    $headers[] = 'Content-Type: application/x-www-form-urlencoded';
    $headers[] = 'Authorization: Bearer ' . $token;

    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POSTFIELDS, 'token='.$token);
    curl_setopt($ch,CURLOPT_POST, 1); 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch,CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $handle = curl_exec($ch);
    return $handle;

    curl_close ($ch);

}

function dswaves_get_woo_categories() {
    //get terms with meta query is blank dsWavesCatID
    $args = array(
        'taxonomy' => 'product_cat',
        'hide_empty' => false,
        'meta_query' => array(
            array(
                'key' => 'dsWavesCatID',
                'compare' => 'NOT EXISTS'
            )
        )
    );
    $terms = get_terms($args);
    return $terms;
    

}


//update all products with new category
function dswaves_save_woo_category(WP_REST_Request $request) {
   
    $dsWavesCatID = $request->get_param('dsWavesCatID');
    $dsWavesCatChildID = $request->get_param('dsWavesCatChildID');
    $dsWavesCatGrandChildID = $request->get_param('dsWavesCatGrandChildID');
    $term_id = $request->get_param('term_id');
    

    if ($dsWavesCatGrandChildID) {
        $args = array(
            'hide_empty' => false,
            'taxonomy' => 'product_cat',
            'meta_query' => [
                array(
                    'key' => 'dsWavesCatGrandChildID',
                    'value' => $dsWavesCatGrandChildID,
                    'compare' => '='
                ),
            ],
        );
    } elseif ($dsWavesCatChildID) {
        $args = array(
                'hide_empty' => false,
                'taxonomy' => 'product_cat',
                'meta_query' => [
                    array(
                        'key' => 'dsWavesCatChildID',
                        'value' => $dsWavesCatChildID,
                        'compare' => '='
                    ),
                    array(
                        'key' => 'dsWavesCatGrandChildID',
                        'value' => '',
                        'compare' => '='
                    ),
                ],
            );
    } elseif ($dsWavesCatID) {
        $args = array(
            'hide_empty' => false,
            'taxonomy' => 'product_cat',
            'meta_query' => [
                array(
                    'key' => 'dsWavesCatID',
                    'value' => $dsWavesCatID,
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

    $catID = false;
    $the_query = new WP_Term_Query($args);
    foreach ($the_query->get_terms() as $term) {
        $catID = $term->term_id;
    }

    //get all products with this term id
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
        'tax_query' => array(
            array(
                'taxonomy' => 'product_cat',
                'field' => 'term_id',
                'terms' =>  $catID
            )
        )
    );
    $products = get_posts($args);
    //update all products with new category
    foreach ($products as $product) {
        wp_set_object_terms($product->ID, intval($term_id), 'product_cat', true);
    }
    return true;

}

  
function dswaves_get_categories(WP_REST_Request $request)
{
    $post_type = $request->get_param('post_type');
    
    //Get Post Categories
    if ($post_type == 'post') {
        $terms = get_terms('category');
    }
    
    //Get Product Categories
    if ($post_type == 'product') {
        $terms = get_terms('product_cat');
    }

    //Get Custom Post Types
    //? WE WILL NEED TO KNOW THE TAXONOMY FOR THE GET TERMS FUNCTION
    if ($post_type == 'learning') { //learning center in mpd2 theme
        $terms = get_terms('learning_cat');
    }
    
    return $terms;
}

//Get Categories category image and Page url
function dswaves_get_product_category(WP_REST_Request $request)
{
    $syncID = $request->get_param('category');

    $category_array = array();

    $syncIDs = explode(',', $syncID);
    if (is_array($syncIDs)) {
        $x = 0;
        foreach ($syncIDs as $syncID) {
            $product_cat_slug = preg_replace('/[[:space:]]+/', '-', $syncID);
            $args = array(
                'posts_per_page' => '-1',
                'post_type' => 'page',
                'meta_query' => array(
                    array(
                        'key' => 'dswavesbrand',
                        'value' => $product_cat_slug,
                        'compare' => '='
                   )
                )
            );

            $query = new WP_Query($args);
            if ($query->have_posts()) {
                while ($query->have_posts()) {
                    $query->the_post();
                    $category_array[$x]['name'] = get_the_title();
                    $category_array[$x]['url'] = get_permalink();
                }
            } else {
                //get product
                $args = array(
                    'posts_per_page' => '-1',
                    'post_type' => 'product',
                    'meta_query' => array(
                        array(
                            'key' => 'dsWavesID',
                            'value' => $syncID,
                            'compare' => '=',
                        )
                    )
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) {
                    while ($query->have_posts()) {
                        $query->the_post();
                        $category_array[$x]['name'] = get_the_title();
                        $category_array[$x]['url'] = get_permalink();
                    }
                }
            }
            $x ++;
        }
    }

    return $category_array;
}


// allow a logged in user to rate a product
function dswaves_rate_product(WP_REST_Request $request)
{

    $user = wp_get_current_user();

    $user_id = $user->ID;
    $user_email = $user->user_email;
    $user_name = $user->display_name;
    
    $post_id = $request->get_param('post_id');
    $rating = $request->get_param('rating');
    $comment = $request->get_param('comment');

    // confirm the user has not added a review before
    $comments = get_comments(['post_id' => $post_id]); 

        $hasRated = false;
        $i = 0;
            foreach($comments as $comment) {
                $comments[$i]->rating = get_comment_meta($comment->comment_ID, 'rating', true);
                $comments[$i]->formmated_date = date( 'F j, Y', strtotime ($comments[$i]->comment_date));

                if ($comments[$i]->user_id == $user_id) 
                {
                    $hasRated = true;
                    break;
                }
                $i++;
            }
 
    // add the review now
    if (!$hasRated)
    {
        $comment_id = wp_insert_comment( array(
                'comment_post_ID'      => $post_id, 
                'comment_author'       => $user_name,
                'comment_author_email' => $user_email, 
                'comment_author_url'   => '',
                'comment_content'      => $comment,
                'comment_type'         => '',
                'comment_parent'       => 0,
                'user_id'              => $user_id,
                'comment_author_IP'    => '',
                'comment_agent'        => '',
                'comment_date'         => date('Y-m-d H:i:s'),
                'comment_approved'     => 1,
            ) );
            update_comment_meta( $comment_id, 'rating', $rating );
    }

    echo 'done';

}

//Get Special Content for hot-tubs/brand landing pages/collection pages
function dswaves_get_special_content(WP_REST_Request $request)
{
    $pageName = $request->get_param('pagename');

    //? Title of page or logo
    //? 4 CTAs
    //? main Hero Img
    //? Description
    //? Collection Image / title / description (sub category)
    //? blocks after filter of special content
}

//Get Products and a few meta data for hot tubs
function dswaves_get_products(WP_REST_Request $request)
{

    //print_r ($request);
    $product_cats = [];
    $product_cats[] = $request->get_param('category');
    $productIDs = $request->get_param('productid');
    $page = $request->get_param('page');
    if (!$page) $page = 1;
    $products_per_page = $request->get_param('products_per_page');
    if (!$products_per_page) $products_per_page = -1;
    
    $searchTerms = $request->get_param('search');
    $itemFilters = $request->get_param('filters');
    if ($itemFilters) 
    {
        $itemFilters = str_replace ("®", "", $itemFilters);
        $itemFilters = json_decode($itemFilters);
    }
    $parentID = $request->get_param('parentid');
    $childID = $request->get_param('childid');
    $grandChildID = $request->get_param('grandchildid');
    //$mainCategory = $request->get_param('maincategory');
    $classificationID = $request->get_param('classification_id');


    $products = array();
    $products['items'] = array();

    if ($parentID || $childID || $grandChildID || $classificationID) {

        if ($parentID) 
        {
            $termArgs = [
                'meta_query' => [
                    array(
                        'key' => 'dsWavesCatID',
                        'value' => $parentID,
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
                'hide_empty' => false,
                'taxonomy' => 'product_cat',
            ];
        }
        else if ($childID) 
        {
            $termArgs = [
                'meta_query' => [
                    array(
                        'key' => 'dsWavesCatChildID',
                        'value' => $childID,
                        'compare' => '='
                    ),
                    array(
                        'key' => 'dsWavesCatGrandChildID',
                        'value' => '',
                        'compare' => '='
                    ),
                ],
                'hide_empty' => false,
                'taxonomy' => 'product_cat',
            ];
        }
        else if ($grandChildID) 
        {
            $termArgs = [
                'meta_query' => [
                    array(
                        'key' => 'dsWavesCatGrandChildID',
                        'value' => $grandChildID,
                        'compare' => '='
                    ),
                ],
                'hide_empty' => false,
                'taxonomy' => 'product_cat',
            ];
        }
        else if ($classificationID) 
        {
            $termArgs = [
                'meta_query' => [
                    array(
                        'key' => 'dsWavesClassificationID',
                        'value' => $classificationID,
                        'compare' => '='
                    ),
                ],
                'hide_empty' => false,
                'taxonomy' => 'product_cat',
            ];
        }

        
      
        $the_query = new WP_Term_Query($termArgs);
        
        foreach ($the_query->get_terms() as $term) {
            $catID = $term->term_id;
        }

        
        $args = array(
            'post_type'             => 'product',
            'post_status'           => 'publish',
            'posts_per_page'        => '12',
            'tax_query'             => array(
                array(
                    'taxonomy'      => 'product_cat',
                    'field'         => 'term_id', 
                    'terms'         => $catID,
                    'operator'      => 'IN' 
                ),
            )
        );
        // $products = new WP_Query($args);



        // $args = array(
        //     'posts_per_page' => '-1',
        //     'post_type' => 'product',
        //     'post_status' => 'publish',
        //     'tax_query' => array(
        //         'taxonomy' => 'product_cat',
        //         'field' => 'id',
        //         'terms' => array($catID),
        //     )
        // );

        // print_r  ($args); exit ();


        $products['items'] = dswaves_product_loop($args);
        

        // if ($grandChildID) {
        //     // no filters for the third level cat
        //     return $products;
        // }

        // // for the filters on the left
        // $children = get_terms($term->taxonomy, array(
        //     'parent'    => $catID,
        //     'hide_empty' => false
        // ));
    
        // if ($children) {
        //     foreach ($children as $subcat) {
        //         //print_r($subcat);
        //     }
        // }


        $products['filters'] = [];


        // print_r($products);
        // exit();

        return $products;
    }


    //filters
    //? Find a way to get this dynamicly when console gets updated
    if (count ($product_cats) > 0 && $product_cats[0]) {
       
        // filter by category
        $tax_query =  [
            'relation' => 'AND',
        ];
        if ($product_cats)
        {
            foreach ($product_cats as $product_cat)
            {
                $tax_query[] = [
                    'taxonomy' => 'product_cat',
                    'field' => 'slug',
                    'terms' => $product_cat
                ];
            }
        }
        //print_r ($tax_query); exit ();

        // product muist be in all selected filters
        $meta_query = [
            'meta_query' => [
                'relation' => 'AND'
            ]
        ];

        // keyword search
        $searchInMetas = [];
        $searchInMetas[] = 'dswaves_brand';
        $searchInMetas[] = 'dswaves_collection';

        // keyword search
        if ($searchTerms)
        {
            $splitSearchTerms = explode (" ", $searchTerms);
            
            if ($splitSearchTerms)
            {
                foreach ($splitSearchTerms as $term)
                {
                    $sub_meta_query = [
                        'relation' => 'OR'
                    ];

                    if ($searchInMetas)
                    {
                        foreach ($searchInMetas as $subMeta)
                        {
                            $sub_meta_query[] = [
                                'key' => $subMeta,
                                'value' => $term,
                                'compare' => 'LIKE'
                            ];
                        }
                    }
                    $meta_query['meta_query'][] = $sub_meta_query;

                }
            }
        }

        // checkbox filters
        // can only filter via post_meta and categories
        if ($itemFilters && count ((array) $itemFilters) > 0)
        {    
            foreach ($itemFilters as $key => $itemFilter)
            {
                $sub_meta_query = [
                    'relation' => 'OR'
                ];

                if ($itemFilter)
                {
                    foreach ($itemFilter as $subItemFilter)
                    {
                        // filter by cat
                        if (substr($key, 0, 12) == 'sub_category')
                        {
                            $sub_meta_query[] = [
                                'taxonomy' => 'product_cat',
                                'field' => 'slug',
                                'terms' => $subItemFilter
                            ];
                        }
                        // filter by meta
                        else 
                        {
                            if (is_array ($subItemFilter))
                            {
                                if ($subItemFilter)
                                {
                                    foreach ($subItemFilter as $subItemFilterItem)
                                    {
                                        $sub_meta_query[] = [
                                            'key' => $key,
                                            'value' => $subItemFilterItem,
                                            'compare' => '='
                                        ];
                                    }
                                }
                            }
                            else if ($subItemFilter)
                            {
                                $sub_meta_query[] = [
                                    'key' => $key,
                                    'value' => $subItemFilter,
                                    'compare' => '='
                                ];
                            }
                        }
                        
                    }
                }

                

                //print_r ($itemFilter);
                if (substr($key, 0, 12) == 'sub_category')
                    $tax_query[] = $sub_meta_query;
                else
                    $meta_query['meta_query'][] = $sub_meta_query;    
            }
        }

        // print_r ($tax_query); exit ();
        // exit ();

        

        if ($searchTerms)
        {
            add_filter( 'posts_where', 'title_filter', 10, 2 );
            $q1 = new WP_Query( array(
                'post_type' => 'product',
                  'product_cat' => $product_cat,
                  'posts_per_page' => '-1', // do pagination later in code
                  // 'posts_per_page' => $products_per_page,
                  // 'paged' => $page,
                  //'product_cat' => $product_cat,
                  'tax_query' => $tax_query, // categories
                  //'s' => $searchTerms
                  'title_filter' => $searchTerms,
                  'title_filter_relation' => 'AND',
              ));
        }
        else
        {
            $q1 = new WP_Query();
            $q1->posts = [];
        }
        
        //print_r ($product_cat); exit ();
        $q2 = new WP_Query( array(
            'post_type' => 'product',
            //'product_cat' => $product_cat,
            'posts_per_page' => '-1', // do pagination later in code
            //'posts_per_page' => $products_per_page,
            //'paged' => $page,
            'tax_query' => $tax_query, // categories
            'meta_query' => $meta_query,
        ));
 
        // print_r (array(
        //     'post_type' => 'product',
        //     //'product_cat' => $product_cat,
        //     'posts_per_page' => '-1', // do pagination later in code
        //     //'posts_per_page' => $products_per_page,
        //     //'paged' => $page,
        //     //'tax_query' => $tax_query, // categories
        //     'meta_query' => $meta_query,
        // ));
        // print_r ($q2->posts); exit ();
          
        $result = new WP_Query();
        $result->posts = array_unique( array_merge( $q1->posts, $q2->posts ), SORT_REGULAR );
        
        // echo count($q1->posts) . '<br />'; 
        // echo count($q2->posts) . '<br />'; 
        // echo count($result->posts) . '<br />'; 
        
        // exit (); 
        $result->posts = dswaves_product_loop([], $result);

        $sortByPrice = [];
        $sortBySize = [];
        $sortByJets = [];
        $sortByCollection = [];
        $sortByCollectionWeight = [];
        $sortByWatkinsWeight = []; // put watkins stuff at top

        if ($result->posts && count ($result->posts) > 0)
        {
            foreach ($result->posts as $product)
            {
                //print_r ($product); exit ();
                $sortCollection = 1;

                if ($product['collection'])
                {
                    if ($product['collection']['text'] == 'Utopia Series')
                        $sortCollection = 4;
                    else if ($product['collection']['text'] == 'Paradise Series')
                        $sortCollection = 3; 
                    else if ($product['collection']['text'] == 'Vacanza Series')
                        $sortCollection = 2;        
                }
               
                
          
                $sortByCollectionWeight[] = $product['collection']['weight'];
                $sortByCollection[] = $sortCollection;
                $sortBySize[] = $product['size'];
                $sortByJets[] = $product['jets'];
                $sortByPrice[] = $product['price'];
                $sortByWatkinsWeight[] = $product['watkinsWeight'];
            }

            
            array_multisort(
                $sortByWatkinsWeight, SORT_DESC, SORT_NUMERIC,
                $sortByCollection, SORT_DESC, SORT_NUMERIC,
                $sortByCollectionWeight, SORT_ASC, SORT_NUMERIC,
                $sortBySize, SORT_DESC, SORT_NUMERIC,
                $sortByJets, SORT_DESC, SORT_NUMERIC,
                $sortByPrice, SORT_DESC, SORT_NUMERIC,

                $result->posts
            );
            
        }

        
        //print_r ($sortBySize);
        //print_r ($result->posts); exit ();
        

        // temp fix to show finnleo products in a little bit better order
        // delete me after we have better sorting options
        // mk, Sept 22, 2021
        // if ($product_cat === 'finnleo-saunas')
        // {
        //     $args['order'] = 'ASC';
        //     $args['orderby'] = 'title';
        // }
        
        
        $pagination_result = new WP_Query();
        if ($products_per_page > 0) 
        {
            $startIndex = $page * $products_per_page - $products_per_page;

            $pagination_result->posts = array_slice( $result->posts, $startIndex, $products_per_page );
        } 
        else
        {
            //echo count ($result->posts);
            //echo ' sdfsdf';
            $pagination_result->posts = $result->posts;
        }

        

        
        //echo count ($pagination_result) . ' f';
        //$products['items'] = dswaves_product_loop($args, $pagination_result);
        $products['items'] = $pagination_result->posts;
        //print_r ($products['items']); exit ();

        //$count_args = $args;
        //$count_args['posts_per_page'] = -1;
        //$product_query = new WP_Query($count_args);
        //$products['total_item_count'] = $product_query->post_count;
        $products['total_item_count'] = count ($result->posts);
        
        $products['total_page_count'] = 1;
        $products['total_items_left'] = 0;
        if ($products_per_page > 0) 
        {
            $products['total_items_left'] = $products['total_item_count'] - $page * $products_per_page;
            $products['total_page_count'] = ceil($products['total_item_count'] / $products_per_page);
        }
        if ($products['total_items_left'] < 0) 
            $products['total_items_left'] = 0;
        
        if ($product_cat === 'hot-tubs') {
            //if its hot tubs then we need new filters
            $productCategories = array();
            
            foreach ($result->posts as $product) {
                //$product['brand']['text'] = str_replace(" Spas", "® Spas", $product['brand']['text']);

                //print_r ($product); exit ();
                if ($product['brand']['text'] == 'Hot Spring Spas')
                {         
                    $product['brand']['text'] = 'Hot Spring® Spas';
                }
                else if ($product['brand']['text'] == 'Freeflow Spas')
                {
                    $product['brand']['text'] = 'Freeflow® Spas';
                }
                else if ($product['brand']['text'] == 'Fantasy Spas')
                {
                    $product['brand']['text'] = 'Fantasy® Spas';
                }
                else if ($product['brand']['text'] == 'Caldera Spas')
                {
                    $product['brand']['text'] = 'Caldera® Spas';
                }

                $product['brand']['value'] = str_replace ("®", "", $product['brand']['text']);

                //$txt .= print_r($product['brand'], true);
                if ($product['brand']['text'])
                    array_push($productCategories, $product['brand']);
            }

            $products['filters'] = array();

            $categories = array(
                "title" => "Brands",
                "key" => 'dswaves_brand',
                "items" => array()
            );

            $productCategories = array_map("unserialize", array_unique(array_map("serialize", $productCategories)));
            $productCategories = array_values($productCategories); // reset key
            $productCategories = array_reverse($productCategories); // reverse keys
            foreach ($productCategories as $productCatItem) {
                array_push($categories['items'], $productCatItem);
            }

            array_push($products['filters'], $categories);


            //I need to get filters based on brands

            //this is the last filter to add
            $size = array(
                "title" => "Size",
                "key" => 'dswaves_size',
                "items" => array(
                    array(
                        "text" => "6 - 8+ Seats",
                        "value" => array(6,7,8,9,10,11,12)
                    ),
                    array(
                        "text" => "4 - 5 Seats",
                        "value" => array(4,5)
                    ),
                    array(
                        "text" => "1 - 3 Seats",
                        "value" => array(1,2,3)
                    )
                )
            );

            array_push($products['filters'], $size);
        }

        $products['current_page'] = $page;
        $products['products_per_page'] = $products_per_page;

        
        if ($product_cats[0] === 'caldera-spas' || $product_cats[0] === 'hot-spring-spas') {
            
            $collection_title = "Series";
            if ($product_cats[0] === 'hot-spring-spas')
                $collection_title = "Collection";

            $products['filters'] = array(
                array(
                    "title" => $collection_title,
                    "key" => 'dswaves_collection',
                    "items" => []
                ),
                array(
                    "title" => "Size",
                    "key" => 'dswaves_size',
                    "items" => []
                )
            );

            if ($result->posts)
            {
                $sortCategory = [];
                $sortSize = [];
                //$sortSteam = [];

                
                foreach ($result->posts as $post)
                {
                    
                    // collection
                    if ($post['collection'])
                    {
                        $post['collection']['text'] = str_replace ('Highlife Collection', 'Highlife® Collection', $post['collection']['text']);
                        $post['collection']['text'] = str_replace ('Limelight Collection', 'Limelight® Collection', $post['collection']['text']);
                        $post['collection']['text'] = str_replace ('Hot Spot Collection', 'Hot Spot® Collection', $post['collection']['text']);

                        $post['collection']['text'] = str_replace ('Utopia Series', 'Utopia® Series', $post['collection']['text']);
                        $post['collection']['text'] = str_replace ('Paradise Series', 'Paradise® Series', $post['collection']['text']);
                        $post['collection']['text'] = str_replace ('Vacanza Series', 'Vacanza® Series', $post['collection']['text']);

                        $post['collection']['value'] = str_replace ('-', ' ', $post['collection']['value']);


                        if (!in_array ($post['collection'], $products['filters'][0]['items']))
                        {
                            $sortCategory[] = $post['collection']['weight'];
                            $products['filters'][0]['items'][] = $post['collection'];
                        }
                    }

                    // size
                    if ($post['size'])
                    {
                        $tempSize = null;
                        if ($post['size'] >= 1 && $post['size'] <= 3)
                        {
                            $tempSize = [
                                'text' => '1 - 3 Seats',
                                'value' =>  [1,2,3],
                                'weight' => 30
                            ];
                        }
                        else if ($post['size'] >= 4 && $post['size'] <= 5)
                        {
                            $tempSize = [
                                'text' => '4 - 5 Seats',
                                'value' =>  [4,5],
                                'weight' => 20
                            ];
                        }
                        else if ($post['size'] >= 6)
                        {
                            $tempSize = [
                                'text' => '6 - 8+ Seats',
                                'value' =>  [6,7,8,9,10,11,12],
                                'weight' => 10
                            ];
                        }
                        
                        if ($tempSize && !in_array ($tempSize, $products['filters'][1]['items']))
                        {
                            $sortSize[] = $tempSize['weight'];
                            $products['filters'][1]['items'][] = $tempSize;
                        }
                    }
                    
                }

                array_multisort(
                    $sortCategory, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][0]['items']
                );

                array_multisort(
                    $sortSize, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][1]['items']
                );

            } 
        }
        if ($product_cats[0] === 'freeflow-spas' || $product_cats[0] === 'fantasy-spas') {
            $products['filters'] = array(
                array(
                    "title" => "Series",
                    "key" => 'dswaves_collection',
                    "items" => []
                ),
                array(
                    "title" => "Size",
                    "key" => 'dswaves_size',
                    "items" => []
                )
            );

            if ($result->posts)
            {
                $sortCategory = [];
                $sortSize = [];
                //$sortSteam = [];

                
                foreach ($result->posts as $post)
                {
                    
                    // collection
                    if ($post['collection'])
                    {
                        $post['collection']['text'] = str_replace ('Freeflow ', '', $post['collection']['text']);
                        $post['collection']['text'] = str_replace ('Fantasy ', '', $post['collection']['text']);
                        if (!in_array ($post['collection'], $products['filters'][0]['items']))
                        {
                            $sortCategory[] = $post['collection']['weight'];
                            $products['filters'][0]['items'][] = $post['collection'];
                        }
                    }

                    // size
                    if ($post['size'])
                    {
                        $tempSize = null;
                        if ($post['size'] >= 1 && $post['size'] <= 2)
                        {
                            $tempSize = [
                                'text' => '1 - 2 Seats',
                                'value' =>  [1,2],
                                'weight' => 30
                            ];
                        }
                        else if ($post['size'] >= 4 && $post['size'] <= 5)
                        {
                            $tempSize = [
                                'text' => '4 - 5 Seats',
                                'value' =>  [4,5],
                                'weight' => 20
                            ];
                        }
                        else if ($post['size'] >= 6)
                        {
                            $tempSize = [
                                'text' => '6 - 8+ Seats',
                                'value' =>  [6,7,8,9,10,11,12],
                                'weight' => 10
                            ];
                        }
                        
                        if ($tempSize && !in_array ($tempSize, $products['filters'][1]['items']))
                        {
                            $sortSize[] = $tempSize['weight'];
                            $products['filters'][1]['items'][] = $tempSize;
                        }
                    }
                    
                }

                array_multisort(
                    $sortCategory, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][0]['items']
                );

                array_multisort(
                    $sortSize, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][1]['items']
                );

            } 
        }
        if ($product_cats[0] === 'endless-pools') {
            $products['filters'] = array(
                array(
                    "title" => "Collection",
                    "key" => 'dswaves_collection',
                    "items" => []
                ),
                array(
                    "title" => "Size",
                    "key" => 'dswaves_size',
                    "items" => []
                )
            );

            if ($result->posts)
            {
                $sortCollection = [];
                $sortSize = [];
                
                foreach ($result->posts as $post)
                {
                    // colllection
                    if (!in_array ($post['collection'], $products['filters'][0]['items']))
                    {
                        $sortCollection[] = $post['collection']['weight'];
                        $products['filters'][0]['items'][] = $post['collection'];
                    }

                    // size
                    $tempSize = [
                        'text' => $post['size'] . "'",
                        'value' => [$post['size'], $post['size']]
                    ];

                    if (!in_array ($tempSize, $products['filters'][1]['items']))
                    {
                        $sortSize[] = $tempSize['value'][0];
                        $products['filters'][1]['items'][] = $tempSize;
                    }
                }

                array_multisort(
                    $sortCollection, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][0]['items']
                );

                array_multisort(
                    $sortSize, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][1]['items']
                );
            }  
        }
        if ($product_cats[0] === 'finnleo-saunas') {
            $products['filters'] = array(
                array(
                    "title" => "Category",
                    "key" => 'sub_category_category',
                    "items" => []
                ),
                array(
                    "title" => "Location",
                    "key" => 'sub_category_location',
                    "items" => []
                    ),
                    array(
                        "title" => "Steam",
                        "key" => 'sub_category_steam',
                        "items" => []
                    )
            );

            if ($result->posts)
            {
                $sortCategory = [];
                $sortLocation = [];
                $sortSteam = [];

                //print_r ($result->posts); exit ();
                
                foreach ($result->posts as $post)
                {
                    // category
                    if ($post['category'])
                    {
                        foreach ($post['category'] as $cat)
                        {
                            $weight = 0;
                            if ($cat == 'Traditional Saunas')
                            {
                                $weight = 10;
                            }
                            else if ($cat == 'Infrared Saunas')
                            {
                                $weight = 20;
                            }
                            else if ($cat == 'InfraSauna')
                            {
                                $weight = 30;
                            }
                            $tempCategory = [
                                'text' => $cat,
                                'weight' => $weight,
                                'value' =>  strtolower (str_replace (" ", "-", $cat))
                            ];
                            if (!in_array ($tempCategory, $products['filters'][0]['items']))
                            {
                                $sortCategory[] = $tempCategory['weight'];
                                $products['filters'][0]['items'][] = $tempCategory;
                            }
                        }
                    }
                    
                    // location
                    if ($post['location'])
                    {
                        $weight = 0;
                        if ($post['location'] == 'Indoor Sauna Rooms')
                        {
                            $weight = 10;
                        }
                        else if ($post['location'] == 'Outdoor Sauna Rooms')
                        {
                            $weight = 20;
                        }
                        $tempLocation = [
                            'text' => $post['location'],
                            'value' =>  strtolower (str_replace (" ", "-", $post['location']))
                        ];
                        if (!in_array ($tempLocation, $products['filters'][1]['items']))
                        {
                            $sortLocation[] = $weight;
                            $products['filters'][1]['items'][] = $tempLocation;
                        }
                    }

                    // steam
                    if ($post['steam'])
                    {
                        $weight = 0;
                        if ($post['steam'] == 'Steam')
                        {
                            $weight = 10;
                        }
                        else if ($post['steam'] == 'No Steam')
                        {
                            $weight = 20;
                        }
                        $tempSteam = [
                            'text' => $post['steam'],
                            'value' =>  strtolower (str_replace (" ", "-", $post['steam']))
                        ];
                        if (!in_array ($tempSteam, $products['filters'][2]['items']))
                        {
                            $sortSteam[] = $weight;
                            $products['filters'][2]['items'][] = $tempSteam;
                        }
                    }
                    
                }

                array_multisort(
                    $sortCategory, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][0]['items']
                );

                array_multisort(
                    $sortLocation, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][1]['items']
                );

                array_multisort(
                    $sortSteam, SORT_ASC, SORT_NUMERIC,
                    $products['filters'][2]['items']
                );
            }  
        }

        $products['categories'] = [];

        $terms = get_term_by('slug', $product_cats[0], 'product_cat', array( 'orderby' => 'term_order', 'order'    => 'ASC'));
        if ($terms)
        {
            $parent_cat_ID = $terms->term_id;

            $args = array(
                'post_status' => 'publish',
                'hierarchical' => 1,
                'show_option_none' => '',
                'hide_empty' => 1,
                // 'orderby'   => 'term_order',
                //'order' => 'DESC',
                'parent' => $parent_cat_ID,
                'taxonomy' => 'product_cat');
            
            $subcats = get_categories($args);
            
            // hack for finnleo
            if ($product_cats[0] == 'finnleo-saunas')
            {
                $term = get_term_by('slug', 'infrasauna', 'product_cat');
                if ($term)
                {
                    $subcats[] = $term;
                }
            }

            if ($subcats)
            {

                foreach ($subcats as $sc) 
                {
                    $link = get_category_link($sc);
                    $thumb_id = get_woocommerce_term_meta($sc->term_id, 'thumbnail_id', true);
                    $term_img = wp_get_attachment_url($thumb_id);

                    $category = null;
                    $category['name'] = $sc->name;

                    // hack for fantasy and freeflow
                    $category['name'] = str_replace ('Freeflow ', '', $category['name']);
                    $category['name'] = str_replace ('Fantasy ', '', $category['name']);


                    $category['description'] = $sc->category_description;
                    if (!$category['description'] && $sc->description)
                        $category['description'] = $sc->description;
                    $category['link'] = $link;
                    $category['link'] = str_replace ('product-category/', '', $category['link']);
                    $category['image'] = $term_img;

                    $products['categories'][] = $category;
                }
            }
            
        }
        
        return $products;
    }

    //$sortBySize = [];
    if ($productIDs) {
        //converts $productsIDs into array explode , then run the query below
        $productIDs = explode(',', $productIDs);
        
        if (is_array($productIDs)) {
            foreach ($productIDs as $productID) {
                $args = array(
                    'posts_per_page' => '-1',
                    'post_type' => 'product',
                    'meta_query' => array(
                        array(
                            'key' => 'dsWavesID',
                            'value' => $productID,
                            'compare' => '=',
                        )
                    )
                );
                $product = dswaves_product_loop($args);

                //$sortBySize[] = $product['size'];

                array_push($products['items'], $product[0]);
            }
        } else {
            $args = array(
                'posts_per_page' => '-1',
                'post_type' => 'product',
                'meta_query' => array(
                    array(
                        'key' => 'dsWavesID',
                        'value' => $productIDs,
                        'compare' => '=',
                    )
                )
            );
            $products['items'] = dswaves_product_loop($args);
        }

        //if ($sortBySize)
          //  array_multisort($products['items'], $sortBySize);

        //print_r ($products['items']);

        return $products;
    }
}


function title_filter( $where, $wp_query ){
    global $wpdb;
    if( $search_term = $wp_query->get( 'title_filter' ) ) :
    $search_term = $wpdb->esc_like( $search_term );
    $search_term = ' \'%' . $search_term . '%\'';
    $title_filter_relation = ( strtoupper( $wp_query->get( 'title_filter_relation' ) ) == 'OR' ? 'OR' : 'AND' );
    $where .= ' '.$title_filter_relation.' ' . $wpdb->posts . '.post_title LIKE ' . $search_term;
    //echo $where; exit ();
    endif;
    return $where;
   }


function dswaves_product_loop($args, $query = false)
{
    $products = array();
    if (!$query)
        $query = new WP_Query($args);
    $x = 0;

    //if ($query->have_posts()) {
        //while ($query->have_posts()) {
    if ($query->posts)
    {
        foreach ($query->posts as $post)
        {     
            // get_the_ID ();   
            $query->the_post();

            $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail');
            $brand = get_post_meta($post->ID, 'dswaves_brand', true);


            $brandSlug = preg_replace('/[[:space:]]+/', '-', $brand);
            $brandSlug = strtolower($brandSlug);
            $brandUrl = "/hot-tubs/" . $brandSlug;
            $collection = get_post_meta($post->ID, 'dswaves_collection', true);
            $collectionSlug = preg_replace('/[[:space:]]+/', '-', $collection);
            $collectionSlug = preg_replace('/[^A-Za-z0-9\-]/', '', $collectionSlug);
            $collectionSlug = strtolower($collectionSlug);
            $collectionUrl = $brandUrl . '/' . $collectionSlug;
            $syncID = get_post_meta($post->ID, 'dsWavesID', true);
            $url = get_home_url();
            $syncURL = $url.'/wp-content/plugins/dsWaves2/website-content/json/Product/'.$syncID.'.json';

            $json = file_get_contents('wp-content/plugins/dsWaves2/website-content/json/Product/'.$syncID.'.json');
            $json_data = json_decode($json, true);
            //print_r ($json_data);
            
            $collectionWeight = 99999;
            if ($json_data['categories'] && $json_data['categories'][0] && $json_data['categories'][0]['items'] && $json_data['categories'][0]['items'][0] && $json_data['categories'][0]['items'][0]['weight'])
                $collectionWeight = $json_data['categories'][0]['items'][0]['weight'];



            //echo $brand; exit ();

            $watkinsWeight = 0;
            if ($brand == 'Hot Spring Spas') {
                $watkinsWeight = 40;
            } elseif ($brand == 'Caldera Spas') {
                $watkinsWeight = 30;
            } elseif ($brand == 'Freeflow Spas') {
                $watkinsWeight = 20;
            } elseif ($brand == 'Fantasy Spas') {
                $watkinsWeight = 10;
            }

            $product = array(
                "syncID" => $syncID,
                "syncJSON" => $syncURL,
                "title" => get_the_title(),
                "mark" => get_post_meta($post->ID, 'dswaves_product_mark', true),
                "image" => $image[0],
                "url" => get_the_permalink(),
                "size" => get_post_meta($post->ID, 'dswaves_size', true),
                "jets" => get_post_meta($post->ID, 'dswaves_jets', true),
                "price" => get_post_meta($post->ID, 'dswaves_price', true),
                "dimensions" => get_post_meta($post->ID, 'dswaves_dimensions', true),
                "brand" => array(
                    "text" => $brand,
                    "url" => $brandUrl,
                    "value" => $brandSlug
                ),
                "collection" => array(
                    "text" => $collection,
                    "url" => $collectionUrl,
                    "value" => $collectionSlug,
                    "weight" => $collectionWeight
                ),
                'watkinsWeight' => $watkinsWeight
            );


            if ($brand == 'Finnleo Saunas') {
                $product['category'] = [];
                $product['location'] = '';
                $product['steam'] = '';
                
                
                $cat_data = (wp_get_object_terms($post->ID, 'product_cat'));
                if ($cat_data) {
                    foreach ($cat_data as $cat) {
                        if ($cat->name == 'Traditional Saunas' || $cat->name == 'Infrared Saunas' || $cat->name == 'InfraSauna') {
                            //$product['category'] = $cat->name;
                            $product['category'][] = $cat->name;
                        }
                    }
                }

                if ($cat_data) {
                    foreach ($cat_data as $cat) {
                        if ($cat->name == 'Indoor Sauna Rooms' || $cat->name == 'Outdoor Sauna Rooms') {
                            $product['location'] = $cat->name;
                            break;
                        }
                    }
                }

                if ($cat_data) {
                    foreach ($cat_data as $cat) {
                        if ($cat->name == 'Steam' || $cat->name == 'No Steam') {
                            $product['steam'] = $cat->name;
                            break;
                        }
                    }
                }
            }
            
            $products[$x] = $product;

            $x ++;
        }
    }

    return $products;
}

//! Save key once accepted to database

add_action('rest_api_init', function () {
    register_rest_route('dswaves/v1', '/get_pages', array(
        'methods' => 'GET',
        'callback' => 'dswaves_get_pages',
      ));

      register_rest_route('dswaves/v1', '/check_plugin_key_valid', array(
        'methods' => 'GET',
        'callback' => 'dswaves_check_plugin_key_valid',
      ));

      register_rest_route('dswaves/v1', '/save_plugin_key', array(
        'methods' => 'POST',
        'callback' => 'dswaves_save_plugin_key',
        'args'      => array(
            'key' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
        )
      ));

      register_rest_route('dswaves/v1', '/deactivate_plugin', array(
        'methods' => 'GET',
        'callback' => 'dswaves_deactivate_plugin',
      ));

      register_rest_route('dswaves/v1', '/save_sync_brand', array(
        'methods' => 'POST',
        'callback' => 'dswaves_save_sync_brand',
        'args'      => array(
            'brand' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
        )
    ));

    register_rest_route('dswaves/v1', '/get_sync_queue_count', array(
        'methods' => 'GET',
        'callback' => 'dswaves_get_site_sync_queue_count',
      ));


    register_rest_route('dswaves/v1', '/get_sync_brands', array(
        'methods' => 'POST',
        'callback' => 'dswaves_get_sync_brands',
        'args'      => array(
            'search_terms' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'sort_by' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'industry' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.current_page_first_index' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.current_page_last_index' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.total_results_count' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.current_page' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.total_pages' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'pagination.items_per_page' => array(
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
    ));

    register_rest_route('dswaves/v1', '/get_sync_brand', array(
        'methods'   => 'GET',
        'callback'  => 'dswaves_get_sync_brand',
        'args'      => array(
            'id' => array(
                'default' => 'view',
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
    ));
    
 
    register_rest_route('dswaves/v1', '/save_woo_category', array(
        'methods'   => 'POST',
        'callback'  => 'dswaves_save_woo_category',
        'args'      => array(
            'dsWavesCatID' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'dsWavesCatChildID' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'dsWavesCatGrandChildID' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'term_id' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
    ));

    register_rest_route('dswaves/v1', '/get_woo_categories', array(
        'methods' => 'GET',
        'callback' => 'dswaves_get_woo_categories',
    ));

    register_rest_route('dswaves/v1', '/get_post_types', array(
      'methods' => 'GET',
      'callback' => 'dswaves_get_post_types',
    ));
    
    register_rest_route('dswaves/v1', '/get_categories', array(
        'methods'   => 'GET',
        'callback'  => 'dswaves_get_categories',
        'args'      => array(
            'post_type' => array(
                'default' => 'view',
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
      ));
    register_rest_route('dswaves/v1', '/get_product_category', array(
        'methods'   => 'GET',
        'callback'  => 'dswaves_get_product_category',
        'args'      => array(
            'category' => array(
                'default' => 'view',
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
      ));
    
    register_rest_route('dswaves/v1', '/get_products', array(
        'methods'   => 'GET',
        'callback'  => 'dswaves_get_products',
        'args'      => array(
            'category' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'maincategory' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'grandchildid' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'productid' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            )
        )
      ));

      register_rest_route('dswaves/v1', '/rate_product', array(
        'methods'   => 'POST',
        'callback'  => 'dswaves_rate_product',
        'args'      => array(
            'rating' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'comment' => array(
                'default' => '',
                'sanitize_callback' => 'sanitize_textarea_field',
            )
        )
      ));
});


/**
 * WordPress Meta Boxes
 *
 * Creates Meta Boxes for settings that the product needs to be able
 * work on our new template based on vue js
 *
 */

//Add Meta Boxes
add_filter('woocommerce_product_data_tabs', 'dswaves_settings_tabs');
function dswaves_settings_tabs($tabs)
{
    $tabs['dswaves'] = array(
        'label'    => 'Syndified Settings',
        'target'   => 'dswaves_settings',
        'priority' => 1,
    );
    return $tabs;
}
  
//Tab content
 
add_action('woocommerce_product_data_panels', 'dswaves_panels');
function dswaves_panels()
{
    global $post;

    $product_type = get_post_meta($post->ID, 'product-type', true);
    $value = get_post_meta($post->ID, 'dswaves_type', true);
    $can_purchase_online = get_post_meta($post->ID, 'can_purchase_online', true);
    $cta_buttons = get_post_meta($post->ID, 'cta_buttons', true);
    $cta_buttons = json_decode($cta_buttons);
    $dswaves_can_purchase = get_post_meta($post->ID, 'dswaves_can_purchase', true);
    $dswaves_override_console_price = get_post_meta($post->ID, 'dswaves_override_console_price', true);

    $dswaves_show_inquiry_button = get_post_meta($post->ID, 'dswaves_show_inquiry_button', true);

    $dswaves_inquiry_button_text = get_post_meta($post->ID, 'dswaves_inquiry_button_text', true);
    if(!$dswaves_inquiry_button_text) {
        $dswaves_inquiry_button_text = "Product Inquiry";
    }
    $dswaves_inquiry_button_url = get_post_meta($post->ID, 'dswaves_inquiry_button_url', true);
    if(!$dswaves_inquiry_button_url) {
        $dswaves_inquiry_button_url = "/product-inquiry/";
    }
    
    
    $options = [
        'simple-product' => 'Simple Product',
        'hot-tub' => 'Hot Tub'
    ];

    if ($product_type == 'Other') {
        $options['simple-product'] = 'Simple Product';

        echo'<script>
            jQuery(document).ready (function () {
                //jQuery("._regular_price_field").hide ();
                //jQuery("._sale_price_field").hide ();
                jQuery(".general_tab").hide ();
            });
        </script>';
    }

    echo '<div id="dswaves_settings" class="panel woocommerce_options_panel hidden">';

    echo '<div id="dswaves_select_type_content" class="dswaves_content">';
            
    woocommerce_wp_select(array(
                    'id'      => 'dswaves_type',
                    'label'   => __('Product Type', 'woocommerce'),
                    'options' =>  $options,
                    'wrapper_class'   => 'dswaves-type',
                    'value'   => $value,
                    'desc_tip'          => true,
                    'description'       => 'What type of product is this?'
                ));

    echo'<script>
                    jQuery("#dswaves_type").change(function() {
                        
                        if(this.value == "hot-tub") {
                            jQuery("#dswaves_hot_tub_content").show();
                            jQuery("#dswaves_simple_product_content").hide();
                        } else if(this.value == "simple-product") {
                            jQuery("#dswaves_simple_product_content").show();
                            jQuery("#dswaves_hot_tub_content").hide();
                        } else {
                            jQuery("#dswaves_simple_product_content").hide();
                            jQuery("#dswaves_hot_tub_content").hide();
                        }
                    });
                </script>';

    echo '</div>';

    echo '<div id="dswaves_hot_tub_content" class="dswaves_content';
    if ($value != 'hot-tub') {
        echo ' hidden';
    }
    echo '">';

    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_size',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_size', true),
                    'label'             => 'Size',
                    'desc_tip'          => true,
                    'description'       => 'How many seats or size of item'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_jets',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_jets', true),
                    'label'             => 'Jets',
                    'desc_tip'          => true,
                    'description'       => 'How many jets does this hot tub have in total'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_price',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_price', true),
                    'label'             => 'Price',
                    'desc_tip'          => true,
                    'description'       => 'Add from 2 to 5 \'$\' depending on how expensive the hot tub is, example for mid expensive: $$$'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_dimensions',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_dimensions', true),
                    'label'             => 'Dimensions',
                    'desc_tip'          => true,
                    'description'       => 'Use the following format height X width X depth example: 7\'3" X 6\'5" X 34"'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_brand',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_brand', true),
                    'label'             => 'Brand',
                    'desc_tip'          => true,
                    'description'       => 'The brand of this item'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dswaves_collection',
                    'value'             => get_post_meta(get_the_ID(), 'dswaves_collection', true),
                    'label'             => 'Collection',
                    'desc_tip'          => true,
                    'description'       => 'The collection of this item'
                ));
    woocommerce_wp_text_input(array(
                    'id'                => 'dsWavesID',
                    'value'             => get_post_meta(get_the_ID(), 'dsWavesID', true),
                    'label'             => 'Console ID',
                    'desc_tip'          => true,
                    'description'       => 'DS Waves Sync ID'
                ));
    echo '</div>';

    echo '<div id="dswaves_simple_product_content" class="dswaves_content';
    if ($value != 'simple-product') {
        echo ' hidden';
    }
    echo '">';

    woocommerce_wp_text_input(array(
        'id'                => 'dsWavesID',
        'value'             => get_post_meta(get_the_ID(), 'dsWavesID', true),
        'label'             => 'Console ID',
        'desc_tip'          => true,
        'description'       => 'DS Waves Sync ID'
    ));

    if ($can_purchase_online) {
        woocommerce_wp_select(array(
                        'id'      => 'dswaves_can_purchase',
                        'label'   => __('Allow Sell Online', 'woocommerce'),
                        'options' =>  ['Yes' => 'Yes', 'No' => 'No'],
                        'wrapper_class'   => 'dswaves-type',
                        'value'   => $dswaves_can_purchase,
                        'desc_tip'          => true,
                        'description'       => 'Allow customers to purchase this product on the website.'
                    ));

        woocommerce_wp_select(array(
                        'id'      => 'dswaves_override_console_price',
                        'label'   => __('Override Brand Price', 'woocommerce'),
                        'options' =>  ['Yes' => 'Yes', 'No' => 'No'],
                        'wrapper_class'   => 'dswaves-type',
                        'value'   => $dswaves_override_console_price,
                        'desc_tip'          => true,
                        'description'       => 'Set a custom price of this product.'
                    ));

        echo'<script>
                        jQuery(document).ready (function () {
                            jQuery("#dswaves_override_console_price").change(function() {
                                
                                if(this.value == "Yes") {
                                    jQuery("#dswaves_price_content").show();
                                    // jQuery("._regular_price_field").show ();
                                    // jQuery("._sale_price_field").show ();
                                    // jQuery(".general_tab").show ();
                                } else  {
                                    jQuery("#dswaves_price_content").hide();
                                    // jQuery("._regular_price_field").hide ();
                                    // jQuery("._sale_price_field").hide ();
                                    // jQuery(".general_tab").hide ();
                                }
                            }).change ();
                        });
                    </script>';

        echo '<div id="dswaves_price_content">';

        woocommerce_wp_text_input(array(
                        //'id'                => 'dswaves_price',
                        'id'                => '_regular_price',
                        'value'             => get_post_meta(get_the_ID(), '_regular_price', true),
                        'label'             => 'Regular Price',
                        'desc_tip'          => true,
                        'description'       => 'MSRP price of the product.'
                    ));


        woocommerce_wp_text_input(array(
                        //'id'                => 'dswaves_sale_price',
                        'id'                => '_sale_price',
                        'value'             => get_post_meta(get_the_ID(), '_sale_price', true),
                        'label'             => 'Sale Price',
                        'desc_tip'          => true,
                        'description'       => 'Sale price of the product.'
                    ));
                
        echo '</div>';
    } else {
        echo '<div style="padding: 10px;">This product cannot be purchased by customers.</div>';
    }

        

    if ($cta_buttons) {
        $i = 0;
        foreach ($cta_buttons as $cta_button) {
            woocommerce_wp_select(array(
                            'id'      => 'cta_button_'.$i,
                            'label'   => __($cta_button->label . ' (button)', 'woocommerce'),
                            'options' =>  ['Show' => 'Show', 'Hide' => 'Hide'],
                            'wrapper_class'   => 'dswaves-type',
                            'value'   => $cta_button->show,
                            'desc_tip'          => true,
                            'description'       => 'What type of product is this?'
                        ));

            $i++;
        }
    }
                
                
    //echo '</div>';
    
    /* Product Inquiry Button, Shown on both hot tubs and other products */
    //echo '<div class="dswaves_content">';
    woocommerce_wp_select(array(
        'id'      => 'dswaves_show_inquiry_button',
        'label'   => __('Show Inquiry Button', 'woocommerce'),
        'options' =>  ['When Cant Buy' => 'When product cannot be purchased online', 'Always' => 'Always', 'Never' => 'Never'],
        'wrapper_class'   => 'dswaves-type',
        'value'   => $dswaves_show_inquiry_button,
        'desc_tip'          => true,
        'description'       => 'Show the product inquiry button?'
    ));
        
    woocommerce_wp_text_input(array(
        'id'                => 'dswaves_inquiry_button_text',
        'value'             => $dswaves_inquiry_button_text,
        'label'             => 'Inquiry button text',
        'desc_tip'          => true,
        'description'       => 'Change the product inquiry text'
    ));
    
    woocommerce_wp_text_input(array(
        'id'                => 'dswaves_inquiry_button_url',
        'value'             => $dswaves_inquiry_button_url,
        'label'             => 'Inquiry button URL',
        'desc_tip'          => true,
        'description'       => 'Change the product inquiry URL'
    ));

    echo '</div>';

    echo '</div>';

}

add_action('admin_head', 'dswaves_css_icon');
function dswaves_css_icon()
{
    echo '<style>
	#woocommerce-product-data ul.wc-tabs li.dswaves_options.dswaves_tab a:before{
		content: "\f527";
	}
	</style>';
}
 
add_action('woocommerce_process_product_meta', 'dswaves_save_fields', 10, 2);
function dswaves_save_fields($id, $post)
{
    $product_type = get_post_meta($post->ID, 'product-type', true);



    update_post_meta($id, 'dswaves_type', $_POST['dswaves_type']);
    update_post_meta($id, 'dswaves_size', $_POST['dswaves_size']);
    update_post_meta($id, 'dswaves_jets', $_POST['dswaves_jets']);
    update_post_meta($id, 'dswaves_dimensions', $_POST['dswaves_dimensions']);
    //update_post_meta( $id, 'dswaves_price', $_POST['dswaves_price'] );
    update_post_meta($id, 'dswaves_brand', $_POST['dswaves_brand']);
    update_post_meta($id, 'dswaves_collection', $_POST['dswaves_collection']);
    update_post_meta($id, 'dsWavesID', $_POST['dsWavesID']);

    update_post_meta($id, 'dswaves_show_inquiry_button', $_POST['dswaves_show_inquiry_button']);
    update_post_meta($id, 'dswaves_inquiry_button_text', $_POST['dswaves_inquiry_button_text']);
    update_post_meta($id, 'dswaves_inquiry_button_url', $_POST['dswaves_inquiry_button_url']);


    if ($product_type == 'Other') {
        update_post_meta($id, 'dswaves_can_purchase', $_POST['dswaves_can_purchase']);
        update_post_meta($id, 'dswaves_override_console_price', $_POST['dswaves_override_console_price']);
            
            
        if ($_POST['dswaves_override_console_price'] == 'Yes') {
            update_post_meta($id, '_regular_price', $_POST['_regular_price']);
            update_post_meta($id, '_sale_price', $_POST['_sale_price']);
        } else {
            update_post_meta($id, '_regular_price', get_post_meta($post->ID, 'dswaves_price', true));
            update_post_meta($id, '_sale_price', get_post_meta($post->ID, 'dswaves_sale_price', true));
            $_POST['_regular_price'] = get_post_meta($post->ID, 'dswaves_price', true);
            $_POST['_sale_price'] = get_post_meta($post->ID, 'dswaves_sale_price', true);
        }

        $wc_price = $_POST['_regular_price'];
        if ($_POST['_sale_price']) {
            $wc_price = $_POST['_sale_price'];
        }

        update_post_meta($id, '_price', $wc_price);

    }
        


    $cta_buttons = get_post_meta($post->ID, 'cta_buttons', true);
    $btn_json = false;
    if ($cta_buttons) {
        $cta_buttons = json_decode($cta_buttons);
            
        $i = 0;
        if (isset($_POST['cta_button_0'])) {
            $btn_json[] = [
                    'label' => $cta_buttons[$i]->label,
                    'show' => $_POST['cta_button_0']
                ];

            $i++;
        }

        if (isset($_POST['cta_button_1'])) {
            $btn_json[] = [
                    'label' => $cta_buttons[$i]->label,
                    'show' => $_POST['cta_button_1']
                ];

            $i++;
        }

        if (isset($_POST['cta_button_2'])) {
            $btn_json[] = [
                    'label' => $cta_buttons[$i]->label,
                    'show' => $_POST['cta_button_2']
                ];

            $i++;
        }

        $btn_json = json_encode($btn_json);
        update_post_meta($id, 'cta_buttons', $btn_json);
    }
}

function wcproduct_set_attributes($post_id, $attributes)
{
    $i = 0;
    // Loop through the attributes array
    foreach ($attributes as $name => $value) {
        $product_attributes[$i] = array(
            'name' => htmlspecialchars(stripslashes($name)), // set attribute name
            'value' => $value, // set attribute value
            'position' => 1,
            'is_visible' => 1,
            'is_variation' => 1,
            'is_taxonomy' => 0
        );

        $i++;
    }

    // Now update the post with its new attributes
    update_post_meta($post_id, '_product_attributes', $product_attributes);
}

add_filter('template_include', 'dswaves_post_template');
function dswaves_post_template($post_template)
{
    global $post;
        
    $postTypes = array('post', 'learning');

    $wavesSyncID = get_post_meta($post->ID, 'dsWavesID', true);

    if (is_singular($postTypes) && $wavesSyncID) {
        $post_template = 'wp-content/plugins/dsWaves2/templates/dswaves-post-template.php';
    }

    return $post_template;
}


add_filter('page_template', 'dswaves_page_template');
function dswaves_page_template($page_template)
{
    if (get_page_template_slug() == 'dswaves-sync-template.php') {
        $page_template = 'wp-content/plugins/dsWaves2/templates/dswaves-sync-template.php';
    }
    return $page_template;
}

/**
 * Add "DS Waves Sync" template to page attirbute template section.
 */
add_filter('theme_page_templates', 'dswaves_add_template_to_select', 10, 4);
function dswaves_add_template_to_select($post_templates, $wp_theme, $post, $post_type)
{

    // Add DS Waves Sync to select dropdown
    $post_templates['dswaves-sync-template.php'] = __('DS Waves Sync');

    return $post_templates;
}

// Helper function to load a WooCommerce template or template part file from the
// active theme or a plugin folder.
function my_load_wc_template_file($template_name)
{
    // Check theme folder first - e.g. wp-content/themes/my-theme/woocommerce.
    $file = get_stylesheet_directory() . '/woocommerce/' . $template_name;
    if (@file_exists($file)) {
        return $file;
    }

    // Now check plugin folder - e.g. wp-content/plugins/my-plugin/woocommerce.
    $file =  'wp-content/plugins/dsWaves2/templates/woocommerce/' . $template_name;
    if (@file_exists($file)) {
        return $file;
    }
}
add_filter('woocommerce_template_loader_files', function ($templates, $template_name) {
    // Capture/cache the $template_name which is a file name like single-product.php
    wp_cache_set('my_wc_main_template', $template_name); // cache the template name
    return $templates;
}, 10, 2);

add_filter('template_include', function ($template) {
    if ($template_name = wp_cache_get('my_wc_main_template')) {
        wp_cache_delete('my_wc_main_template'); // delete the cache
        if ($file = my_load_wc_template_file($template_name)) {
            return $file;
        }
    }
    return $template;
}, 11);
add_filter('wc_get_template_part', function ($template, $slug, $name) {
    $file = my_load_wc_template_file("{$slug}-{$name}.php");
    return $file ? $file : $template;
}, 10, 3);
add_filter('woocommerce_locate_template', function ($template, $template_name) {
    $file = my_load_wc_template_file($template_name);
    return $file ? $file : $template;
}, 10, 2);


function webp_upload_mimes($existing_mimes)
{
    $existing_mimes['webp'] = 'image/webp';
    return $existing_mimes;
}
add_filter('mime_types', 'webp_upload_mimes');
//enable preview / thumbnail for webp image files.
function webp_is_displayable($result, $path)
{
    if ($result === false) {
        $displayable_image_types = array( IMAGETYPE_WEBP );
        $info = @getimagesize($path);
        if (empty($info)) {
            $result = false;
        } elseif (!in_array($info[2], $displayable_image_types)) {
            $result = false;
        } else {
            $result = true;
        }
    }
    return $result;
}
add_filter('file_is_displayable_image', 'webp_is_displayable', 10, 2);

    if( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_60b6c65abe2e2',
            'title' => 'Syndified Information',
            'fields' => array(
                
                array(
                    'key' => 'field_60b6c5bb6913f',
                    'label' => 'Vue Template',
                    'name' => 'dswavestemplate',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_60b6c5c469140',
                    'label' => 'Brand/Category',
                    'name' => 'dswavesbrand',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_60cb81b50863b',
                    'label' => 'Console ID',
                    'name' => 'dsWavesID',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),

                array(
                    'key' => 'field_612fb68df4fa5',
                    'label' => 'Hero',
                    'name' => 'dswaves_category_brand_lp_hero',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'url',
                    'preview_size' => 'medium',
                    'library' => 'all',
                    'min_width' => '',
                    'min_height' => '',
                    'min_size' => '',
                    'max_width' => '',
                    'max_height' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page_template',
                        'operator' => '==',
                        'value' => 'dswaves-sync-template.php',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        ));
        
        endif;