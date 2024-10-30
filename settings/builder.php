<div class="isimb-6310">
  <div class="isimb-6310-sm">
    <?php
    include isimb_6310_plugin_url . 'settings/save.php';
    include isimb_6310_plugin_url . "settings/form.php";
    ?>
    <div class="isimb-6310-preview-box">
      <div class="isimb-6310-preview">
      
        <button class="isimb-6310-btn-success isimb-6310-upload-image">Upload Image</button>
        <button class="isimb-6310-btn-success isimb-6310-add-point">Add Point</button>

        <?php
        if(isset($_GET['styleid'])) {
            echo '<div class="shortcode">Shortcode <input type="text" class="isimb-6310-6330-shortcode" onclick="this.setSelectionRange(0, this.value.length)" value="[isimb_6310_builder id=&quot;'.esc_attr($_GET['styleid']).'&quot;]"></div>';
          }
        ?>
        <hr />
      </div>
      <div class="isimb-6310-builder-box">
        <svg class="isimb-6310-main-svg" width="0" height="0">
          <?php
            if ($jsonData) {
              $counter = 1;
              foreach ($jsonData as $js) {
                $jsonCode = json_encode($js); 
                echo "<polygon data-id='{$counter}' class='isimb-6310-pol-loaded isimb-6310-pol-{$counter}' data-json='".esc_attr($jsonCode)."' />";
                $pointCssCode = "
                  .isimb-6310-main-svg .isimb-6310-pol-{$counter}{
                    fill: ".esc_attr($js->selectAreaColor)." !important;
                    stroke:".esc_attr($js->areaBorderColor)." !important;
                    stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                  }
                  .isimb-6310-main-svg .isimb-6310-pol-{$counter}:hover{
                    fill: ".esc_attr($js->selectAreaHoverColor)." !important;
                    stroke:".esc_attr($js->areaBorderHoverColor)." !important;
                    stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                    cursor: pointer;
                    filter: drop-shadow(0px 0px ". (isset($js->areaShadowith) ? esc_attr($js->areaShadowith) : 0) ."px ". (isset($js->areaShadowColor) ? esc_attr($js->areaShadowColor) : '#FFF') .");
                  }
                ";
                wp_register_style( "isimb-6310-template-{$counter}-css", "" );
                wp_enqueue_style( "isimb-6310-template-{$counter}-css" );
                wp_add_inline_style( "isimb-6310-template-{$counter}-css", $pointCssCode );
                
                //Nested Code
                if(isset($js->nestedList)){
                  $nestedList = $js->nestedList;
                  foreach($nestedList as $nl){
                    $counter2 = $nl->nestedId;
                    echo "<polygon data-nested-id='{$counter}' class='isimb-6310-pol-loaded-nested isimb-6310-pol-nested-{$counter}-{$counter2}' data-nested-unique-id='{$counter}-{$counter2}' />";
                        $pointCssCode = "
                        .isimb-6310-pol-nested-{$counter}-{$counter2}{
                          fill: ".esc_attr($js->selectAreaColor)." !important;
                          stroke:".esc_attr($js->areaBorderColor)." !important;
                          stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                        }
                        .isimb-6310-pol-nested-{$counter}-{$counter2}:hover{
                          fill: ".esc_attr($js->selectAreaHoverColor)." !important;
                          stroke:".esc_attr($js->areaBorderHoverColor)." !important;
                          stroke-width:".esc_attr($js->areaBorderSize)."px !important;
                          cursor: pointer;
                          filter: drop-shadow(0px 0px ". (isset($js->areaShadowith) ? esc_attr($js->areaShadowith) : 0) ."px ". (isset($js->areaShadowColor) ? esc_attr($js->areaShadowColor) : '#FFF') .");
                        }
                      ";
                    wp_register_style( "isimb-6310-pol-nested-{$counter}-{$counter2}-css", "" );
                    wp_enqueue_style( "isimb-6310-pol-nested-{$counter}-{$counter2}-css" );
                    wp_add_inline_style( "isimb-6310-pol-nested-{$counter}-{$counter2}-css", $pointCssCode );
                    $counter2++;
                  }
                }
                $counter++;           
              }
            }
          ?>
        </svg>
        <img src="<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>" class="isimb-6310-main-image" />
        <?php
        $pointCssCode = "
          .isimb-6310-main-svg, .isimb-6310-main-multiple-svg{
            background-image: url(".(isset($cssData['main_image']) ? $cssData['main_image'] : '').");
          }
        ";
        wp_register_style( "isimb-6310-template-main-css", "" );
        wp_enqueue_style( "isimb-6310-template-main-css" );
        wp_add_inline_style( "isimb-6310-template-main-css", $pointCssCode );
        ?>
      </div>
    </div>
  </div>