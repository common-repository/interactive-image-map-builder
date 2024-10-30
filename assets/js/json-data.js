function isimb_6310_set_generate_json_data(
  selector = "#isimb-6310-add-point "
) {
  let myObj = {};
  let myCSS = {};
  myObj.pointList = jQuery(selector + ".isimb-6310-canvas-area").val();
  myObj.imageWidth = jQuery(selector + ".isimb-6310-canvas").attr("width");
  myObj.imageHeight = jQuery(selector + ".isimb-6310-canvas").attr("height");
  let viewMoodType = Number(
    jQuery(selector + ".isimb-6310-section-view-mood-select:checked").val()
  );

  let elementType = Number(
    jQuery(selector + ".isimb-6310-section-select:checked").val()
  );
  myObj.selectModelContent = jQuery(
    selector + ".isimb_6310_modal_content"
  ).val();
  myObj.ModalContentFontSize = jQuery(
    selector + ".isimb_6310_modal_content_font_size"
  ).val();
  myObj.ModalContentColor = jQuery(
    selector + ".isimb_6310_modal_content_color"
  ).val();

  myObj.ModalContentBgColor = jQuery(
    selector + ".isimb_6310_modal_content_background_color"
  ).val();
  myObj.selectAreaColor = jQuery(
    selector + ".isimb_6310_select_area_color"
  ).val();
  myObj.selectAreaHoverColor = jQuery(
    selector + ".isimb_6310_select_area_hover_color"
  ).val();
  myObj.areaBorderSize = jQuery(
    selector + ".isimb-6310_area_border_size"
  ).val();
  myObj.customFirstImg = jQuery(selector + ".isimb-6310-image-edit-1").val();
  myObj.customSecondImg = jQuery(selector + ".isimb-6310-image-edit-2").val();
  myObj.customTextSize = jQuery(
    selector + ".isimb_6310_custom_text_font_size"
  ).val();
  myObj.areaBorderColor = jQuery(
    selector + ".isimb_6310_area_border_color"
  ).val();
  myObj.areaBorderHoverColor = jQuery(
    selector + ".isimb_6310_area_border_hover_color"
  ).val();
  myObj.areaShadowith = jQuery(
    selector + ".isimb-6310_area_shadow_width"
  ).val();
  myObj.areaShadowColor = jQuery(
    selector + ".isimb_6310_area_shadow_hover_color"
  ).val();
  myObj.customTextBgColor = jQuery(
    selector + ".isimb_6310_custom_text_font_bg_color"
  ).val();
  myObj.customeCode = jQuery(
    selector + `textarea[name='isimb_6310_custom_code']`
  ).val();
  myObj.mouseType = jQuery(selector + ".isimb-6310_popover_type:checked").val();

  // check element type

  myObj.selectedTemplate = jQuery(selector + ".isimb-6310-active").attr(
    "data-id"
  );

  myObj.popupEmbedded = jQuery(selector + ".popup_embedded").val();
  myObj.selectedTemplate = jQuery(selector + ".isimb-6310-active").attr(
    "data-id"
  );

  // check selector type

  myObj.linkText = jQuery(selector + ".isimb_6310_link_text").val();
  myObj.linkURL = jQuery(selector + ".isimb_6310_custom_link_url").val();
  myObj.openNewTab = jQuery(
    selector + ".isimb-6310-open-new-tab:checked"
  ).val();
  myObj.linkingArea = 0;
  myObj.openPopup = jQuery(selector + ".isimb-6310-open-popup:checked").val();
  myObj.openPopupCustomUse = jQuery(
    selector + ".isimb-6310-open-popup-custom-use:checked"
  ).val();
  myObj.openDesImg = jQuery(selector + ".isimb-6310-des-img").val();
  myObj.openDescription = jQuery(
    selector + ".isimb-6310-tooltip_discription"
  ).val();
  myObj.openDesFontSize = jQuery(
    selector + ".isimb-6310-tooltip_discription_font_size"
  ).val();
  myObj.openDesFontColor = jQuery(
    selector + ".isimb-6310-tooltip_discription_font_color"
  ).val();
  myObj.customButtonLinkType = jQuery(
    selector + ".isimb-6310_button_link:checked"
  ).val();
  myObj.customButtonText = jQuery(selector + ".isimb-6310-button-text").val();
  myObj.customButtonUrl = jQuery(selector + ".isimb-6310-button-url").val();
  myObj.customButtonTextSize = jQuery(
    selector + ".isimb_6310_button_text_size"
  ).val();
  myObj.customButtonTextColor = jQuery(
    selector + ".isimb_6310_button_text_color"
  ).val();
  myObj.customButtonBgcolor = jQuery(
    selector + ".isimb_6310_button_bg_color"
  ).val();
  myObj.tempCommonFontSize = jQuery(
    selector + ".isimb_6310_template_font_size"
  ).val();
  myObj.tempCommonFontColor = jQuery(
    selector + ".isimb_6310_template_font_color"
  ).val();
  myObj.tempCommonBgColor = jQuery(
    selector + ".isimb_6310_template_bg_color"
  ).val();
  myObj.tem02EmbeddedLink = isimb_6310_get_embedded_attributes(
    jQuery(selector + ".isimb-6310-embedded_code_link").val()
  );

  let customCode = jQuery(
    selector + "textarea[name='isimb-6310-custome_html']"
  ).val();

  customCode = customCode.replace(/='/g, '="');
  customCode = customCode.replace(/'>/g, '">');

  myObj.customeHtmlCode = customCode;
  myObj.customeCssCode = jQuery(
    selector + `textarea[name='isimb-6310-custome_css']`
  ).val();
  myObj.customeCodePopup = isimb_6310_get_embedded_attributes(
    jQuery(selector + `textarea[name='isimb_6310_custom_code_popup']`).val()
  );
  myObj.customePopupHtml = jQuery(
    selector + `textarea[name='isimb_6310_custom_code_popup_html']`
  ).val();
  myObj.customePopupCss = jQuery(
    selector + `textarea[name='isimb_6310_custom_code_popup_css']`
  ).val();

  myObj.customIconLinkType = jQuery(
    selector + ".isimb-6310_link_title_type:checked"
  ).val();
  myObj.viewMoodType = viewMoodType;
  myObj.elementType = elementType;

  if (myObj.iconType == 1) {
    myCSS.styleCSS = `
    .isimb-6310-drag[data-id='${window.currentPoint}'] .isimb-6310-pin-main-img{ 
        color: ${myObj.selectAreaColor} !important;
        font-size:${myObj.areaBorderSize}px !important;
    } 
    .isimb-6310-drag[data-id='${window.currentPoint}'] .isimb-6310-pin-hover-img{ 
      color: ${myObj.selectAreaHoverColor} !important;
      font-size:${myObj.areaBorderSize}px !important;
    } 
   
  `;
  } else if (myObj.iconType == 2) {
    myCSS.styleCSS = `
    .isimb-6310-drag[data-id='${window.currentPoint}'] .isimb-6310-pin-main-img{ 
        width: ${myObj.imgOrIconSize}px !important;
        height:auto !important;
    } 
    .isimb-6310-drag[data-id='${window.currentPoint}'] .isimb-6310-pin-hover-img{ 
      width: ${myObj.imgOrIconSize}px !important;
      height:auto !important;
  }
  `;
  } else if (myObj.iconType == 3) {
    myCSS.styleCSS = `
    .isimb-6310-drag[data-id='${window.currentPoint}'] span{
        font-size:${myObj.customTextSize}px !important;
        color: ${myObj.areaBorderColor} !important;
        background-color:${myObj.customTextBgColor} !important;
        padding: 5px 10px;
    } 
  `;
  }

  myObj.linkURLDirect = jQuery(
    selector + ".isimb_6310_custom_link_url_direct"
  ).val();
  myObj.openNewTabDirect = jQuery(
    selector + ".isimb-6310-open-new-tab-direct:checked"
  ).val();
  if (jQuery(`.isimb-6310-pol-${window.currentPoint}`).length) {
    let json = JSON.parse(
      jQuery(`.isimb-6310-pol-${window.currentPoint}`).attr("data-json")
    );
    myObj.nestedList = json.nestedList || [];
  } else {
    myObj.nestedList = [];
  }

  //isimb_6310_reset_fields();
  return myObj;
}

function isimb_6310_set_json_data() {
  let jsonData = jQuery(`[data-id='${window.currentPoint}']`).attr("data-json");
  jsonData = JSON.parse(jsonData);
  if (!jsonData || !jsonData.elementType) {
    return;
  }
  isimb_6310_reset_fields();

  let divWidth = jQuery(".tabbed-content-wrap:last").width();
  let divHeight = Math.round(
    (Number(jsonData.imageHeight) * divWidth) / Number(jsonData.imageWidth)
  );
  jQuery(".isimb-6310-canvas")
    .attr("height", divHeight)
    .attr("width", divWidth)
    .css({
      "background-size": `${divWidth}px ${divHeight}px`,
    });
  jQuery(".isimb-6310-canvas-area:last").val(jsonData.pointList);
  // jQuery(".isimb-6310-canvas-area:last").trigger("change");

  jQuery(
    "#isimb-6310-edit-point .isimb-6310-section-view-mood-select[value='1']"
  ).trigger("click");
  jQuery(
    "#isimb-6310-edit-point .isimb-6310-section-view-mood-select[value='2']"
  ).trigger("click");

  jQuery(
    "#isimb-6310-edit-point .isimb-6310-section-select[value='1']"
  ).trigger("click");

  jQuery(
    "#isimb-6310-edit-point .isimb-6310-section-select[value='2']"
  ).trigger("click");

  jQuery(
    "#isimb-6310-edit-point .isimb-6310-section-select[value='3']"
  ).trigger("click");

  jQuery(".isimb-6310-tooltip-img").removeClass("isimb-6310-active");
  jQuery(".isimb-6310-open-new-tab").prop("selectedIndex", jsonData.openNewTab);
  jQuery(
    "#isimb-6310-edit-point .isimb-6310-linking-area[value='" +
      jsonData.linkingArea +
      "']"
  ).prop("checked", true);
  jQuery(".isimb-6310-open-new-tab-direct").prop(
    "selectedIndex",
    jsonData.openNewTabDirect
  );

  jQuery(".isimb-6310-open-popup").prop("selectedIndex", jsonData.openPopup);
  if (Number(jsonData.openPopup) == 1) {
    jQuery(".isimb-6310-open-popup-custom-use").addClass("isimb-6310-hide");
  } else {
    jQuery(".isimb-6310-open-popup-custom-use").removeClass("isimb-6310-hide");
  }

  jQuery(".isimb-6310-section-view-mood-select").prop(
    "selectedIndex",
    jsonData.viewMoodType
  );
  if (Number(jsonData.openPopupCustomUse) == 1) {
    jQuery(".tooltip-embedded").addClass("isimb-6310-hide");
    jQuery(".tooltip-custom-html-css").removeClass("isimb-6310-hide");
  } else {
    jQuery(".tooltip-embedded").removeClass("isimb-6310-hide");
    jQuery(".tooltip-custom-html-css").addClass("isimb-6310-hide");
  }
  jQuery(".isimb-6310-templates").removeClass("isimb-6310-hide");
  jQuery(".isimb-6310-active").removeClass("isimb-6310-active");
  jQuery(
    `.isimb-6310-templates, [data-id='${jsonData.selectedTemplate}']`
  ).removeClass("isimb-6310-hide");

  jQuery(".isimb_6310_select_area_color").val(jsonData.selectAreaColor);
  jQuery(".isimb_6310_select_area_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.selectAreaColor,
    });
  jQuery(".isimb_6310_select_area_hover_color").val(
    jsonData.selectAreaHoverColor
  );
  jQuery(".isimb_6310_modal_content").val(jsonData.selectModelContent);
  jQuery(".isimb_6310_modal_content_font_size").val(
    jsonData.ModalContentFontSize
  );
  jQuery(".isimb_6310_modal_content_color").val(jsonData.ModalContentColor);
  jQuery(".isimb_6310_modal_content_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.ModalContentColor,
    });
  jQuery(".isimb_6310_modal_content_background_color").val(
    jsonData.ModalContentBgColor
  );
  jQuery(".isimb_6310_modal_content_background_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.ModalContentBgColor,
    });
  jQuery(".isimb_6310_select_area_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.selectAreaHoverColor,
    });
  jQuery(".isimb-6310_area_border_size").val(jsonData.areaBorderSize);
  jQuery(".isimb-6310-image-edit-1").val(jsonData.customFirstImg);
  jQuery(".isimb-6310-image-edit-2").val(jsonData.customSecondImg);

  jQuery(".isimb_6310_custom_text_font_size").val(jsonData.customTextSize);
  jQuery(".isimb_6310_area_border_color").val(jsonData.areaBorderColor);
  jQuery(".isimb_6310_area_border_hover_color").val(
    jsonData.areaBorderHoverColor
  );

  jQuery(".isimb_6310_area_border_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaBorderColor,
    });
  jQuery(".isimb_6310_area_border_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaBorderHoverColor,
    });
  jQuery(".isimb-6310_area_shadow_width").val(jsonData.areaShadowith);
  jQuery(".isimb_6310_area_shadow_hover_color").val(jsonData.areaShadowColor);
  jQuery(".isimb_6310_area_shadow_hover_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.areaShadowColor,
    });
  jQuery(".isimb_6310_custom_text_font_bg_color").val(
    jsonData.customTextBgColor
  );
  jQuery(".isimb_6310_custom_text_font_bg_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customTextBgColor,
    });

  jQuery(`textarea[name='isimb_6310_custom_code']`).val(jsonData.customeCode);
  jQuery(`textarea[name='isimb_6310_custom_code_popup']`).val(
    isimb_6310_create_embedded_code(jsonData.customeCodePopup)
  );
  jQuery(`textarea[name='isimb_6310_custom_code_popup_html']`).val(
    jsonData.customePopupHtml
  );
  jQuery(`textarea[name='isimb_6310_custom_code_popup_css']`).val(
    jsonData.customePopupCss
  );
  jQuery(`textarea[name='isimb-6310-custome_html']`).val(
    jsonData.customeHtmlCode
  );
  jQuery(`textarea[name='isimb-6310-custome_css']`).val(
    jsonData.customeCssCode
  );
  jQuery(".isimb_6310_link_text").val(jsonData.linkText);
  jQuery(".isimb_6310_custom_link_url").val(jsonData.linkURL);
  jQuery(".isimb_6310_custom_link_url_direct").val(jsonData.linkURLDirect);
  jQuery(".isimb-6310-des-img").val(jsonData.openDesImg);
  jQuery(".isimb-6310-tooltip_discription").val(jsonData.openDescription);
  jQuery(".isimb-6310-tooltip_discription_font_size").val(
    jsonData.openDesFontSize
  );
  jQuery(".isimb-6310-tooltip_discription_font_color").val(
    jsonData.openDesFontColor
  );
  jQuery(".isimb-6310-tooltip_discription_font_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.openDesFontColor,
    });
  jQuery(".tooltip_discription_font_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.openDesFontColor,
    });
  jQuery(".isimb-6310-button-text").val(jsonData.customButtonText);
  jQuery(".isimb-6310-button-url").val(jsonData.customButtonUrl);
  jQuery(".isimb_6310_button_text_size").val(jsonData.customButtonTextSize);
  jQuery(".isimb_6310_button_text_color").val(jsonData.customButtonTextColor);
  jQuery(".isimb_6310_button_text_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customButtonTextColor,
    });
  jQuery(".isimb_6310_button_bg_color").val(jsonData.customButtonBgcolor);
  jQuery(".isimb_6310_button_bg_color")
    .closest("div")
    .find(".minicolors-swatch-color")
    .css({
      "background-color": jsonData.customButtonBgcolor,
    });
  jQuery(".popup_embedded").val(jsonData.popupEmbedded);
  jQuery(".isimb-6310-tooltip-link").removeClass("isimb-6310-hide");
  jQuery(".isimb_6310_textarea").removeClass("isimb-6310-hide");

  jQuery(".isimb-6310-form-02").removeClass("isimb-6310-hide");
  jQuery(".isimb-6310-form-02").removeClass("isimb-6310-hide");

  if (jsonData.selectedTemplate != "") {
    //set common
    jQuery(".isimb_6310_template_font_size").val(jsonData.tempCommonFontSize);
    jQuery(".isimb_6310_template_font_color").val(jsonData.tempCommonFontColor);
    jQuery(".isimb_6310_template_font_color")
      .closest("div")
      .find(".minicolors-swatch-color")
      .css({
        "background-color": jsonData.tempCommonFontColor,
      });
    jQuery(".isimb_6310_template_bg_color").val(jsonData.tempCommonBgColor);
    jQuery(".isimb_6310_template_bg_color")
      .closest("div")
      .find(".minicolors-swatch-color")
      .css({
        "background-color": jsonData.tempCommonBgColor,
      });

    //Uncommon fields
    if (jsonData.selectedTemplate == "02") {
      jQuery(".isimb-6310-embedded_code_link").val(
        isimb_6310_create_embedded_code(jsonData.tem02EmbeddedLink)
      );
    }

    jQuery(`
        #isimb-6310-edit-point .toggle-tabs li:first-child, 
        #isimb-6310-edit-point .isimb-6310_popover_type[value='${jsonData.mouseType}'],
        #isimb-6310-edit-point .isimb-6310-section-select[value='${jsonData.elementType}'],
        #isimb-6310-edit-point .isimb-6310-section-view-mood-select[value='${jsonData.viewMoodType}'],
        #isimb-6310-edit-point .isimb-6310_link_title_type[value='${jsonData.customIconLinkType}'],
        #isimb-6310-edit-point .isimb-6310-open-popup[value='${jsonData.openPopup}'],
        #isimb-6310-edit-point .isimb-6310-open-popup-custom-use[value='${jsonData.openPopupCustomUse}'],
        #isimb-6310-edit-point .isimb-6310-open-new-tab[value='${jsonData.openNewTab}'],
        #isimb-6310-edit-point .isimb-6310-linking-area[value='${jsonData.linkingArea}'],
        #isimb-6310-edit-point .isimb-6310-open-new-tab-direct[value='${jsonData.openNewTabDirect}'],
        #isimb-6310-edit-point .isimb-6310_button_link[value='${jsonData.customButtonLinkType}']
      `).trigger("click");
  }

  if (jsonData.elementType == 2) {
    jQuery(
      "#isimb-6310-edit-point .isimb-6310-tooltip-link, .isimb_6310_custom_template"
    ).addClass("isimb-6310-hide");
    jQuery("#isimb-6310-edit-point .isimb_6310_template_embedded").removeClass(
      "isimb-6310-hide"
    );
  } else if (jsonData.elementType == 3) {
    jQuery("#isimb-6310-edit-point .isimb_6310_custom_template").removeClass(
      "isimb-6310-hide"
    );
    jQuery(
      "#isimb-6310-edit-point .isimb-6310-tooltip-link, .isimb_6310_template_embedded,  .isimb_6310_font_prop, .isimb-6310-templates"
    ).addClass("isimb-6310-hide");
  }
  if (jsonData.elementType == 4) {
    setTimeout(function () {
      jQuery(
        "#isimb-6310-edit-point .isimb-6310-section-select[value='2']"
      ).trigger("click");
      jQuery(
        "#isimb-6310-edit-point .isimb-6310-section-select[value='4']"
      ).trigger("click");
    }, 600);
  } else {
    jQuery("#isimb-6310-edit-point .isimb-6310-tooltip-link").removeClass(
      "isimb-6310-hide"
    );
    jQuery(
      "#isimb-6310-edit-point .isimb_6310_custom_template, .isimb_6310_template_embedded"
    ).addClass("isimb-6310-hide");
  }

  if (jsonData.viewMoodType == "01") {
    jQuery(
      `#isimb-6310-edit-point .isimb-6310-tooltip-img[data-id='01']`
    ).removeClass("isimb-6310-hide");
  }

  setTimeout(function () {
    jQuery(
      `#isimb-6310-edit-point .isimb-6310-section-select[value='${jsonData.elementType}']`
    ).click();
    if (jsonData.selectedTemplate != "") {
      jQuery(
        `.isimb-6310-tooltip-img[data-id='${jsonData.selectedTemplate}']`
      ).addClass("isimb-6310-active");
      jQuery(
        `#isimb-6310-edit-point .isimb-6310-tooltip-img[data-id='${jsonData.selectedTemplate}']`
      ).trigger("click");
    }
    if (jsonData.elementType == 3) {
      jQuery(
        "#isimb-6310-edit-point .isimb_6310_font_prop, #isimb-6310-edit-point .isimb_6310_template_embedded, #isimb-6310-edit-point .isimb_6310_template_description"
      ).addClass("isimb-6310-hide");
      jQuery("#isimb-6310-edit-point .isimb_6310_custom_template").removeClass(
        "isimb-6310-hide"
      );
    }
  }, 500);

  return {
    pointList: jsonData.pointList,
    imageWidth: jsonData.imageWidth,
    imageHeight: jsonData.imageHeight,
  };
}

function isimb_6310_reset_fields() {
  jQuery(".isimb-isimb-6310_popover_type[value='1']").prop("checked", true);
  jQuery(".isimb-6310-tooltip-img").removeClass("isimb-6310-active");
  jQuery(
    ".isimb-6310-form, .isimb-6310-tooltip-link, .isimb-6310-templates, .tooltip-embedded"
  ).addClass("isimb-6310-hide");
  jQuery(".isimb-6310-embedded_code_link").val("");
  let fieldList =
    ".icons-1, .icons-2, .isimb-6310-image-edit-1, .isimb-6310-image-edit-2, .isimb_6310_custom_text_font_size, .isimb_6310_area_border_color, .isimb_6310_area_border_hover_color, .isimb-6310_area_shadow_width, .isimb_6310_area_shadow_hover_color, .isimb_6310_custom_text_font_bg_color, .isimb_6310_select_area_color, .isimb_6310_modal_content, .isimb_6310_modal_content_font_size, .isimb_6310_modal_content_color, .isimb_6310_modal_content_background_color, .isimb_6310_select_area_hover_color, .isimb-6310_area_border_size, .isimb_6310_link_text, .isimb_6310_custom_link_url, .popup_embedded, .isimb_6310_template_font_color, .isimb_6310_template_bg_color, .isimb_6310_template_font_size, .isimb-6310-embedded_code_link, .isimb-6310-tooltip_discription, .isimb-6310-tooltip_discription_font_size, .isimb-6310-tooltip_discription_font_color, .isimb-6310-button-text, .isimb-6310-button-url, .isimb_6310_button_text_color, .isimb_6310_button_bg_color, .isimb_6310_button_text_size, .isimb-6310-custome_html, .isimb-6310-custome_css";
  fieldList = fieldList.split(",");
  // setTimeout(function () {
  for (let i = 0; i < fieldList.length; i++) {
    let selector = jQuery(fieldList[i].trim());
    if (
      selector.attr("data-value") !== undefined ||
      selector.attr("data-value") !== null
    ) {
      selector.val(selector.attr("data-value"));
      selector.attr("data-defaultValue", selector.attr("data-value"));
      selector.text(selector.attr("data-value"));
      if (selector.closest("div").find(".minicolors-swatch-color")) {
        selector
          .closest("div")
          .find(".minicolors-swatch-color")
          .css({
            "background-color": selector.attr("data-value"),
          });
      }
    }
  }
  // }, 100);
  jQuery(
    ".isimb-6310-section-select, .isimb-6310-open-new-tab, .isimb-6310-linking-area, .isimb-6310-open-new-tab-direct"
  ).prop("selectedIndex", 0);

  jQuery(".isimb_6310_textarea").addClass("isimb-6310-hide");

  setTimeout(function () {
    if (jQuery(".isimb_6310_color_picker").length) {
      jQuery(".isimb_6310_color_picker").each(function () {
        jQuery(this).minicolors({
          control: jQuery(this).attr("data-control") || "hue",
          defaultValue: jQuery(this).attr("data-defaultValue") || "",
          format: jQuery(this).attr("data-format") || "hex",
          keywords: jQuery(this).attr("data-keywords") || "",
          inline: jQuery(this).attr("data-inline") === "true",
          letterCase: jQuery(this).attr("data-letterCase") || "lowercase",
          opacity: jQuery(this).attr("data-opacity"),
          position: jQuery(this).attr("data-position") || "bottom left",
          swatches: jQuery(this).attr("data-swatches")
            ? jQuery(this).attr("data-swatches").split("|")
            : [],
          change: function (value, opacity) {
            if (!value) return;
            if (opacity) value += ", " + opacity;
            if (typeof console === "object") {
            }
          },
          theme: "bootstrap",
        });
      });
    }
  }, 500);
}

function isimb_6310_get_embedded_attributes(embeddedCode) {
  if (!embeddedCode) {
    return "";
  }
  jQuery("body").after(`<div class="isimb-6310-dummy">${embeddedCode}</div>`);
  embeddedCode = jQuery(".isimb-6310-dummy iframe");
  let attrName = "";
  let attrValue = "";
  if (embeddedCode.length) {
    embeddedCode.each(function () {
      var attributes = this.attributes;
      var i = attributes.length;
      while (i--) {
        if (attrName) {
          attrName += "XXYYXX";
          attrValue += "XXYYXX";
        }
        attrName += attributes[i].name;
        attrValue += attributes[i].value;
      }
    });
  }
  jQuery(".isimb-6310-dummy").remove();
  return `${attrName}AABBAA${attrValue}`;
}

function isimb_6310_create_embedded_code(embeddedCode) {
  if (!embeddedCode) return;
  embeddedCode = embeddedCode.split("AABBAA");
  let allAttrName = embeddedCode[0].split("XXYYXX");
  let allAttrValue = embeddedCode[1].split("XXYYXX");

  let htmlCode = "";

  if (
    allAttrName.length &&
    allAttrValue.length &&
    allAttrName.length == allAttrValue.length
  ) {
    for (let i = 0; i < allAttrName.length; i++) {
      htmlCode += " " + allAttrName[i] + '="' + allAttrValue[i] + '"';
    }
  }

  if (htmlCode) {
    htmlCode = "<iframe" + htmlCode + "></iframe>";
  }
  return htmlCode;
}

function isimb_6310_create_area(cords, width, height, orgWidth, orgHeight) {
  if (!cords) return "";
  let cordsList = cords.split(",");
  cords = "";

  for (let i = 0; i < cordsList.length; i++) {
    if (i % 2 == 0) {
      cords += isimb_6310_absolute_position(cordsList[i], width, orgWidth);
      cords += ",";
    } else {
      cords += isimb_6310_absolute_position(cordsList[i], height, orgHeight);
      cords += " ";
    }
  }

  return cords.trim();
}

function isimb_6310_absolute_position(point, distance, orgDistance) {
  return Math.round((point * orgDistance) / distance);
}

function isimb_6310_default_polygon(orgWidth, orgHeight) {
  let polygon = jQuery(".isimb-6310-pol-loaded");
  if (polygon.length) {
    polygon.each(function () {
      let dataJson = jQuery(this).attr("data-json");
      dataJson = JSON.parse(dataJson);
      let cords = isimb_6310_create_area(
        dataJson.pointList,
        dataJson.imageWidth,
        dataJson.imageHeight,
        orgWidth,
        orgHeight
      );
      jQuery(this).attr("points", cords);
      let id = jQuery(this).attr("data-id");

      //Nested List
      let nestedList = dataJson.nestedList;
      if (nestedList && nestedList.length) {
        for (let i = 0; i < nestedList.length; i++) {
          let cords = isimb_6310_create_area(
            nestedList[i].nestedArea,
            nestedList[i].nestedWidth,
            nestedList[i].nestedHeight,
            orgWidth,
            orgHeight
          );

          jQuery(`.isimb-6310-pol-nested-${id}-${nestedList[i].nestedId}`).attr(
            "points",
            cords
          );
        }
      }
    });
  }
}

function isimb_6310_canvas_init($ids, inputField = "isimb-6310-canvas-area") {
  jQuery(".isimb-6310-canvas-wrapper").html("");
  jQuery(`${$ids} .${inputField}[isimb-6310-image-url]`).canvasAreaDraw(
    `${$ids}`
  );

  setTimeout(function () {
    let divWidth = jQuery(`${$ids} .isimb-6310-canvas-wrapper`).width();
    let canWidth = jQuery(".isimb-6310-builder-box .isimb-6310-main-svg").attr(
      "width"
    );
    let canHeight = jQuery(".isimb-6310-builder-box .isimb-6310-main-svg").attr(
      "height"
    );
    let divHeight = Math.round((canHeight * divWidth) / canWidth);

    jQuery(`${$ids} canvas`)
      .attr("height", divHeight)
      .attr("width", divWidth)
      .css({
        "background-size": `${divWidth}px ${divHeight}px`,
      });
  }, 500);
}
