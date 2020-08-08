'use strict';

const imageContainer = document.querySelectorAll(".img-container");
const images = document.querySelectorAll(".img-container img");
let background = localStorage.getItem('background');

if(background == null) {
    saveBackground(images[0]);
}

loadInBackground(); 

imageContainer.forEach(imageBorder => {
    imageBorder.addEventListener('click', () => {
        checkForSelected(imageBorder);
    });
});

images.forEach(image => {
    image.addEventListener('click', () => {
        saveBackground(image);
    });
});


function loadInBackground() {
    images.forEach(image => {
        let currentImage = image.getAttribute("data-original");
        if(currentImage == background){
            saveBackground(image);
    
            imageContainer.forEach(imageBorder => {
                let currentImageContainer = imageBorder.getElementsByTagName("img")[0].getAttribute("data-original");
                if(currentImageContainer === background){
                    imageBorder.classList.add("selected");
                } else if(imageBorder.classList.contains("selected")){
                    imageBorder.classList.remove("selected");
                }
            });
        }
    });
}

function checkForSelected(image) {
    imageContainer.forEach(imageBorder => {
        if(imageBorder.classList.contains("selected")
        && imageBorder !== image){
            imageBorder.classList.remove("selected");
        }
    });

    if(!image.classList.contains("selected")){
        image.classList.add("selected");
    }
}

function saveBackground(image) {
    const selectedImage = image.getAttribute("data-original");
    const backgroundSwap = `url(images/${selectedImage})`;
    document.documentElement.style.setProperty('--background-picture', backgroundSwap);

    switch(selectedImage) {
        case "background-1.jpg":
            localStorage.setItem('background', "background-1.jpg");
            break;
        case "background-2.jpeg":
            localStorage.setItem('background', "background-2.jpeg");
            break;
        case "background-3.jpeg":
            localStorage.setItem('background', "background-3.jpeg");
            break;
        default:
            localStorage.setItem('background', "background-1.jpg");
            break;
    }
}


