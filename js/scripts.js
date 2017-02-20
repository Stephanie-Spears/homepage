// function changeIcon(clickCount){
//   var newIcon = document.getElementById("brandIcon");
//   var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
//   if (clickCount < iconArray.length){
//     newIcon.src = iconArray[clickCount];
//   } else {
//     clickCount = 0;
//     newIcon.src = iconArray[clickCount];
//   }
//
// }
function changeIcon(clickCount){
   var newIcon = document.getElementById("brandIcon");
  var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
  var animationArray = [" rollIn ", " flipInX ", " bounceInLeft ", " fadeInRight "];
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

$(document).ready(function(){
  $("#nav-icon").click(function(){
    $(this).toggleClass("open");
  });
  var clickCount = 0;
  $("#brandIcon").click(function(){
    $(this).removeClass("bounceIn rollIn flipInX bounceInLeft fadeInRight");
    clickCount = changeIcon(clickCount);
  });

});
