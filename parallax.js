const greetingContainer = document.querySelector('.greeting-container');

let scrollWidth = greetingContainer.scrollWidth;
const scrollContainer = document.querySelector('.scroll-down');


function moveThings(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}%)`;
}

window.addEventListener("scroll", function() {
    let scrollPercentage = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    moveThings(".introduction-wrap", scrollPercentage, 100);

    if(scrollPercentage > 0){
        scrollContainer.setAttribute('style', 'visibility: hidden; opacity: 0;');
    } else if(scrollPercentage == 0){
        scrollContainer.setAttribute('style', 'visibility: visible; opacity: 1;');
    }
});

