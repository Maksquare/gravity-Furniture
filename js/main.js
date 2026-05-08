const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');


    /* Smooth scroll for all anchor links pointing to #sections */
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    /* Only close the nav on mobile (below lg breakpoint = 1024px) */
                    if (window.innerWidth < 1024) {
                        var navMenu = document.getElementById('nav_menu');
                        if (navMenu) {
                            navMenu.style.height = '0';
                            navMenu.style.padding = '0';
                        }
                    }
                }
            });
        });





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
sr.reveal('.steps__step', {distance:'100px',interval:100});

// about
sr.reveal('.about__text', {origin:'left'});
sr.reveal('.about__img', {origin:'right',delay:800});
// testimonial
sr.reveal('.testimonial__bg', {delay:800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay:1000}  );
// brands
sr.reveal('.brands__img', {delay:600 , distance:'100px', interval:100}  );

// work
sr.reveal('.work__title' );
sr.reveal('.work__subtitle ', {delay:800} );
sr.reveal('.work__grid ', {delay:1000} );
// stats
sr.reveal('.stats');
sr.reveal('.stats__itmes',
    {
            distance:'100px',
    interval:100
    }
);
// news
sr.reveal('.stats');
sr.reveal('.stats__itmes',
    {
            distance:'100px',
    interval:100
    }
);
// news
sr.reveal('.news__title' );
sr.reveal('.news__subtitle ', {delay:800} );
sr.reveal('.news__item ', {       distance:'100px',
    interval:100,
    delay:1000} );
    // contact
    sr.reveal('.contact__container' );
    sr.reveal('.contact__text' , {delay:800} );
    // footer
    sr.reveal('.footer__item' , {
        distance:'100px',
        interval:100,
    } );
    sr.reveal('.footer__copyright' );
