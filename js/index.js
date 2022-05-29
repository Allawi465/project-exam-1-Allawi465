 export const navOpenClos = () => {
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("aktiv");
        hamburger.classList.toggle("burger");
        header.classList.toggle("headerHeight");    
    });
    
    window.addEventListener("resize", function() {
        if (window.innerWidth > 1082) {
            header.classList.remove("headerHeight");
            nav.classList.remove("aktiv");
            hamburger.classList.remove("burger");
        } 
    }); 
};