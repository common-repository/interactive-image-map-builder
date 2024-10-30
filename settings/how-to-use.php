<?php
if (!defined('ABSPATH'))
   exit;

?>
<div class="isimb-6310">
   <div class="isimb-6310-row isimb-6310-row-plugins">
      <h1 class="isimb-6310-wpmart-all-plugins">Plugins Reference Video</h1>
   </div>
</div>

<script>
   jQuery.getJSON('https://demo.tcsesoft.com/plugins/isimb.php', function(data) {
      let htmlCode = '';
      for(let i = 0; i < data.length; i++) {         
         htmlCode += `
         <div class="isimb-6310-help-section">         
            <div class="isimb-6310-wpmart-plugins-video">
            <i class="fas fa-film"></i><a href="${data[i].url}" target="_blank">${data[i].title}</a>
            </div>
         </div>`;
      }
      jQuery('.isimb-6310-wpmart-all-plugins').after(htmlCode);
   });
</script>
<style>
h1.isimb-6310-wpmart-all-plugins {  
    color: chocolate !important;   
    font-size: 30px;
}
.isimb-6310-help-section{
   width: 100%;
   display: inline;
   float: left;
   margin: 8px 30px;
   font-size: 14px;
}
.isimb-6310-wpmart-plugins-video{
   background-color: transparent;
}
.isimb-6310-wpmart-plugins-video i{
   float: left;
   padding-right: 5px;
   font-size: 21px;
   color: #009097;
}
.isimb-6310-wpmart-plugins-video a {
    text-decoration: none;
    float: left;
    margin: 0;
    padding: 0;
    color: #2c2e1d94;
    font-weight: 600;
 
}
.isimb-6310-wpmart-plugins-video a:hover {
    color: #027f85;
}

</style>