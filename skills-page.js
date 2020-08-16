const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');


let burgerOpen = false;

window.addEventListener('resize', ()=> {
    document.body.classList.add('resize-animation-stopper');
    resizeTimer = setTimeout(() =>{
        document.body.classList.remove('resize-animation-stopper');
    }, 100);
});

// Toggle the nav and burger animations
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    burgerOpen = !burgerOpen;
    nav.classList.toggle('nav-active');
    animateLinks();
});

//Animate the links
function animateLinks() {

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

}