<div id="isimb-6310-edit-point" class="isimb-6310-modal isimb-6310-hide">
  <div class="isimb-6310-modal-content isimb-6310-modal-lg">
    <div class="isimb-6310-modal-header">
      Edit Marker Settings
      <div class="isimb-6310-close">&times;</div>
    </div>

    <div class="toggle-wrap">
      <ul class="toggle-tabs">
        <li data-id="1" class="active-tab">Select Area</li>
        <li data-id="4">Area Style </li>
        <li data-id="2">Content</li>
        <li data-id="5">Nested Area (Pro version Only)</li>
        <span style="color: red; font-size: 14px; line-height: 48px; margin-left: 20px">
              In free version, you can add maximum four  area/polygon.
        </span>
      </ul>

      <div class="isimb-6310-modal-body-form">
        <div class="tabbed-content-wrap">
          <div class="isimb-6310-tab isimb-6310-tab-1">
            <table border="0" width="100%" cellpadding="10" cellspacing="0"></table>
            <button class="isimb-6310-remove" onclick="ConfirmDelete()"><i class="fas fa-trash"></i>Delete</button>
            <input type="hidden"
              isimb-6310-image-url='<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>'
              class="isimb-6310-canvas-area" />
            <div class="isimb-6310-canvas-wrapper"></div>
          </div>
          <div class="isimb-6310-tab isimb-6310-tab-2">
            <table border="0" width="100%" cellpadding="10" cellspacing="0">
              <tr>
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label">View Mood:</label></td>
                <td>
                  <input class='isimb-6310-section-view-mood-select' value='1' type="radio" name="view_mood_section"
                    checked />Tooltip
                  <input class='isimb-6310-section-view-mood-select' value='2' type="radio"
                    name="view_mood_section">Modal
                </td>
              </tr>
            </table>
            <table border="0" width="100%" cellpadding="10" cellspacing="0">
              <tr class="isimb-6310-model-content">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="picture">Modal
                    Content:</label></td>
                <td>
                  <input type="text" data-value="Tooltip text" class="isimb_6310_modal_content">
                </td>
              </tr>
              <tr class="isimb-6310-model-content">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="picture">Modal Content Font
                    Size:</label></td>
                <td>
                  <input type="number" name="isimb_6310_modal_content_font_size" id="isimb_6310_modal_content_font_size"
                    class="isimb-6310-form-input isimb_6310_modal_content_font_size" data-value="16">
                </td>
                </td>
              </tr>
              <tr class="isimb-6310-model-content">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="picture">Modal Content
                    Color:</label></td>
                <td>
                  <input type="text" name="isimb_6310_modal_content_color"
                    class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_modal_content_color"
                    data-format="rgb" data-value="rgb(255, 255, 255)">
                </td>
                </td>
              </tr>
              <tr class="isimb-6310-model-content">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="picture">Modal Content
                    Background Color:</label></td>
                <td>
                  <input type="text" name="isimb_6310_modal_content_background_color"
                    class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_modal_content_background_color"
                    data-format="rgb" data-value="rgb(255, 255, 255)" data-opacity="0.8">
                </td>
              </tr>
              <tr>
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label">Element Type:</label></td>
                <td>
                  <input class='isimb-6310-section-select' value='1' type="radio" name="popover_new" checked />Tooltip
                  <span class='isimb-6310-embedded-input'>
                    <input class='isimb-6310-section-select isimb-6310-section-embedded' value='2' type="radio"
                      name="popover_new">Embedded code
                  </span>
                  <input class='isimb-6310-section-select' value='3' type="radio" name="popover_new">Custom Code
                </td>
              </tr>
            </table>
            <div class="isimb-6310-templates isimb-6310-hide">
              <table border="0" width="100%" cellpadding="10" cellspacing="0">
                <tr class="">
                  <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="picture"> Select
                      Template:</label></td>
                  <td>
                    <div class="isimb-6310-tooltip_img_section">
                      <div class="isimb-6310-tooltip-img isimb-6310-type-1" data-id='01'>
                        <img src="<?php echo isimb_6310_plugin_dir_url . 'assets/images/1.png' ?>"
                          data-template='template-01' alt="First Img">
                      </div>
                      <div class="isimb-6310-tooltip-img isimb-6310-type-2 " data-id='02'>
                        <img src="<?php echo isimb_6310_plugin_dir_url . 'assets/images/2.png' ?>" alt="First Img">
                      </div>
                      <div class="isimb-6310-tooltip-img isimb-6310-type-1" data-id='03'>
                        <img src="<?php echo isimb_6310_plugin_dir_url . 'assets/images/3.png' ?>" alt="First Img">
                      </div>
                      <div class="isimb-6310-tooltip-img isimb-6310-type-1" data-id='04'>
                        <img src="<?php echo isimb_6310_plugin_dir_url . 'assets/images/4.png' ?>" alt="First Img">
                      </div>
                      <div class="isimb-6310-tooltip-img isimb-6310-type-1 " data-id='05'>
                        <img src="<?php echo isimb_6310_plugin_dir_url . 'assets/images/5.png' ?>" alt="First Img">
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <?php include isimb_6310_plugin_url . "settings/template-settings.php"; ?>
          </div>

          <div class="isimb-6310-tab isimb-6310-tab-4">
            <table border="0" width="50%" cellpadding="10" cellspacing="0">
              <tr height="40px" class="isimb-6310-form-icon isimb-6310-marker isimb-6310-marker-type-1">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="icons">Area Color:</label>
                </td>
                <td>
                  <input type="text" name="isimb_6310_select_area_color"
                    class="isimb_6310_select_area_color isimb-6310-form-input isimb_6310_color_picker" data-format="rgb"
                    data-opacity="0.8" data-value="rgba(255, 13, 0, 0.5)">
                </td>
              </tr>
              <tr height="40px" class="isimb-6310-form-icon isimb-6310-marker isimb-6310-marker-type-1">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="icons">Area Hover
                    Color:</label></td>
                <td>
                  <input type="text" name="isimb_6310_select_area_hover_color"
                    class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_select_area_hover_color"
                    data-format="rgb" data-opacity="0.8" data-value="rgba(255, 13, 0, 0.5)">
                </td>
              </tr>
              <tr height="40px" class="isimb-6310-form-icon isimb-6310-marker isimb-6310-marker-type-1">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="icons">Border size:</label>
                </td>
                <td>
                  <input type="number" min='0' max="" name="isimb-6310_area_border_size"
                    class="isimb-6310-form-input isimb-6310_area_border_size" data-value="2">
                </td>
              </tr>
              <tr class="isimb-6310-marker isimb-6310-marker-type-1">
                <td><label class="isimb-6310-form-label" for="icons">Border Color:</label></td>
                <td>
                  <input type="text" class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_area_border_color"
                    data-format="rgb" data-opacity="0.8" data-value="rgb(255, 255, 255)">
                </td>
              </tr>
              <tr class="isimb-6310-marker isimb-6310-marker-type-1">
                <td><label class="isimb-6310-form-label" for="icons">Border Hover Color:</label></td>
                <td>
                  <input type="text"
                    class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_area_border_hover_color"
                    data-format="rgb" data-opacity="0.8" data-value="rgb(255, 255, 255)">
                </td>
              </tr>
              <tr height="40px" class="isimb-6310-marker isimb-6310-marker-type-1">
                <td class='isimb-6310-width-150'><label class="isimb-6310-form-label" for="icons">Hover shadow
                    width:</label></td>
                <td>
                  <input type="number" min='0' max="" name="isimb-6310_area_shadow_width"
                    class="isimb-6310-form-input isimb-6310_area_shadow_width" data-value="5">
                </td>
              </tr>
              <tr>
              <tr class="isimb-6310-marker isimb-6310-marker-type-1">
                <td><label class="isimb-6310-form-label" for="icons">Hover shadow color:</label></td>
                <td>
                  <input type="text"
                    class="isimb-6310-form-input isimb_6310_color_picker isimb_6310_area_shadow_hover_color"
                    data-format="rgb" data-opacity=".8" data-value="rgba(0, 0, 0, 0.99)">
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="isimb-6310-modal-form-footer">
      <button type="button" name="close"
        class="isimb-6310-btn-danger isimb-6310-btn-close isimb-6310-pull-right">Close</button>
      <input type="submit" name="submit"
        class="isimb-6310-btn-primary isimb-6310-pull-right isimb-6310-margin-right-10 isimb-6310-update-place-save"
        value="Done" />
    </div>
    <br class="isimb-6310-clear" />
  </div>
</div>

<?php include isimb_6310_plugin_url . "settings/nested-point.php"; ?>
