const myHomepage = function(){
  //back-end

  //"private" variables
  let startWidth = $(window).width();
  let i = 0;
  let x = 0;
  const gallerySource = ["url(img/Forest.jpg)", "url(img/Arc1.jpg)", "url(img/Arc2.jpg)", "url(img/Juso.jpg)"];
  const iconArray = ["img/gachapin1.png", "img/mukku.png", "img/gachapin2.png", "img/gachapinMukku.png"];
  const animationArray = [ " rollIn", " flip", " rotateIn", " rubberBand"];

  //"private" methods
  const rotateGallery = () => {
    x = (x < gallerySource.length -1) ? ++x : 0;
    $("#homepage-main").css("background-image", gallerySource[x]).fadeOut(0).fadeIn(1000);
  };

  const checkViewport = () => {
    let currentWidth = $(window).width();
    let changeWidth = startWidth < currentWidth ? window.location.reload() : $("#viewport").attr("content", "width=1200");
    $(".desktop-mobile-view").html("<i class='fa fa-mobile' aria-hidden='true'></i> Back to Mobile");
  };

  //front-end
  const windowDisplay = startWidth < 992 ?
  $(".desktop-mobile-view").html("<i class='fa fa-desktop' aria-hidden='true'></i> Desktop View") : $(".desktop-mobile-view").css("display", "none");
   setInterval(function(){rotateGallery();},5000);
  $(".desktop-mobile-view").click(function(){
    checkViewport();
  });
  $("#nav-icon").click(function(){
    $("#nav-icon").toggleClass("open");
  });
  $("#nav-links").click(function(){
    $("#nav-icon").toggleClass("open");
    $(this).collapse("hide");
  });
  $("#brand-icon").click(function(){
    $(this).removeClass(animationArray[i]);
    i = (i < iconArray.length -1) ? ++i : 0;
    $(this).addClass(animationArray[i]);
    $(this).attr("src", iconArray[i]);
  });
  $(".nav-btn").click(function(){
    let link = $(this).attr("id") === ("home-btn") ? "#homepage-main" : "#cv-main";
    $("html, body").animate({scrollTop: $(link).offset().top}, "slow");
  });
  $(".show-hide-btn").click(function(event) {
    let target = $(window).height();
    let moreLessText = $(this).parent().prev(".more-content").is(":visible") ? "Show more (+)" : "Less (–)";
    $(this).parent().prev(".more-content").toggleClass("visible");
    $(this).html(moreLessText);
    $("html, body").animate({scrollTop: $(this).offset().top - target}, "slow");
    event.preventDefault();
  });

}();
