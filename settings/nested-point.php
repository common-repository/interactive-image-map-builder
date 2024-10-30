<div id="isimb-6310-all-nested-point" class="isimb-6310-modal isimb-6310-hide">
  <div class="isimb-6310-modal-content isimb-6310-modal-lg">
    <div class="isimb-6310-modal-header">
      Nested Marker

      <button class="isimb-6310-btn-success isimb-6310-new-nested-point">New Nested Marker</button>
      <span style="color: #FFF; font-size: 14px; margin-left: 20px">Nested market will work on pro version only</span>
      <div class="isimb-6310-close">&times;</div>
    </div>

    <div class="toggle-wrap">
      <div class="isimb-6310-modal-body-form">
        <svg class="isimb-6310-main-multiple-svg" width="0" height="0"></svg>
      </div>
    </div>
    <div class="isimb-6310-modal-form-footer">
      <button type="button" name="close"
        class="isimb-6310-btn-danger isimb-6310-btn-close isimb-6310-pull-right">Close</button>
    </div>
    <br class="isimb-6310-clear" />
  </div>
</div>

<div id="isimb-6310-new-nested-point" class="isimb-6310-modal isimb-6310-hide">
  <div class="isimb-6310-modal-content isimb-6310-modal-lg">
    <div class="isimb-6310-modal-header">
      New Nested Marker
      <span style="color: #FFF; font-size: 14px; margin-left: 20px">Nested market will work on pro version only</span>
      <div class="isimb-6310-close">&times;</div>
    </div>
    <div class="toggle-wrap">
      <div class="isimb-6310-modal-body-form">
        <div class="tabbed-content-wrap">
          <table border="0" width="100%" cellpadding="10" cellspacing="0"></table>
          <input type="text"
            isimb-6310-image-url='<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>'
            class="isimb-6310-canvas-area-nested" />
          <div class="isimb-6310-canvas-wrapper"></div>
        </div>
      </div>
    </div>
    <div class="isimb-6310-modal-form-footer">
      <button type="button" name="close"
        class="isimb-6310-btn-danger isimb-6310-btn-close isimb-6310-pull-right">Close</button>
      <input type="submit" name="submit"
        class="isimb-6310-btn-primary isimb-6310-pull-right isimb-6310-margin-right-10 isimb-6310-add-place-nested-save"
        value="Save" />
    </div>
    <br class="isimb-6310-clear" />
  </div>
</div>

<div id="isimb-6310-edit-nested-point" class="isimb-6310-modal isimb-6310-hide">
  <div class="isimb-6310-modal-content isimb-6310-modal-lg">
    <div class="isimb-6310-modal-header">
      Edit Marker Settings
      <span style="color: #FFF; font-size: 14px; margin-left: 20px">Nested market will work on pro version only</span>
      <div class="isimb-6310-close">&times;</div>
    </div>

    <div class="toggle-wrap">

      <div class="isimb-6310-modal-body-form">
        <div class="tabbed-content-wrap">
          <button class="isimb-6310-remove" onclick="ConfirmDelete()"><i class="fas fa-trash"></i>Delete</button>
          <input type="text"
            isimb-6310-image-url='<?php echo isset($cssData['main_image']) ? $cssData['main_image'] : '' ?>'
            class="isimb-6310-canvas-area-nested-edit" />
          <div class="isimb-6310-canvas-wrapper"></div>
        </div>
      </div>
      <div class="isimb-6310-modal-form-footer">
        <button type="button" name="close"
          class="isimb-6310-btn-danger isimb-6310-btn-close isimb-6310-pull-right">Close</button>
        <input type="submit" name="submit"
          class="isimb-6310-btn-primary isimb-6310-pull-right isimb-6310-margin-right-10 isimb-6310-update-place-save-nested"
          value="Done" />
      </div>
      <br class="isimb-6310-clear" />
    </div>
  </div>