var myHomepage = function(){
  //back-end

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


  //front-end
  setInterval(function(){rotateGallery();},600000);
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

    // (position < 0) ? $("html, body").animate({scrollTop: $(this).offset().top + position}, "slow") :     $("html, body").animate({scrollTop: $(this).offset().top - position}, "slow");


    // var position = $(this).parent().prev(".more-content").is(":visible") ? $(this).position().top : -$(this).position().top;
    // alert(position);

    var txt = $(this).parent().prev(".more-content").is(":visible") ? "Show more (+)" : "Less (–)";
    $(this).parent().prev(".more-content").toggleClass("visible");
    var position = $(this).position().top;
    $(this).html(txt);
    $("html, body").animate({scrollTop: $(this).offset().top - position}, "slow");
    event.preventDefault();
  });

}(); // the parens here cause the anonymous function to execute and return
//condition("if") ? ("then") value-if-true :("else") value-if-false
