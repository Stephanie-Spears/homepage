function changeIcon(){
  var newIcon = document.getElementById("brandIcon");
  var iconArray = ["img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png", "img/gachapin1.png"];
  if (clickCount < iconArray.length){
    newIcon.src = iconArray[clickCount];
  } else {
    clickCount = 0;
    newIcon.src = iconArray[clickCount];
  }
  clickCount++;
}

var clickCount = 0;
$(document).ready(function(){
  $("#nav-icon").click(function(){
    $(this).toggleClass("open");
  });
  $("#brandIcon").click(function(){
    $("#brandIcon").removeClass("bounceIn rollIn flipInX rotateInUpLeft bounceInLeft fadeInRightBig");
    if (clickCount === 0){
      $("#brandIcon").addClass("rollIn");
    } else if (clickCount === 1){
      $("#brandIcon").addClass("flipInX");
    } else if (clickCount === 2){
      $("#brandIcon").addClass("rotateInUpLeft");
    } else if (clickCount === 3){
      $("#brandIcon").addClass("bounceInLeft");
    } else if (clickCount === 4){
      $("#brandIcon").addClass("fadeInRightBig");
    }
    changeIcon();

  });


});
