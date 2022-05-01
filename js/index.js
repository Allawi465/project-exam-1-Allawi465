const navOpenClos = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");

    })
};

navOpenClos();

const slider   = document.querySelector(".slider-container")
const movingCard   = document.querySelector(".card-slider")
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

let widthCard = slider.offsetWidth;
let counter = 0;

window.addEventListener("resize", function() {
    widthCard = slider.offsetWidth
});

nextBtn.addEventListener("click", function () {
    counter++; 
    prevBtn.style.display = "block" 

    movingCard.style.transform = "translateX(" + counter * -widthCard + "px)";

    if (movingCard.offsetWidth - counter * widthCard < counter * widthCard) {
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