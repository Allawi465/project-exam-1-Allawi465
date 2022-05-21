const postontainer = document.querySelector(".card-slider");
const loading = document.querySelector(".loading");

const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=100";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const posts = await response.json();

        getPosts(posts)
    } 
    catch(error) {
       /*  postontainer.innerHTML = `<p> An error occurred when showing the Games</p>` */
       console.log(error)
    }
};

getPost(wpUrl)

function getPosts(posts) {

    loading.classList.remove("loading");

    for (let i = 0 ; i < posts.length; i++) {

        postontainer.innerHTML += `<div class="card">
                                        <div class="post"> 
                                        <div class="background-image"><a href="post.html?id=${posts[i].id}">
                                            <img src="${posts[i].acf.image}" class="image" alt=""></a>
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

const aboutContainer = document.querySelector(".about-container");
const aboutUrl = "http://localhost/blog-travel/wp-json/wp/v2/about/132?acf_format=standard";

async function getAboutInfo(url) {
    try {
        const response = await fetch(url);
        
        const aboutData = await response.json();

        aboutContainer.innerHTML += `<div class="about-backround"> 
                                        <img class="about-image" src="${aboutData.acf.image}" alt="">
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
       /*  postontainer.innerHTML = `<p> An error occurred when showing the Games</p>` */
    }
};

getAboutInfo(aboutUrl)