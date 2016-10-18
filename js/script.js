$(document).ready(function(){

  $('a[href*="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
      e.preventDefault();
  });


  var hamburger = $('.mobile-menu__btn');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     $('.main-nav').toggleClass('show');
     return false;
  });


  $('.btn-play').on("click", function(){
    console.log('efds');
    $('.video-player').css({
      "opacity":"1", 
      "z-index":100
    });

    $('.ytp-large-play-button').trigger('click');
    return false;
  });




  setTimeout(function() {
    $('body').css('height', "auto");
    $('section').css('display', "block");
    $('.preloader').css('top', '-1000px');
  }, 2000);

});