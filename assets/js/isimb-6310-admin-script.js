window.orgWidth = 0;
window.orgHeight = 0;

jQuery(window).load(function () {
  isimb_6310_zoom_in_out_code();
  isimb_6310_tooltip_fields();
  //set SVG width and height
  let mainImg = jQuery(".isimb-6310-main-image");
  window.orgWidth = mainImg.width();
  window.orgHeight = mainImg.height();

  jQuery(".isimb-6310-main-svg")
    .attr("width", window.orgWidth)
    .attr("height", window.orgHeight);
  jQuery(".isimb-6310-main-svg").css({
    "background-size": window.orgWidth + "px " + window.orgHeight + "px",
  });
  jQuery(".isimb-6310-main-image").hide();
  isimb_6310_default_polygon(window.orgWidth, window.orgHeight);
  isimb_6310_icon_image_select();

  /* Link Setting */
  jQuery("body").on(
    "click",
    "#isimb-6310-add-point .isimb-6310_link_title_type",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#isimb-6310-add-point .isimb-6310_link").addClass(
          "isimb-6310-hide"
        );
      } else {
        jQuery("#isimb-6310-add-point .isimb-6310_link").removeClass(
          "isimb-6310-hide"
        );
        if (
          Number(
            jQuery(
              "#isimb-6310-add-point .isimb-6310_button_link:checked"
            ).val()
          ) == 2
        ) {
          jQuery("#isimb-6310-add-point .isimb-6310_button").addClass(
            "isimb-6310-hide"
          );
        } else {
          jQuery("#isimb-6310-add-point .isimb-6310_button").removeClass(
            "isimb-6310-hide"
          );
        }
      }
    }
  );

  jQuery("body").on(
    "click",
    "#isimb-6310-add-point .isimb-6310_button_link",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#isimb-6310-add-point .isimb-6310_button").addClass(
          "isimb-6310-hide"
        );
      } else {
        jQuery("#isimb-6310-add-point .isimb-6310_button").removeClass(
          "isimb-6310-hide"
        );
      }
    }
  );

  /* Edit link Setting */
  jQuery("body").on(
    "click",
    "#isimb-6310-edit-point .isimb-6310_link_title_type",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#isimb-6310-edit-point .isimb-6310_link").addClass(
          "isimb-6310-hide"
        );
      } else {
        jQuery("#isimb-6310-edit-point .isimb-6310_link").removeClass(
          "isimb-6310-hide"
        );
        if (
          Number(
            jQuery(
              "#isimb-6310-edit-point .isimb-6310_button_link:checked"
            ).val()
          ) == 2
        ) {
          jQuery("#isimb-6310-edit-point .isimb-6310_button").addClass(
            "isimb-6310-hide"
          );
        } else {
          jQuery("#isimb-6310-edit-point .isimb-6310_button").removeClass(
            "isimb-6310-hide"
          );
        }
      }
    }
  );

  jQuery("body").on(
    "click",
    "#isimb-6310-edit-point .isimb-6310_button_link",
    function () {
      if (Number(jQuery(this).val()) == 2) {
        jQuery("#isimb-6310-edit-point .isimb-6310_button").addClass(
          "isimb-6310-hide"
        );
      } else {
        jQuery("#isimb-6310-edit-point .isimb-6310_button").removeClass(
          "isimb-6310-hide"
        );
      }
    }
  );

  /* **************************************************************** */

  //Add Point Script
  let counter =
    jQuery(".isimb-6310-main-svg polygon.isimb-6310-pol-loaded").length + 1;
  jQuery("body").on("click", ".isimb-6310-add-place-save", function () {
    window.currentPoint = counter;
    let canvasArea = jQuery(".isimb-6310-canvas-area").val();
    if (!canvasArea) {
      alert("Please select area first");
      return;
    }
    let elementType = Number(jQuery(".isimb-6310-section-select").val());
    if (elementType == 0) {
      alert("Please select element type");
      jQuery(".isimb-6310-section-select").focus();
      return;
    }

    let jsonObj = isimb_6310_set_generate_json_data("#isimb-6310-add-point ");
    let jsonObjParse = JSON.stringify(jsonObj);
    let cords = isimb_6310_create_area(
      canvasArea,
      jsonObj.imageWidth,
      jsonObj.imageHeight,
      window.orgWidth,
      window.orgHeight
    );
    let html = `
        <polygon data-id="${window.currentPoint}" class="isimb-6310-pol-loaded isimb-6310-pol-${counter}" points="${cords}"/>
      `;
    let styleCSS = `
      .isimb-6310-main-svg .isimb-6310-pol-${counter}{
        fill: ${jsonObj.selectAreaColor} !important;
        stroke:${jsonObj.areaBorderColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
      }
      .isimb-6310-main-svg .isimb-6310-pol-${counter}:hover{
        fill: ${jsonObj.selectAreaHoverColor} !important;
        stroke:${jsonObj.areaBorderHoverColor} !important;
        stroke-width:${jsonObj.areaBorderSize}px !important;
        cursor: pointer;
        filter: drop-shadow(0px 0px ${jsonObj.areaShadowith}px ${jsonObj.areaShadowColor});
      }
    `;
    jQuery(".isimb-6310-main-svg").append(html);
    jQuery(`.isimb-6310-pol-${counter}`).attr("data-json", jsonObjParse);
    jQuery(`<style type='text/css'>${styleCSS}</style>`).appendTo(
      `.isimb-6310-builder-box`
    );

    jQuery("#isimb-6310-add-point").fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
    jQuery(".isimb-6310-builder-box").html(
      jQuery(".isimb-6310-builder-box").html()
    );
    counter++;
    jQuery(".isimb-6310-canvas-area").val("");
  });

  //Delete Point Script
  jQuery("body").on("click", ".isimb-6310-btn-point-delete", function (event) {
    event.preventDefault();
    jQuery(`.isimb-6310-point-${window.currentPoint}`).remove();
    jQuery(`#isimb-6310-edit-point`).fadeOut(500);
    jQuery("body").css({
      overflow: "initial",
    });
  });

  jQuery("body").on(
    "change",
    "#isimb-6310-add-point .isimb-6310-section-view-mood-select",
    function () {
      let val = parseInt(jQuery(this).val());
      setTimeout(function () {
        jQuery("#isimb-6310-add-point .isimb-6310-section-select:last").click();
        jQuery(
          "#isimb-6310-add-point .isimb-6310-section-select:first"
        ).click();

        if (val == 1) {
          jQuery(".isimb-6310-model-content").addClass("isimb-6310-hide");
          jQuery(
            ".isimb-6310-link-content, .isimb-6310-linking-area-tr"
          ).removeClass("isimb-6310-hide");
        } else {
          jQuery(".isimb-6310-model-content").removeClass("isimb-6310-hide");
          jQuery(".isimb-6310-linking-area-tr").addClass("isimb-6310-hide");
        }
      }, 100);
    }
  );

  jQuery("body").on(
    "change",
    "#isimb-6310-edit-point .isimb-6310-section-view-mood-select",
    function () {
      let val = parseInt(jQuery(this).val());
      setTimeout(function () {
        jQuery(
          "#isimb-6310-edit-point .isimb-6310-section-select:last"
        ).click();
        jQuery(
          "#isimb-6310-edit-point .isimb-6310-section-select:first"
        ).click();

        if (val == 1) {
          jQuery(".isimb-6310-model-content").addClass("isimb-6310-hide");
          jQuery(
            ".isimb-6310-link-content, .isimb-6310-linking-area-tr"
          ).removeClass("isimb-6310-hide");
        } else {
          jQuery(".isimb-6310-model-content").removeClass("isimb-6310-hide");
          jQuery(".isimb-6310-linking-area-tr").addClass("isimb-6310-hide");
        }
      }, 100);
    }
  );

  // Point Settings script
  jQuery("body").on("change", ".isimb-6310-section-select", function () {
    let val = parseInt(jQuery(this).val());
    let parentId = jQuery(this).closest(".isimb-6310-modal").attr("id");
    jQuery(
      ".isimb-6310-tooltip-link, .isimb-6310-embided, .isimb-6310-external-link, .isimb-6310-templates, .isimb-6310-tooltip-img, .isimb_6310_custom_template, .isimb-6310-direct-link, .isimb-6310-link-content-direct"
    ).addClass("isimb-6310-hide");
    jQuery(`.isimb-6310-type-${val}, .isimb-6310_link-type`).removeClass(
      "isimb-6310-hide"
    );
    if (val == 1) {
      jQuery(".isimb_6310_textarea").removeClass("isimb-6310-hide");
      jQuery(
        ".isimb-6310-tooltip-link, .isimb-6310-templates, .toggle-tabs li[data-id='3']"
      ).removeClass("isimb-6310-hide");
      if (parentId == "isimb-6310-edit-point") {
        jQuery(
          `#${parentId} .isimb-6310-tooltip_img_section .isimb-6310-tooltip-img[data-id='01']`
        ).addClass("isimb-6310-hide");
        jQuery(
          `#${parentId} .isimb-6310-tooltip_img_section .isimb-6310-tooltip-img[data-id='03'], #isimb_6310_custom_code-html, .isimb_6310_custom_code_popup-html`
        ).trigger("click");
      } else {
        jQuery(
          `#${parentId} .isimb-6310-tooltip_img_section .isimb-6310-tooltip-img[data-id='01']`
        ).removeClass("isimb-6310-hide");
        jQuery(
          `#${parentId} .isimb-6310-tooltip_img_section .isimb-6310-type-${val}:first, #isimb_6310_custom_code-html, .isimb_6310_custom_code_popup-html`
        ).trigger("click");
      }
      if (
        jQuery(
          `#${parentId} .isimb-6310-section-view-mood-select:checked`
        ).val() == "1"
      ) {
        jQuery(
          `#${parentId} .isimb-6310-tooltip-img[data-id='01']`
        ).removeClass("isimb-6310-hide");
        jQuery(`#${parentId} .isimb-6310-tooltip-img[data-id='04']`).click();
        jQuery(`#${parentId} .isimb-6310-tooltip-img[data-id='01']`).click();
      } else {
        jQuery(`#${parentId} .isimb-6310-tooltip-img[data-id='01']`).addClass(
          "isimb-6310-hide"
        );
        jQuery(`#${parentId} .isimb-6310-tooltip-img[data-id='03']`).click();
      }
    } else if (val == 2) {
      jQuery(
        ".isimb_6310_textarea, .isimb-6310-embided, .isimb-6310-templates"
      ).removeClass("isimb-6310-hide");
      jQuery('.toggle-tabs li[data-id="3"]').addClass("isimb-6310-hide");
      jQuery(
        `#${parentId} .isimb-6310-tooltip_img_section .isimb-6310-type-${val}:first, #isimb_6310_custom_code-html, .isimb_6310_custom_code_popup-html`
      ).trigger("click");
    } else if (val == 3) {
      jQuery(".isimb_6310_custom_template").removeClass("isimb-6310-hide");
      jQuery(
        '.isimb_6310_font_prop, .isimb_6310_template_embedded, .toggle-tabs li[data-id="3"]'
      ).addClass("isimb-6310-hide");
      jQuery(".isimb_6310_template_description").addClass("isimb-6310-hide");
    } else {
      jQuery(
        '.toggle-tabs li[data-id="3"], .isimb-6310-direct-link, .isimb-6310_link, .isimb-6310_link-type, .isimb-6310-link-content-direct'
      ).removeClass("isimb-6310-hide");
      jQuery(
        ".isimb_6310_font_prop, .isimb_6310_template_embedded, .isimb_6310_custom_template, .isimb_6310_custom_template, .isimb_6310_template_description"
      ).addClass("isimb-6310-hide");
    }
  });

  //Template load  script

  jQuery("body").on("click", ".isimb-6310-tooltip-img", function () {
    jQuery(".isimb-6310-tooltip-img").removeClass("isimb-6310-active");
    jQuery(this)
      .closest(".isimb-6310-tooltip-img")
      .addClass("isimb-6310-active");
    let val = jQuery(this).closest(".isimb-6310-tooltip-img").attr("data-id");
    jQuery(".isimb-6310-form").addClass("isimb-6310-hide");
    jQuery(`.isimb-6310-form-${val}`).removeClass("isimb-6310-hide");

    isimb_6310_set_html_code(val);
  });

  //  tooltip embedded code show hide add point

  jQuery("body").on(
    "change",
    "#isimb-6310-add-point .isimb-6310-open-popup",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery(
        "#isimb-6310-add-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
      ).addClass("isimb-6310-hide");
      if (val == 2) {
        jQuery("#isimb-6310-add-point .popup-user-embedded").removeClass(
          "isimb-6310-hide"
        );
      }
      if (val == 1) {
        jQuery(
          "#isimb-6310-add-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
        ).addClass("isimb-6310-hide");
      }
    }
  );
  jQuery("body").on(
    "change",
    "#isimb-6310-add-point .isimb-6310-open-popup-custom-use",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery("#isimb-6310-add-point .tooltip-embedded").removeClass(
        "isimb-6310-hide"
      );
      if (val == 2) {
        jQuery("#isimb-6310-add-point .tooltip-embedded").removeClass(
          "isimb-6310-hide"
        );
        jQuery("#isimb-6310-add-point .tooltip-custom-html-css").addClass(
          "isimb-6310-hide"
        );
      }
      if (val == 1) {
        jQuery("#isimb-6310-add-point .tooltip-embedded").addClass(
          "isimb-6310-hide"
        );
        jQuery("#isimb-6310-add-point .tooltip-custom-html-css").removeClass(
          "isimb-6310-hide"
        );
      }
    }
  );
  //  tooltip embedded code show hide edit point
  jQuery("body").on(
    "change",
    "#isimb-6310-edit-point .isimb-6310-open-popup",
    function () {
      let val = parseInt(jQuery(this).val());
      if (val == 2) {
        jQuery("#isimb-6310-edit-point .popup-user-embedded").removeClass(
          "isimb-6310-hide"
        );
      }
      if (val == 1) {
        jQuery(
          "#isimb-6310-edit-point .popup-user-embedded, .tooltip-custom-html-css, .tooltip-embedded"
        ).addClass("isimb-6310-hide");
      }
    }
  );
  jQuery("body").on(
    "change",
    "#isimb-6310-edit-point .isimb-6310-open-popup-custom-use",
    function () {
      let val = parseInt(jQuery(this).val());
      jQuery("#isimb-6310-edit-point .tooltip-embedded").removeClass(
        "isimb-6310-hide"
      );
      if (val == 2) {
        jQuery("#isimb-6310-edit-point .tooltip-embedded").removeClass(
          "isimb-6310-hide"
        );
        jQuery("#isimb-6310-edit-point .tooltip-custom-html-css").addClass(
          "isimb-6310-hide"
        );
      }
      if (val == 1) {
        jQuery("#isimb-6310-edit-point .tooltip-embedded").addClass(
          "isimb-6310-hide"
        );
        jQuery("#isimb-6310-edit-point .tooltip-custom-html-css").removeClass(
          "isimb-6310-hide"
        );
      }
    }
  );

  //Combine JSON and push it in an input field
  jQuery("body").on("click", ".isimb-6310-insert-ja-data", function () {
    let jsonCollection = [];
    jQuery(`.isimb-6310-main-svg polygon`).each(function () {
      let jsonObj = jQuery(this).attr("data-json");
      if (jsonObj) {
        jsonObj = JSON.parse(jsonObj);
        jsonObj.points = jQuery(this).attr("points");
        jsonCollection.push(jsonObj);
      }
    });
    jQuery("#isimb_6310_json_field").val(JSON.stringify(jsonCollection));
  });

  //Manage icon remove start
  jQuery("body").on("click", ".fa-minus-circle", function () {
    jQuery(this).closest("td").find("input").val("");
  });
  //Manage icon remove end
});

function isimb_6310_set_html_code(val) {
  let htmlCode = "";
  if (val == "01") {
    htmlCode = ` 
    <div class="isimb-6310-tooltip isimb-6310-template-01">
      <a href="#">Hover here</a>
      <div class="isimb-6310-template-01-hover-content">Tooltip text</div>
    </div>
      `;
  } else if (val == "03") {
    htmlCode = `
    <div class="isimb-6310-tooltip isimb-6310-template-03 isimb-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt="" ></a>
        <div class="isimb-6310-template-03-hover-content">
          <div class="isimb-6310-template-03-tooltip-testimonial">
            <div class="isimb-6310-template-03-tooltip-pic">
              <img src="img/7.png" alt="">
            </div>
            <div class="isimb-6310-template-03-tooltip-testimonial-content">
              <div class="isimb-6310-template-03-tooltip-testimonial-title">Williamson
                <div class="isimb-6310-template-03-tooltip-post">Web Designer</div>
              </div>
              <div class="isimb-6310-template-03-tooltip-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur
                debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit
                tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis temporibus!
              </div>
            </div>
          </div>
        </div>
    </div>
      `;
  } else if (val == "04") {
    htmlCode = `      
    <div class="isimb-6310-tooltip isimb-6310-template-04 isimb-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt=""></a>
        <div class="isimb-6310-template-04-tooltip-testimonial">
          <div class="isimb-6310-template-04-tooltip-testimonial-content">
            <div class="isimb-6310-template-04-tooltip-pic">
              <img src="img/7.png">
            </div>
            <div class="isimb-6310-template-04-tooltip-title">Williamson</div>
            <div class="isimb-6310-template-04-tooltip-post">Web Developer</div>
          </div>
          <div class="isimb-6310-template-04-tooltip-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor tellus, efficitur ut tortor id,
            molestie egestas nibh. In blandit ex at erat vehicula molestie. Mauris vel volutpat nulla. Suspendisse lorem
            ex, congue at elit id, tincidunt tempor orci. Nullam nec augue ac tellus rhoncus tincidunt nec ut ligula.
            Praesent.
          </div>
        </div>
    </div>   
      `;
  } else if (val == "05") {
    htmlCode = `      
    <div class="isimb-6310-tooltip isimb-6310-template-05 isimb-6310-hide">
      <a href="#"><img src="img/4 (2).png" alt=""></a>
      <div class="isimb-6310-template-05-hover-content">
        <div class="isimb-6310-template-05-tooltip-testimonial">
          <div class="isimb-6310-template-05-tooltip-testimonial-content">
            <div class="isimb-6310-template-05-tooltip-pic">
              <img src="img/7.png">
            </div>
            <div class="isimb-6310-template-05-tooltip-title">Williamson</div>
            <div class="isimb-6310-template-05-tooltip-post">Web Developer</div>
          </div>
          <div class="isimb-6310-template-05-tooltip-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor tellus, efficitur ut tortor id,
            molestie egestas nibh. In blandit ex at erat vehicula molestie. Mauris vel volutpat nulla. Suspendisse lorem
            ex, congue at elit id, tincidunt tempor orci. Nullam nec augue ac tellus rhoncus tincidunt nec ut ligula.
            Praesent.
          </div>
        </div>
      </div>
    </div>
      `;
  } else if (val == "02") {
    htmlCode = `      
    <div class="isimb-6310-tooltip isimb-6310-template-02">      
      <div class="isimb-6310-template-02-hover-content">
        <div class="isimb-6310-template-02-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25125110.814096835!2d94.35061650599457!3d23.913222352616348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1636176093357!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
      `;
  }

  jQuery(`textarea[name='isimb_6310_custom_code']`).val(htmlCode);
  jQuery(
    `#isimb_6310_custom_code-html, .isimb_6310_custom_code_popup-html`
  ).trigger("click");
}

function isimb_6310_icon_image_select() {
  //Manage icon Start
  jQuery("#icon-filter").on("keyup", function () {
    var value = jQuery(this).val().toLowerCase();
    jQuery(".isimb-6310-choose-icon li").filter(function () {
      jQuery(this).toggle(
        jQuery(this).attr(`data-icon-name`).toLowerCase().indexOf(value) > -1
      );
    });
  });

  jQuery("body").on(
    "click",
    "#isimb-6310-font-icon-close, .isimb-6310-font-awesome-close",
    function () {
      jQuery("#isimb_6310_social_icon").fadeOut(500);
    }
  );

  jQuery("body").on(
    "click",
    "isimb-6310-plus-icons, .isimb-6310-plus-icons i",
    function () {
      let selIds = jQuery(this)
        .closest(".isimb-6310-plus-icons")
        .siblings(".isimb-6310-form-input")
        .attr("id");
      jQuery("ul.isimb-6310-choose-icon").attr("data-current-id", selIds);
      if (jQuery("#icon-filter").val()) {
        jQuery("#icon-filter").val("");
        jQuery(".isimb-6310-choose-icon li").filter(function () {
          jQuery(this).toggle();
        });
      }
      jQuery("#isimb_6310_social_icon").fadeIn(500);
      jQuery("body").css({
        overflow: "hidden",
      });
      jQuery("#icon-filter").focus();
      return false;
    }
  );

  jQuery("body").on("click", "ul.isimb-6310-choose-icon li", function () {
    let cls = jQuery(this).find("i").attr("class");
    jQuery(
      `.` + jQuery("ul.isimb-6310-choose-icon").attr("data-current-id")
    ).val(cls);
    jQuery("#isimb_6310_social_icon").fadeOut(500);
  });
  //Manage icon End

  /* Main Image Upload ########### */
  jQuery("body").on("click", ".isimb-6310-upload-image", function (e) {
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
        jQuery(`.isimb-6310-main-image`).attr("src", image_url);
        jQuery(`input[name='main_image']`).val(image_url);
        jQuery(`svg.isimb-6310-main-svg, svg.isimb-6310-main-multiple-svg`).css(
          {
            "background-image": `url(${image_url})`,
          }
        );
        jQuery(
          "input.isimb-6310-canvas-area, .isimb-6310-canvas-area-nested-edit, .isimb-6310-canvas-area-nested"
        ).attr("isimb-6310-image-url", image_url);
        setTimeout(function () {
          let mainImg = jQuery(".isimb-6310-main-image");
          window.orgWidth = mainImg.width();
          window.orgHeight = mainImg.height();
          jQuery(".isimb-6310-main-svg")
            .attr("width", window.orgWidth)
            .attr("height", window.orgHeight);
          jQuery(".isimb-6310-main-svg").css({
            "background-size":
              window.orgWidth + "px " + window.orgHeight + "px",
          });
        }, 500);
      });

    jQuery("#isimb_6310_add_new_media").css({
      "overflow-x": "hidden",
      "overflow-y": "auto",
    });
  });

  //Add Point
  jQuery("body").on("change", ".isimb-6310_icon_type", function (e) {
    let value = Number(jQuery(this).val());
    jQuery(".isimb-6310-marker").addClass("isimb-6310-hide");
    jQuery(`.isimb-6310-marker-type-${value}`).removeClass("isimb-6310-hide");
  });

  /* ######### Custom Icon Media Start ########### */
  jQuery("body").on("click", ".isimb-6310-icon-upload", function (e) {
    e.preventDefault();
    let dataId = jQuery(this).attr("data-id");

    var image = wp
      .media({
        title: "Upload Image",
        multiple: false,
      })
      .open()
      .on("select", function (e) {
        var uploaded_image = image.state().get("selection").first();
        var image_url = uploaded_image.toJSON().url;
        jQuery(`.${dataId}`).val(image_url);
      });

    jQuery("#isimb_6310_add_new_media").css({
      "overflow-x": "hidden",
      "overflow-y": "auto",
    });
  });
  /* ######### Custom Icon Media End ########### */
}

function isimb_6310_zoom_in_out_code() {
  /* ######### Custom Icon For Zoom In/Out Start ########### */
  /* Main Image Upload ########### */
  jQuery("body").on("click", ".isimb-6310-zoom-icon", function (e) {
    e.preventDefault();
    const closest = jQuery(this);
    var image = wp
      .media({
        title: "Upload Icon",
        multiple: false,
      })
      .open()
      .on("select", function (e) {
        var uploaded_image = image.state().get("selection").first();
        var image_url = uploaded_image.toJSON().url;
        closest.closest("td").find(`img`).attr("src", image_url);
        closest.closest("td").find(`input[type='hidden']`).val(image_url);
      });

    jQuery("#isimb_6310_add_new_media").css({
      "overflow-x": "hidden",
      "overflow-y": "auto",
    });
  });
  /* ######### Custom Icon For Zoom In/Out End ########### */

  const zoomFeature = Number(
    jQuery("input[name='zoom_feature']:checked").val()
  );
  zoomFeature > 1
    ? jQuery(".toggle-zoom-feature").show()
    : jQuery(".toggle-zoom-feature").hide();

  jQuery("body").on("change", "input[name='zoom_feature']", function () {
    const value = Number(jQuery(this).val());
    value > 1
      ? jQuery(".toggle-zoom-feature").show()
      : jQuery(".toggle-zoom-feature").hide();
  });
}

function isimb_6310_tooltip_fields() {
  const field = jQuery('select[name="tooltip_position"]');
  Number(field.val())
    ? jQuery(".tooltip-attribute").show()
    : jQuery(".tooltip-attribute").hide();

  jQuery("body").on("change", 'select[name="tooltip_position"]', function () {
    const value = Number(jQuery(this).val());
    if (value && value !== 2 && value !== 5) {
      jQuery(".tooltip-attribute").show();
      let selectedText = jQuery(this).find("option:selected").text().split(" ");
      jQuery(".tooltip-attribute-text-1").text("Gap From " + selectedText[0]);
      jQuery(".tooltip-attribute-text-2").text("Gap From " + selectedText[1]);
    } else {
      jQuery(".tooltip-attribute").hide();
    }
  });
}
