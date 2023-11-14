console.log ('start')

// Exécuter après le chargement du document...
jQuery(document).ready(function($){

// Parallaxe du logo
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  $('.logo-container').css('transform', 'translateY(' + offset * 0.5 + 'px)');
});

// Animation des titres de section au scroll
const observer = new IntersectionObserver(entries => {
// Boucle pour chaque entrée
entries.forEach(entry => {
  // si l'élément est visible
  if (entry.isIntersecting) {
    // ajouter la classe 
    entry.target.classList.add("animPart1");
  }
    else {
    // supprimer la classe 
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

  // Deuxième partie du titre
  const sections2 = document.querySelectorAll(".title-part2")
    sections2.forEach(section => {
    observer2.observe(section);  
  });


// Animation des  nuages
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1000) { // Si l'utilisateur fait défiler 500px vers le bas

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
});
}); 


// Menu burger

// Sélection des éléments du DOM
const button = document.querySelector('.button-menu');
const nav = document.querySelector('.menuburger');
const backdrop = document.querySelector('.backdrop');
const remove = document.querySelector('.site-main');
const remove2 = document.querySelector('footer');
//Ajout d'un écouteur d'événements pour le bouton du menu
button.addEventListener('click', () => {
  nav.classList.toggle('open');
  remove.classList.toggle('remove');
  remove2.classList.toggle('remove');

});
// Ajout d'un écouteur d'événements pour l'élément backdrop
backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  remove.classList.remove('remove');
  remove2.classList.remove('remove');
});

// Ajout d'un deuxième écouteur d'événements pour le bouton du menu
button.addEventListener('click', ()=> {
  button.classList.toggle('active');
});
