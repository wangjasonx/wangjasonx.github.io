const greetingContainer = document.querySelector('.greeting-container');

let scrollWidth = greetingContainer.scrollWidth;
const postIntroButton = document.getElementById('post-intro-button');
const goBackItem = document.querySelector('.go-back');


function moveThings(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}%)`;
}

let counter = 0;
let onAboutPage = false;

window.addEventListener("wheel", event => {

    let distance = 100;

    if(event.deltaY < 0 && counter > 0 && !onAboutPage){
        counter-= distance;
        
    } else if(event.deltaY > 0 && counter < 100){
        counter+= distance;
        onAboutPage = true;
    }

    moveThings(".introduction-wrap", counter, 1);
    goBackButton();

});

postIntroButton.addEventListener('click', () => {
    moveThings(".introduction-wrap", 100, 1);
    onAboutPage = true;
    goBackButton();
});

goBackItem.addEventListener('click', () => {
    moveThings(".introduction-wrap", 0, 1);
    onAboutPage = false;
    goBackButton();
});

function goBackButton() {
    if(onAboutPage) {
        goBackItem.classList.add("visible");
    } else {
        goBackItem.classList.remove("visible");
    }
}
