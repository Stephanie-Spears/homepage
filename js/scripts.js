var myHomepage = function(){
  //"private" variables:
  var clickCount = 0;
  //"private" methods:
  var setBackground = function(){
    var i = 0;
    function rotateGallery(){
      //BUG: infinite i count;
      var gallerySource = ["url(img/Arc1.jpg)", "url(img/Arc2.jpg)", "url(img/Juso.jpg)", "url(img/Forest.jpg)"];
      var index = i++ % gallerySource.length;

      $("#homepage-main").css("background-image", gallerySource[index]);
      // document.getElementById("homepage-main").style.backgroundImage = gallerySource[index];
    }
    var galleryInterval = setInterval(function(){rotateGallery();},25000);
  };


  function changeIcon(){
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
    console.log(clickCount);
    clickCount++;
    // return clickCount;
  }


  $(document).ready(function(){
    setBackground();
    $("#nav-icon").click(function(){
      $(this).toggleClass("open");
    });
    $("#brand-icon").click(function(){
      $(this).removeClass("bounceIn rollIn flipInX rotateIn rubberBand");
      // clickCount = changeIcon(clickCount);
      changeIcon();
    });
    $("#resume-btn").click(function(){
      //says top is undefined
      $("html,body").animate({
        scrollTop: $("#resume-main").offset()},"slow");
      });
    });


}(); // the parens here cause the anonymous function to execute and return



// function rotateGallery(){
//   var gallerySource = ["img/Arc1.jpg", "img/Arc2.jpg", "img/Juso.jpg", "img/Forest.jpg"];
//   var index = i++ % gallerySource.length;
//
//
//       $("#homepage-main").css("background-image","url('"+ gallerySource[index] +"')");
//   // setTimeout(rotateGallery, 3 * 1000);
// }
// window.onload = rotateGallery;

// $(document).ready(function(){
//   setInterval(rotateGallery, 15000);
//
//   $("#nav-icon").click(function(){
//     $(this).toggleClass("open");
//   });
//   var clickCount = 0;
//   $("#brand-icon").click(function(){
//     $(this).removeClass("bounceIn rollIn flipInX rotateIn rubberBand");
//     clickCount = changeIcon(clickCount);
//   });
//   $("#resume-btn").click(function(){
//     $("html,body").animate({
//       scrollTop: $("#resume-main").offset().top},"slow");
//     });
//
//
// });
