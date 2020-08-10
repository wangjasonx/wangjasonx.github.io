const greetingContainer = document.querySelector('.greeting-container');

let scrollWidth = greetingContainer.scrollWidth;
const scrollDownContainer = document.querySelector('.scroll-down');
const scrollUpContainer = document.querySelector('.scroll-up');


function moveThings(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}%)`;
}

// window.addEventListener("scroll", function() {
//     let scrollPercentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     moveThings(".introduction-wrap", scrollPercentage, 100);

//     if(scrollPercentage > 0){
//         scrollContainer.setAttribute('style', 'visibility: hidden; opacity: 0;');
//     } else if(scrollPercentage == 0){
//         scrollContainer.setAttribute('style', 'visibility: visible; opacity: 1;');
//     }
// });

let counter = 0;

window.addEventListener("wheel", event => {

    if(event.deltaY < 0 && counter > 0){
        counter-= 20;
    } else if(event.deltaY > 0 && counter < 100){
        counter+= 20;
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

