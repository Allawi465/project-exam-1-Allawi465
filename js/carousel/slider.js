const slider   = document.querySelector(".slider-container")
const movingCard   = document.querySelector(".card-slider")
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

let widthCard = slider.offsetWidth;
let counter = 0;

/* console.log(widthCard) */

window.addEventListener("resize", function() {
    widthCard = slider.offsetWidth
});

nextBtn.addEventListener("click", function () {
    counter++; 
    prevBtn.style.display = "block" 

    movingCard.style.transform = "translateX(" + counter * -widthCard + "px)";
    
    if  (movingCard.offsetWidth - (counter * widthCard) <  widthCard) {
        nextBtn.style.display = "none";
    } 
});

prevBtn.addEventListener("click", function () {

    counter--; 

    nextBtn.style.display = "block";
    
    if (counter === 0) {
        prevBtn.style.display = "none";
    }

    movingCard.style.transform = "translateX(" + counter * -widthCard + "px)"
}); 

prevBtn.style.display = "none";