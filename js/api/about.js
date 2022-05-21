const aboutContainer = document.querySelector(".about-container");
const loading = document.querySelector(".loading");
const aboutUrl = "http://localhost/blog-travel/wp-json/wp/v2/about/132?acf_format=standard";

async function getAboutInfo(url) {
    try {
        const response = await fetch(url);
        
        const data = await response.json();

        loading.classList.remove("loading");

        aboutContainer.innerHTML += `<div class="about-backround"> 
                                        <img class="about-image" src="${data.acf.faturedimage}" alt="">
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
       /*  postontainer.innerHTML = `<p> An error occurred when showing the Games</p>` */
    }
};

getAboutInfo(aboutUrl)