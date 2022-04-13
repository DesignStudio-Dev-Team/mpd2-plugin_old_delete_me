<?php
// Admin Functions we might not even need but for testing
require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
require(ABSPATH . '/wp-blog-header.php');
global $wpdb;

function createJSONFile($item_id, $item_type, $syndication_type)
{
    
    //default folder is plugin only unless is content for the website
    $folder_type = 'plugin-content/';
    
    if ($syndication_type == 'syndicationed_content') {
        $folder_type = 'website-content/';
    }
        
    $item_type = preg_replace('/[[:space:]]+/', '-', $item_type);

    $folder = '../'.$folder_type.'json/' .$item_type;
  
    //check if folder exists if not create it
    if (!is_dir($folder)) {
        mkdir($folder, 0777, true);
    }

    //file
    $file = $folder . '/' . $item_id . '.json';

    return $file;
}

/**
 * Download JS/CSS Files from AWS S3
 * Depending on what type of product/id
 */

if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

function createWPPages(string $page_title, string $page_slug, string $page_content, int $page_parent_id, $dsWavesCatID = false, $dsWavesCatChildID = false, $dsWavesCatGrandChildID = false, $dsWavesClassificationID = false) // 27
{
    require($_SERVER['DOCUMENT_ROOT'] . '/wp-blog-header.php');
    
    global $wpdb;

    // try to get by parent, child, grandchild first... names mix up is messing up stuff
    $content_id = false;
    $content_id = dswaves_get_content_id_by_category('page', $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);

  
    if (!$content_id) {
        //echo 'aaa:'  . "\n";
        
        $query = new WP_Query([
            "post_type" => 'page',
            "name" => $page_slug,
            //'parent' => $page_parent_id,
            "status" => 'publish'
        ]);
    
    
        $query->have_posts();

        if ($query->posts && count($query->posts) > 0) {
            foreach ($query->posts as $post) {
                if ($post->post_parent == $page_parent_id) {
                    $content_id = $post->ID;
                }
            }
        }
    }

    $post_details = array(
        'post_title'    => $page_title,
        'post_content'  => $page_content,
        'post_parent'   => $page_parent_id,
        'post_name'     => $page_slug,
        'post_status'   => 'publish',
        'post_author'   => 1,
        'post_type'     => 'page',
        'page_template' => 'dswaves-sync-template.php'
     );

    if ($content_id) {
        $post = get_post($content_id);
        if ($post) {
            $post->post_title = $page_title;
            $post->post_parent = $page_parent_id;
            $post->post_content = $page_content;
            $post->page_template = 'dswaves-sync-template.php';
            $post->post_name = $page_slug;
            wp_update_post($post);
            $page = $post->ID;
        } else {
            $page = wp_insert_post($post_details);
        }
    } else {
        $page = wp_insert_post($post_details);
    }

    update_post_meta($page, 'dsWavesCatID', $dsWavesCatID);
    update_post_meta($page, 'dsWavesCatChildID', $dsWavesCatChildID);
    update_post_meta($page, 'dsWavesCatGrandChildID', $dsWavesCatGrandChildID);
    update_post_meta($page, 'dsWavesClassificationID', $dsWavesClassificationID);


    return $page;
}

function dswavesCreateCategory($name, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $category_slug, $category_description, $thumbID, $taxonomy, $weight = false, $dsWavesClassificationID = false)
{
    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    require(ABSPATH . '/wp-blog-header.php');
    
    global $wpdb;
    
    // Lets Check if its already here if not then make it
    $catExistsID = dswaves_get_category_id_by_category($dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);

    // if category is placed under hot-tubs manually in wp-admin
    if (!$parent_id && $catExistsID)
    {
        $current_term_data = get_term_by ('term_id', intval ($catExistsID), 'product_cat');
        if ($current_term_data)
            $parent_id = $current_term_data->parent;

    }

    $category_array = array(
        'name' => $name,
        'parent' => $parent_id,
        'taxonomy' => $taxonomy,
        'slug' => $category_slug,
        'description' => $category_description
    );

    if ($catExistsID) {
        //edit only
        $term_id = $catExistsID;

        wp_update_term(intval ($term_id), $taxonomy, $category_array);
        
    } else {
        //create the category
        $term = wp_insert_term($name, $taxonomy, $category_array);

        if (is_object($term) && isset($term->error_data['term_exists'])) {
            $term_id = $term->error_data['term_exists'];
        } elseif (is_array($term) && $term['term_id']) {
            $term_id = $term['term_id'];
        }
    }

    update_woocommerce_term_meta($term_id, 'thumbnail_id', absint($thumbID));
    

    if (!$dsWavesCatID) {
        $dsWavesCatID = '';
    }

    if (!$dsWavesCatChildID) {
        $dsWavesCatChildID = '';
    }

    if (!$dsWavesCatGrandChildID) {
        $dsWavesCatGrandChildID = '';
    }


    update_term_meta($term_id, 'order', $weight); // sorting
    update_term_meta($term_id, 'dsWavesCatID', $dsWavesCatID);
    update_term_meta($term_id, 'dsWavesCatChildID', $dsWavesCatChildID);
    update_term_meta($term_id, 'dsWavesCatGrandChildID', $dsWavesCatGrandChildID);
    update_term_meta($term_id, 'dsWavesClassificationID', $dsWavesClassificationID);
    
    return $term_id;
}

/**
 *  get content ready
 */
function dswaves_content_ready($json, $content_id = false)
{
    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    require(ABSPATH . '/wp-blog-header.php');
    global $wpdb;

    $type = '';
    $postType = '';
    
    if ($json['type'] === 'Post') {
        $type = 'category';
        $postType = 'post';
    }
    if ($json['type'] === 'Knowledgebase Article') {
        $type = 'learning_cat';
        $postType = 'learning';
    }
    if ($json['type'] === 'Page') {
        $type = 'page';
        $postType = 'page';
    }

    

    //get categories
    $terms = array();

    foreach ($json['categories'] as $category_set) {
        if ($category_set['name'] == 'FAQs') {
            $category_set['name'] = 'faq';
        }

        $categorySlug = preg_replace('/[[:space:]]+/', '-', $category_set['name']);

        $category = get_term_by('slug', $categorySlug, $type);

        if ($category) {
            array_push($terms, $category->term_id);
        }



        if ($category_set['items']) {
            foreach ($category_set['items'] as $sub_category_set) {
                $subCategorySlug = preg_replace('/[[:space:]]+/', '-', $sub_category_set['name']);

                $subCategory = get_term_by('slug', $subCategorySlug, $type);

                if ($subCategory) {
                    array_push($terms, $subCategory->term_id);
                }

                if ($sub_category_set['items']) {
                    foreach ($sub_category_set['items'] as $sub_child_category_set) {
                        $subCategorySlug = preg_replace('/[[:space:]]+/', '-', $sub_child_category_set['name']);
        
                        $subCategory = get_term_by('slug', $subCategorySlug, $type);
        
                        if ($subCategory) {
                            array_push($terms, $subCategory->term_id);
                        }
                    }
                }
            }
        }
    }

    // if ($json['type'] === 'Page') {

    //     //lets create the post on a custom post type
    //     $my_post = array(
    //         'ID'           => $content_id,
    //         'post_title'    => wp_strip_all_tags($json['title']),
    //         'post_name'    =>  str_replace (" ", "-", strtolower (wp_strip_all_tags($json['title']))),
    //         'post_content'  => ' ',
    //         'post_status'   => 'publish',
    //         'post_author'   => 1,
    //         'post_parent' => 0,
    //         'page_template' => 'dswaves-sync-template.php',
    //         'post_type'     => $postType
    //     );

    // }
    // else
    // {
    //lets create the post on a custom post type
    $my_post = array(
            'ID'           => $content_id,
            'post_title'    => wp_strip_all_tags($json['title']),
            'post_name'    =>  str_replace(" ", "-", strtolower(wp_strip_all_tags($json['title']))),
            'post_content'  => ' ',
            'post_status'   => 'publish',
            'post_author'   => 1,
            'page_template' => 'dswaves-sync-template.php',
            'post_type'     => $postType
        );

    if ($content_id) {
        $thePost = wp_update_post($my_post);
    } else {
        $thePost = wp_insert_post($my_post);
    }
    wp_set_post_terms($thePost, $terms, $type);

    update_post_meta($thePost, 'dsWavesID', $json['id']);
    update_post_meta($thePost, 'dswavestemplate', 'none');
    update_post_meta($thePost, 'dswavesbrand', '');

    update_post_meta($thePost, 'dsWavesBrandID', $json['brand_id']);

    //add picture as feature image
    if ($json['design']['media']) {
        addFeaturedImg($json['design']['media']['file_full_url'], $thePost, $json['design']['media']['id']);
    }
}


 /**
 * From JSON to Woocommerce Ready
 * Create new categories or update
 * Create new attributes or update
 * set pages for the categories
 */

function dswaves_brand_ready($json)
{
    $dsWavesID = $json['id'];
    
    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    require(ABSPATH . '/wp-blog-header.php');
    global $wpdb;

    //fill database to know which brands this site has
    $tag_line = $json['tag_line'];

    
    // Lets create the categories

    $taxonomy = 'product_cat';


    //product categories
    $x = 0;
    if (isset($json['product_categories'])) {
        foreach ($json['product_categories'] as $category_set) {
            $parent_id = 0;
            $page_parent_id = 0;
        
            if ($category_set['name'] == 'Hot Spring® Spas' or
            $category_set['name'] == 'Caldera® Spas' or
            $category_set['name'] == 'Freeflow Spas' or
            $category_set['name'] == 'Fantasy Spas' or
            $category_set['name'] == 'Hot Tub Size' or
            $category_set['name'] == 'Hot Tub Value') {
                
               
                // This goes under Hot Tubs as default
                $main_category = get_term_by('slug', 'hot-tubs', 'product_cat');
                if ($main_category) {
                    $parent_id = $main_category->term_id;
                } else {
                    //lets make this category
                    $parent_id = dswavesCreateCategory('Hot Tubs', '', '', '', $parent_id, 'hot-tubs', 'Hot tubs page.', 0, $taxonomy);
                }
            
                // This is the page that goes under Hot Tubs as default
                $page_parent = get_page_by_path('hot-tubs', OBJECT, 'page');
                if ($page_parent) {
                    $page_parent_id = $page_parent->ID;
                    update_post_meta($page_parent_id, 'dswavestemplate', 'hot-tubs');
                    //change the template
                    update_post_meta($page_parent_id, '_wp_page_template', 'dswaves-sync-template.php');
                } else {
                    //lets make this page
                    $hot_tubs_id = createWPPages('Hot Tubs', 'hot-tubs', ' ', 0);
                    $page_parent_id = $hot_tubs_id;
                    update_post_meta($hot_tubs_id, 'dswavestemplate', 'hot-tubs');
                }
            }
 

            // Make a slug from the name and remove the ®
            $category_slug = str_replace('®', '', $category_set['name']);
            $category_slug = preg_replace('/[[:space:]]+/', '-', $category_slug);


            // Lets Check if its already here if not then make it
            $catExists = term_exists($category_slug, 'product_cat', $parent_id);

            if ($catExists) {
                //continue; //skip making this category
            }

          
            if ($category_set['description']) {
                $tag_line = $category_set['description'];
            } else {
                $tag_line = '';
            }

            if ($category_set['media']) {
                //Only for Brands
                $thumbID = addImg($category_set['media']['file_full_url'], $category_set['media']['id']);
            } else {
                $thumbID = ' ';
            }


            //Set Category ID From Console
            $dsWavesCatID = $category_set['id'];
            $dsWavesCatChildID = '';
            $dsWavesCatGrandChildID = '';
            

            $sub_category_parent_id = dswavesCreateCategory($category_set['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $category_slug, $tag_line, $thumbID, $taxonomy, $category_set['weight'], $category_set['classification_id']);
            
            $wp_cat = get_term_by( 'term_taxonomy_id', intval ($sub_category_parent_id) );
            if ($wp_cat)
            {
                $category_slug = $wp_cat->slug;
            }
            
            // Create Page for this category
            $sub_page_parent_id = createWPPages($category_set['name'], $category_slug, ' ', $page_parent_id, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);
            
            // echo 'parent:' . "\n";
            // echo 'dsWavesCatID: ' . $dsWavesCatID . "\n";
            // echo 'dsWavesCatChildID: ' . $dsWavesCatChildID . "\n";
            // echo 'dsWavesCatGrandChildID: ' . $dsWavesCatGrandChildID . "\n";

            if ($category_set['name'] == 'Hot Spring® Spas' or
                $category_set['name'] == 'Caldera Spas' or
                $category_set['name'] == 'Freeflow Spas' or
                $category_set['name'] == 'Fantasy Spas' or
                $category_set['name'] == 'Finnleo® Saunas' or
                $category_set['name'] == 'Endless Pools®' or
                $category_set['name'] == 'Hot Tub Size' or
                $category_set['name'] == 'Hot Tub Value') {
                $productTemplate = "hot-tub-brand";
            } elseif ($x == 0) {
                $productTemplate = "category-brand-lp";
            } elseif (isset($category_set['items']) && $category_set['items'] && count($category_set['items']) > 0) {
                $productTemplate = "accessories-category";
            } else {
                $productTemplate = "accessories-sub-category";
            }

            //lets check if its the 1st
            

            $x ++;

            // because now we can have a content page override a category page
            $currentTemplate = get_post_meta($sub_page_parent_id, 'dswavestemplate');
            if ($currentTemplate == false) {
                update_post_meta($sub_page_parent_id, 'dswavestemplate', $productTemplate);
                update_post_meta($sub_page_parent_id, 'dsWavesID', $dsWavesID);
            }

            update_post_meta($sub_page_parent_id, 'dswavesbrand', $category_slug);
                    
            if (isset($category_set['items'])) {
                foreach ($category_set['items'] as $sub_category) {
                    if ($sub_category['description'] == null) {
                        $catDesc = ' ';
                    } else {
                        $catDesc = $sub_category['description'];
                    }

                    if ($sub_category['media']) {
                        //Only for Brands
                        $thumbID = addImg($sub_category['media']['file_full_url'], $sub_category['media']['id']);
                    } else {
                        $thumbID = ' ';
                    }

                    // is a collection page
                    if (
                        $sub_category['name'] == 'Highlife® Collection' or
                        $sub_category['name'] == 'Limelight® Collection' or
                        $sub_category['name'] == 'Hot Spot® Collection' or
                        $sub_category['name'] == 'Utopia Series' or
                        $sub_category['name'] == 'Paradise Series' or
                        $sub_category['name'] == 'Vacanza Series' or
                        $sub_category['name'] == 'Freeflow Premier Series' or
                        $sub_category['name'] == 'Freeflow Sport Series' or
                        $sub_category['name'] == 'Fantasy Premier Series' or
                        $sub_category['name'] == 'Fantasy Sport Series'
                    ) {
                        $productTemplate = 'hot-tub-collection';
                    } elseif ($sub_category['name'] == 'Endless Pools Fitness Systems' ||
                        $sub_category['name'] == 'RecSport Recreation Systems' ||
                        $sub_category['name'] == 'SwimCross Exercise Systems'
                    ) {
                        $productTemplate = "endless-pools-brand";
                    } elseif (isset($sub_category['items']) && $sub_category['items'] && count($sub_category['items']) > 0) {
                        $productTemplate = "accessories-category";
                    } else {
                        $productTemplate = "accessories-sub-category";
                    }
                    
                    $dsWavesCatChildID = $sub_category['id'];

                    // echo 'child:' . "\n";
                    // echo 'dsWavesCatID: ' . $dsWavesCatID . "\n";
                    // echo 'dsWavesCatChildID: ' . $dsWavesCatChildID . "\n";
                    // echo 'dsWavesCatGrandChildID: ' . $dsWavesCatGrandChildID . "\n";

                    $details = dswaves_create_category_wp_page($sub_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $sub_category_parent_id, $sub_page_parent_id, $productTemplate, $catDesc, $thumbID, $taxonomy, $sub_category['weight']);
                    
                    if (isset($sub_category['items'])) {
                        foreach ($sub_category['items'] as $sub_child_category) {
                            if ($sub_child_category['description'] == null) {
                                $catDesc = ' ';
                            } else {
                                $catDesc = $sub_child_category['description'];
                            }
        
                            if ($sub_child_category['media']) {
                                //Only for Brands
                                $thumbID = addImg($sub_child_category['media']['file_full_url'], $sub_child_category['media']['id']);
                            } else {
                                $thumbID = ' ';
                            }

                            $productTemplate = "accessories-sub-category";
                            
                            
                            $dsWavesCatGrandChildID = $sub_child_category['id'];
                            
                            // echo 'grand child:' . "\n";
                            // echo 'dsWavesCatID: ' . $dsWavesCatID . "\n";
                            // echo 'dsWavesCatChildID: ' . $dsWavesCatChildID . "\n";
                            // echo 'dsWavesCatGrandChildID: ' . $dsWavesCatGrandChildID . "\n";
                            
                            $details2 = dswaves_create_category_wp_page($sub_child_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $details['category_id'], $details['page_id'], $productTemplate, $catDesc, $thumbID, $taxonomy, $sub_child_category['weight']);
                            $dsWavesCatGrandChildID = '';
                        }
                    }

                    $dsWavesCatChildID = '';
                }
            }
        }
    }

    //knowledge base categories
    if (taxonomy_exists('learning_cat')) {
        if (isset($json['article_categories'])) {
            foreach ($json['article_categories'] as $category_set) {

                $taxonomy = 'learning_cat';


                $parent_id = '';

                //Set Category ID From Console
                $dsWavesCatID = $category_set['id'];
                $dsWavesCatChildID = '';
                $dsWavesCatGrandChildID = '';

                $category_slug = str_replace('®', '', $category_set['name']);
                $category_slug = preg_replace('/[[:space:]]+/', '-', $category_slug);

                if ($category_set['description']) {
                    $tag_line = $category_set['description'];
                } else {
                    $tag_line = '';
                }
                if ($category_set['media']) {
                    //Only for Brands
                    $thumbID = addImg($category_set['media']['file_full_url'], $category_set['media']['id']);
                } else {
                    $thumbID = ' ';
                }
                
                $catExists = term_exists($category_slug, $taxonomy, $parent_id);

                if ($catExists) {
                    $parent_id = $catExists;
                } else {
                    $parent_id = dswavesCreateCategory($category_set['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $category_slug, $tag_line, $thumbID, $taxonomy, $category_set['weight']);
                }

                if (isset($category_set['items'])) {
                    foreach ($category_set['items'] as $sub_category) {
                        $sub_category_slug = str_replace('®', '', $sub_category['name']);
                        $sub_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_category_slug);
            
                        if ($sub_category['description']) {
                            $tag_line = $sub_category['description'];
                        } else {
                            $tag_line = '';
                        }
                        if ($sub_category['media']) {
                            //Only for Brands
                            $thumbID = addImg($sub_category['media']['file_full_url'], $sub_category['media']['id']);
                        } else {
                            $thumbID = ' ';
                        }

                        $catExists2 = term_exists($sub_category_slug, $taxonomy, $parent_id);

                        $dsWavesCatChildID = $sub_category['id'];

                        if ($catExists2) {
                            $middleChildCatId = $catExists2['term_id'];
                        } else {
                            $middleChildCatId = dswavesCreateCategory($sub_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $sub_category_slug, $tag_line, $thumbID, $taxonomy, $sub_category['weight']);
                        }

                        if (isset($sub_category['items'])) {
                            foreach ($sub_category['items'] as $sub_child_category) {
                                $sub_child_category_slug = str_replace('®', '', $sub_child_category['name']);
                                $sub_child_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_child_category_slug);
                    
                                if ($sub_child_category['description']) {
                                    $tag_line = $sub_child_category['description'];
                                } else {
                                    $tag_line = '';
                                }
                                if ($sub_child_category['media']) {
                                    //Only for Brands
                                    $thumbID = addImg($sub_child_category['media']['file_full_url'], $sub_child_category['media']['id']);
                                } else {
                                    $thumbID = ' ';
                                }

                                $catExists3 = term_exists($sub_child_category_slug, $taxonomy, $middleChildCatId);

                                if ($catExists3) {
                                    //$middleChildCatId = $catExists2[term_id];
                                } else {
                                    

                                    dswavesCreateCategory($sub_child_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $middleChildCatId, $sub_child_category_slug, $tag_line, $thumbID, $taxonomy, $sub_child_category['weight']);


                                    //dswavesCreateCategory($sub_child_category['name'], '', '', '',                                               $middleChildCatId, $sub_child_category_slug, $tag_line, $thumbID, $taxonomy, $sub_child_category['name']);
                                }
                            }
                        }

                        $dsWavesCatChildID = '';
                    }
                }
            }
        }
    }

    //blog post categories
    if (isset($json['post_categories'])) {
        foreach ($json['post_categories'] as $category_set) {
            // I need to check if category already exists


            $parent_id = '';

            //Set Category ID From Console
            $dsWavesCatID = $category_set['id'];
            $dsWavesCatChildID = '';
            $dsWavesCatGrandChildID = '';

            $category_slug = str_replace('®', '', $category_set['name']);
            $category_slug = preg_replace('/[[:space:]]+/', '-', $category_slug);

            if ($category_set['description']) {
                $tag_line = $category_set['description'];
            } else {
                $tag_line = '';
            }
            if ($category_set['media']) {
                //Only for Brands
                $thumbID = addImg($category_set['media']['file_full_url'], $category_set['media']['id']);
            } else {
                $thumbID = ' ';
            }
            $taxonomy = 'category';

            

            $catExists = term_exists($category_slug, $taxonomy, $parent_id);

        
            if ($catExists) {
                $parent_id = $catExists;
            } else {
                $parent_id = dswavesCreateCategory($category_set['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $category_slug, $tag_line, $thumbID, $taxonomy, $category_set['weight']);
            }


            if (isset($category_set['items'])) {
                foreach ($category_set['items'] as $sub_category) {
                    $sub_category_slug = str_replace('®', '', $sub_category['name']);
                    $sub_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_category_slug);
        
                    if ($sub_category['description']) {
                        $tag_line = $sub_category['description'];
                    } else {
                        $tag_line = '';
                    }
                    if ($sub_category['media']) {
                        //Only for Brands
                        $thumbID = addImg($sub_category['media']['file_full_url'], $sub_category['media']['id']);
                    } else {
                        $thumbID = ' ';
                    }

                    $catExists2 = term_exists($sub_category_slug, $taxonomy, $parent_id);

                    $dsWavesCatChildID = $sub_category['id'];

                    if ($catExists2) {
                        $middleChildCatId = $catExists2['term_id'];
                    } else {
                          $middleChildCatId = dswavesCreateCategory($sub_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $parent_id, $sub_category_slug, $tag_line, $thumbID, $taxonomy, $sub_category['weight']);
                    }

                    if (isset($sub_category['items'])) {
                        foreach ($sub_category['items'] as $sub_child_category) {
                            $sub_child_category_slug = str_replace('®', '', $sub_child_category['name']);
                            $sub_child_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_child_category_slug);
                
                            if ($sub_child_category['description']) {
                                $tag_line = $sub_child_category['description'];
                            } else {
                                $tag_line = '';
                            }
                            if ($sub_child_category['media']) {
                                //Only for Brands
                                $thumbID = addImg($sub_child_category['media']['file_full_url'], $sub_child_category['media']['id']);
                            } else {
                                $thumbID = ' ';
                            }

                            $catExists3 = term_exists($sub_child_category_slug, $taxonomy, $middleChildCatId);

                            if ($catExists3) {
                                //$middleChildCatId = $catExists2[term_id];
                            } else {
                                

                                dswavesCreateCategory($sub_child_category['name'], $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $middleChildCatId, $sub_child_category_slug, $tag_line, $thumbID, $taxonomy, $sub_child_category['weight']);


                                //dswavesCreateCategory($sub_child_category['name'], '', '', '',                                               $middleChildCatId, $sub_child_category_slug, $tag_line, $thumbID, $taxonomy, $sub_child_category['name']);
                            }
                        }
                    }

                    $dsWavesCatChildID = '';
                }
            }

            
        }
    }

}

function dswaves_create_category_wp_page($categoryName, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $subCategoryParentID, $subPageParentID, $productTemplate, $catDesc, $thumbID, $taxonomy, $weight = false)
{

    //create sub category with parent category
    $sub_category_slug = str_replace('®', ' ', $categoryName);
    $sub_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_category_slug);

    $sub_category_slug = $sub_category_slug;
    
    $sub_category_id = dswavesCreateCategory($categoryName, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID, $subCategoryParentID, $sub_category_slug, $catDesc, $thumbID, $taxonomy, $weight);

    //file_put_contents('log_' . $sub_category_id . ' ' . $categoryName . '.txt', $sub_category_id);
    //$wp_cat = get_category (intval ($sub_category_id));
    $wp_cat = get_term_by( 'term_taxonomy_id', intval ($sub_category_id) );

    if ($wp_cat)
    {
        $sub_category_slug = $wp_cat->slug;
    }

    //file_put_contents('log_' . $sub_category_id . ' ' . $categoryName . '.txt', print_r ($wp_cat, true));

    //create page for this sub category
    $sub_sub_page_id = createWPPages($categoryName, $sub_category_slug, ' ', $subPageParentID, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);

    // because now we can have a content page override a category page
    $currentTemplate = get_post_meta($sub_sub_page_id, 'dswavestemplate');
    if ($currentTemplate == false) {
        update_post_meta($sub_sub_page_id, 'dswavestemplate', $productTemplate);
    }
    update_post_meta($sub_sub_page_id, 'dswavesbrand', $sub_category_slug);


    return [
        'category_id' => $sub_category_id,
        'page_id' => $sub_sub_page_id
    ];
}

 /**
 * From JSON to Woocommerce Ready
 * needs name of product
 * categories
 * avatar
 * and all other ecommerce specs
 */

function dswaves_product_ready($json)
{
    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    require(ABSPATH . '/wp-blog-header.php');
    
    global $wpdb;

    //? Main array
 
    $product = array(
        'name' => $json['title'],
        'register_mark' => $json['register_mark'],
        'avatar' => $json['main_image']['file_full_url'],
        'avatar_console_media_id' => $json['main_image']['id'],
        'product_type' => $json['type'],
        'sync_id' => $json['id'],
        'full_description' => $json['full_description'],
        'short_description' => $json['short_description']
        // 'data_set' => $json['product_data_set']
    );


    if (isset($json['is_downloadable'])) {
        $product['is_downloadable'] = $json['is_downloadable'];
    }
    if (isset($json['is_virtual'])) {
        $product['is_virtual'] = $json['is_virtual'];
    }
    if (isset($json['commerce']['can_purchase_online'])) {
        $product['can_purchase_online'] = $json['commerce']['can_purchase_online'];
    }
    if (isset($json['commerce']['price'])) {
        $product['price'] = $json['commerce']['price'];
    }
    if (isset($json['commerce']['sale_price'])) {
        $product['sale_price'] = $json['commerce']['sale_price'];
    }
    if (isset($json['purchase_notes'])) {
        $product['purchase_note'] = $json['purchase_notes'];
    }
    if (isset($json['internal_notes'])) {
        $product['internal_note'] = $json['internal_notes'];
    }
    if (isset($json['shipping']['weight'])) {
        $product['weight'] = $json['shipping']['weight'];
    }
    if (isset($json['shipping']['length'])) {
        $product['length'] = $json['shipping']['length'];
    }
    if (isset($json['shipping']['width'])) {
        $product['width'] = $json['shipping']['width'];
    }
    if (isset($json['shipping']['height'])) {
        $product['height'] = $json['shipping']['height'];
    }
    if (isset($json['sku'])) {
        $product['sku'] = $json['sku'];
    }

    $product['sold_individually'] = $json['individual_only'];
    if (!$product['sold_individually']) {
        $product['sold_individually'] = false;
    }

    if (is_array($json['categories']) && isset($json['categories'][0])) {
        $catName = str_replace('®', '', $json['categories'][0]['name']);

        $product['dswaves_brand'] = $catName;
    } else {
        $product['dswaves_brand'] = $json['brand_id'];
    }

    $product['cta_buttons'] = $json['cta_buttons'];

    if (isset($json['attributes'])) {
        $product['product_attributes'] = array();

        foreach ($json['attributes'] as $key => $attribute_set) {
            $taxonomy = 'pa_' . wc_sanitize_taxonomy_name($attribute_set['name']);
            $option_term_ids = array();

            if (isset($attribute_set['items'])) {
                foreach ($attribute_set['items'] as $option_attribute) {
                    if (term_exists($option_attribute['name'], $taxonomy)) {
                        $option_term_ids[] = get_term_by('name', $option_attribute['name'], $taxonomy)->term_id;
                    }
                }
            }

            $product['product_attributes'][$taxonomy] = array(
            'name'          => $taxonomy,
            'value'         => $option_term_ids,
            'position'      => $key + 1,
            'is_visible'    => '1',
            'is_variation'  => '1',
            'is_taxonomy'   => '1'
        );
        }
    }

    if (isset($json['categories'])) {
        $product['product_categories'] = array();

        foreach ($json['categories'] as $category_set) {
            //$category_slug = str_replace('®', '', $category_set['name']);
            //$category_slug = preg_replace('/[[:space:]]+/', '-', $category_slug);
    
            //if (term_exists($category_slug, 'product_cat')) {
            
            $termArgs = [
                    'meta_query' => [
                        array(
                            'key' => 'dsWavesCatID',
                            'value' => $category_set['id'],
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
                
            $catID = false;
            $the_query = new WP_Term_Query($termArgs);
            foreach ($the_query->get_terms() as $term) {
                $catID = $term->term_id;
            }

             
            if ($catID) {
                array_push($product['product_categories'], $catID);
            }
            //}
        
            if (isset($category_set['items'])) {
                foreach ($category_set['items'] as $sub_category) {
                    //$sub_category_slug = str_replace('®', '', $sub_category['name']);
                    //$sub_category_slug = preg_replace('/[[:space:]]+/', '-', $sub_category_slug);
                    
                    $termArgs = [
                        'meta_query' => [
                            array(
                                'key' => 'dsWavesCatID',
                                'value' => $category_set['id'],
                                'compare' => '='
                            ),
                            array(
                                'key' => 'dsWavesCatChildID',
                                'value' => $sub_category['id'],
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

                    $catID = false;
                    $the_query = new WP_Term_Query($termArgs);
                    foreach ($the_query->get_terms() as $term) {
                        $catID = $term->term_id;
                    }

                   
                    if ($catID) {
                        array_push($product['product_categories'], $catID);
                    }
                    
                    if (isset($sub_category['items'])) {
                        foreach ($sub_category['items'] as $sub_item_category) {
                            $termArgs = [
                                'meta_query' => [
                                    array(
                                        'key' => 'dsWavesCatID',
                                        'value' => $category_set['id'],
                                        'compare' => '='
                                    ),
                                    array(
                                        'key' => 'dsWavesCatChildID',
                                        'value' => $sub_category['id'],
                                        'compare' => '='
                                    ),
                                    array(
                                        'key' => 'dsWavesCatGrandChildID',
                                        'value' => $sub_item_category['id'],
                                        'compare' => '='
                                    ),
                                ],
                                'hide_empty' => false,
                                'taxonomy' => 'product_cat',
                            ];



                            $catID = false;
                            $the_query = new WP_Term_Query($termArgs);
                            foreach ($the_query->get_terms() as $term) {
                                $catID = $term->term_id;
                            }

                            //file_put_contents('log_c_' . $catID . '.txt', print_r ($termArgs, true));

                            
                            if ($catID) {
                                array_push($product['product_categories'], $catID);
                            }
                        }
                    }
                }
            }
        }
    }


    //file_put_contents ('za.txt', print_r ($product['product_categories'], true));


    // default to just a simple product
    $product['dswaves_type'] = 'simple-product';
    if ($json['data_set']['name'] == 'Hot Tub') {
        $product['dswaves_type'] = 'hot-tub';

        if (is_array($json['spec']['groups'][0]['items'])) {
            $results = array_filter($json['spec']['groups'][0]['items'], function ($k) {
                return $k['name'] == 'Seating Capacity';
            });

            $results = array_values($results);

            $string = $results[0]['value'];
            if (!$string) {
                $string = $results[1]['value'];
            }

            preg_match_all('!\d+!', $string, $matches);
            $product['dswaves_size'] = $matches[0][0];
        }

        if (is_array($json['spec']['groups'][0]['items'])) {
            $results = array_filter($json['spec']['groups'][0]['items'], function ($k) {
                return $k['name'] == 'Jets';
            });

            $results = array_values($results);
            $string = $results[0]['value'];
            $ret = substr($string, 3, 2);
            $product['dswaves_jets'] = $ret;
        }
        if (is_array($json['spec']['groups'][0]['items'])) {
            $results = array_filter($json['spec']['groups'][0]['items'], function ($k) {
                return $k['name'] == 'Dimensions';
            });
            $results = array_values($results);

            $res = str_replace('<p>', '', $results[0]['value']);
            if (strpos($res, '<br>')) {
                $res = explode('<br>', $res);
            } else {
                $res = explode('</p>', $res);
            }
            $product['dswaves_dimensions'] = $res[0];
        }

    

    
        if (is_array($json['categories'])) {
            $results = array_filter($json['categories'], function ($k) {
                return $k['name'] === 'Hot Tub Value';
            });

            $results = array_values($results);

            if (is_array($results[0]['items'])) {
                $results = array_values($results[0]['items']);
                $product['dswaves_price'] = $results[0]['name'];
            }
        }

        if (is_array($json['categories'])) {
            $categories = array_values($json['categories'][0]['items']);

            $catName = str_replace('®', '', $categories[0]['name']);
            // $catNameSlug = preg_replace('/[[:space:]]+/', '-', $catName);
            $product['dswaves_collection'] = $catName;
        }
    }

    //SWIM SPAS
    if ($json['data_set']['name'] == 'Swim Spa') {
        if (is_array($json['spec'])) {
            if (is_array($json['spec']['groups'][0]['items'])) {
                $results = array_filter($json['spec']['groups'][0]['items'], function ($k) {
                    return $k['name'] == 'Dimensions';
                });

                $string = $results[0]['value'];
            
                $res = explode("'", $string);
                $res = explode("′", $res[0]);
                $res = explode("’", $res[0]);
                $res = str_replace('<p>', '', $res[0]);
                $product['dswaves_size'] = $res;
            }
        }

        if (is_array($json['spec'])) {
            if ($json['spec']['groups'] && $json['spec']['groups'][0] && $json['spec']['groups'][0]['items'] && is_array($json['spec']['groups'][0]['items'])) {
                $results = array_filter($json['spec']['groups'][0]['items'], function ($k) {
                    return $k['name'] == 'Dimensions';
                });
                $results = array_values($results);

                $res = str_replace('<p>', '', $results[0]['value']);
                if (strpos($res, '<br>')) {
                    $res = explode('<br>', $res);
                } else {
                    $res = explode('</p>', $res);
                }
                $product['dswaves_dimensions'] = $res[0];
            }
        }

        if (is_array($json['categories'])) {
            $categories = array_values($json['categories'][0]['items']);

            $catName = str_replace('®', '', $categories[0]['name']);


            $product['dswaves_collection'] = $catName;
        }
    }

    $product['attributes'] = [];
    if ($json['attributes']) {
        foreach ($json['attributes'] as $attribute) {
            if ($attribute['items']) {
                $product['attributes'][] = $attribute;
            }
        }
    }

    $product['variations'] = $json['variations'];
    $product['tags'] = $json['tags'];

    $product['brand_id'] = $json['brand_id'];

    //file_put_contents('log_c.txt', print_r ($product, true));


    $product['spec'] = $json['spec'];
    $product['gallery'] = $json['gallery'];
    $product['custom_code'] = $json['custom_code'];
    $product['related_crosssells'] = $json['related_crosssells'];

    
    return $product;
}

/**
 * $post_id = WordPress ID
 * $product is an array
 * this product array has all the info from console to update all the meta data in WordPress/WooCommerce
 */
function dswaves_update_meta_product($post_id, $product)
{
    $enable_edit_title_and_description = get_post_meta($post_id, 'dsw_product_enable_edit_title_and_description', true);
    
    // title & description
    if ($enable_edit_title_and_description)
    {
        $product['name'] = get_post_meta($post_id, 'title', true);
        $product['short_description'] = get_post_meta($post_id, 'dsw_product_short_description', true);
        $product['full_description'] = get_post_meta($post_id, 'dsw_product_full_description', true);
        //$product['tag_line'] = get_post_meta($post_id, 'tag_line', true);
    }
    else
    {
        update_post_meta($post_id, 'dsw_product_title', $product['name']);
        update_post_meta($post_id, 'dsw_product_short_description', $product['short_description']);
        update_post_meta($post_id, 'dsw_product_full_description', $product['full_description']);
        //update_post_meta($post_id, 'tag_line', $product['tag_line']);
    }

    // specs table
    $enable_edit_specs_table = get_post_meta($post_id, 'dsw_product_enable_edit_specs_table', true);
    if (!$enable_edit_specs_table)
    {
        update_post_meta($post_id, 'dsw_product_specs_table_intro_title', $product['spec']['header_title']);
        update_post_meta($post_id, 'dsw_product_specs_table_intro_subtext', $product['spec']['header_subtext']);

        $spec_table_groups = get_field('dsw_product_spec_table_groups', $post_id);
        if( !empty($spec_table_groups) )
        {
            for( $index = count($spec_table_groups); $index > 0; $index-- )
            {
                delete_row('dsw_product_spec_table_groups', $index, $post_id);
            }
        }

        if ($product['spec']['groups'])
        {
            foreach ($product['spec']['groups'] as $group)
            {
                $values = ["spec_table_group_name" => $group['name'], 'spec_table_group_items' => []];


                if ($group['items'])
                {
                    foreach ($group['items'] as $item)
                    {
                        $values['spec_table_group_items'][] = [
                            'spec_table_group_item_label' => $item['name'],
                            'spec_table_group_item_value' => $item['value']
                        ];
                    }
                }

                add_row ('spec_table_groups', $values, $post_id);
            }
        }

        if ($product['spec']['media'])
        {
            $image_id = addImg($product['spec']['media']['file_full_url'], $product['spec']['media']['id']);
            update_post_meta($post_id, 'dsw_product_spec_table_image', $image_id);
            update_post_meta($post_id, 'dsw_product_spec_table_image_alt_tag', $product['spec']['media']['alt_tag']);
        }
        
        
        update_post_meta($post_id, 'dsw_product_specs_table_footer_title', $product['spec']['footer_title']);
        update_post_meta($post_id, 'dsw_product_specs_table_footer_subtext', $product['spec']['footer_subtext']);

        $specs_table_footer_buttons = get_field('dsw_product_specs_table_footer_buttons', $post_id);
        if( !empty($specs_table_footer_buttons) )
        {
            for( $index = count($specs_table_footer_buttons); $index > 0; $index-- )
            {
                delete_row('dsw_product_specs_table_footer_buttons', $index, $post_id);
            }
        }

        if ($product['spec']['footer_buttons'])
        {
            foreach ($product['spec']['footer_buttons'] as $button)
            {
                $values = [
                    'specs_table_footer_buttons_label' => $button['label'],
                    'specs_table_footer_buttons_url' => $button['url']
                ];

                add_row ('dsw_product_specs_table_footer_buttons', $values, $post_id);
            }
        }
    }

    // media
    $dsw_product_enable_edit_gallery = get_post_meta($post_id, 'dsw_product_enable_edit_gallery', true);
    if (!$dsw_product_enable_edit_gallery) 
    {
        $dsw_product_media = get_field('dsw_product_media', $post_id);
        if( !empty($dsw_product_media) )
        {
            for( $index = count($dsw_product_media); $index > 0; $index-- )
            {
                delete_row('dsw_product_media', $index, $post_id);
            }
        }

        if ($product['gallery'])
        {
            foreach ($product['gallery'] as $gallery)
            {
                if ($gallery['media']['file_type'] == 'image')
                {
                    $image_id = addImg($gallery['media']['file_full_url'], $gallery['media']['id']);

                    $values = [
                        'type' => 'Image',
                        'image' => $image_id,
                        'video' => null,
                        'video_thumbnail_image' => null,
                        'alt_tag' => $gallery['media']['alt_tag']
                    ];
    
                    add_row ('dsw_product_media', $values, $post_id);
                } else if ($gallery['media']['file_type'] == 'video')
                {
                    $video_id = addVideo($gallery['media']['file_full_url'], $gallery['media']['id']);
                    
                    $cover_id = null;
                    if ($gallery['cover'] && $gallery['cover']['media'] && $gallery['cover']['media']['file_full_url'])
                    {
                        $cover_id = addImg($gallery['cover']['media']['file_full_url'], $gallery['cover']['media']['id']);
                    }
                    $values = [
                        'type' => 'Video',
                        'image' => null,
                        'video' => $video_id,
                        'video_thumbnail_image' => $cover_id,
                        'alt_tag' => $gallery['media']['alt_tag']
                    ];
    
                    add_row ('dsw_product_media', $values, $post_id);
                }
                
            }
        }
    }
      
    // custom code
    $dsw_product_enable_edit_custom_code = get_post_meta($post_id, 'dsw_product_enable_edit_custom_code', true);
    if (!$dsw_product_enable_edit_custom_code)
    {
        update_post_meta($post_id, 'dsw_product_specs_table_custom_code_title', $product['custom_code']['name']);
        update_post_meta($post_id, 'dsw_product_specs_table_custom_code', $product['custom_code']['content']);
    }

    $dsw_product_enable_edit_related_products = get_post_meta($post_id, 'dsw_product_enable_edit_related_products', true);
    if (!$dsw_product_enable_edit_related_products)
    {
        $array = [];
        if ($product['related_crosssells'])
        {
            foreach ($product['related_crosssells'] as $related_crosssell)
            {
                $id = dswaves_get_product_id ($related_crosssell['related_product_id']);
                if ($id)
                    $array[] = $id;
            }
        }

        update_post_meta( $post_id, 'dsw_product_related_products', $array);

    }

    //? THIS IS IMPORTANT ID TO KNOW WHO TO UPDATE/DELETE
    update_post_meta($post_id, 'dsWavesID', $product['sync_id']);
    update_post_meta($post_id, 'dswaves_product_mark', $product['register_mark']);
    update_post_meta($post_id, 'dsWavesBrandID', $product['brand_id']);

    

    $thumb_id = addFeaturedImg($product['avatar'], $post_id, $product['avatar_console_media_id']);

    $post = array(
        'ID'           => $post_id,
        'post_content' => $product['full_description'],
        'post_excerpt' => $product['short_description'],
        //'post_status' => "publish",
        'post_title' => $product['name'],
        'post_name' => str_replace(" ", "-", strtolower($product['name'])),
        'post_parent' => "",
        'post_type' => "product",
    );
    
    wp_update_post($post);

    wp_set_object_terms($post_id, $product['product_type'], 'product_type');
    

    update_post_meta($post_id, 'can_purchase_online', $product['can_purchase_online']);
    update_post_meta($post_id, 'dswaves_type', $product['dswaves_type']);


    update_post_meta($post_id, '_downloadable', $product['is_downloadable']);
    update_post_meta($post_id, '_virtual', $product['is_virtual']);
    update_post_meta($post_id, '_purchase_note', $product['purchase_note']);
    update_post_meta($post_id, '_internal_note', $product['internal_note']);
    update_post_meta($post_id, '_weight', $product['weight']);
    update_post_meta($post_id, '_length', $product['length']);
    update_post_meta($post_id, '_width', $product['width']);
    update_post_meta($post_id, '_height', $product['height']);
    
    if (!get_post_meta($post_id, 'dsWavesSkuOverride', true))
        update_post_meta($post_id, '_sku', $product['sku']);
    update_post_meta($post_id, '_product_attributes', array());
    update_post_meta($post_id, '_price', $product['price']);
    update_post_meta($post_id, '_sold_individually', $product['sold_individually']);
    update_post_meta($post_id, 'product-type', 'Other');

    $_sold_individually = get_post_meta($post_id, '_sold_individually', true);
    if ($_sold_individually === null) {
        update_post_meta($post_id, '_sold_individually', $product['sold_individually']);
    }

    if (isset($product['product_categories'])) {


        //get product categories from wordpress
        $terms = get_the_terms($post_id, 'product_cat');
        $terms_ids = array();
        if ($terms) {
            foreach ($terms as $term) {
                
                //get term meta waves_id
                $term_meta = get_term_meta($term->term_id, 'dsWavesCatID', true);

                if (!$term_meta) {
                    $terms_ids[] = $term->term_id;
                }
             
            }
        }

    
        // push term ids to array produc[product_categories]
        $product['product_categories'] = array_merge($product['product_categories'], $terms_ids);

        wp_set_object_terms($post_id, $product['product_categories'], 'product_cat');
        
        $dsCategory = get_term_by('id', $product['product_categories'][1], 'product_cat');
        
        //SET PRIMARY FOR URL
        if (class_exists('WPSEO_Primary_Term')) {
            $primaryTermObject = new WPSEO_Primary_Term('product_cat', $post_id);
            $primaryTermObject->set_primary_term($dsCategory->term_id);
        }

       
    }


    if (isset($product['dswaves_size'])) {
        update_post_meta($post_id, 'dswaves_size', $product['dswaves_size']);
    }

    if (isset($product['dswaves_jets'])) {
        update_post_meta($post_id, 'dswaves_jets', $product['dswaves_jets']);
    }

    if (isset($product['dswaves_dimensions'])) {
        update_post_meta($post_id, 'dswaves_dimensions', $product['dswaves_dimensions']);
    }

    // if (isset($product['dswaves_price'])) {
    //     update_post_meta($post_id, 'dswaves_price', $product['dswaves_price']);
    // }

    if (isset($product['dswaves_brand'])) {
        update_post_meta($post_id, 'dswaves_brand', $product['dswaves_brand']);
    }

    if (isset($product['dswaves_collection'])) {
        update_post_meta($post_id, 'dswaves_collection', $product['dswaves_collection']);
    }


    // simple product cta buttons
    if (isset($product['cta_buttons']) && $product['cta_buttons']) {
        $currentCTAButtons = get_post_meta($post_id, 'cta_buttons', true);
        if ($currentCTAButtons) {
            $btn_json = [];

            $currentCTAButtonsArray = json_decode($currentCTAButtons);
            if ($currentCTAButtonsArray) {
                foreach ($currentCTAButtonsArray as $currentBtn) {
                    $i = 0;
                    foreach ($product['cta_buttons'] as $cta_btn) {
                        if ($cta_btn['label'] == $currentBtn->label) {
                            $btn_json[] = [
                                'label' => $cta_btn['label'],
                                'show' => $currentBtn->show
                            ];
                            unset($product['cta_buttons'][$i]);
                        }

                        $i++;
                    }

                    $product['cta_buttons'] = array_values($product['cta_buttons']);
                }

                foreach ($product['cta_buttons'] as $cta_btn) {
                    $btn_json[] = [
                        'label' => $cta_btn['label'],
                        'show' => 'Show'
                    ];
                }
            }
        } else {
            $btn_json = [];
            foreach ($product['cta_buttons'] as $cta_btn) {
                $btn_json[] = [
                    'label' => $cta_btn['label'],
                    'show' => 'Show'
                ];
            }
        }

        $btn_json = json_encode($btn_json);
        update_post_meta($post_id, 'cta_buttons', $btn_json);
    } else {
        delete_post_meta($post_id, 'cta_buttons');
    }

    // give dealer option to allow customers to purchase online (if enabled in console)
    $dswaves_can_purchase = get_post_meta($post_id, 'dswaves_can_purchase', true);
    if (!$can_purchase) {
        update_post_meta($post_id, 'dswaves_can_purchase', 'Yes');
    }

    // give dealer option to set their own price of the product
    $dswaves_override_console_price = get_post_meta($post_id, 'dswaves_override_console_price', true);
    if (!$dswaves_override_console_price) {
        update_post_meta($post_id, 'dswaves_override_console_price', 'No');
        $dswaves_override_console_price = 'No';
    }
    
    if ($dswaves_override_console_price == 'No') {
        update_post_meta($post_id, '_regular_price', $product['price']);
        update_post_meta($post_id, '_sale_price', $product['sale_price']);
    }

    

    update_post_meta($post_id, 'dswaves_price', $product['price']);
    update_post_meta($post_id, 'dswaves_sale_price', $product['sale_price']);

    dswaves_update_product_tags($post_id, $product);

    $my_post = [
        'ID' => $post_id,
        'post_content' => $product['short_description']
    ];
    
    wp_update_post($my_post);

    // must be below wp_update_post ()
    if ($product['product_type'] == 'Variable') {
        dswaves_update_attributes_and_variation_product($post_id, $product);
    }
}

/**
 *  $product is an array
 *  this product array has all the info from console to create a woocommerce product
 */

function dswaves_create_product($product)
{

    //bugs variable so far and adding categories

    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
    require(ABSPATH . '/wp-blog-header.php');

    global $wpdb;

    $post = [
    'post_content' => $product['full_description'],
    'post_excerpt' => $product['short_description'],
    'post_status' => "publish",
    'post_title' => $product['name'],
    'post_parent' => "",
    'post_type' => "product",
    ];

    $post_id = wp_insert_post($post);

    return $post_id;
}

/**
 * $wavesID is a meta data of the product to know its a sync product
 */
function dswaves_get_product_id($wavesID)
{
    $post_id = null;

    $args = array(
        'posts_per_page' => '1',
        'post_type' => ['product', 'product_variation'],
        'post_status' => 'any',
        'meta_query' => array(
            array(
                'key' => 'dsWavesID',
                'value' => $wavesID,
                'compare' => '=',
            )
        )
    );
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
        }
    }
    if ($post_id != null) {
        return $post_id;
    } else {
        return false;
    }
}

function dswaves_get_content_id($wavesID, $postType)
{
    $post_id = null;

    $args = array(
        'posts_per_page' => '1',
        'post_type' => $postType,
        'meta_query' => array(
            array(
                'key' => 'dsWavesID',
                'value' => $wavesID,
                'compare' => '=',
            )
        )
    );

    $query = new WP_Query($args);

   

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
        }
    }
    if ($post_id != null) {
        return $post_id;
    } else {
        return false;
    }
}

function dswaves_get_media_id($wavesMediaID)
{
    $post_id = null;

    $args = array(
        'posts_per_page' => '1',
        'post_type' => 'attachment',
        'post_status' => 'any',
        'meta_query' => array(
            array(
                'key' => 'dsWavesMediaID',
                'value' => $wavesMediaID,
                'compare' => '=',
            )
        )
    );
    $query = new WP_Query($args);
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
        }
    }
    if ($post_id != null) {
        return $post_id;
    } else {
        return false;
    }
}

function dswaves_get_content_id_by_category($postType, $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID)
{
    $post_id = null;

    if ($dsWavesCatGrandChildID) {
        $args = array(
            'posts_per_page' => '1',
            'post_type' => $postType,
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
                'posts_per_page' => '1',
                'post_type' => $postType,
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
            'posts_per_page' => '1',
            'post_type' => $postType,
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

    $query = new WP_Query($args);

    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
        }
    }
    if ($post_id != null) {
        return $post_id;
    } else {
        return false;
    }
}

function dswaves_get_category_id_by_category($dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID)
{
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

    return $catID;
}

function addImg($imgUrl, $media_id = false)
{
    if ($media_id) {
        $attach_id = dswaves_get_media_id($media_id);
        if ($attach_id) {
            return $attach_id;
        }
    }

    require_once($_SERVER['DOCUMENT_ROOT']. '/wp-load.php');
    require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-admin/includes/image.php');
    global $wpdb;
     
    // Add a Featured Image to a product
    $image_url  = $imgUrl;
    if ($image_url) {
        $upload_dir = wp_upload_dir(); // Set upload folder
    $image_data = file_get_contents($image_url); // Get image data
    $filename   = basename($image_url); // Create image file name

    // Check folder permission and define file location
        if (wp_mkdir_p($upload_dir['path'])) {
            $file = $upload_dir['path'] . '/' . $filename;
        } else {
            $file = $upload_dir['basedir'] . '/' . $filename;
        }

        // Create the image  file on the server
        file_put_contents($file, $image_data);

        // Check image file type
        $wp_filetype = wp_check_filetype($filename, null);

        // Set attachment data
        $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title'     => sanitize_file_name($filename),
        'post_content'   => '',
        'post_status'    => 'inherit'
    );

        // Create the attachment
        $attach_id = wp_insert_attachment($attachment, $file);


        if ($media_id) {
            update_post_meta($attach_id, 'dsWavesMediaID', $media_id);
        }

        // Include image.php
        require_once(ABSPATH . 'wp-admin/includes/image.php');

        // Define attachment metadata
        $attach_data = wp_generate_attachment_metadata($attach_id, $file);

        // Assign metadata to attachment
        wp_update_attachment_metadata($attach_id, $attach_data);

        return $attach_id;
    }
}

function addVideo($imgUrl, $media_id = false)
{
    if ($media_id) {
        $attach_id = dswaves_get_media_id($media_id);
        if ($attach_id) {
            return $attach_id;
        }
    }

    require_once($_SERVER['DOCUMENT_ROOT']. '/wp-load.php');
    require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-admin/includes/image.php');
    global $wpdb;
     
    // Add a Featured Image to a product
    $image_url  = $imgUrl;
    if ($image_url) {
        $upload_dir = wp_upload_dir(); // Set upload folder
    $image_data = file_get_contents($image_url); // Get image data
    $filename   = basename($image_url); // Create image file name

    // Check folder permission and define file location
        if (wp_mkdir_p($upload_dir['path'])) {
            $file = $upload_dir['path'] . '/' . $filename;
        } else {
            $file = $upload_dir['basedir'] . '/' . $filename;
        }

        // Create the image  file on the server
        file_put_contents($file, $image_data);

        // Check image file type
        $wp_filetype = wp_check_filetype($filename, null);

        // Set attachment data
        $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title'     => sanitize_file_name($filename),
        'post_content'   => '',
        'post_status'    => 'inherit'
    );

        // Create the attachment
        $attach_id = wp_insert_attachment($attachment, $file);


        if ($media_id) {
            update_post_meta($attach_id, 'dsWavesMediaID', $media_id);
        }

        // Include image.php
        require_once(ABSPATH . 'wp-admin/includes/video.php');

        // Define attachment metadata
        $attach_data = wp_generate_attachment_metadata($attach_id, $file);

        // Assign metadata to attachment
        wp_update_attachment_metadata($attach_id, $attach_data);

        return $attach_id;
    }
}

function addFeaturedImg($imgUrl, $dsPostID, $media_id = false)
{
    if ($media_id) {
        $attach_id = dswaves_get_media_id($media_id);
        if ($attach_id) {
            set_post_thumbnail($dsPostID, $attach_id);
            return;
        }
    }


    require_once($_SERVER['DOCUMENT_ROOT']. '/wp-load.php');
    require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-admin/includes/image.php');
    global $wpdb;
    
    if (!$dsPostID) {
        return false;
    }

    // Add a Featured Image to a product
    $image_url  = $imgUrl;
    if ($image_url) {
        $upload_dir = wp_upload_dir(); // Set upload folder
        if (file_get_contents($image_url)) {
            $image_data = file_get_contents($image_url); // Get image data
        }
        $filename   = basename($image_url); // Create image file name

        // Check folder permission and define file location
        if (wp_mkdir_p($upload_dir['path'])) {
            $file = $upload_dir['path'] . '/' . $filename;
        } else {
            $file = $upload_dir['basedir'] . '/' . $filename;
        }

        // Create the image  file on the server
        file_put_contents($file, $image_data);

        // Check image file type
        $wp_filetype = wp_check_filetype($filename, null);

        // Set attachment data
        $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title'     => sanitize_file_name($filename),
        'post_content'   => '',
        'post_status'    => 'inherit'
    );

        // Create the attachment
        $attach_id = wp_insert_attachment($attachment, $file, $dsPostID);

        // Include image.php
        require_once(ABSPATH . 'wp-admin/includes/image.php');

        // Define attachment metadata
        $attach_data = wp_generate_attachment_metadata($attach_id, $file);

        // Assign metadata to attachment
        wp_update_attachment_metadata($attach_id, $attach_data);

        // And finally assign featured image to post
        set_post_thumbnail($dsPostID, $attach_id);

        if ($media_id) {
            update_post_meta($attach_id, 'dsWavesMediaID', $media_id);
        }
    }
}

function dswaves_fetch_media($file_url, $post_id)
{
    require_once($_SERVER['DOCUMENT_ROOT']. '/wp-load.php');
    require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-admin/includes/image.php');
    global $wpdb;

    if (!$post_id) {
        return false;
    }

    //directory to import to
    $artDir = 'wp-content/uploads/importedmedia/';

    //if the directory doesn't exist, create it
    if (!file_exists($_SERVER['DOCUMENT_ROOT'].'/'.$artDir)) {
        mkdir($_SERVER['DOCUMENT_ROOT'].'/'.$artDir);
    }

    //rename the file... alternatively, you could explode on "/" and keep the original file name
    $ext = array_pop(explode(".", $file_url));
    $new_filename = 'dswaves-'.$post_id.".".$ext; //if your post has multiple files, you may need to add a random number to the file name to prevent overwrites

    if (@fclose(@fopen($file_url, "r"))) { //make sure the file actually exists
        copy($file_url, $_SERVER['DOCUMENT_ROOT'].'/'.$artDir.$new_filename);

        $siteurl = get_option('siteurl');
        $file_info = getimagesize($_SERVER['DOCUMENT_ROOT'].'/'.$artDir.$new_filename);

        //create an array of attachment data to insert into wp_posts table
        $artdata = array();
        $artdata = array(
        'post_author' => 1,
        'post_date' => current_time('mysql'),
        'post_date_gmt' => current_time('mysql'),
        'post_title' => $new_filename,
        'post_status' => 'inherit',
        'comment_status' => 'closed',
        'ping_status' => 'closed',
        'post_name' => sanitize_title_with_dashes(str_replace("_", "-", $new_filename)),                                            'post_modified' => current_time('mysql'),
        'post_modified_gmt' => current_time('mysql'),
        'post_parent' => $post_id,
        'post_type' => 'attachment',
        'guid' => $siteurl.'/'.$artDir.$new_filename,
        'post_mime_type' => $file_info['mime'],
        'post_excerpt' => '',
        'post_content' => ''
    );

        $uploads = wp_upload_dir();
        $save_path = $uploads['basedir'].'/importedmedia/'.$new_filename;

        //insert the database record
        $attach_id = wp_insert_attachment($artdata, $save_path, $post_id);

        //generate metadata and thumbnails
        if ($attach_data = wp_generate_attachment_metadata($attach_id, $save_path)) {
            wp_update_attachment_metadata($attach_id, $attach_data);
        }

        //optional make it the featured image of the post it's attached to
        $rows_affected = $wpdb->insert($wpdb->prefix.'postmeta', array('post_id' => $post_id, 'meta_key' => '_thumbnail_id', 'meta_value' => $attach_id));
    } else {
        return false;
    }

    return true;
}

function dswaves_delete_brand($json)
{

    /// /website-content/json/Brand

    unlink ('../website-content/json/Brand/' . $json['id'] . '.json');
}


function dswaves_delete_item($item_id)
{

    //bugs variable so far and adding categories

    require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
require(ABSPATH . '/wp-blog-header.php');

    global $wpdb;

    delete_post_thumbnail($item_id);

    wp_delete_post($item_id);
}

function dswaves_update_product_tags($product_id, $json)
{
    $tags = [];

    if ($json['tags']) {
        foreach ($json['tags'] as $tag) {
            $tags[] = $tag['name'];
        }
    }

    wp_set_object_terms($product_id, $tags, 'product_tag');
}

function wp_create_product_variation($product_id, $variation_data)
{
    // Get the Variable product object (parent)
    $product = wc_get_product($product_id);

    $variation_post = array(
        'post_title'  => $product->get_name(),
        'post_name'   => 'product-'.$product_id.'-variation',
        'post_status' => 'publish',
        'post_parent' => $product_id,
        'post_type'   => 'product_variation',
        'guid'        => $product->get_permalink()
    );

    // Creating the product variation
    $variation_id = wp_insert_post($variation_post);

    // Get an instance of the WC_Product_Variation object
    $variation = new WC_Product_Variation($variation_id);

    // Iterating through the variations attributes
    foreach ($variation_data['attributes'] as $attribute => $term_name) {
        $taxonomy = $attribute; // The attribute taxonomy

        // If taxonomy doesn't exists we create it (Thanks to Carl F. Corneil)
        if (! taxonomy_exists($taxonomy)) 
        {
            register_taxonomy(
                $taxonomy,
                'product_variation',
                [
                    'hierarchical' => false,
                    'label' => ucfirst($attribute),
                    'query_var' => true,
                    'rewrite' => [ 'slug' => sanitize_title($attribute) ], 
                ]
            );
        }

        // Check if the Term name exist and if not we create it.
        if (! term_exists($term_name, $taxonomy)) {
            wp_insert_term($term_name, $taxonomy);
        } // Create the term

        //$term = get_term_by('name', $term_name, $taxonomy ); // Get the term slug

        // Get the post Terms names from the parent variable product.
        $post_term_names =  wp_get_post_terms($product_id, $taxonomy, array('fields' => 'names'));

        // Check if the post term exist and if not we set it in the parent variable product.
        if (! in_array($term_name, $post_term_names)) {
            wp_set_post_terms($product_id, $term_name, $taxonomy, true);
        }

        // Set/save the attribute data in the product variation
        update_post_meta($variation_id, 'attribute_'.$taxonomy, $term_name);
    }

    ## Set/save all other data

    // SKU
    if (! empty($variation_data['sku'])) {
        $variation->set_sku($variation_data['sku']);
    }

    // Prices
    if (empty($variation_data['sale_price'])) {
        $variation->set_price($variation_data['regular_price']);
    } else {
        $variation->set_price($variation_data['sale_price']);
        $variation->set_sale_price($variation_data['sale_price']);
    }
    $variation->set_regular_price($variation_data['regular_price']);

    // Stock
    if (! empty($variation_data['stock_qty'])) {
        $variation->set_stock_quantity($variation_data['stock_qty']);
        $variation->set_manage_stock(true);
        $variation->set_stock_status('');
    } else {
        $variation->set_manage_stock(false);
    }

    $variation->set_weight($variation_data['weight']);
    $variation->set_length($variation_data['length']);
    $variation->set_width($variation_data['width']);
    $variation->set_height($variation_data['height']);

    if ($variation_data['image']) {
        $thumb_id = addImg($variation_data['image'], $variation_data['media_id']);
        update_post_meta($variation->get_id(), '_thumbnail_id', $thumb_id);
    }

    $variation->save(); // Save the data
}

function dswaves_update_attributes_and_variation_product($product_id, $json)
{
    $product = wc_get_product($product_id);

    if (get_class ($product) != 'WC_Product_Variable')
        return;

    // delete all variations
    $variations = $product->get_available_variations();
    if ($variations) {
        foreach ($variations as $variation) {
            $variationObject = wc_get_product($variation['variation_id']);
            $variationObject->delete(true);
        }
    }

    // delete all attributes
    update_post_meta($product_id, '_product_attributes', '');


    // insert product attributes
    $parentAttributes = [];
    $childAttributes = [];
    if ($json['attributes']) {
        $attributeArray = [];
        foreach ($json['attributes'] as $attribute) {
            if ($attribute['items']) {
                $items = '';
                foreach ($attribute['items'] as $item) {
                    $items .= $item['name'] . ' | ';

                    $childAttributes[] = [
                    'id' => $item['id'],
                    'name' => $item['name'],
                ];
                }

                $attributeArray[$attribute['name']] = [
                'name' => $attribute['name'],
                'value' => $items,
                'position' => 0,
                'is_visible' => 1,
                'is_variation' => 1,
                'is_taxonomy' => 0
            ];

                $parentAttributes[] = [
                'id' => $attribute['id'],
                'name' => $attribute['name'],
            ];
            }
        }
    }
    if ($attributeArray) {
        update_post_meta($product_id, '_product_attributes', $attributeArray);
    }

    // insert product variations
    if ($json['variations']) {
        foreach ($json['variations'] as $variation) {
            $useVariation = true;

            $variation_keys = json_decode($variation['keys']);
            foreach ($variation_keys as $key) {
                if (!$key->is_enabled) {
                    $useVariation = false;
                    break;
                }
            }
        
            if ($useVariation) {
                $useAttributes = [];
                foreach ($variation_keys as $key) {
                    foreach ($parentAttributes as $parentAttribute) {
                        if ($parentAttribute['id'] == $key->key) {
                            $attributeKey = str_replace(' ', '-', strtolower($parentAttribute['name']));

                            foreach ($childAttributes as $childAttribute) {
                                if ($childAttribute['id'] == $key->value) {
                                    $attributeValue = $childAttribute['name'];
                                }
                            }

                            $useAttributes[$attributeKey] = $attributeValue;
                        }
                    }
                }

                $image = null;
                $media_id = null;
                if ($variation['media'] && $variation['media']['file_full_url']) {
                    $image = $variation['media']['file_full_url'];
                    $media_id = $variation['media']['id'];
                }
            
                $variation_data =  array(
                    'attributes' => $useAttributes,
                    'image'        => $image,
                    'media_id'     => $media_id,
                    'sku'           => $variation['sku'],
                    'regular_price' => $variation['price'],
                    'sale_price'    => $variation['sale_price'],
                    'weight'    => $variation['weight'] / 2.205,
                    'length'    => $variation['length'] * 2.54,
                    'width'    => $variation['width'] * 2.54,
                    'height'    => $variation['height'] * 2.54,
                    'stock_qty'     => null,
                );

                wp_create_product_variation($product_id, $variation_data);
            }
        }
    }
}
