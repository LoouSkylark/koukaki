// Run after document has loaded...
jQuery(document).ready(function($){
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) { // If user scrolls down 500px...
      $('h2').fadeIn(5000);
    }
    });
  });