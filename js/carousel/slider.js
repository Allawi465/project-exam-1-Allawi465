const slider = document.querySelector(".slider-container");
const movingCard = document.querySelector(".card-slider");
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.style.display = "none";

/* responsive carousel using the offsetWidth property */

let widthCard = slider.offsetWidth;
let counter = 0;

window.addEventListener("resize", function(e) {
    e.preventDefault();
    widthCard = slider.offsetWidth
});

/* scroll right button slider */

nextBtn.addEventListener("click", function () {
    counter++; 
    prevBtn.style.display = "block" 

    movingCard.style.transform = "translateX(" + counter * -widthCard + "px)";
    if  (movingCard.offsetWidth - (counter * widthCard) <  widthCard) {
        nextBtn.style.display = "none";
    } 
});

/* scroll left button slider */

prevBtn.addEventListener("click", function () {
    counter--; 
    nextBtn.style.display = "block";

    if (counter === 0) {
        prevBtn.style.display = "none";
    }

    movingCard.style.transform = "translateX(" + counter * -widthCard + "px)"
}); 