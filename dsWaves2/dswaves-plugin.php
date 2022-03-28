<?php
/**
 * @wordpress-plugin
 * Plugin Name:       DS Waves
 * Plugin URI:        https://designstudio.com
 * Description:       WordPress Plugin that connects to our unique and proprietary Content Syndication Platform to help with keeping content in this site up to date.
 * Version:           2.0.4
 * Author:            DesignStudio
 * Author URI:        designstudio.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       dswaves-plugin
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

function load_admin_style() {
    wp_register_style( 'admin_css', plugin_dir_url( __FILE__ ) . 'style.css', false, '1.0.0' );

    
}


class dsWavesPlugin
{
  public $plugin;

  function __construct() {
    $this->plugin = plugin_basename(__FILE__);
  }

  function register() {
    add_action('admin_menu', array($this, 'add_admin_page'));
    add_filter("plugin_action_links_$this->plugin", array($this, 'settings_link'));
  }

  // shown on /wp-admin/plugins.php
  public function settings_link( $links ) {
    $settings_link = '<a href="admin.php?page=dswaves_plugin#/about">Settings</a>';
    array_push($links, $settings_link);
    return $links;
  }

  
  public function add_admin_page() {

    // small svg icon on left menu
    if (!is_file (@realpath(dirname(__FILE__)) . '/icon.svg'))
    {
        $svgFile = fopen(@realpath(dirname(__FILE__)) . '/icon.svg', "w") or die("Unable to open file!");
        $svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><style>.d{fill:rgba(240,246,252,.6);}</style></defs><g id="a"/><g id="b"><g id="c"><g><polygon class="d" points="23.9 26.59 47.65 53.31 23.64 53.31 0 26.73 0 80 32.36 80 56.1 53.31 32.35 26.59 56.36 26.59 80 53.17 80 0 47.55 0 23.9 26.59"/><polygon class="d" points="56.38 80 80 80 80 53.44 56.38 80"/><polygon class="d" points="0 26.46 23.53 0 0 0 0 26.46"/></g></g></g></svg>';
        fwrite($svgFile, $svgCode);
        fclose($svgFile);
    }
    
    add_menu_page('DS Waves', 'DS Waves', 'manage_options', 'dswaves_plugin', array($this, 'admin_index'), plugin_dir_url( __FILE__ ) . 'icon.svg');

    
    add_submenu_page(
        'dswaves_plugin',
        'About',
        'About',
        'manage_options',
        'admin.php?page=dswaves_plugin#/about',
        '',
        ''
    );

    add_submenu_page(
        'dswaves_plugin',
        'Brands',
        'Brands',
        'manage_options',
        'admin.php?page=dswaves_plugin#/',
        '',
        ''
    );



    add_submenu_page(
        'dswaves_plugin',
        'License',
        'License',
        'manage_options',
        'admin.php?page=dswaves_plugin#/settings',
        '',
        ''
    );

    
}

  public function admin_index() {
    wp_enqueue_style( "$this->plugin-css", plugins_url('/public/styles.css', __FILE__) );
    wp_enqueue_script( "$this->plugin-js", plugins_url('/public/scripts.js', __FILE__), null, null, true );
    require_once plugin_dir_path(__FILE__) . 'templates/admin/index.php';
  }

}

add_action('admin_head', 'dswaves_admin_styles');

function dswaves_admin_styles() {
    echo '
      <style>
      .toplevel_page_dswaves_plugin .dashicons-before img { 
        width: 17px; 
        opacity: 1 !important;
      } 
  
      .toplevel_page_dswaves_plugin .wp-menu-open .dashicons-before img {
          margin-left: 9px;
      }
      </style>
    ';
  }

  

if ( class_exists('dsWavesPlugin') ) {
  $dsWavesPlugin = new dsWavesPlugin();
  $dsWavesPlugin->register();
}

require_once plugin_dir_path(__FILE__) . 'inc/dswaves-plugin-wp-api-functions.php'; // WordPress API Extension Functions


// Activation
require_once plugin_dir_path(__FILE__)  . 'inc/dswaves-plugin-activate.php';
register_activation_hook( __FILE__, array( new dsWavesPluginActivate(), 'activate' ) );

// Deactivation
require_once plugin_dir_path(__FILE__)  . 'inc/dswaves-plugin-deactivate.php';
register_deactivation_hook( __FILE__, array( 'dsWavesPluginDeactivate', 'deactivate' ) );
