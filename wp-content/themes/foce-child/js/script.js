console.log ('start')


// Run after document has loaded...
jQuery(document).ready(function($){

  // Rotation des fleurs "ceci fonctionne mais pas sur les classes des fleurs !!!"
  //$('.site-footer::after').addClass('myclass');
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
console.log(Swiper)

  }); 


// Menu burger

const button = document.querySelector('.button-menu');
const nav = document.querySelector('.menuburger');
const backdrop = document.querySelector('.backdrop');
const remove = document.querySelector('.site-main');
const remove2 = document.querySelector('footer');
button.addEventListener('click', () => {
  nav.classList.toggle('open');
  remove.classList.toggle('remove');
  remove2.classList.toggle('remove');

});

backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  remove.classList.remove('remove');
  remove2.classList.remove('remove');
});

// button burger 
button.addEventListener('click', ()=> {
  button.classList.toggle('activee');

});

  /*  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) { // If user scrolls down 500px...
      $('h2').fadeIn(5000);
    }
    });

// Apparition des titres
jQuery(document).ready(function($){
  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) { // If user scrolls down 500px...
    $('h2').css({'animation':'500px'});
  }
  });
});

    $('.site-footer::after, .site-footer ul::after, .site-footer::before, .story__article::after, #studio h2::before, #studio h2::after, .fleur').addClass('myclass');

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

        $('.site-footer').css('backgroung-color', 'green');
        console.log ($('.site-footer'))
    }); 

  });

  // Run after document has loaded...
jQuery(document).ready(function($){
  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) { // If user scrolls down 500px...
    $('h2').animate({'height':'500px'});
  }
  });
});
*/

