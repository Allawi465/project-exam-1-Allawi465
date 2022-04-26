const navOpenClos = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");

    })
};

navOpenClos();

let postSlides = document.querySelectorAll(".post-card")
let fourSlides = 0;
const preBtn = document.querySelector(".pre-btn");
const nestBtn = document.querySelector(".nest-btn");

console.log(preBtn)
console.log(nestBtn)

const totalSlides = postSlides.length;

console.log(totalSlides);