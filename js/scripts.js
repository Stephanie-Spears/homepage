var myHomepage = function(){
  //"private" variables
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

  var setBrand = function(){
    $("#brand-icon").removeClass(animationArray[i]);
    i = (i < iconArray.length -1) ? ++i : 0;
    $("#brand-icon").addClass(animationArray[i]);
    $("#brand-icon").attr("src", iconArray[i]);
  };



  setInterval(function(){rotateGallery();},600000);

  $("#nav-icon").click(function(){
    $("#nav-icon").toggleClass("open");
  });
  $("#nav-links").click(function(){
    $("#nav-icon").toggleClass("open");
    $(this).collapse("hide");
  });
  $("#brand-icon").click(function(){
    setBrand();
  });
  $("#cv-btn").click(function(){
    $("html,body").animate({scrollTop: $("#cv-main").offset().top},"slow");
  });
  $("#home-btn").click(function(){
    $("html,body").animate({scrollTop: $("#homepage-main").offset().top},"slow");
  });
  $(".show-hide-btn").click(function(event) {
    var txt = $(this).parent().prev(".more-content").is(":visible") ? "Show more (+)" : "Less (–)";
    $(this).parent().prev(".more-content").toggleClass("visible");
    $(this).html(txt);
    event.preventDefault();
  });



}(); // the parens here cause the anonymous function to execute and return

//condition("if") ?("then") value-if-true :("else") value-if-false
