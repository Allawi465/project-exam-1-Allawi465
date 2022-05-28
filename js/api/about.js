import { navOpenClos } from "../index.js";
const aboutContainer = document.querySelector(".about-container");
const loading = document.querySelector(".loading");
const aboutUrl = "https://wildflowerpower.site/blog-travel/wp-json/wp/v2/about/132?acf_format=standard";

async function getAboutInfo(url) {
    try {
        const response = await fetch(url);
        
        const data = await response.json();

        loading.classList.remove("loading");

        aboutContainer.innerHTML += `<div class="about-backround"> 
                                        <img class="about-image" src="${data.acf.faturedimage.url}" alt="${data.acf.faturedimage.alt}">
                                    </div>
                                    <div class="about-field-page">
                                        <h2 class="about-h2">${data.acf.paragf}</h2>
                                        <p class="about-p">${data.acf.text3}</p>
                                        <p class="about-p">${data.acf.text4}</p>
                                        <div class="view-btn">
                                            <a href="contact.html" class="View-all">Contact Me</a>
                                        </div>
                                    </div>`; 
    } 
    catch(error) {
       aboutContainer.innerHTML = `<p>We thank you for your patience while we are working to correct the problem</p>`;
    }
};

getAboutInfo(aboutUrl);

/* hamburger menu dropdown navbar */
navOpenClos()