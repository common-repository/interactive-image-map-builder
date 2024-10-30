<?php
if (!defined('ABSPATH'))
   exit;
?>
<div class="isimb-6310">
   <h1>Plugin Settings</h1>
   <?php

   wp_enqueue_media();

  
   $font_awesome = isimb_6310_get_option('isimb_6310_font_awesome_status');
   $closeIcon = isimb_6310_get_option('isimb_6310_close_icon');
   $desktopSize = isimb_6310_get_option('isimb_6310_desktop_size');
   $mobileSize = isimb_6310_get_option('isimb_6310_mobile_size');
   $tabClass = isimb_6310_get_option('isimb_6310_tab_class');

   $desktopMenuHeight = isimb_6310_get_option('isimb_6310_desktop_menu_height');
   $tabMenuHeight = isimb_6310_get_option('isimb_6310_tab_menu_height');
   $mobileMenuHeight = isimb_6310_get_option('isimb_6310_mobile_menu_height');

   $closeIcon = $closeIcon? $closeIcon : 'https://wpmart.org/wp-content/uploads/2022/08/close.png';
   $desktopSize = $desktopSize ? $desktopSize : 30;
   $mobileSize = $mobileSize ? $mobileSize : 20;

   $desktopMenuHeight = $desktopMenuHeight ? $desktopMenuHeight : 0;
   $tabMenuHeight = $tabMenuHeight ? $tabMenuHeight : 0;
   $mobileMenuHeight = $mobileMenuHeight ? $mobileMenuHeight : 0;

   if (!empty($_POST['update']) && $_POST['update'] == 'Update') {
    $nonce = $_REQUEST['_wpnonce'];
    if (!wp_verify_nonce($nonce, 'isimb-6310-nonce-update')) {
       die('You do not have sufficient permissions to access this page.');
    } else {    

        //fontawesome Font Start
        if($font_awesome != ''){
        $wpdb->query("UPDATE {$wpdb->prefix}options set 
        option_value='". sanitize_text_field($_POST['font_awesome']) ."' 
        where option_name = 'isimb_6310_font_awesome_status'");
        }
        else{
        $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_font_awesome_status'");
        $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_font_awesome_status', '". sanitize_text_field($_POST['font_awesome']) ."')");
        }
  
        $font_awesome = $_POST['font_awesome'];
        //Next image start
       $isimb_6310_close_icon = isimb_6310_get_option('isimb_6310_close_icon');
       if(!$isimb_6310_close_icon){
           $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_close_icon'");
           $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_close_icon', '". sanitize_text_field($_POST['isimb_6310_close_icon']) ."')");
       }
       else{
          $wpdb->query("UPDATE {$wpdb->prefix}options set 
                      option_value='". sanitize_text_field($_POST['isimb_6310_close_icon']) ."' 
                      where option_name = 'isimb_6310_close_icon'");
       }
      $closeIcon =  $_POST['isimb_6310_close_icon'];


      //Desktop Size
       $isimb_6310_desktop_size = isimb_6310_get_option('isimb_6310_desktop_size');
       if(!$isimb_6310_desktop_size){
           $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_desktop_size'");
           $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_desktop_size', '". sanitize_text_field($_POST['isimb_6310_desktop_size']) ."')");
       }
       else{
          $wpdb->query("UPDATE {$wpdb->prefix}options set 
                      option_value='". sanitize_text_field($_POST['isimb_6310_desktop_size']) ."' 
                      where option_name = 'isimb_6310_desktop_size'");
       }
      $desktopSize =  $_POST['isimb_6310_desktop_size'];

      //Mobile size
      $isimb_6310_mobile_size = isimb_6310_get_option('isimb_6310_mobile_size');
       if(!$isimb_6310_mobile_size){
           $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_mobile_size'");
           $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_mobile_size', '". sanitize_text_field($_POST['isimb_6310_mobile_size']) ."')");
       }
       else{
          $wpdb->query("UPDATE {$wpdb->prefix}options set 
                      option_value='". sanitize_text_field($_POST['isimb_6310_mobile_size']) ."' 
                      where option_name = 'isimb_6310_mobile_size'");
       }
      $mobileSize =  $_POST['isimb_6310_mobile_size'];

      //Tab Class
      $isimb_6310_tab_class = isimb_6310_get_option('isimb_6310_tab_class');
       if(!$isimb_6310_tab_class){
           $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_tab_class'");
           $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_tab_class', '". sanitize_text_field($_POST['isimb_6310_tab_class']) ."')");
       }
       else{
          $wpdb->query("UPDATE {$wpdb->prefix}options set 
                      option_value='". sanitize_text_field($_POST['isimb_6310_tab_class']) ."' 
                      where option_name = 'isimb_6310_tab_class'");
       }
      $tabClass =  $_POST['isimb_6310_tab_class'];

      //Desktop Menu Height
      $isimb_6310_desktop_menu_height = isimb_6310_get_option('isimb_6310_desktop_menu_height');
      if(!$isimb_6310_desktop_menu_height){
          $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_desktop_menu_height'");
          $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_desktop_menu_height', '". sanitize_text_field($_POST['isimb_6310_desktop_menu_height']) ."')");
      }
      else{
         $wpdb->query("UPDATE {$wpdb->prefix}options set 
                     option_value='". sanitize_text_field($_POST['isimb_6310_desktop_menu_height']) ."' 
                     where option_name = 'isimb_6310_desktop_menu_height'");
      }
      $desktopMenuHeight =  $_POST['isimb_6310_desktop_menu_height'];

      //Tab Menu Height
      $isimb_6310_tab_menu_height = isimb_6310_get_option('isimb_6310_tab_menu_height');
      if(!$isimb_6310_tab_menu_height){
            $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_tab_menu_height'");
            $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_tab_menu_height', '". sanitize_text_field($_POST['isimb_6310_tab_menu_height']) ."')");
      }
      else{
         $wpdb->query("UPDATE {$wpdb->prefix}options set 
                     option_value='". sanitize_text_field($_POST['isimb_6310_tab_menu_height']) ."' 
                     where option_name = 'isimb_6310_tab_menu_height'");
      }
      $tabMenuHeight =  $_POST['isimb_6310_tab_menu_height'];

      //Mobile Menu Height
      $isimb_6310_mobile_menu_height = isimb_6310_get_option('isimb_6310_mobile_menu_height');
      if(!$isimb_6310_mobile_menu_height){
          $wpdb->query("DELETE FROM {$wpdb->prefix}options where option_name='isimb_6310_mobile_menu_height'");
          $wpdb->query("INSERT INTO {$wpdb->prefix}options(option_name, option_value) VALUES ('isimb_6310_mobile_menu_height', '". sanitize_text_field($_POST['isimb_6310_mobile_menu_height']) ."')");
      }
      else{
         $wpdb->query("UPDATE {$wpdb->prefix}options set 
                     option_value='". sanitize_text_field($_POST['isimb_6310_mobile_menu_height']) ."' 
                     where option_name = 'isimb_6310_mobile_menu_height'");
      }
      $mobileMenuHeight =  $_POST['isimb_6310_mobile_menu_height'];
    }
 }
?>
 <form action="" method="post">
 <?php wp_nonce_field("isimb-6310-nonce-update") ?>
 <div class="isimb-6310-modal-body-form">
    <table width="100%" cellpadding="10" cellspacing="0">         
       <tr>
          <td width="200px">
             <b>Font Awesome Activation:</b><br />
            
          </td>
          <td width="500px" colspan="2">
             <input type="radio" name="font_awesome" value="2" checked> Active &nbsp;&nbsp;&nbsp;
             <input type="radio" name="font_awesome" value="1" <?php echo ($font_awesome == 1) ? ' checked':'' ?>> Inactive
          </td>
       </tr>
       <tr>
         <td width="200px"><b>Change Close Icon</b></td>
         <td width="500px">
            <input type="text" required name="isimb_6310_close_icon" id="close-icon-src" value="<?php echo esc_attr($closeIcon) ?>" class="isimb-form-input lg">
            <input type="button" id="close-icon" value="Change Image" class="isimb-6310-btn-success">
         </td>
         <td>
            <img src="<?php echo esc_attr($closeIcon) ?>" width="40" />
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Close Icon Size in Desktop</b></td>
         <td width="500px">
            <input type="number" required min="10" name="isimb_6310_desktop_size" id="close-icon-src" value="<?php echo esc_attr($desktopSize) ?>" class="isimb-form-input lg">
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Close Icon Size in Mobile</b></td>
         <td width="500px">
            <input type="number" required min="10" name="isimb_6310_mobile_size" id="close-icon-src" value="<?php echo esc_attr($mobileSize) ?>" class="isimb-form-input lg">
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Tab Class</b></td>
         <td width="500px">
            <input type="text" required name="isimb_6310_tab_class" value="<?php echo $tabClass != '' ? esc_attr($tabClass) : '.elementor-tab-title' ?>" class="isimb-form-input isimb-form-input-lg">
            <p>If multiple class, then add comma between them. <br />For example, <b>".elementor-tab-title, .content-tab"</b></p>
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Desktop Menu Height</b></td>
         <td width="500px">
            <input type="number" required min="0" name="isimb_6310_desktop_menu_height" id="close-icon-src" value="<?php echo esc_attr($desktopMenuHeight) ?>" class="isimb-form-input lg">
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Tab Menu Height</b></td>
         <td width="500px">
            <input type="number" required min="0" name="isimb_6310_tab_menu_height" id="close-icon-src" value="<?php echo esc_attr($tabMenuHeight) ?>" class="isimb-form-input lg">
         </td>
      </tr>
      <tr>
         <td width="200px"><b>Mobile Menu Height</b></td>
         <td width="500px">
            <input type="number" required min="0" name="isimb_6310_mobile_menu_height" id="close-icon-src" value="<?php echo esc_attr($mobileMenuHeight) ?>" class="isimb-form-input lg">
         </td>
      </tr>
       <tr>
          <td colspan="3">
             <input type="submit" name="update" class="isimb-6310-btn-primary isimb-margin-right-10" value="Update" />
          </td>
       </tr>
    </table>
 </div>
 <br class="isimb-6310-clear" />
</form>
<script type="text/javascript">
   jQuery(document).ready(function(){
      jQuery("body").on("click", "#close-icon", function (e) {
         e.preventDefault();
         var image = wp
            .media({
            title: "Upload Image",
            multiple: false,
            })
            .open()
            .on("select", function (e) {
            var uploaded_image = image.state().get("selection").first();
            var image_url = uploaded_image.toJSON().url;
            jQuery("#close-icon-src").val(image_url);
            });

         jQuery("#isimb_6310_add_new_media").css({
            "overflow-x": "hidden",
            "overflow-y": "auto",
         });
      });
   })
</script>