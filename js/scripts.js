


// $(document).ready(function(){
//
//   document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
//     this.classList.toggle( "active" );
//   });
// });
var iconClickCounter = 0;
function changeIcon(){
  var newIcon;
  if (iconClickCounter === 0){
    newIcon = document.getElementById("brandIcon");
    newIcon.src = "img/mukku.png";
  }
  else if (iconClickCounter === 1){
    newIcon = document.getElementById("brandIcon");
    newIcon.src = "img/gachapin2.png";
  }
  else if (iconClickCounter === 2){
    newIcon = document.getElementById("brandIcon");
    newIcon.src = "img/gachapinMukku.png";
  }
  else if (iconClickCounter === 3){
    newIcon = document.getElementById("brandIcon");
    newIcon.src = "img/gachapin1.png";
  }
  else {
    iconClickCounter = -1;
  }
  iconClickCounter += 1;
}
