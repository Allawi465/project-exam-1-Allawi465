const navOpenClos = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");

    })
};

navOpenClos();

/* const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

function next() {
    console.log("heiii")
};

nextBtn.onclick = next;

function prev() {
    console.log("heiii")
};

prevBtn.onclick = prev; */