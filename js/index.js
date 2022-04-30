const navOpenClos = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");

    })
};

navOpenClos();



/* const slidesCard   = document.querySelectorAll(".card")
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0; */


/* slidesCard.forEach(function(card, index){
    if (window.innerWidth > 1050) {
        card.style.left = `${index * 25}%`;
        console.log("25")
    } 
    if (window.innerWidth < 1050) {
        card.style.left = `${index * 97.8}%`;
        console.log("100")
    } 
})

slidesCard.forEach(function(card, index){
    window.addEventListener("reset", function() {
        if (window.innerWidth > 1050) {
            card.style.left = `${index * 25}%`;
            console.log("25")
        } 
        if (window.innerWidth < 1050) {
            card.style.left = `${index * 97.8}%`;
            console.log("100")
        } 
    })
}) */



/* slidesCard.forEach(function(card, index){
    card.style.left = `${index * 97.8}%`;
}); 

nextBtn.addEventListener("click", function () {
    counter++;
    slides()
});

prevBtn.addEventListener("click", function () {
    counter--;
    slides()
});

function slides() {
    if (counter < slidesCard.length - 1 ) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0 ) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    } 
    slidesCard.forEach(function(card){
        card.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none" */