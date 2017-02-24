var myHomepage = function(){
  //"private" variables
  var clickCount = 0;

  //"private" methods
  var setBackground = function(){
    var i = 0;
    function rotateGallery(){
      var gallerySource = ["url(img/Arc1.jpg)", "url(img/Arc2.jpg)", "url(img/Juso.jpg)", "url(img/Forest.jpg)"];
      if (i < gallerySource.length){
        $("#homepage-main").css("background-image", gallerySource[i]);
      }
      else{
        i = 0;
        $("#homepage-main").css("background-image", gallerySource[i]);
      }
      i++;
    }
    var galleryInterval = setInterval(function(){rotateGallery();},25000);
  };

  var setBrand = function(){
    $("#brand-icon").removeClass("bounceIn rollIn flipInX rotateIn rubberBand");
    var newIcon = document.getElementById("brand-icon");
    var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
    var animationArray = [" rollIn", " flipInX", " rotateIn", " rubberBand"];
    if (clickCount < iconArray.length){
      newIcon.src = iconArray[clickCount];
      newIcon.className += animationArray[clickCount];
    } else {
      clickCount = 0;
      newIcon.src = iconArray[clickCount];
      newIcon.className += animationArray[clickCount];
    }
    clickCount++;
  };

  $(document).ready(function(){
    setBackground();
    $("#nav-icon").click(function(){
      $(this).toggleClass("open");
    });
    $("#brand-icon").click(function(){
      setBrand();
    });
    $("#resume-btn").click(function(){
      $("html,body").animate({
        scrollTop: $("#resume-main").offset()},"slow");
      });
    });

}(); // the parens here cause the anonymous function to execute and return
