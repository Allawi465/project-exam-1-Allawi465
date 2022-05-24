const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

const navOpenClos = () => {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");
        header.classList.toggle("headerHeight");    
    })
};

navOpenClos()

window.addEventListener("resize", function() {
    if (window.innerWidth >= 1082) {
        header.classList.remove("headerHeight");
        nav.classList.remove("aktiv");
        hamburger.classList.remove("burger");
    } else {
        header.classList.add("header");
        nav.classList.add("nav");
        hamburger.classList.add("hamburger");
    }
  });