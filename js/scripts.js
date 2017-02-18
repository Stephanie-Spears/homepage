var iconClickCounter = 0;
function changeIcon(){
  var newIcon = document.getElementById("brandIcon");
  if (iconClickCounter === 0){
    newIcon.src = "img/mukku.png";
  } else if (iconClickCounter === 1){
    newIcon.src = "img/gachapin2.png";
  } else if (iconClickCounter === 2){
    newIcon.src = "img/gachapinMukku.png";
  } else if (iconClickCounter === 3){
    newIcon.src = "img/gachapin1.png";
  }
   else {
    iconClickCounter = 0;
  }
  iconClickCounter += 1;
}

var iconArray = ["img/gachapin1.png", "img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png"];
