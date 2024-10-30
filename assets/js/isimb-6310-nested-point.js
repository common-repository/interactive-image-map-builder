window.currentNestedPoint = 0;
jQuery(document).ready(function () {
  isimb_6310_polygon_color_change();

  jQuery("body").on("click", ".isimb-6310-new-nested-point", function () {
    jQuery("#isimb-6310-all-nested-point").fadeOut();
    jQuery("#isimb-6310-new-nested-point").fadeIn();
    jQuery("body").css({
      overflow: "hidden",
    });
    isimb_6310_canvas_init(
      "#isimb-6310-new-nested-point",
      "isimb-6310-canvas-area-nested"
    );
    setTimeout(function () {
      jQuery("#isimb-6310-new-nested-point .isimb-6310-clear").trigger("click");
    }, 100);
    return false;
  });

  jQuery("body").on("click", ".isimb-6310-add-place-nested-save", function () {
    let canvasArea = jQuery(".isimb-6310-canvas-area-nested").val();
    if (!canvasArea) {
      alert("Please select area first");
      return;
    }

    let nestedWidth = jQuery(
      "#isimb-6310-new-nested-point .isimb-6310-canvas"
    ).attr("width");
    let nestedHeight = jQuery(
      "#isimb-6310-new-nested-point .isimb-6310-canvas"
    ).attr("height");

    let json = JSON.parse(
      jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr("data-json")
    );
    let nestedId = 0;
    if (json.nestedList.length) {
      for (let i = 0; i < json.nestedList.length; i++) {
        if (Number(json.nestedList[i].nestedId) > nestedId) {
          nestedId = Number(json.nestedList[i].nestedId);
        }
      }
    }
    nestedId++;

    let newObj = {
      nestedId: Number(nestedId),
      nestedArea: canvasArea,
      nestedWidth: nestedWidth,
      nestedHeight: nestedHeight,
    };

    json.nestedList = json.nestedList || [];
    json.nestedList.push(newObj);

    jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr(
      "data-json",
      JSON.stringify(json)
    );

    let cords = isimb_6310_create_area(
      canvasArea,
      nestedWidth,
      nestedHeight,
      window.orgWidth,
      window.orgHeight
    );

    let html = `<polygon data-nested-id='${window.currentPoint}' data-nested-unique-id='${window.currentPoint}-${nestedId}' class='isimb-6310-pol-loaded-nested isimb-6310-pol-nested-${window.currentPoint}-${nestedId}' points="${cords}" />`;
    let styleCSS = `
                #isimb-6310-all-nested-point polygon[data-nested-id='${window.currentPoint}']{
                  fill: ${json.selectAreaColor} !important;
                  stroke:${json.areaBorderColor} !important;
                  stroke-width:${json.areaBorderSize}px !important;
                }
              `;
    jQuery(".isimb-6310-main-svg").append(html);
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(`body`);

    jQuery(".isimb-6310-main-svg").html(jQuery(".isimb-6310-main-svg").html());

    jQuery(`
            #isimb-6310-add-point,
            #isimb-6310-edit-point,
            #isimb-6310-all-nested-point,
            #isimb-6310-new-nested-point             
          `).fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
  });

  //Edit Point Modal
  jQuery("body").on(
    "click",
    ".isimb-6310-main-multiple-svg .isimb-6310-pol-loaded-nested",
    function () {
      window.currentPoint = jQuery(this).attr("data-nested-id");
      window.currentNestedPoint = jQuery(this).attr("data-nested-unique-id");
      jQuery("#isimb-6310-edit-nested-point").fadeIn();
      jQuery("body").css({
        overflow: "hidden",
      });
      let points = jQuery(this).attr("points").split(" ").join(",");
      setTimeout(function () {
        isimb_6310_canvas_init(
          "#isimb-6310-edit-nested-point",
          "isimb-6310-canvas-area-nested-edit"
        );
        setTimeout(function () {
          jQuery(
            "#isimb-6310-edit-nested-point .isimb-6310-canvas-area-nested-edit"
          ).val(points);
          jQuery(
            "#isimb-6310-edit-nested-point .isimb-6310-canvas-area-nested-edit"
          ).trigger("change");
        }, 600);
      }, 100);
      return false;
    }
  );

  jQuery("body").on(
    "click",
    ".isimb-6310-update-place-save-nested",
    function () {
      let points = jQuery(
        "#isimb-6310-edit-nested-point .isimb-6310-canvas-area-nested-edit"
      ).val();
      if (!points) {
        alert("Please select area");
        return;
      }

      let json = JSON.parse(
        jQuery(
          `.isimb-6310-main-svg polygon[data-id='${window.currentPoint}']`
        ).attr("data-json")
      );
      let nestedList = [];
      let ids = window.currentNestedPoint.split("-")[1];
      if (json.nestedList.length) {
        for (let i = 0; i < json.nestedList.length; i++) {
          if (json.nestedList[i].nestedId != ids) {
            nestedList.push(json.nestedList[i]);
          } else {
            jQuery(
              `.isimb-6310-main-svg polygon[data-nested-unique-id='${window.currentNestedPoint}']`
            ).remove();

            if (points) {
              let newObj = {
                nestedId: Number(ids),
                nestedArea: points,
                nestedWidth: jQuery(
                  "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
                ).attr("width"),
                nestedHeight: jQuery(
                  "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
                ).attr("height"),
              };
              nestedList.push(newObj);

              let cords = isimb_6310_create_area(
                points,
                jQuery(
                  "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
                ).attr("width"),
                jQuery(
                  "#isimb-6310-all-nested-point .isimb-6310-main-multiple-svg"
                ).attr("height"),
                window.orgWidth,
                window.orgHeight
              );
              let html = `<polygon data-nested-id='${window.currentPoint}' data-nested-unique-id='${window.currentPoint}-${ids}' class='isimb-6310-pol-loaded-nested isimb-6310-pol-nested-${window.currentPoint}-${ids}' points="${cords}" />`;
              jQuery(".isimb-6310-main-svg").append(html);
            }
          }
        }
      }
      json.nestedList = [...nestedList];

      jQuery(
        `.isimb-6310-main-svg .isimb-6310-pol-${window.currentPoint}`
      ).attr("data-json", JSON.stringify(json));

      jQuery(
        "#isimb-6310-edit-nested-point, #isimb-6310-all-nested-point"
      ).fadeOut(100);
      jQuery("body").css({
        overflow: "initial",
      });
      jQuery(".isimb-6310-main-svg").html(
        jQuery(".isimb-6310-main-svg").html()
      );
    }
  );
});

function isimb_6310_polygon_color_change() {
  jQuery("body").on("mouseover", ".isimb-6310-pol-loaded-nested", function () {
    let parentId = jQuery(this).attr("data-nested-id");
    let jsonObj = JSON.parse(
      jQuery(`.isimb-6310-main-svg .isimb-6310-pol-${parentId}`).attr(
        "data-json"
      )
    );
    let styleCSS = `
      .isimb-6310-main-svg .isimb-6310-pol-${parentId}, .isimb-6310-main-svg polygon[data-nested-id='${parentId}']{
        fill: ${jsonObj.selectAreaHoverColor} !important;
        stroke:${jsonObj.areaBorderHoverColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
        cursor: pointer;
        filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
      }
    `;
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(`body`);
  });

  jQuery("body").on("mouseout", ".isimb-6310-pol-loaded-nested", function () {
    let parentId = jQuery(this).attr("data-nested-id");
    let jsonObj = JSON.parse(
      jQuery(`.isimb-6310-main-svg .isimb-6310-pol-${parentId}`).attr(
        "data-json"
      )
    );
    let styleCSS = `
      .isimb-6310-main-svg .isimb-6310-pol-${parentId}, .isimb-6310-main-svg polygon[data-nested-id='${parentId}']{
        fill: ${jsonObj.selectAreaColor} !important;
        stroke:${jsonObj.areaBorderColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
      }
    `;
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(`body`);
  });

  jQuery("body").on("mouseover", ".isimb-6310-pol-loaded", function () {
    let parentId = jQuery(this).attr("data-id");
    let jsonObj = JSON.parse(jQuery(this).attr("data-json"));
    let styleCSS = `
    .isimb-6310-main-svg polygon[data-nested-id='${parentId}']{
        fill: ${jsonObj.selectAreaHoverColor} !important;
        stroke:${jsonObj.areaBorderHoverColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
        cursor: pointer;
        filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
      }
    `;
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(`body`);
  });

  jQuery("body").on("mouseout", ".isimb-6310-pol-loaded", function () {
    let parentId = jQuery(this).attr("data-id");
    let jsonObj = JSON.parse(jQuery(this).attr("data-json"));
    let styleCSS = `
    .isimb-6310-main-svg polygon[data-nested-id='${parentId}']{
        fill: ${jsonObj.selectAreaColor} !important;
        stroke:${jsonObj.areaBorderColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
      }
    `;
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(`body`);
  });
}
