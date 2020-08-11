const greetingContainer = document.querySelector('.greeting-container');

let scrollWidth = greetingContainer.scrollWidth;
const scrollDownContainer = document.querySelector('.scroll-down');
const scrollUpContainer = document.querySelector('.scroll-up');
const postIntroButton = document.getElementById('post-intro-button');


function moveThings(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}%)`;
}

let counter = 0;

window.addEventListener("wheel", event => {

    let distance = 100;

    if(event.deltaY < 0 && counter > 0){
        counter-= distance;
    } else if(event.deltaY > 0 && counter < 100){
        counter+= distance;
    }

    moveThings(".introduction-wrap", counter, 1);

    if(counter > 0){
        scrollDownContainer.setAttribute('style', 'visibility: hidden; opacity: 0;');
    } else if(counter == 0){
        scrollDownContainer.setAttribute('style', 'visibility: visible; opacity: 1;');
    }

    if(counter < 100) {
        scrollUpContainer.setAttribute('style', 'visibility: hidden; opacity: 0;');
    } else if(counter == 100) {
        scrollUpContainer.setAttribute('style', 'visibility: visible; opacity: 1;');
    }
});

postIntroButton.addEventListener('click', () => {
    moveThings(".introduction-wrap", 100, 1);
    scrollDownContainer.setAttribute('style', 'visibility: hidden; opacity: 0;');
    scrollUpContainer.setAttribute('style', 'visibility: visible; opacity: 1;');
});

