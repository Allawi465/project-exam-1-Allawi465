import { navOpenClos } from "../index.js";
import { acticeCarousel } from "../carousel/slider.js";
const postontainer = document.querySelector(".card-slider");
const loading = document.querySelector(".loading");
const message = document.querySelector(".inner-slider");
const wpUrl = "https://wildflowerpower.site/blog/wp-json/wp/v2/destinations?acf_format=standard&per_page=12";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const posts = await response.json();

        greateHtml(posts);
    } 
    catch(error) {
        message.innerHTML =  `<p class="apiError"> We thank you for your patience while we are working to correct the problem</p>`;
    }
};

getPost(wpUrl)

function greateHtml(posts) {

    loading.classList.remove("loading");

    for (let i = 0 ; i < posts.length; i++) {

        postontainer.innerHTML += `<div class="card">
                                        <div class="post"> 
                                        <div class="background-image">
                                            <img src="${posts[i].acf.image.url}" class="image" alt="${posts[i].acf.image.alt}">
                                        </div>
                                            <div class="post-content">
                                                <h3 class="post-title">${posts[i].title.rendered}</h3>
                                                <p class="post-paragf">${posts[i].acf.Paragraph}</p>
                                                <a href="post.html?id=${posts[i].id}" class="post-link">show post</a>
                                            </div>
                                        </div>
                                    </div>`;
    }
};

/* call api to get about post page to index.html */

const aboutContainer = document.querySelector(".about-container");
const aboutUrl = "https://wildflowerpower.site/blog/wp-json/wp/v2/about/132?acf_format=standard";

async function getAboutInfo(url) {
    try {
        const response = await fetch(url);
        
        const aboutData = await response.json();

        aboutContainer.innerHTML += `<div class="about-backround"> 
                                        <img class="about-image" src="${aboutData.acf.image.url}" alt="${aboutData.acf.image.alt}">
                                    </div>
                                    <div class="about-field">
                                        <h4 class="about-h4">About me</h4>
                                        <p class="about-p">${aboutData.acf.text}</p>
                                        <p class="about-p">${aboutData.acf.text2}</p>
                                        <div class="about-btn">
                                            <a href="about.html" class="about-link">Read More</a>
                                        </div>
                                    </div>`; 
    } 
    catch(error) {
       aboutContainer.innerHTML =  `<p>We thank you for your patience while we are working to correct the problem</p>`;
    }
};

getAboutInfo(aboutUrl);

/* hamburger menu dropdown navbar */
navOpenClos();

/* Caoursel function from export  */
acticeCarousel();