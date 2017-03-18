//
// if (screen.width < 480) {
//  document.getElementById("viewport").setAttribute("content", "width=480");
// }
//
//
//
// if (screen.width < 480) {
//   $("#viewport").attr("content", "width=480");
// }



var myHomepage = function(){
  //back-end

  //"private" variables
  var windowWidth = $(window).width();

  var i = 0;
  var x = 0;
  var gallerySource = ["url(img/Forest.jpg)", "url(img/Arc1.jpg)", "url(img/Arc2.jpg)", "url(img/Juso.jpg)"];
  var iconArray = ["img/gachapin1.png", "img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png"];
  var animationArray = [ " rollIn", " flip", " rotateIn", " rubberBand"];


  //"private" methods
  var rotateGallery = function(){

    x = (x < gallerySource.length -1) ? ++x : 0;
    $("#homepage-main").css("background-image", gallerySource[x]).fadeOut(0).fadeIn(1000);
  };

  //front-end
  var checkViewport = function(){
    var mobileWidth = $(window).width();
      var test = windowWidth < mobileWidth ? $("#viewport").attr("content", "width=" + windowWidth ) : $("#viewport").attr("content", "width=1200");
    var test2 = windowWidth < mobileWidth ?$(".desktop-mobile-view").html("Desktop View") :  $(".desktop-mobile-view").html("Back To Mobile View") ;

    console.log("windowWidth: " + windowWidth);
    console.log("mobileWidth: " + mobileWidth);

      // $("#viewport").attr("content", "width=1200");
      // $(this).html("Back To Mobile");
      // $("#viewport").attr("content", "width=1200");
  };

  var mobileDisplay = windowWidth < 768 ? $(".desktop-mobile-view").html("Desktop View") : $(".desktop-mobile-view").css("display", "none");
   setInterval(function(){rotateGallery();},600000);

  $(".desktop-mobile-view").click(function(){
    checkViewport();
  });
  $("#nav-icon").click(function(){
    $("#nav-icon").toggleClass("open");
  });
  $("#nav-links").click(function(){
    $("#nav-icon").toggleClass("open");
    $(this).collapse("hide");
  });
  $("#brand-icon").click(function(){
    $(this).removeClass(animationArray[i]);
    i = (i < iconArray.length -1) ? ++i : 0;
    $(this).addClass(animationArray[i]);
    $(this).attr("src", iconArray[i]);
  });
  $(".nav-btn").click(function(){
    var link = $(this).attr("id") === ("home-btn") ? "#homepage-main" : "#cv-main";
    $("html, body").animate({scrollTop: $(link).offset().top}, "slow");
  });
  $(".show-hide-btn").click(function(event) {
    var moreLessText = $(this).parent().prev(".more-content").is(":visible") ? "Show more (+)" : "Less (–)";
    $(this).parent().prev(".more-content").toggleClass("visible");
    $(this).html(moreLessText);
    $("html, body").animate({scrollTop: $(this).offset().top - 600}, "slow");
    event.preventDefault();
  });


  // var viewport = (w < 500) ?
  // $("body").previewer({show: true, type: "phone"}) : $("body").previewer({show: true, type: "desktop"});

  // With option
// $("body").previewer({
//   show: true,
//   type: 'desktop'
// });

// With method
// $('body').previewer('show');

// // Set previewer options
// $().previewer(options);

// // Change the global default options
// $.fn.previewer.setDefaults(options);

// //methods ... show() hide() destroy ()
// $().previewer('method');



}(); // the parens here cause the anonymous function to execute and return
//condition("if") ? ("then") value-if-true :("else") value-if-false
