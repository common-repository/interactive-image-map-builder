window.currentPoint = 0;
window.renderWidth = 0;
window.renderHeight = 0;

jQuery(document).ready(function () {
  //Add Point Modal
  jQuery("body").on("click", ".isimb-6310-add-point", function () {
    if (jQuery(".isimb-6310-main-image").attr("src") == "") {
      alert("Select upload image first");
      return;
    }
    jQuery("#isimb-6310-add-point .isimb-6310-templates").removeClass(
      "isimb-6310-hide"
    );

    jQuery("#isimb-6310-add-point").fadeIn(500);
    jQuery("body").css({
      overflow: "hidden",
    });
    isimb_6310_reset_fields();
    jQuery(
      `
      #isimb-6310-add-point .isimb-6310-section-view-mood-select:last
      `
    ).trigger("click");
    jQuery(
      `
      #isimb-6310-add-point .isimb-6310-section-select:last
      `
    ).trigger("click");
    jQuery(
      `
      #isimb-6310-add-point .isimb-6310-section-select:first
      `
    ).trigger("click");

    jQuery(
      `#isimb-6310-add-point .isimb-6310-tooltip-img:first-child, 
      #isimb-6310-add-point .toggle-tabs li:first-child, 
      #isimb-6310-add-point .isimb-6310_icon_type:first-child, 
      #isimb-6310-add-point .isimb-6310-section-select:first,
      #isimb-6310-add-point .isimb-6310-section-view-mood-select:first,
      #isimb-6310-add-point .isimb-6310-open-new-tab:first,
      #isimb-6310-add-point .isimb-6310-linking-area:first,
      #isimb-6310-add-point .isimb-6310_button_link:first,
      #isimb-6310-add-point .isimb-6310-open-popup:last,
      #isimb-6310-add-point .isimb-6310_link_title_type:last,
      #isimb-6310-add-point .isimb-6310_button_link:last,
      #isimb-6310-add-point .isimb-6310_popover_type:first
      `
    ).trigger("click");
    jQuery(".isimb-6310-tab-2, .isimb-6310-tab-3").addClass("isimb-6310-hide");

    isimb_6310_canvas_init("#isimb-6310-add-point");
    return false;
  });

  //Edit Point Modal
  jQuery("body").on(
    "click",
    ".isimb-6310-pol-loaded, .isimb-6310-main-svg .isimb-6310-pol-loaded-nested",
    function () {
      window.currentPoint =
        jQuery(this).attr("data-id") || jQuery(this).attr("data-nested-id");
      jQuery("#isimb-6310-edit-point").fadeIn();
      jQuery("body").css({
        overflow: "hidden",
      });
      setTimeout(function () {
        let jsonData = isimb_6310_set_json_data();
        isimb_6310_canvas_init("#isimb-6310-edit-point");
        setTimeout(function () {
          let cords = isimb_6310_create_area(
            jsonData.pointList,
            jsonData.imageWidth,
            jsonData.imageHeight,
            jQuery(".isimb-6310-canvas-wrapper canvas").width(),
            jQuery(".isimb-6310-canvas-wrapper canvas").height()
          );
          cords = cords.split(" ").join(",");
          jQuery("#isimb-6310-edit-point .isimb-6310-canvas-area").val(cords);

          jQuery("#isimb-6310-edit-point .isimb-6310-canvas-area").trigger(
            "change"
          );
        }, 600);
      }, 100);
      return false;
    }
  );

  // update data
  jQuery("body").on("click", ".isimb-6310-update-place-save", function () {
    updatePointerJson();
  });

  //Close Modal Script
  jQuery("body").on(
    "click",
    ".isimb-6310-close, .isimb-6310-btn-close",
    function () {
      jQuery(".isimb-6310-builder-box").html(
        jQuery(".isimb-6310-builder-box").html()
      );
      jQuery(`
            #isimb-6310-add-point,
            #isimb-6310-edit-point,
            #isimb-6310-all-nested-point,
            #isimb-6310-new-nested-point,
            #isimb-6310-edit-nested-point             
          `).fadeOut(500);
      jQuery("body").css({
        overflow: "initial",
      });
    }
  );

  jQuery(".toggle-tabs li").click(function () {
    let text = jQuery(this).text();
    if (text == "Nested Area (Pro version Only)") {
      if (confirm("Are you sure you want to save this changes and continue?")) {
        updatePointerJson();

        jQuery("#isimb-6310-all-nested-point").fadeIn();
        jQuery("body").css({
          overflow: "hidden",
        });
        jQuery(".isimb-6310-main-multiple-svg").html("");

        setTimeout(function () {
          let mainImg = jQuery(
            "#isimb-6310-all-nested-point .isimb-6310-modal-body-form"
          );
          window.renderWidth = Math.round(mainImg.width());
          window.renderHeight = Math.round(
            (mainImg.width() * window.orgHeight) / window.orgWidth
          );

          jQuery(".isimb-6310-main-multiple-svg")
            .attr("width", window.renderWidth)
            .attr("height", window.renderHeight);
          jQuery(".isimb-6310-main-multiple-svg").css({
            "background-size":
              window.renderWidth + "px " + window.renderHeight + "px",
          });
        }, 100);

        setTimeout(function () {
          //Generate Point
          let jsonData = JSON.parse(
            jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr("data-json")
          );
          let nestedList = jsonData.nestedList;
          if (nestedList.length) {
            for (let i = 0; i < nestedList.length; i++) {
              let cords = isimb_6310_create_area(
                nestedList[i].nestedArea,
                nestedList[i].nestedWidth,
                nestedList[i].nestedHeight,
                window.renderWidth,
                window.renderHeight
              );
              jQuery(
                "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
              ).append(
                `<polygon data-nested-id='${window.currentPoint}' class='isimb-6310-pol-loaded-nested isimb-6310-pol-nested-${window.currentPoint}-${nestedList[i].nestedId}' data-nested-unique-id='${window.currentPoint}-${nestedList[i].nestedId}' points="${cords}" />`
              );
            }
            jQuery(
              "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
            );

            let styleCSS = `
                #isimb-6310-all-nested-point polygon[data-nested-id='${window.currentPoint}']{
                  fill: ${jsonData.selectAreaColor} !important;
                  stroke:${jsonData.areaBorderColor} !important;
                  stroke-width:${jsonData.areaBorderSize}px !important;
                }
              `;
            jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(
              `body`
            );
          }

          jQuery(
            "#isimb-6310-all-nested-point .isimb-6310-modal-body-form"
          ).html(
            jQuery(
              "#isimb-6310-all-nested-point .isimb-6310-modal-body-form"
            ).html()
          );
        }, 1000);

        return false;
      }
    } else {
      let id = jQuery(this).attr("data-id");
      jQuery(".toggle-tabs li").removeClass("active-tab");
      jQuery(this).addClass("active-tab");
      jQuery(".isimb-6310-tab").addClass("isimb-6310-hide");
      jQuery(`.isimb-6310-tab-${id}`).removeClass("isimb-6310-hide");
    }
  });

  jQuery("body").on("click", ".isimb-6310-remove", function () {
    if (confirm("Are you sure you want to Delete?")) {
      if (jQuery(this).closest("#isimb-6310-edit-nested-point").length) {
        jQuery(
          `polygon[data-nested-unique-id='${window.currentNestedPoint}']`
        ).remove();
        jQuery(
          `#isimb-6310-edit-nested-point, #isimb-6310-all-nested-point`
        ).fadeOut(500);

        let nestedList = [];
        let ids = window.currentNestedPoint.split("-")[1];

        let json = JSON.parse(
          jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr("data-json")
        );
        json.nestedList = json.nestedList || [];
        if (json.nestedList.length > 1) {
          for (let i = 0; i < json.nestedList.length; i++) {
            if (json.nestedList[i].nestedId != ids) {
              nestedList.push(json.nestedList[i]);
            }
          }
        }

        json.nestedList = nestedList;
        jQuery(
          `.isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}`
        ).attr("data-json", JSON.stringify(json));
      } else {
        jQuery(
          `.isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}, .isimb-6310-main-svg polygon[data-nested-id='${window.currentPoint}']`
        ).remove();
        jQuery(`#isimb-6310-edit-point`).fadeOut(500);
      }
      jQuery("body").css({ overflow: "initial" });
    }
    return false;
  });
  jQuery("body").on("click", ".isimb-6310-undo", function () {
    let ids = jQuery(this).closest(".isimb-6310-modal").attr("id");
    let selector = jQuery(`#${ids} .isimb-6310-canvas-area`);
    if (!selector.length) {
      selector = jQuery(`#${ids} .isimb-6310-canvas-area-nested-edit`);
      if (!selector.length) {
        selector = jQuery(`#${ids} .isimb-6310-canvas-area-nested`);
      }
    }

    let point = selector.val();
    if (point) {
      let pointList = point.split(",");
      if (pointList.length) {
        pointList.splice(pointList.length - 2, 2);
        if (pointList.length) {
          selector.val(pointList.join(","));
        } else {
          selector.val("");
        }
        selector.trigger("change");
      }
    }
  });
});

function ConfirmDelete() {}

function updatePointerJson() {
  jQuery("#isimb-6310-edit-point .isimb-6310-section-view-mood-select").val();
  let elementType = Number(
    jQuery("#isimb-6310-edit-point .isimb-6310-section-select").val()
  );
  if (elementType == 0) {
    alert("Please select element type");
    jQuery(".isimb-6310-section-select").focus();
    return;
  }
  let canvasArea = jQuery(
    "#isimb-6310-edit-point .isimb-6310-canvas-area"
  ).val();

  let jsonObj = isimb_6310_set_generate_json_data("#isimb-6310-edit-point ");

  let jsonObjParse = JSON.stringify(jsonObj);
  let cords = isimb_6310_create_area(
    canvasArea,
    jsonObj.imageWidth,
    jsonObj.imageHeight,
    window.orgWidth,
    window.orgHeight
  );
  jQuery(
    `.isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}`
  ).remove();
  let html = `
      <polygon data-id="${window.currentPoint}" class="isimb-6310-pol-loaded isimb-6310-pol-${window.currentPoint}" points="${cords}" />
    `;
  let styleCSS = `
    .isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}{
      fill: ${jsonObj.selectAreaColor} !important;
      stroke:${jsonObj.areaBorderColor} !important;
      stroke-width:${jsonObj.areaBorderSize}px !important;
    }
    .isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}:hover{
      fill: ${jsonObj.selectAreaHoverColor} !important;
      stroke:${jsonObj.areaBorderHoverColor} !important;
      stroke-width:${jsonObj.areaBorderSize}px !important;
      cursor: pointer;
      filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
    }
  `;
  jQuery(".isimb-6310-main-svg").append(html);
  jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr(
    "data-json",
    jsonObjParse
  );
  jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(
    `.isimb-6310-builder-box`
  );

  jQuery("#isimb-6310-edit-point").fadeOut(500);
  jQuery("body").css({
    overflow: "initial",
  });
  jQuery(".isimb-6310-builder-box").html(
    jQuery(".isimb-6310-builder-box").html()
  );
  jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr(
    "data-json",
    jsonObjParse
  );

  jQuery(".isimb-6310-canvas-area").val("");
}
