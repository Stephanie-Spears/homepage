function changeIcon(clickCount){
  var newIcon = document.getElementById("brandIcon");
  var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
  var animationArray = [" rollIn", " flipInX", " rotateInUpLeft", " bounceInLeft", " fadeInRightBig"];

  for (var i = 0; i < animatedArray.length; i++){
    newIcon.className -= animationArray[i];
  }
  
  if (clickCount < iconArray.length){
    newIcon.src = iconArray[clickCount];
    newIcon.className += animationArray[clickCount];
    clickCount++;
  } else {
    clickCount = 0;
    newIcon.src = iconArray[clickCount];
    newIcon.className += animationArray[clickCount];
  }
}

$(document).ready(function(){
  $("#nav-icon").click(function(){
    $(this).toggleClass("open");
  });
  $("#brandIcon").click(function(){
    var clickCount = 0;
    changeIcon(clickCount);
  });
});
