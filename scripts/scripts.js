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
ScrollReveal().reveal('.form-box', { origin: 'right' });
ScrollReveal().reveal('.notify-box', { origin: 'top' });
ScrollReveal().reveal('.notify-msg', { origin: 'left' });


/*===================== TYPED JS ====================*/
const typed = new Typed ('.slogan', {
    strings: ['O seu portal para o mundo dos animes.', 'Sintonize-se com o melhor do anime.', 'Anime: a arte da imaginação em movimento.'],
    typeSpeed: 90,
    startDelay: 4000,
    backSpeed: 95,
    backDelay: 2000,
    loop: true
});


/*================= SHOW PASSWORD BUTTON ===================*/
function MostrarSenha(){
    var passwordInput = document.getElementById("SenhaInput");
    var showPasswordButton = document.getElementById("MostrarSenha");

    
        if (passwordInput.type === "password") {
            passwordInput.setAttribute('type','text');
            showPasswordButton.classList.replace('bx-show','bx-hide');
        } else {
            passwordInput.setAttribute('type','password');
            showPasswordButton.classList.replace('bx-hide','bx-show');
        }
;
}