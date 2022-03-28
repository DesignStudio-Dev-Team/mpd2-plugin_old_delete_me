<?php

global $dsWavesPluginDBVer;
$dsWavesPluginDBVer = '1.0';

class dsWavesPluginActivate
{
  public function activate() {
    flush_rewrite_rules();
    $this->dsWavesCreateTable();

    $this->copyPages ();
  }

  private function dsWavesCreateTable() {
    global $wpdb;
    global $dsWavesPluginDBVer;

    $charsetCollate = $wpdb->get_charset_collate();

    $tableName1 = $wpdb->prefix . "dsWavesPlugin_options";
    $sql1 = "CREATE TABLE $tableName1 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        meta_key varchar(191) NOT NULL,
        meta_value longtext NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;";

    $tableName2 = $wpdb->prefix . "dsWavesPlugin_site_brands";
    $sql2 = "CREATE TABLE $tableName2 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        brand_sync_id bigint(20) NOT NULL,
        name varchar(191) NOT NULL,
        industry varchar(191) NOT NULL,
        total_urls bigint(20) NOT NULL,
        sync_status varchar(60) NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;";

    $tableName3 = $wpdb->prefix . "dsWavesPlugin_site_content";
    $sql3 = "CREATE TABLE $tableName3 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        brand_sync_id bigint(20) NOT NULL,
        name varchar(191) NOT NULL,
        content_type varchar(191) NOT NULL,
        site_version mediumint(9) NOT NULL,
        latest_version mediumint(9) NOT NULL,
        approval_type varchar(191) NOT NULL,
        approval_status varchar(191) NOT NULL,
        wordpress_post_id bigint(20) NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;";

    $tableName4 = $wpdb->prefix . "dsWavesPlugin_product_ctas";
    $sql4 = "CREATE TABLE $tableName4 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        content_id bigint(20) NOT NULL,
        cta_label varchar(191) NOT NULL,
        cta_url varchar(191) NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;";

    $tableName5 = $wpdb->prefix . "dsWavesPlugin_all_brands";
    $sql5 = "CREATE TABLE $tableName5 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        name varchar(191) NOT NULL,
        company varchar(191) NOT NULL,
        industry varchar(191) NOT NULL,
        site_has tinyint(1) NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;"; 
        
        
    $tableName6 = $wpdb->prefix . "dsWavesPlugin_all_content";
    $sql6 = "CREATE TABLE $tableName6 (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        brand_sync_id bigint(20) NOT NULL,
        name varchar(191) NOT NULL,
        content_type varchar(191) NOT NULL,
        site_has tinyint(1) NOT NULL,
        PRIMARY KEY  (id)
        ) $charsetCollate;";    

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql1 );
    dbDelta( $sql2 );
    dbDelta( $sql3 );
    dbDelta( $sql4 );
    dbDelta( $sql5 );    
    dbDelta( $sql6 );


    add_option( "dsWavesPluginDBVer", $dsWavesPluginDBVer);
  }

  public function copyPages ($forcePush = false)
  {
    $folders[] = 'website-content';
    $folders[] = 'website-content/pages';
    $folders[] = 'website-content/pages/endless-pools-brand';
    $folders[] = 'website-content/pages/endless-pools-brand/endless-pools-fitness-systems';
    $folders[] = 'website-content/pages/endless-pools-brand/recsport-recreation-systems';
    $folders[] = 'website-content/pages/endless-pools-brand/swimcross-exercise-systems';
    $folders[] = 'website-content/pages/hot-tub-brand';
    $folders[] = 'website-content/pages/hot-tub-collection';
    $folders[] = 'website-content/pages/hot-tub-collection/fantasy-premier-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/fantasy-sport-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/freeflow-premier-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/freeflow-sport-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/highlife-collection'; 
    $folders[] = 'website-content/pages/hot-tub-collection/hot-spot-collection'; 
    $folders[] = 'website-content/pages/hot-tub-collection/limelight-collection'; 
    $folders[] = 'website-content/pages/hot-tub-collection/paradise-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/utopia-series'; 
    $folders[] = 'website-content/pages/hot-tub-collection/vacanza-series'; 
    $folders[] = 'website-content/pages/hot-tubs';

    $files[] = 'endless-pools-brand/endless-pools-fitness-systems/main.json'; 
    $files[] = 'endless-pools-brand/recsport-recreation-systems/main.json'; 
    $files[] = 'endless-pools-brand/swimcross-exercise-systems/main.json'; 
    $files[] = 'hot-tub-brand/caldera-spas.json'; 
    $files[] = 'hot-tub-brand/endless-pools.json'; 
    $files[] = 'hot-tub-brand/fantasy-spas.json'; 
    $files[] = 'hot-tub-brand/freeflow-spas.json'; 
    $files[] = 'hot-tub-brand/hot-spring-spas.json'; 
    $files[] = 'hot-tub-brand/finnleo-saunas.json'; 
    $files[] = 'hot-tub-collection/fantasy-premier-series/data.json'; 
    $files[] = 'hot-tub-collection/fantasy-sport-series/data.json'; 
    $files[] = 'hot-tub-collection/freeflow-premier-series/data.json'; 
    $files[] = 'hot-tub-collection/freeflow-sport-series/data.json'; 
    $files[] = 'hot-tub-collection/highlife-collection/data.json'; 
    $files[] = 'hot-tub-collection/hot-spot-collection/data.json'; 
    $files[] = 'hot-tub-collection/limelight-collection/data.json'; 
    $files[] = 'hot-tub-collection/paradise-series/data.json'; 
    $files[] = 'hot-tub-collection/utopia-series/data.json'; 
    $files[] = 'hot-tub-collection/vacanza-series/data.json'; 
    $files[] = 'hot-tubs/main.json'; 

    if ($folders)
    {
        foreach ($folders as $folder)
        {
            if (!file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/' . $folder)) {
                mkdir($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/' . $folder);
            }
        }
    }
    
    if ($files)
    {
        foreach ($files as $file)
        {
            if (!file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/website-content/' . $file) || $forcePush) {
                $url = 'https://dswaves.s3.us-west-1.amazonaws.com/plugin_pages/' . $file;
  
                $ch = curl_init($url);
            
                $save_file_loc = $_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/website-content/pages/' . $file;
            
                $fp = fopen($save_file_loc, 'wb');
            
                curl_setopt($ch, CURLOPT_FILE, $fp);
                curl_setopt($ch, CURLOPT_HEADER, 0);
            
                curl_exec($ch);
            
                curl_close($ch);
            
                fclose($fp);
            }
            
        }
    }
    
  }
}
