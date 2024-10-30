<?php
function isimb_6310_home()
{
  global $wpdb;
  $style_table = $wpdb->prefix . 'isimb_6310_style';
  include isimb_6310_plugin_url . 'header.php';
  wp_enqueue_media();

  if (empty($_GET['action'])) {
    include isimb_6310_plugin_url . 'home.php';
  } else if (!empty($_GET['action'])) {
    $ids = isset($_GET['styleid']) ? (int) ($_GET['styleid']) : 0;
    include isimb_6310_plugin_url . "settings/builder.php";
    include isimb_6310_plugin_url . "settings/add-point-html.php";
    include isimb_6310_plugin_url . "settings/edit-point-html.php";
  }
}
function isimb_6310_image_builder_setting()
{
  global $wpdb;
  wp_enqueue_style('isimb-6310-style', plugins_url('assets/css/style.css', __FILE__));
  wp_enqueue_style('isimb-color-style', plugins_url('assets/css/jquery.minicolors.css', __FILE__));
  include isimb_6310_plugin_url . 'header.php';  
  include isimb_6310_plugin_url . 'settings/plugin-settings.php';
}

function isimb_6310_image_map_builder_lincense()
{
  global $wpdb;
  include isimb_6310_plugin_url . 'header.php';
  include isimb_6310_plugin_url . 'license.php';
}

function isimb_6310_image_map_builder_how_to_use()
{
  global $wpdb;
  include isimb_6310_plugin_url . 'header.php';
  include isimb_6310_plugin_url . 'settings/how-to-use.php';
}

function isimb_6310_wpmart_plugins()
{
  global $wpdb;
  include isimb_6310_plugin_url . 'header.php';
  include isimb_6310_plugin_url . 'settings/wpmart-plugins.php';
}

function isimb_6310_image_map_builder_import_export()
{
  global $wpdb;
  include isimb_6310_plugin_url . 'header.php';
  include isimb_6310_plugin_url . 'settings/import-export-plugins.php';
}
