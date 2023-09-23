 /*==================== SCROLL REVEAL =======================*/
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.logo', { origin: 'left' });
ScrollReveal().reveal('.slogan', { origin: 'right' });
ScrollReveal().reveal('.top-btn', { origin: 'bottom' });
ScrollReveal().reveal('.Cadastro-titulo', { origin: 'left' });


/*=====================TYPED JS==================== */
const typed = new Typed ('.slogan', {
    strings: ['O seu portal para o mundo dos animes.', 'Sintonize-se com o melhor do anime.', 'Anime: a arte da imaginação em movimento.'],
    typeSpeed: 90,
    startDelay: 4000,
    backSpeed: 95,
    backDelay: 2000,
    loop: true
});