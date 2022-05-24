const navOpenClos = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header")

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");
        header.classList.toggle("headerHeight");
    })
};

navOpenClos();