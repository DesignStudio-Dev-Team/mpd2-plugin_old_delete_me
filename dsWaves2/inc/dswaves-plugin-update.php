<?php

set_time_limit(0);

error_reporting(E_ALL); // remove me
ini_set("log_errors", 1); // remove me
ini_set('display_errors', true); // remove me
ini_set("error_log", "php-error.log"); // remove me

require($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
require(ABSPATH . '/wp-blog-header.php');
global $wpdb;

 
if (isset($_REQUEST['type'])) {
    // set default images, text, etc.. on the hot tubs template, collections template, etc...
    if ($_REQUEST['type'] == 'default_template_data') {
        require_once('dswaves-plugin-activate.php');
        $dsWavesPluginActivate = new dsWavesPluginActivate();
        $dsWavesPluginActivate->copyPages($forcePush = true);
        echo 'updated';
    }
    // update theme
    elseif ($_REQUEST['type'] == 'showcase_template') {
        $dsShowcaseTheme = wp_get_theme();
        $dsShowcaseTheme = wp_get_theme($stylesheet = 'syndified-theme-main');
        
        if ($dsShowcaseTheme->exists()) {
            if (floatval($dsShowcaseTheme->Version) >= 2) {
                echo 'updating theme now...<br /><br />';
                
                $url = 'https://dswaves.s3.us-west-1.amazonaws.com/syndified-theme/files.json';

                
                $json = file_get_contents($url);
                $json_data = json_decode($json, true);

                //print_r ($json_data['folders']);

                if ($json_data['folders']) {
                    foreach ($json_data['folders'] as $folder) {
                        echo $folder . '<br /><br />';
                        if (!file_exists($_SERVER['DOCUMENT_ROOT'] . 'wp-content/themes/syndified-theme-main' . $folder)) {
                            mkdir($_SERVER['DOCUMENT_ROOT'] . 'wp-content/themes/syndified-theme-main' . $folder);
                        }
                    }
                }

                if ($json_data['files']) {
                    foreach ($json_data['files'] as $file) {
                        $url = 'https://dswaves.s3.us-west-1.amazonaws.com/syndified-theme' . $file;

                        echo  $file . '<br /><br />';
            
                        $ch = curl_init($url);
                        
                        $save_file_loc = $_SERVER['DOCUMENT_ROOT'] . 'wp-content/themes/syndified-theme-main' . $file;
                           
                        //echo  $save_file_loc . '<br /><br />';

                        $fp = fopen($save_file_loc, 'wb');
                        curl_setopt($ch, CURLOPT_FILE, $fp);
                        curl_exec($ch);
                        curl_close($ch);
                        fclose($fp);
                    }
                }

                
                //echo shell_exec( 'cd ' . $_SERVER['DOCUMENT_ROOT'] . ' && git fetch && git checkout HEAD wp-content/themes/dsShowcase/' );
            } else {
                echo 'Cannot update. Version number too low. Current version installed: ' . $dsShowcaseTheme->Version;
            }
        } else {
            echo 'Syndified Theme does not exist. Cannot update.';
        }
    }
}
// update the plugin files
else {
    echo 'updating plugin now...<br /><br />';
                
    $url = 'https://dswaves.s3.us-west-1.amazonaws.com/plugin/files.json';

                
    $json = file_get_contents($url);
    $json_data = json_decode($json, true);
 
    //print_r ($json_data['folders']);

    if ($json_data['folders']) {
        foreach ($json_data['folders'] as $folder) {
            //echo $folder . '<br /><br />';
            if (!file_exists($_SERVER['DOCUMENT_ROOT'] . 'wp-content/plugins' . $folder)) {
                mkdir($_SERVER['DOCUMENT_ROOT'] . 'wp-content/plugins' . $folder);
            }
        }
    }

    if ($json_data['files']) {
        foreach ($json_data['files'] as $file) {
            $url = 'https://dswaves.s3.us-west-1.amazonaws.com/plugin' . $file;

            echo  $file . '<br /><br />';
            
            $ch = curl_init($url);
                        
            $save_file_loc = $_SERVER['DOCUMENT_ROOT'] . 'wp-content/plugins/' . $file;
                            
            $fp = fopen($save_file_loc, 'wb');
                        
            curl_setopt($ch, CURLOPT_FILE, $fp);
            //curl_setopt($ch, CURLOPT_HEADER, 0);
                        
            curl_exec($ch);
                        
            curl_close($ch);
                        
            fclose($fp);
        }
    }

    // $url = 'https://dswaves.s3.us-west-1.amazonaws.com/plugin/files.json';

    // $json = file_get_contents($url);
    // $json_data = json_decode($json, true);

    // if ($json_data['folders'])
    // {
    //     foreach ($json_data['folders'] as $folder)
    //     {
    //         if (!file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/' . $folder)) {
    //             mkdir($_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/' . $folder);
    //         }
    //     }
    // }


    // if ($json_data['files'])
    // {
    //     foreach ($json_data['files'] as $file)
    //     {
    //             $url = 'https://dswaves.s3.us-west-1.amazonaws.com/plugin/' . $file;

    //             echo $url . '<br /><br />';
  
    //             $ch = curl_init($url);
            
    //             $save_file_loc = $_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/dsWaves2/' . $file;
            
    //             $fp = fopen($save_file_loc, 'wb');
            
    //             curl_setopt($ch, CURLOPT_FILE, $fp);
    //             curl_setopt($ch, CURLOPT_HEADER, 0);
            
    //             curl_exec($ch);
            
    //             curl_close($ch);
            
    //             fclose($fp);
            
    //     }
    // }
}
