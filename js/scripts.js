var iconClickCounter = 0;

var changeIcon = function(){
  var i = 0;
  var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
  var newIcon = document.getElementById("brandIcon");
  newIcon.src = iconArray[i];
  // if (iconClickCounter === 0){
  //   newIcon.src = iconArray[0];
  // } else if (iconClickCounter === 1){
  //   newIcon.src = iconArray[1];
  // } else if (iconClickCounter === 2){
  //   newIcon.src = iconArray[2];
  // } else if (iconClickCounter === 3){
  //   newIcon.src = iconArray[3];
  // } else {
  //   // newIcon.className += " animated bounceIn";
  //   iconClickCounter = 0;
  // }
  // return iconClickCounter += 1;
};


$(document).ready(function(){
  $("#nav-icon").click(function(){
    $(this).toggleClass("open");
  });
  $("#brandIcon").click(function(){
    changeIcon();
    // $(this).addClass("bounceOut");

  });

});
