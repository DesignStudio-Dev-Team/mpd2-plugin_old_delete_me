<?php 

set_time_limit (0);

error_reporting(E_ALL); // remove me
ini_set("log_errors", 1); // remove me
ini_set('display_errors', true); // remove me
ini_set("error_log", "php-error.log"); // remove me

/* Listens for updates from console-mpd */
require_once 'dswaves-plugin-main-functions.php'; // Laravel to WP Functions

if (!isset ($_POST['command']))
{
    echo 'no data to push.';
    exit ();
}

// this page will be called to give the waves plugin the content
$item_id = $_POST['item_id']; 
$item_type = $_POST['item_type'];
$command = $_POST['command'];
$sync_type = $_POST['sync_type'];
$syndication_type = $_POST['syndication_type'];
$json = file_get_contents($_POST['json_file']);
$json_data = json_decode($json, true);
//$txt = "<pre>".print_r($json_data, true)."</pre>";
//file_put_contents('log.txt', $txt);

// syndicated content that will be shown on the website (AKA not brands that will be shown in the plugin for people to search within the plugin)
if ($syndication_type == 'syndicationed_content')
{
    $file = createJSONFile($item_id, $item_type, $syndication_type);
    // if ($item_type == 'Product')
    // if ($item_type == 'Page')
    // if ($item_type == 'Knowledgebase Article')
    // if ($item_type == 'Post')
    //if ($item_type == 'Brand')
    
        if ($command == 'insert')
        {
            //check what type of item it is
            if ($item_type == 'Brand') {
                //set up the brand
                dswaves_brand_ready($json_data);
            }
            if ($item_type == 'Product') {
                $dsProduct = dswaves_product_ready($json_data);
                
                $post_id = dswaves_get_product_id($dsProduct['sync_id']);
                
                if ($post_id && $dsProduct) {
                    dswaves_update_meta_product($post_id, $dsProduct);
                } else if($dsProduct) {
                    $post_id = dswaves_create_product($dsProduct);
                }

                if($dsProduct && $post_id) {
                    dswaves_update_meta_product($post_id, $dsProduct);
                }
            }
            if ($item_type == 'Page') {

                $content_id = false;
                if ($json_data['brand_cat_type'] && $json_data['brand_cat_id']) 
                {
                    $dsWavesCatID = '';
                    $dsWavesCatChildID = '';
                    $dsWavesCatGrandChildID = '';

                    if ($json_data['brand_cat_type'] == 'parent') {
                        $dsWavesCatID = $json_data['brand_cat_id'];
                    } elseif ($json_data['brand_cat_type'] == 'child') {
                        $dsWavesCatChildID = $json_data['brand_cat_id'];
                    } elseif ($json_data['brand_cat_type'] == 'grandchild') {
                        $dsWavesCatGrandChildID = $json_data['brand_cat_id'];
                    }

                    
                    $content_id = dswaves_get_content_id_by_category('page', $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);
                }


                dswaves_content_ready($json_data, $content_id);
            }
            if ($item_type == 'Knowledgebase Article') {
                $content_id = dswaves_get_content_id($json_data['id'], 'learning');
                dswaves_content_ready($json_data, $content_id);
            }
            if ($item_type == 'Post') {
                $content_id = dswaves_get_content_id($json_data['id'], 'post');
                dswaves_content_ready($json_data, $content_id);
            }
            // go thru the json data and create a few things on the database
            // type of item, id. name, if brand industry to create that set in the plugin
            // create pages in WordPress with the correct Vue Template

            // create new file with json data
            file_put_contents($file, $json);
         
            // echo 'Created' . "\n";

        }
        else if ($command == 'update')
        {
            // update from the $json data
            //check what type of item it is
            if ($item_type == 'Brand') {
                
                //set up the brand
                dswaves_brand_ready($json_data);
            }
            if ($item_type == 'Product') {
                $dsProduct = dswaves_product_ready($json_data);
                $post_id = dswaves_get_product_id($dsProduct['sync_id']);
                if($post_id) {
                    dswaves_update_meta_product($post_id, $dsProduct);
                }
                else
                {
                    $post_id = dswaves_create_product($dsProduct);
                    dswaves_update_meta_product($post_id, $dsProduct);
                }
            }
            if ($item_type == 'Page') {

                
                if ($json_data['brand_cat_type'] && $json_data['brand_cat_id']) 
                {
                    $dsWavesCatID = '';
                    $dsWavesCatChildID = '';
                    $dsWavesCatGrandChildID = '';

                    if ($json_data['brand_cat_type'] == 'parent')
                    {
                        $dsWavesCatID = $json_data['brand_cat_id'];
                    }
                    else if ($json_data['brand_cat_type'] == 'child')
                    {
                        $dsWavesCatChildID = $json_data['brand_cat_id'];
                    }
                    else if ($json_data['brand_cat_type'] == 'grandchild')
                    {
                        $dsWavesCatGrandChildID = $json_data['brand_cat_id'];
                    }

                    
                    $content_id = dswaves_get_content_id_by_category('page', $dsWavesCatID, $dsWavesCatChildID, $dsWavesCatGrandChildID);
                    
                }

             
                if (!$content_id)
                    $content_id = dswaves_get_content_id($json_data['id'], 'page');
                
                if($content_id) {

                    
                    dswaves_content_ready($json_data, $content_id);
                }
                else
                {
                    dswaves_content_ready($json_data);
                }
            }
            if ($item_type == 'Knowledgebase Article') {
                $content_id = dswaves_get_content_id($json_data['id'], 'learning');
                
                if($content_id) {
                    dswaves_content_ready($json_data, $content_id);
                }
                else
                {
                    dswaves_content_ready($json_data);
                }
            }
            if ($item_type == 'Post') {
                $content_id = dswaves_get_content_id($json_data['id'], 'post');
                
                if($content_id) {
                    dswaves_content_ready($json_data, $content_id);
                }
                else
                {
                    dswaves_content_ready($json_data);
                }
            }

            file_put_contents($file, $json);
            
        }
        if ($command == 'delete')
        {
            if ($item_type == 'Brand') {
                //set up the brand
                dswaves_delete_brand($json_data);
            }

            if ($item_type == 'Product') {
                $dsProduct = dswaves_product_ready($json_data);
                $post_id = dswaves_get_product_id($dsProduct['sync_id']);
                if($post_id) {
                    dswaves_delete_item($post_id);
                }
            }

            if ($item_type == 'Post') {
                $content_id = dswaves_get_content_id($json_data['id'], 'post');
                
                if($content_id) {
                    dswaves_delete_item($content_id);
                }
            }

            if ($item_type == 'Page') {
                $content_id = dswaves_get_content_id($json_data['id'], 'page');
                
                if($content_id) {
                    dswaves_delete_item($content_id);
                }
            }

            if ($item_type == 'Knowledgebase Article') {
                $content_id = dswaves_get_content_id($json_data['id'], 'learning');
                
                if($content_id) {
                    dswaves_delete_item($content_id);
                }
            }
            
            // delete from the site
            //echo 'Delete' . "\n";
            //print_r ($item_id); // "brand"."id", or product id, or content id
        }
    
}

if ($syndication_type == 'soft_delete_brand')
{

    $brand_json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/website-content/json/Brand/'.$item_id.'.json');
    $brand_json_data = json_decode($brand_json, true);
    $brand_json_data['soft_delete'] = true;

    $folder_type = 'website-content/';
    $item_type = preg_replace('/[[:space:]]+/', '-', $item_type);
    $folder = '../'.$folder_type.'json/' .$item_type;
    $file = $folder . '/' . $item_id . '.json';
    file_put_contents($file, json_encode ($brand_json_data));
}

// this info will only be shown within the plugin so customer can search brands, see how many products are within each brand, etc...
if ($syndication_type == 'plugin_content')
{
    // if ($item_type == 'Product')
    // if ($item_type == 'Page')
    // if ($item_type == 'Knowledgebase Article')
    // if ($item_type == 'Post')
    // if ($item_type == 'Brand')
    
        if ($command == 'insert')
        {
            // insert new from the $json data
            file_put_contents($file, $json_data);
            echo 'Created' . "\n";
        }
        else if ($command == 'update')
        {

            file_put_contents($file, $json_data);
            // update from the $json data
            echo 'Update' . "\n";
  
            // update could be because of json data change or could be because $syndication changed... api or design
            // print_r ($sync_type);
            // print_r ($item_id); // "brand"."id", or product id, or content id
            // print_r ($json);
        }
        if ($command == 'delete')
        {
            // delete from the site
            echo 'Delete' . "\n";
            print_r ($item_id); // "brand"."id", or product id, or content id
        }
    
}

echo 'done';