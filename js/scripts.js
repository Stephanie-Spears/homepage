var myHomepage = function(){
  //"private" variables
  var i = 0;
  var x = 0;
  var gallerySource = ["url(img/Forest.jpg)", "url(img/Arc1.jpg)", "url(img/Arc2.jpg)", "url(img/Juso.jpg)"];
  var iconArray = ["img/gachapin1.png", "img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png"];
  var animationArray = [ " rollIn", " flip", " rotateIn", " rubberBand"];

  //"private" methods
  var setBackground = function(){
    function rotateGallery(){
      x = (x < gallerySource.length -1) ? ++x : 0;
      $("#homepage-main").css("background-image", gallerySource[x]).fadeOut(0).fadeIn(1000);
    }
    var galleryInterval = setInterval(function(){rotateGallery();},600000);
  };

  var setBrand = function(){

    $("#brand-icon").removeClass(animationArray[i]);
    i = (i < iconArray.length -1) ? ++i : 0;
    $("#brand-icon").addClass(animationArray[i]);
    $("#brand-icon").attr("src", iconArray[i]);
  };


  setBackground();
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

  $(".show-hide-btn").click(function(event){
    event.preventDefault();

    var text = ($(".more-content").is(":hidden")) ? "Show less (-)" : "Show more (+)";
    $(".show-hide-btn").html(text);
    $(".more-content").toggle("slow");
  });


}(); // the parens here cause the anonymous function to execute and return

//condition("if") ?("then") value-if-true :("else") value-if-false
