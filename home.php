<?php
if (! defined('ABSPATH')) {
    exit;
}
if (! current_user_can('manage_options')) {
    wp_die(__('You do not have sufficient permissions to access this page.'));
}

if (! empty($_POST['delete']) && isset($_POST['id']) && is_numeric($_POST['id'])) {
    $nonce = $_REQUEST['_wpnonce'];
    if (! wp_verify_nonce($nonce, 'tss_nonce_field_delete')) {
        die('You do not have sufficient permissions to access this page.');
    } else {
        $id = (int) sanitize_text_field($_POST['id']);
        $wpdb->query($wpdb->prepare("DELETE FROM {$style_table} WHERE id = %d", $id));
    }
}
if (!empty($_POST['duplicate']) && isset($_POST['id']) && is_numeric($_POST['id'])) {
    $nonce = $_REQUEST['_wpnonce'];
    if (!wp_verify_nonce($nonce, 'isimb_6310_nonce_field_duplicate')) {
      die('You do not have sufficient permissions to access this page.');
    } else {
      $id = (int) $_POST['id'];
      $selectedData = $wpdb->get_row($wpdb->prepare("SELECT * FROM $style_table WHERE id = %d ", $id), ARRAY_A);
      $dupList = array(
              $selectedData['name'], 
              $selectedData['style_name'], 
              $selectedData['css'],           
              $selectedData['itemids']);
      $wpdb->query($wpdb->prepare("INSERT INTO {$style_table} (name, style_name, css,itemids) VALUES ( %s, %s, %s, %s )", $dupList));
    }
  }

?>

<h3>Image builder</h3>
<button class="isimb-6310-btn-success isimb-6310-add-new-button"><a href="<?php echo admin_url("admin.php?page=isimb-6310-image-map-builder&action=preview") ?>">Add New</a></button>

<table class="isimb-6310-table">
   <tr  style="background-color: #f5f5f5">
      <td style="width: 130px">Service Name</td>
      <td>Shortcode</td>
      <td style="width: 130px">Manage</td>
   </tr>
   <?php
   $data = $wpdb->get_results('SELECT * FROM '.$style_table.' ORDER BY id DESC', ARRAY_A);
   foreach ($data as $value) {
       echo '<tr class="isimb-6310-row-select">';
       echo '<td>'.isimb_6310_replace(esc_attr($value['name'])).'</td>';
       echo '<td><span>Shortcode <input type="text" class="isimb-6310-6330-shortcode" onclick="this.setSelectionRange(0, this.value.length)" value="[isimb_6310_builder id=&quot;'.esc_attr($value['id']).'&quot;]"></span>';
       echo '<td>
              <a href="'.admin_url("admin.php?page=isimb-6310-image-map-builder&action=preview&styleid=".esc_attr($value['id'])).'" title="Edit"  class="isimb-6310-btn-success isimb-6310-margin-right-10 isimb-6310-first"><i class="fas fa-edit" aria-hidden="true"></i></a>
            <form method="post">
               '.wp_nonce_field('tss_nonce_field_delete').'
                     <input type="hidden" name="id" value="'.esc_attr($value['id']).'">
                     <button class="isimb-6310-btn-danger isimb-6310-third"  title="Delete"  type="submit" value="delete" name="delete" onclick="return confirm(\'Do you want to delete?\');"><i class="far fa-times-circle" aria-hidden="true"></i></button>
            </form>
            
         </td>';
       echo ' </tr>';
   }
   ?>
</table>