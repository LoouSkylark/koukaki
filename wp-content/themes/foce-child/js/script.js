console.log ('start')

// Run after document has loaded...
jQuery(document).ready(function($){

// Paralaxe du logo
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  $('.logo-container').css('transform', 'translateY(' + offset * 0.5 + 'px)');
});

// Animation au scroll des titres

   const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // si l'élément est visible
      if (entry.isIntersecting) {
        // ajouter classe 
        entry.target.classList.add("animPart1");
      }
        else {
          // supprimer  classe 
        entry.target.classList.remove("animPart1");
        }
    });
  });
 
    // Première partie du titre
  const sections = document.querySelectorAll(".title-part1")
    sections.forEach(section => {
    observer.observe(section);
  });  

  const observer2 = new IntersectionObserver(entries => {
 
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animPart2");
      }
        else {
        entry.target.classList.remove("animPart2");
        }
    });
  });

  // Deuxieme partie du titre
  const sections2 = document.querySelectorAll(".title-part2")
    sections2.forEach(section => {
    observer2.observe(section);  
  });


// Animation des  nuages
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1000) { // If user scrolls down 500px...

    $( ".cloud1" ).animate({
      right: "60%",
    }, 3000);
    $( ".cloud2" ).animate({
      right: "30%",
    }, 3000);
  }
  });

// Slider personnages
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
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
  button.classList.toggle('active');
});

/*
// Animation menu 
const animemenu = document.querySelectorAll('.animation');

button.addEventListener('click', () => {
  animemenu.forEach(function(element) {
    element.classList.toggle('animationbas');
  });
}); */

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

