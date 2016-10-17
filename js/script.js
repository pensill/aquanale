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


  $('.btn-play').click(function() {
    console.log('efds');
    $('.video-player').toggleClass('show');
    return false;
  });





  setTimeout(function() {
    $('body').css('height', "auto");
    $('section').css('display', "block");
    $('.preloader').css('top', '-1000px');
  }, 2000);

});