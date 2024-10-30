<?php
$pointCssCode = "
  .isimb-6310-hover-content {
      transform: scale(0);
      transition: all .5s;
      position: absolute;
      z-index:9999999999;
  }
";

wp_register_style("isimb-6310-template-" . esc_attr($ids) . "-css", "");
wp_enqueue_style("isimb-6310-template-" . esc_attr($ids) . "-css");
wp_add_inline_style("isimb-6310-template-" . esc_attr($ids) . "-css", $pointCssCode);