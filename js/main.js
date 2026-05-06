const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// event listener
navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
    
});
// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
   loop: true,
   pagination:{
    el: '.swiper-pagination',
    clickable: true,
   },
//    BREAKPOINTS
slidesPerView: 3,
spaceBetween: 20,
breakpoints: {
    320: {
        slidesPerView: 1,   
    },
  
    960: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    },
},

});

// scroll reveal animation

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
     delay: 600,
    //  reset: true, // animation repeat
});

// hero
sr.reveal('.hero__text', {origin: 'top'});

// steps
sr.reveal('.steps__item', {interval: 200});