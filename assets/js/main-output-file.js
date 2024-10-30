let isimb_6310_Timeout;
let isimb_6310_LastId = "";
let isimbPointerType = 0;

window.addEventListener("load", function () {
  setTimeout(function () {
    jQuery(".isimb-6310-hover-content").each(function () {
      jQuery("body").append(jQuery(this).clone());
      jQuery(this).remove();
    });
    jQuery(".isimb-6310-modal").each(function () {
      jQuery("body").append(jQuery(this).clone());
      jQuery(this).remove();
    });

    isimb_6310_polygon_color_change();
  }, 300);

  setTimeout(function () {
    var allSliderImg = jQuery(
      ".isimb-6310-modal-content img, .isimb-6310-hover-content img"
    );
    allSliderImg.each(function () {
      var src =
        jQuery(this).attr("isimb-image-url") ||
        jQuery(this).attr("data-src") ||
        jQuery(this).attr("data-opt-src") ||
        jQuery(this).attr("data-lazy-src") ||
        jQuery(this).attr("src");
      var attributes = jQuery.map(this.attributes, function (item) {
        return item.name;
      });

      var img = jQuery(this);
      jQuery.each(attributes, function (i, item) {
        img.removeAttr(item);
      });
      img.attr("src", src);
    });
  }, 1000);

  isimb_6310_RemoveLazyLoad(0);
  isimb_6310_RemoveLazyLoad(500);
  isimb_6310_RemoveLazyLoad(5000);
  isimb_6310_RemoveLazyLoad(10000);

  isimb_6310_create_polygon();
  isimb_6310_hover_pointer();
  isimb_6310_close_button();
  isimb_6310_popup_open();
  isimb_6310_direct_link();

  let classList = [];
  let allClass = "";
  let boxList = document.querySelectorAll(".isimb-6310-builder-box");
  if (boxList.length) {
    for (let i = 0; i < boxList.length; i++) {
      //Collecting all data-tab-class attribute
      let attr = boxList[i].getAttribute("data-tab-class");
      if (attr) {
        if (allClass) {
          allClass += ",";
        }
        allClass += attr.trim();
      }
    }
    if (allClass) {
      allClass = allClass.split(",");
      for (let i = 0; i < allClass.length; i++) {
        if (allClass[i].trim().length) {
          classList.push(allClass[i].trim());
        }
      }
    }
    if (classList.length) {
      var uniqueClass = [...new Set(classList)];
      for (let i = 0; i < uniqueClass.length; i++) {
        var selectedCls = this.document.querySelectorAll(uniqueClass[i]);
        if (selectedCls.length) {
          selectedCls.forEach(function (el) {
            el.addEventListener("click", function () {
              isimb_6310_create_polygon();
            });
          });
        }
      }
    }
  }
});

window.addEventListener("resize", function () {
  let mainImgList = jQuery(".isimb-6310-main-image");
  mainImgList.each(function () {
    let orgWidth = jQuery(this).width();
    let orgHeight = jQuery(this).height();
    if (orgWidth && orgHeight) {
      let closest = jQuery(this).closest(".isimb-6310-builder-box");
      closest
        .find(".isimb-6310-main-svg")
        .attr("width", orgWidth)
        .attr("height", orgHeight);
      closest.find(".isimb-6310-main-svg").css({
        "background-size": orgWidth + "px " + orgHeight + "px",
        display: "block",
      });
      jQuery(this).css({ display: "none" });
      isimb_6310_default_polygon(closest, orgWidth, orgHeight);
    }
  });
});

function isimb_6310_setTooltipPosition(pointId, alwaysShow = 2, icons) {
  const closest = jQuery(".isimb-6310-pol-" + pointId).closest(
    ".isimb-6310-builder-box"
  );
  let jsonData = JSON.parse(
    jQuery(".isimb-6310-pol-" + pointId).attr("data-json")
  );

  let polygonArea = isimb_6310_polygon_size(icons.attr("points"));
  let areaWidth = polygonArea.x;
  let areaHeight = polygonArea.y;

  if (jsonData.selectedTemplate == "02") {
    let iFrame = jQuery(".isimb-6310-hover-content-" + pointId + " iframe");
    let width = iFrame.attr("width");
    let height = iFrame.attr("height");
    let windowWidth = jQuery(window).width();

    if (!width) {
      width = windowWidth > 700 ? 350 : windowWidth - 40;
      height = windowWidth > 700 ? 290 : "auto";
    } else if (windowWidth < width) {
      windowWidth -= 20;
      height = (windowWidth * height) / width;
      width = windowWidth;
    }

    jQuery(
      ".isimb-6310-hover-content-" +
        pointId +
        " iframe, .isimb-6310-hover-content-" +
        pointId +
        " .isimb-6310-template-02-hover-content"
    ).css({
      width: width + "px",
      height: height + "px",
    });
    // iFrame
    //   .closest(".isimb-6310-template-02-content")
    //   .css({ width: "100%", height: "100%" });
  }
  let content = jQuery(".isimb-6310-hover-content-" + pointId);
  const tooltipType = Number(closest.attr("data-tooltip-position"));
  if (tooltipType === 1) {
    //Tooltip position Top Right
    content.css({
      top: closest.attr("data-top-bottom") + "px",
      right: closest.attr("data-left-right") + "px",
      position: "fixed",
    });
  } else if (tooltipType === 2) {
    //Tooltip position Center Right
    let contentHeight = content.height();
    let windowHeight = jQuery(window).height();
    let topPosition = windowHeight / 2 - contentHeight / 2;
    content.css({
      top: topPosition + "px",
      right: "10px",
      position: "fixed",
    });
  } else if (tooltipType === 3) {
    //Tooltip position Bottom Right
    content.css({
      bottom: closest.attr("data-top-bottom") + "px",
      right: closest.attr("data-left-right") + "px",
      position: "fixed",
    });
  } else if (tooltipType === 4) {
    //Tooltip position Top Left
    content.css({
      top: closest.attr("data-top-bottom") + "px",
      left: closest.attr("data-left-right") + "px",
      position: "fixed",
    });
  } else if (tooltipType === 5) {
    //Tooltip position Center Right
    let contentHeight = content.height();
    let windowHeight = jQuery(window).height();
    let topPosition = windowHeight / 2 - contentHeight / 2;
    content.css({
      top: topPosition + "px",
      left: "10px",
      position: "fixed",
    });
  } else if (tooltipType === 6) {
    //Tooltip position Bottom Right
    content.css({
      bottom: closest.attr("data-top-bottom") + "px",
      left: closest.attr("data-left-right") + "px",
      position: "fixed",
    });
  } else {
    let tempIconSize = areaWidth / 2;
    let fromLeft = icons.offset().left;
    let fromRight = jQuery(window).width() - fromLeft;
    let fromTop = icons.offset().top;
    let pointWidth = content.width() / 2;
    let contentHeight = content.height();
    let toolTipPosition = isimb_6310_calculateToolTipPosition(
      fromTop,
      tempIconSize,
      contentHeight
    );

    if (fromLeft + tempIconSize < pointWidth - 10) {
      content.css({
        left: "10px",
        right: "auto",
      });
    } else if (fromRight + tempIconSize < pointWidth) {
      content.css({
        left: "auto",
        right: "10px",
      });
    } else {
      let temp = fromLeft + tempIconSize - pointWidth;
      content.css({
        left: temp + "px",
        right: "auto",
      });
    }

    let topPos;
    if (toolTipPosition == 1 || alwaysShow == 1) {
      fromTop = fromTop + areaHeight / 2 - contentHeight;
      topPos = fromTop + "px";
    } else if (toolTipPosition == 2) {
      fromTop += areaHeight;
      topPos = fromTop + "px";
    }
    if (parseInt(topPos) < 15) {
      topPos = "15px";
    }
    content.css({
      top: topPos,
    });
  }

  //Hover iFrame tooltip responsive
  let hoverContent = jQuery(
    ".isimb-6310-hover-content .isimb-6310-template-02 iframe"
  );
  if (hoverContent.length) {
    hoverContent.each(function () {
      let iframeWidth = jQuery(this).attr("width");
      let iframeHeight = jQuery(this).attr("height");
      let deviceWidth = jQuery(window).width();
      iframeWidth =
        iframeWidth != undefined && iframeWidth != 0 && iframeWidth != ""
          ? iframeWidth
          : 496;
      iframeHeight =
        iframeHeight != undefined && iframeHeight != 0 && iframeHeight != ""
          ? iframeHeight
          : 397;

      if (deviceWidth < iframeWidth) {
        iframeHeight = (iframeHeight * deviceWidth) / iframeWidth;
        jQuery(this).attr("width", deviceWidth);
        jQuery(this).attr("height", iframeHeight);
      }
    });
  }

  isimb_6310_RemoveLazyLoad(1000);
  isimb_6310_RemoveLazyLoad(2000);
  isimb_6310_RemoveLazyLoad(5000);
  isimb_6310_RemoveLazyLoad(10000);
  setTimeout(function () {
    jQuery(".isimb-6310-point-icons").show();
  }, 500);
}

function isimb_6310_calculateToolTipPosition(
  fromTop,
  tempIconSize,
  contentHeight
) {
  let scrollTop = jQuery(window).scrollTop();
  let deviceHeight = jQuery(window).height();
  let center = scrollTop + deviceHeight / 2;
  let iconCenter = fromTop + tempIconSize + 10;

  if (fromTop - contentHeight > scrollTop) {
    //Space available in top
    return 1;
  } else if (iconCenter > center) {
    //Space not available in top but more space than bottom
    return 1;
  } else {
    return 2;
  }
}

function isimb_6310_RemoveLazyLoad(timeValue) {
  //Remove lazyload
  setTimeout(() => {
    var $allImages = jQuery(".isimb-6310-img");
    $allImages.each(function () {
      var image = jQuery(this).attr("data-isimb-value");
      var src = jQuery(this).attr("src");
      var alt = jQuery(this).attr("alt");
      var className = jQuery(this).attr("data-isimb-cls");

      var attributes = this.attributes;
      var i = attributes.length;
      while (i--) {
        let attrName = attributes[i].name.toLowerCase();
        if (
          attrName != "src" &&
          attrName != "class" &&
          attrName != "alt" &&
          attrName != "data-isimb-value" &&
          attrName != "data-isimb-cls" &&
          attrName != "style"
        ) {
          this.removeAttributeNode(attributes[i]);
        }
      }
      if (src != image) {
        jQuery(this).attr({
          src: image,
          class: className,
          alt: alt,
          "data-isimb-value": image,
          "data-isimb-cls": className,
        });
      } else {
        jQuery(this).attr({ class: className });
      }
    });
  }, timeValue);
}

function isimb_6310_default_polygon(closest, orgWidth, orgHeight) {
  let polygon = closest.find(".isimb-6310-pol-loaded");
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

      let currentId = jQuery(this).attr("data-id");
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

          jQuery(
            ".isimb-6310-main-svg-" +
              currentId.split("-")[0] +
              " .isimb-6310-pol-nested-" +
              currentId +
              "-" +
              nestedList[i].nestedId
          ).attr("points", cords);
        }

        let styleCSS =
          "#isimb-6310-all-nested-point polygon[data-nested-id='" +
          currentId +
          "']{ fill: " +
          dataJson.selectAreaColor +
          " !important; stroke: " +
          dataJson.areaBorderColor +
          " !important; stroke-width: " +
          dataJson.areaBorderSize +
          "px !important; }";
        jQuery("<style type='text/css'>" + styleCSS + "</style>").appendTo(
          "body"
        );
      }
    });
  }
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

function isimb_6310_hide() {
  isimb_6310_Timeout = setTimeout(
    function () {
      jQuery(".isimb-6310-hover-content").each(function () {
        if (
          jQuery(this).attr("data-always-show") == 1 &&
          window.innerWidth > 768
        ) {
          jQuery(this).css("transform", "scale(1)");
          jQuery(this).show();
        } else {
          jQuery(this).css("transform", "scale(0)");
          jQuery(this).hide();
        }
      });

      setTimeout(function () {
        jQuery(
          ".isimb-6310-hover-content .isimb-6310-template-02-hover-content"
        ).css({ width: 0, height: 0 });
        jQuery(".isimb-6310-modal-content iframe").each(function () {
          jQuery(this).closest(".isimb-6310-modal-content").removeAttr("style");
        });
      }, 100);

      jQuery(
        ".isimb-6310-hover-content .isimb-6310-template-02-hover-content iframe"
      ).removeAttr("style");

      var closest = jQuery(".isimb-6310-hover-content iframe");
      if (closest.length) {
        closest.each(function () {
          let src = jQuery(this).attr("src");
          if (src.indexOf("google.com/maps/embed") === -1) {
            jQuery(this).attr("src", "");
            jQuery(this).attr("src", src);
          }
        });
      }
    },
    isimbPointerType ? 1500 : 500
  );
}

function isimb_6310_polygon_size(coords) {
  var maxX = 0,
    minX = 0,
    maxY = 0,
    minY = 0,
    coordsArray = coords.split(" ");

  for (var j = 0; j < coordsArray.length; j++) {
    var tempCords = coordsArray[j].split(",");
    var x = parseFloat(tempCords[0]);
    var y = parseFloat(tempCords[1]);

    if (j == 0) {
      maxX = x;
      minX = x;
      maxY = y;
      minY = y;
    } else {
      if (x > maxX) maxX = x;
      if (x < minX) minX = x;
      if (y > maxY) maxY = y;
      if (y < minY) minY = y;
    }
  }

  return {
    x: maxX - minX,
    y: maxY - minY,
  };
}

function isimb_6310_close_button() {
  jQuery("body").on("click", function (event) {
    if (event.target.closest(".isimb-6310-modal-content")) return;
    if (!event.target.closest(".isimb-6310-modal")) return;

    jQuery(".isimb-6310-modal").css({
      display: "none",
    });
    jQuery("body").css({
      overflow: "initial",
    });

    jQuery(".isimb-6310-template-02-hover-content iframe").removeAttr("style");

    var closest = jQuery(
      ".isimb-6310-hover-content iframe, .isimb-6310-modal iframe"
    );
    if (closest.length) {
      closest.each(function () {
        let src = jQuery(this).attr("src");
        if (src.indexOf("google.com/maps/embed") === -1) {
          jQuery(this).attr("src", "");
          jQuery(this).attr("src", src);
        }
      });
    }

    setTimeout(function () {
      jQuery(".isimb-6310-template-02-hover-content").css({
        width: 0,
        height: 0,
      });
      jQuery(".isimb-6310-modal-content iframe").each(function () {
        jQuery(this).closest(".isimb-6310-modal-content").removeAttr("style");
      });
    }, 100);
  });

  jQuery("body").on("click", ".isimb-6310-close-button", function (event) {
    jQuery(".isimb-6310-modal").css({
      display: "none",
    });
    jQuery("body").css({
      overflow: "initial",
    });

    var closest = jQuery(
      ".isimb-6310-hover-content iframe, .isimb-6310-modal iframe"
    );
    if (closest.length) {
      closest.each(function () {
        let src = jQuery(this).attr("src");
        if (src.indexOf("google.com/maps/embed") === -1) {
          jQuery(this).attr("src", "");
          jQuery(this).attr("src", src);
        }
      });
    }

    setTimeout(function () {
      jQuery(
        ".isimb-6310-hover-content .isimb-6310-template-02-hover-content"
      ).css({ width: 0, height: 0 });
      jQuery(".isimb-6310-modal-content iframe").each(function () {
        jQuery(this).closest(".isimb-6310-modal-content").removeAttr("style");
      });
    }, 500);
    jQuery(this)
      .closest(".isimb-6310-hover-content")
      .css({ transform: "scale(0)" });
    jQuery(this).closest(".isimb-6310-hover-content").hide();
  });
}

function isimb_6310_popup_open() {
  //Popup Open
  jQuery("body").on(
    "click",
    ".isimb-6310-pol-loaded, .isimb-6310-pol-loaded-nested",
    function () {
      // let directLink = jQuery(this)
      //   .closest(".isimb-6310-pol-loaded")
      //   .attr("data-link-url");

      // if (directLink != undefined && directLink != null) {
      //   let target = jQuery(this)
      //     .closest(".isimb-6310-pol-loaded")
      //     .attr("data-target");
      //   if (target != undefined && target != null) {
      //     window.open(directLink, "_blank");
      //     win.focus();
      //   } else {
      //     window.location.href = directLink;
      //   }
      // }

      let dataId =
        jQuery(this).closest("polygon").attr("data-id") ||
        jQuery(this).closest("polygon").attr("data-nested-id");

      let hoverContentIframe = jQuery(
        ".isimb-6310-hover-content-" + dataId + " iframe"
      );
      if (hoverContentIframe.length) {
        hoverContentIframe.show();
      }

      let selector = jQuery(".isimb-6310-popup-" + dataId);
      if (selector.length) {
        let windowWidth = jQuery(window).width();
        if (windowWidth < 768) {
          jQuery(".isimb-6310-hover-content-" + dataId).css(
            "transform",
            "scale(0)"
          );
          jQuery(".isimb-6310-hover-content-" + dataId).hide();
        }
        let width = selector.find("iframe").attr("width");
        let height = selector.find("iframe").attr("height");

        if (!width) {
          width = windowWidth > 400 ? 350 : windowWidth - 40;
          height = windowWidth > 400 ? 290 : "auto";
        } else if (windowWidth < width) {
          windowWidth -= 40;
          height = (windowWidth * height) / width;
          width = windowWidth;
        }

        selector.find("iframe").css({
          width: width + "px",
          height: height + "px",
        });
        selector.css({
          display: "block",
        });
        selector.find(".isimb-6310-modal-content").css({
          display: "block",
          width: width + "px",
          height: height + "px",
        });

        selector.find(".isimb-6310-template-02-hover-content").css({
          display: "block",
          width: width + "px",
          height: height + "px",
        });

        jQuery("body").css({
          overflow: "hidden",
        });
      } else {
        selector = jQuery(".isimb-6310-hover-content-" + dataId).find("iframe");
        if (selector) {
          let windowWidth = jQuery(window).width();
          jQuery(".isimb-6310-hover-content-" + dataId).css(
            "transform",
            "scale(1)"
          );
          jQuery(".isimb-6310-hover-content-" + dataId).show();
          let width = selector.find("iframe").attr("width");
          let height = selector.find("iframe").attr("height");

          if (!width) {
            width = windowWidth > 700 ? 350 : windowWidth - 40;
            height = windowWidth > 700 ? 290 : "auto";
          } else if (windowWidth < width) {
            windowWidth -= 40;
            height = (windowWidth * height) / width;
            width = windowWidth;
          }
          jQuery(".isimb-6310-hover-content-" + dataId)
            .find(".isimb-6310-template-02-hover-content")
            .css({
              display: "block",
              width: width + "px",
              height: height + "px",
            });
          selector.css({
            width: width + "px",
            height: height + "px",
          });
        }
      }
    }
  );
}

function isimb_6310_hover_pointer() {
  //Hover on pointer
  jQuery(".isimb-6310-pol-loaded, .isimb-6310-pol-loaded-nested")
    .mouseover(function () {
      clearTimeout(isimb_6310_Timeout);
      let pointId =
        jQuery(this).attr("data-id") || jQuery(this).attr("data-nested-id");
      isimbPointerType = Number(
        jQuery(this)
          .closest(".isimb-6310-builder-box")
          .attr("data-tooltip-position")
      );
      let alwaysShow =
        jQuery(this).attr("data-always-show") == 1 && window.initialWidth > 768
          ? 1
          : 2;
      isimb_6310_setTooltipPosition(pointId, alwaysShow, jQuery(this));
      if (isimb_6310_LastId && isimb_6310_LastId != pointId) {
        jQuery(".isimb-6310-hover-content").each(function () {
          if (
            jQuery(this).attr("data-always-show") == 1 &&
            window.innerWidth > 768
          ) {
            jQuery(this).css("transform", "scale(1)");
            jQuery(this).show();
          } else {
            jQuery(this).css("transform", "scale(0)");
            jQuery(this).hide();
          }
        });
      }
      isimb_6310_LastId = pointId;
      jQuery(".isimb-6310-hover-content-" + pointId)
        .stop()
        .css("transform", "scale(1)");
      jQuery(".isimb-6310-hover-content-" + pointId).show();
      let hoverContentIframe = jQuery(
        ".isimb-6310-hover-content-" + pointId + " iframe"
      );
      if (hoverContentIframe.length) {
        hoverContentIframe.show();
      }
    })
    .mouseout(function () {
      isimb_6310_hide();
    });

  setTimeout(function () {
    jQuery(".isimb-6310-hover-content")
      .mouseover(function () {
        clearTimeout(isimb_6310_Timeout);
      })
      .mouseout(function () {
        isimb_6310_hide();
      });
  }, 500);
}

function isimb_6310_create_polygon() {
  setTimeout(() => {
    let mainImgList = jQuery(".isimb-6310-main-image");
    if (mainImgList.length) {
      mainImgList.each(function () {
        let mainImg = jQuery(this);
        let orgWidth = mainImg.width();
        let orgHeight = mainImg.height();
        if (orgWidth && orgHeight) {
          let closest = jQuery(this).closest(".isimb-6310-builder-box");
          closest
            .find(".isimb-6310-main-svg")
            .attr("width", orgWidth)
            .attr("height", orgHeight);
          closest.find(".isimb-6310-main-svg").css({
            "background-size": orgWidth + "px " + orgHeight + "px",
            display: "block",
          });
          mainImg.css({ display: "none" });
          isimb_6310_default_polygon(closest, orgWidth, orgHeight);
        }
      });
    }
  }, 1000);
}

function isimb_6310_direct_link() {
  setTimeout(() => {
    jQuery("body").on("click", "[isimb-6310-direct-link]", function () {
      var target = Number(
        jQuery(this).closest("polygon").attr("isimb-6310-direct-link-target")
      );
      var directLink = jQuery(this)
        .closest("polygon")
        .attr("isimb-6310-direct-link");

      if (target) {
        var win = window.open(directLink, "_blank");
        win.focus();
      } else {
        window.location.href = directLink;
      }
    });
  }, 1000);
}

function isimb_6310_polygon_color_change() {
  jQuery("body").on(
    "mouseover",
    ".isimb-6310-pol-loaded-nested, .isimb-6310-pol-loaded",
    function () {
      jQuery(".isimb-6310-dynamic-css").remove();
      let parentId =
        jQuery(this).attr("data-id") || jQuery(this).attr("data-nested-id");
      let mainId = parentId.split("-")[0];
      let jsonObj = JSON.parse(
        jQuery(
          ".isimb-6310-main-svg-" + mainId + " .isimb-6310-pol-" + parentId
        ).attr("data-json")
      );

      let styleCSS =
        ".isimb-6310-main-svg-" +
        mainId +
        " .isimb-6310-pol-" +
        parentId +
        ", .isimb-6310-main-svg-" +
        mainId +
        " polygon[data-nested-id='" +
        parentId +
        "']{ fill: " +
        jsonObj.selectAreaHoverColor +
        " !important; stroke:" +
        jsonObj.areaBorderHoverColor +
        " !important; stroke-width:" +
        jsonObj.areaBorderSize +
        "px !important; cursor: pointer; filter: drop-shadow(0px 0px " +
        jsonObj.areaShadowith +
        "px " +
        jsonObj.areaShadowColor +
        "); }";
      jQuery(
        "<style type='text/css' class='isimb-6310-dynamic-css'>" +
          styleCSS +
          "</style>"
      ).appendTo("body");
    }
  );

  jQuery("body").on(
    "mouseout",
    ".isimb-6310-pol-loaded-nested, .isimb-6310-pol-loaded",
    function () {
      jQuery(".isimb-6310-dynamic-css").remove();
      let parentId =
        jQuery(this).attr("data-id") || jQuery(this).attr("data-nested-id");
      let mainId = parentId.split("-")[0];
      let jsonObj = JSON.parse(
        jQuery(
          ".isimb-6310-main-svg-" + mainId + " .isimb-6310-pol-" + parentId
        ).attr("data-json")
      );
      let styleCSS =
        ".isimb-6310-main-svg-" +
        mainId +
        " .isimb-6310-pol-" +
        parentId +
        ", .isimb-6310-main-svg-" +
        mainId +
        " polygon[data-nested-id='" +
        parentId +
        "']{ fill: " +
        jsonObj.selectAreaColor +
        " !important; stroke: " +
        jsonObj.areaBorderColor +
        " !important; stroke-width: " +
        jsonObj.areaBorderSize +
        "px !important; }";
      jQuery(
        "<style type='text/css' class='isimb-6310-dynamic-css'>" +
          styleCSS +
          "</style>"
      ).appendTo("body");
    }
  );
}
