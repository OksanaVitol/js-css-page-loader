# loader
Display a loading icon until the page loads completely(check min time)

Simple loader. Provided by Oksana Korobanova
----------------------------------------
   Steps to make it work:
   1. Copy the entire folder 'loader' to your project root directory

   2. Include CSS file
   Place the code below to your html/php inside the <head></head> part of your code

    <!-- ICON LOADER CSS  -->
    <link rel="stylesheet" href="/loader/css/loader.css">
    <!-- ICON LOADER CSS EOF  -->

   2. HTML part
   Place the code below to your html/php file right after <body> tag

   <!-- ICON LOADER   -->
   <div id="icon-load" class="icon-load">
       <div class="icon-load__container">
           <div class="icon-load__loader"></div>
       </div>
   </div>
   <!-- ICON LOADER  EOF  -->

   3. Include JS file
   Place the code below to your html/php file right before </body> tag

   <!-- ICON LOADER JS  -->
   <script src="/loader/js/loader.js"></script>
   <!-- ICON LOADER JS EOF  -->

----------------------------------------------
    To change background colour of the loader element:
    1. Go to loader/css/loader.css
    2. Find .icon-load
    3. Change background colour HEX or RGB code
       background-color: #ebe9ee;
-----------------------------------------------
    To change an image of the loader element:
    1. Go to loader/css/loader.css
    2. Find .icon-load__loader
    3. Change background image
       background-image: url("../img/Blocks.svg");
    4. Add new image to loader/img folder




