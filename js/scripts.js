function changeIcon(clickCount){
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
  return clickCount;
}

function rotateGallery(){
  var i = 0;
  var gallery = document.getElementById("homepage-main");
  var gallerySource = ["background-image:url('img/Arc1.jpg')", "background-image:url('img/Arc2.jpg')", "background-image:url('img/gold.jpg')", "background-image:url('img/Forest.jpg')"];
  if (i < gallerySource.length){
    gallery.style = gallerySource[i];
    alert(gallery.style);
    i++;
  }
  else {
    i = 0;
  }
  // setTimeout(rotateGallery, 3 * 1000);
}
// window.onload = rotateGallery;

$(document).ready(function(){
  rotateGallery();
  $("#nav-icon").click(function(){
    $(this).toggleClass("open");
  });
  var clickCount = 0;
  $("#brand-icon").click(function(){
    $(this).removeClass("bounceIn rollIn flipInX rotateIn rubberBand");
    clickCount = changeIcon(clickCount);
  });
  $("#resume-btn").click(function(){
    $("html,body").animate({
      scrollTop: $("#resume-main").offset().top},"slow");
    });


});
