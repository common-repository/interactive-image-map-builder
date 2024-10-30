<?php
global $wpdb;
$style_table = $wpdb->prefix . 'isimb_6310_style';
$font_awesome = isimb_6310_get_option('isimb_6310_font_awesome_status');
$closeIcon = isimb_6310_get_option('isimb_6310_close_icon');
$desktopSize = isimb_6310_get_option('isimb_6310_desktop_size');
$mobileSize = isimb_6310_get_option('isimb_6310_mobile_size');

$closeIcon = $closeIcon ? esc_attr($closeIcon) : 'https://wpmart.org/wp-content/uploads/2022/08/close.png';
$desktopSize = $desktopSize ? esc_attr($desktopSize) : 30;
$mobileSize = $mobileSize ? esc_attr($mobileSize) : 20;

$admin_login = 0;
if (is_user_logged_in()) {
   $current_user = wp_get_current_user();
   if (in_array('editor', $current_user->roles) || in_array('administrator', $current_user->roles)) {
      $admin_login = 1;
   }
}
wp_enqueue_script('jquery');

$cssData = [];
if ($ids) {
   $styledata = $wpdb->get_row($wpdb->prepare("SELECT * FROM $style_table WHERE id = %d ", $ids), ARRAY_A);
   if (!$styledata) return;
   $css = explode("!!##!!", $styledata['css']);
   $key = explode(",", $css[0]);
   $value = explode("||##||", $css[1]);
   $filterKey = [];
   $filterValue = [];
   for ($i = 0; $i < count($key); $i++) {
      $filterKey[] = esc_attr($key[$i]);
   }
   for ($i = 0; $i < count($value); $i++) {
      $filterValue[] = esc_attr($value[$i]);
   }
   $cssData = array_combine($filterKey, $filterValue);
}
$jsonData = isset($cssData['json_data']) ? json_decode(stripslashes(html_entity_decode($cssData['json_data']))) : [];
$font_awesome = isimb_6310_get_option('isimb_6310_font_awesome_status');
if ($font_awesome != 1) {
   wp_enqueue_style('isimb-6310-font-awesome-5-0-13', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');
   wp_enqueue_style('isimb-6310-font-awesome-4-07', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
}
wp_enqueue_style('isimb-6310-jquery-ui-css', 'https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css');
wp_enqueue_script('isimb-6310-jquery-ui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', array('jquery'), TRUE);
wp_enqueue_style('isimb-6310-owl-carousel', plugins_url('output-common-css.css', __FILE__));
include isimb_6310_plugin_url . "output-css.php";

$image_zoom = isset($cssData['zoom_feature']) ? esc_attr($cssData['zoom_feature']) : 0;
$tooltip_position  = isset($cssData['tooltip_position']) ? esc_attr($cssData['tooltip_position']) : 0;
$top_bottom  = isset($cssData['top_bottom']) ? esc_attr($cssData['top_bottom']) : 0;
$left_right  = isset($cssData['left_right']) ? esc_attr($cssData['left_right']) : 0;

if ($image_zoom == 2) {
   $image_zoom = 1;
} else {
   $image_zoom = 0;
}
?>
<div class="isimb-6310-annotation-box-wrapper isimb-6310-annotation-box-wrapper-<?php echo $ids; ?>">
   <div class="isimb-6310-zoom-buttons" style="display: none;">
      <img src="<?php echo isset($cssData['zoom_in_icon']) && $cssData['zoom_in_icon'] ? esc_url($cssData['zoom_in_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-in.png' ?>" alt="" class="isimb-6310-zoom-in">
      <img src="<?php echo isset($cssData['zoom_out_icon']) && $cssData['zoom_out_icon'] ? esc_url($cssData['zoom_out_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-out.png' ?>" alt="" class="isimb-6310-zoom-out">
   </div>
   <div class="isimb-6310-builder-box isimb-6310-builder-box-<?php echo $ids; ?>"
      data-id="<?php echo $ids; ?>"
      data-image-zoom="<?php echo $admin_login ? $image_zoom : 0; ?>"
      data-tooltip-position="<?php echo $admin_login ? $tooltip_position : 0; ?>"
      data-top-bottom="<?php echo $top_bottom; ?>"
      data-left-right="<?php echo $left_right; ?>"
      data-login-status="<?php echo $admin_login; ?>">
      <div class="isimb-6310-annotation-box-inner">
         <svg class="isimb-6310-main-svg isimb-6310-main-svg-<?php echo $ids ?>">
            <?php
            if ($jsonData) {
               $counter = 1;
               foreach ($jsonData as $js) {
                  $jsonCode = json_encode($js);
                  if ($js->viewMoodType == 2) {
                     $classlist = "isimb-6310-pol-loaded isimb-6310-pol-{$ids}-{$counter} isimb-6310-modal-element";
                  } else {
                     $classlist = "isimb-6310-pol-loaded isimb-6310-pol-{$ids}-{$counter}";
                  }

                  $url = '';
                  if (isset($js->linkURL) && $js->linkURL) {
                     $url = "data-link-url='{$js->linkURL}'" . (isset($js->openNewTab) && $js->openNewTab ? ' data-target="_blank" ' : '');
                  }
                  echo "<polygon title='' data-id='{$ids}-{$counter}' {$url} class= '{$classlist}' data-json='" . esc_attr($jsonCode) . "' />";
                  $pointCssCode = "
               .ui-tooltip{
                  padding:0 !important;
                }
                .ui-widget-content{
                  border: none !important;
                  background: none;
                } 
                .ui-widget-shadow{
                  box-shadow: none;
                }
               .isimb-6310-main-svg .isimb-6310-pol-{$ids}-{$counter}{
                  fill: " . esc_attr($js->selectAreaColor) . " !important;
                  stroke:" . esc_attr($js->areaBorderColor) . " !important;
                  stroke-width:" . esc_attr($js->areaBorderSize) . "px !important;
               }
               .isimb-6310-main-svg .isimb-6310-pol-{$ids}-{$counter}:hover{
                  fill: " . esc_attr($js->selectAreaHoverColor) . " !important;
                  stroke:" . esc_attr($js->areaBorderHoverColor) . " !important;
                  stroke-width:" . esc_attr($js->areaBorderSize) . "px !important;
                  cursor: pointer;
                  filter: drop-shadow(0px 0px " . esc_attr($js->areaShadowith) . "px " . esc_attr($js->areaShadowColor) . ");
               }
               ";
                  wp_register_style("isimb-6310-template-{$ids}-{$counter}-css", "");
                  wp_enqueue_style("isimb-6310-template-{$ids}-{$counter}-css");
                  wp_add_inline_style("isimb-6310-template-{$ids}-{$counter}-css", $pointCssCode);

                  if ($counter == 4) break;
                  $counter++;
               }
            }
            ?>
         </svg>
         <?php
         $counter = 1;
         foreach ($jsonData as $js) {
            isimb_6310_load_templates($js, $counter, $ids);
            $counter++;
         }
         ?>
         <img src="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" class="isimb-6310-main-image isimb-6310-img" data-isimb-cls="isimb-6310-main-image isimb-6310-img" data-isimb-value="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" />
         <?php
         $pointCssCode = "
          .isimb-6310-main-svg-{$ids}{
            background-image: url(" . (isset($cssData['main_image']) ? $cssData['main_image'] : '') . ");
          }
        ";
         wp_register_style("isimb-6310-template-main-css-{$ids}", "");
         wp_enqueue_style("isimb-6310-template-main-css-{$ids}");
         wp_add_inline_style("isimb-6310-template-main-css-{$ids}", $pointCssCode);
         ?>

      </div>
   </div>
</div>

<?php
$customCSS = $cssData['custom_css'];
$customCSS .= "
   .isimb-6310-close-button{
      width: {$desktopSize}px;
      height: {$desktopSize}px;
      background-image: url('{$closeIcon}');
      right: -" . ($desktopSize / 2) . "px;
      top: -" . ($desktopSize / 2) . "px;
      background-size: cover;
   }
   .isimb-6310-close-button-mobile{
      display: none;
   }
   @media screen and (max-width: 767px) {
      .isimb-6310-close-button{
         width: {$mobileSize}px;
         height: {$mobileSize}px;
         right: -" . ($mobileSize / 2) . "px;
         top: -" . ($mobileSize / 2) . "px;
         background-size: cover;
      }
      .isimb-6310-close-button-mobile{
         display: block;
      }
   }
";
if ($admin_login) {
   $customCSS .= "
      .isimb-6310-annotation-box-wrapper-{$ids} .isimb-6310-zoom-buttons{
         display: " . (isset($cssData['zoom_feature']) && $cssData['zoom_feature'] == 2 && $cssData['display_device'] != 1 ? 'flex' : 'none') . " !important;
         justify-content: " . (isset($cssData['icon_position']) ? $cssData['icon_position'] : 'flex-start') . ";
         margin-bottom: 20px;
      }
      .isimb-6310-annotation-box-wrapper-{$ids} .isimb-6310-zoom-buttons img{
         width: " . (isset($cssData['desktop_icon_size']) ? $cssData['desktop_icon_size'] : '30') . "px;
         height: " . (isset($cssData['desktop_icon_size']) ? $cssData['desktop_icon_size'] : '30') . "px;
         cursor: pointer;
         margin: 0 10px;
      }
      @media screen and (max-width: 767px) {
         .isimb-6310-annotation-box-wrapper-{$ids} .isimb-6310-zoom-buttons{
            display: " . (isset($cssData['zoom_feature']) && $cssData['zoom_feature'] == 2 && $cssData['display_device'] != 2 ? 'flex' : 'none') . " !important;
         }
         .isimb-6310-annotation-box-wrapper-{$ids} .isimb-6310-zoom-buttons img{
            width: " . (isset($cssData['mobile_icon_size']) ? $cssData['mobile_icon_size'] : '25') . "px;
            height: " . (isset($cssData['mobile_icon_size']) ? $cssData['mobile_icon_size'] : '25') . "px;
            margin: 0 10px;
         }
      }
   ";
}

if ($admin_login && $image_zoom) {
   $customCSS .= "
      .isimb-6310-builder-box-{$ids} .isimb-6310-annotation-box-inner{
         cursor: grab;
      }
   ";
}

wp_register_style("isimb-6310-custom-code-" . esc_attr($ids) . "-css", "");
wp_enqueue_style("isimb-6310-custom-code-" . esc_attr($ids) . "-css");
wp_add_inline_style("isimb-6310-custom-code-" . esc_attr($ids) . "-css", $customCSS);

wp_enqueue_script('isimb-6310-output', plugins_url('assets/js/main-output-file.js', __FILE__), array('jquery'), TRUE);
wp_enqueue_script('isimb-6310-zoom-in-out-drag', plugins_url('assets/js/zoom-in-out-drag.js', __FILE__), array('jquery'), TRUE);
?>