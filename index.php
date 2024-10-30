<?php

/*
  Plugin Name: Interactive Image Map Builder
  Plugin URI: https://wordpress.org/plugins/interactive-image-map-builder/
  Description: Interactive SVG Image Map Builder is a powerful &amp; robust but easy to represent your information with different layouts and embedded video.
  Author: Mehjabin Orthi
  Author URI: https://www.wpmart.org/
  Version: 2.4
 */
if (!defined('ABSPATH'))
   exit;

// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);   

define('isimb_6310_plugin_url', plugin_dir_path(__FILE__));
define('isimb_6310_plugin_dir_url', plugin_dir_url(__FILE__));
define('isimb_6310_PLUGIN_CURRENT_VERSION', 2.4);

add_shortcode('isimb_6310_builder', 'isimb_6310_builder_shortcode');

function isimb_6310_builder_shortcode($atts)
{
   extract(shortcode_atts(array('id' => ' ',), $atts));
   $ids = (int) $atts['id'];

   ob_start();
   include(isimb_6310_plugin_url . 'shortcode.php');
   return ob_get_clean();
}

add_action('admin_menu', 'isimb_6310_builder_menu');

function isimb_6310_builder_menu()
{
   $options = isimb_6310_get_user_roles();
   add_menu_page('Image Map Builder', 'Image Map Builder', $options, 'isimb-6310-image-map-builder', 'isimb_6310_home', 'dashicons-format-image', 20);
   add_submenu_page('isimb-6310-image-map-builder', 'Image Map Builder', 'All Image Map Builder',  $options, 'isimb-6310-image-map-builder', 'isimb_6310_home');
   add_submenu_page('isimb-6310-image-map-builder', 'Settings', 'Settings', $options, 'isimb-6310-image-map-builder-setting', 'isimb_6310_image_builder_setting');
   add_submenu_page('isimb-6310-image-map-builder', 'Import / Export Plugin', 'Import/Export Plugin', $options, 'isimb-6310-image-map-builder-import-export', 'isimb_6310_image_map_builder_import_export');
   add_submenu_page('isimb-6310-image-map-builder', 'License', 'License', $options, 'isimb-6310-image-map-builder-license', 'isimb_6310_image_map_builder_lincense');
   add_submenu_page('isimb-6310-image-map-builder', 'How to use', 'Help', $options, 'isimb-6310-image-map-builder-use', 'isimb_6310_image_map_builder_how_to_use');
   add_submenu_page('isimb-6310-image-map-builder', 'WpMart Plugins', 'WpMart Plugins', $options, 'isimb-6310-wpmart-plugins', 'isimb_6310_wpmart_plugins');
}

include isimb_6310_plugin_url . 'template-menu.php';

function isimb_6310_my_enqueue()
{
   wp_localize_script('ajax-script', 'my_ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'isimb_6310_my_enqueue');

register_activation_hook(__FILE__, 'isimb_6310_builder_install');
include_once(isimb_6310_plugin_url . 'functions.php');

function isimb_6310_ajax_enqueue()
{
   wp_localize_script('isimb-6310-ajax-script', 'isimb_6310_ajax_object', array('isimb_6310_ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'isimb_6310_ajax_enqueue');

function isimb_6310_activation_redirect($plugin)
{
   if ($plugin == plugin_basename(__FILE__)) {
      exit(wp_redirect(admin_url('admin.php?page=isimb-6310-image-map-builder')));
   }
}
add_action('activated_plugin', 'isimb_6310_activation_redirect');

add_action('admin_enqueue_scripts', 'isimb_6310_link_css_js');

function isimb_6310_plugin_update_check()
{
   isimb_6310_version_status();
}
add_action('plugins_loaded', 'isimb_6310_plugin_update_check');

function isimb_6310_head_css()
{
   $custom_css = ".isimb-6310-main-svg, .isimb-6310-hover-content, .isimb-6310-modal-content{display: none}";
   wp_register_style('isimb-6310-head-css', "");
   wp_enqueue_style('isimb-6310-head-css');
   wp_add_inline_style('isimb-6310-head-css', $custom_css);
}
add_action('wp_enqueue_scripts', 'isimb_6310_head_css', 999);
