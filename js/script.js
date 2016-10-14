$(document).ready(function(){

  $('.main-nav__item a[href*="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
      e.preventDefault();
  });


  var hamburger = $('#hamburger-icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     $('.main-nav ul').toggleClass('show');
     return false;
  });

});