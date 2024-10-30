<div class="isimb_6310_tabs_panel_settings">
  <form method="post">
    <?php wp_nonce_field("isimb_6310_nonce_field_form") ?>
    <input type="hidden" name="id" value="<?php echo esc_attr($ids) ?>" />
    <input type="hidden" name="main_image" value="<?php echo isset($cssData['main_image']) ? esc_attr($cssData['main_image']) : '' ?>" />
    <input type="hidden" name="json_data" id="isimb_6310_json_field" value="<?php echo isset($cssData['json_data']) ? esc_attr($cssData['json_data']) : '' ?>" />
    <div class="isimb-6310-tab-content">
      <div id="tab-1">
        <div class="row isimb_6310_padding_15_px">
          <h3 class="isimb-6310-tab-menu-settings">Image Map Builder Settings</h3>
          <div class="isimb-6310-col-50">
            <table class="table table-responsive isimb_6310_admin_table">
              <tr height="45">
                <td>
                  <b>Shortcode Name</b>
                </td>
                <td>
                  <input type="text" class="isimb-6310-form-input" required autocomplete="off" name="name" placeholder="Enter builder name" value="<?php echo isset($styledata['name']) ? isimb_6310_replace(esc_attr($styledata['name'])) : 'Image Map Builder' ?>">
                </td>
              </tr>
              <tr height="45">
                <td>
                  <b>Tooltip Position</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <select name="tooltip_position" class="isimb-6310-form-input">
                    <?php
                    $arr = ['Auto Adjust', 'Top Right', 'Center Right', 'Bottom Right', 'Top Left', 'Center Left', 'Bottom Left'];
                    $tooltip_position  = isset($cssData['tooltip_position']) ? esc_attr($cssData['tooltip_position']) : 0;
                    foreach ($arr as $key => $value) {
                      $selected = $key == $tooltip_position ? ' selected' : '';
                      echo "<option value='{$key}'{$selected}>{$value}</option>";
                    }
                    ?>
                  </select>
                </td>
              </tr>
              <tr height="45" class="tooltip-attribute">
                <td>
                  <b class="tooltip-attribute-text-1">From Top</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <input type="number" class="isimb-6310-form-input" required autocomplete="off" name="top_bottom" value="<?php echo isset($cssData['top_bottom']) ? esc_attr($cssData['top_bottom']) : 0 ?>">
                </td>
              </tr>
              <tr height="45" class="tooltip-attribute">
                <td>
                  <b class="tooltip-attribute-text-2">From Right</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <input type="number" class="isimb-6310-form-input" required autocomplete="off" name="left_right" value="<?php echo isset($cssData['left_right']) ? esc_attr($cssData['left_right']) : 0 ?>">
                </td>
              </tr>
              <tr height="45">
                <td>
                  <b>Custom CSS</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <textarea class="isimb-6310-form-input" name="custom_css" rows="4"><?php echo isset($cssData['custom_css']) ? esc_attr($cssData['custom_css']) : '' ?></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div class="isimb-6310-col-50">
            <table class="table table-responsive isimb_6310_admin_table">
              <tr height="50">
                <td>
                  <b>Display Zoom Feature:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <input type="radio" name="zoom_feature" value="1" checked>No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio" name="zoom_feature" value="2" <?php echo isset($cssData['zoom_feature']) && ($cssData['zoom_feature'] == 2) ? ' checked' : '' ?>>Yes
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Display Device Type:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <select name="display_device" class="isimb-6310-form-input">
                    <option value="1">Only Mobile</option>
                    <option value="2" <?php echo isset($cssData['display_device']) && ($cssData['display_device'] == 2) ? ' selected' : '' ?>>Only Desktop</option>
                    <option value="3" <?php echo isset($cssData['display_device']) && ($cssData['display_device'] == 3) ? ' selected' : '' ?>>Both Desktop & Mobile</option>
                  </select>
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Zoom In Icon:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td style="display: flex; align-items: center; padding-top: 10px">
                  <input type="hidden" name="zoom_in_icon" value="<?php echo isset($cssData['zoom_in_icon']) && $cssData['zoom_in_icon'] ? esc_attr($cssData['zoom_in_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-in.png' ?>" />
                  <img src="<?php echo isset($cssData['zoom_in_icon']) && $cssData['zoom_in_icon'] ? esc_attr($cssData['zoom_in_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-in.png'; ?>" alt="" width="30" height="30">
                  <button class="isimb-6310-btn-success isimb-6310-zoom-icon">Upload Icon</button>
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Zoom Out Icon:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td style="display: flex; align-items: center; padding-top: 10px">
                  <input type="hidden" name="zoom_out_icon" value="<?php echo isset($cssData['zoom_out_icon']) && $cssData['zoom_out_icon'] ? esc_attr($cssData['zoom_out_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-out.png' ?>" />
                  <img src="<?php echo isset($cssData['zoom_out_icon']) && $cssData['zoom_out_icon'] ? esc_attr($cssData['zoom_out_icon']) : isimb_6310_plugin_dir_url . 'assets/images/zoom-out.png' ?>" alt="" width="30" height="30">
                  <button class="isimb-6310-btn-success isimb-6310-zoom-icon">Upload Icon</button>
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Desktop Icon Size:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <input type="number" class="isimb-6310-form-input" name="desktop_icon_size" value="<?php echo isset($cssData['desktop_icon_size']) ? esc_attr($cssData['desktop_icon_size']) : '30' ?>" />
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Mobile Icon Size:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <input type="number" class="isimb-6310-form-input" name="mobile_icon_size" value="<?php echo isset($cssData['mobile_icon_size']) ? esc_attr($cssData['mobile_icon_size']) : '25' ?>" />
                </td>
              </tr>
              <tr height="50" class="toggle-zoom-feature">
                <td>
                  <b>Icon Position:</b>
                  <span class="isimb-6310-pro">(Pro) <div class="isimb-6310-pro-text">This feature is available only on the pro version. You can view changes once logged in as admin or moderator.</div></span>
                </td>
                <td>
                  <select name="icon_position" class="isimb-6310-form-input">
                    <option value="flex-start">Left</option>
                    <option value="center" <?php echo isset($cssData['icon_position']) && ($cssData['icon_position'] == 'center') ? ' selected' : '' ?>>Center</option>
                    <option value="flex-end" <?php echo isset($cssData['icon_position']) && ($cssData['icon_position'] == 'flex-end') ? ' selected' : '' ?>>Right</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <input type="submit" name="update_style_change" value="Save" class="isimb-6310-btn-primary isimb-6310-pull-right isimb-6310-insert-ja-data" style="margin-right: 15px; margin-bottom: 10px; display: block" />
      <br class="isimb-6310-clear" />
    </div>
  </form>
</div>