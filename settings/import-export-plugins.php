<?php
if (!defined('ABSPATH'))
   exit;
?>
<div class="isimb-6310">
   <h1>Plugin Export / Import</h1>

   <button class="isimb-6310-btn-primary" id="export-image-map-builder-data">Export Plugin Data</button>
   <button class="isimb-6310-btn-primary" id="import-image-map-builder-data">Import Plugin Data (Pro)</button>
   <?php

   wp_enqueue_media();
   isimb_6310_export_full_map_builder_plugin();
   ?>
   <form action="" method="post">
      <?php wp_nonce_field("isimb-6310-nonce-update") ?>
      <div class="isimb-6310-modal-body-form">
         <table width="100%" cellpadding="10" cellspacing="0" class="import-file" style="display: none">
            <tr>
               <td width="70px"><b>File URL</b></td>
               <td>
                  <input type="text" required name="file_url" id="file-url" class="isimb-6310-form-input" style="width: 300px;">
                  <input type="button" id="upload-csv-file" value="Upload file" class="isimb-6310-btn-default">
               </td>
            </tr>
            <tr>
               <td colspan="3">
                  <input type="submit" name="update" class="isimb-6310-btn-primary isimb-6310-margin-right-10" value="Import Data"  onclick="return confirm('If you import you will lose all of your previous data of this plugin. Do you want to continue?');" />
               </td>
            </tr>
         </table>
      </div>
      <br class="isimb-6310-clear" />
   </form>
   <script>
      jQuery(document).ready(function() {
         /* ######### Media Start ########### */
         jQuery("body").on("click", "#import-image-map-builder-data", function(e) {
            alert('Import option available in pro version only.');
            return;
         });

         jQuery('body').on('click', '#export-image-map-builder-data', function(){
            var url = jQuery('#export-image-map-builder-plugin').attr('href');
            if(url == '#'){
               alert('No data available for export. Please create and configure the shortcode first before attempting to export the data.');
               return;
            }
            else if (!confirm("Do you want to export the Interactive Image Map Builder plugin data?")){
               return false;
            } else{
               window.open(url, '_blank');
            }
         });

         jQuery("body").on("click", "#upload-csv-file", function(e) {
            e.preventDefault();
            var image = wp.media({
                  title: 'Upload File',
                  multiple: false
               }).open()
               .on('select', function(e) {
                  var uploaded_image = image.state().get('selection').first();
                  var image_url = uploaded_image.toJSON().url;
                  jQuery("#file-url").val(image_url);
               });

            jQuery("#isimb_6310_add_new_media").css({
               "overflow-x": "hidden",
               "overflow-y": "auto"
            });
         });
      });
   </script>