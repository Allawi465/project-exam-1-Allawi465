import { navOpenClos } from "../index.js";
const postContainer = document.querySelector(".single-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

/* hamburger menu dropdown navbar */
navOpenClos()

const wpUrl = "https://wildflowerpower.site/blog-travel/wp-json/wp/v2/destinations/" + id + "?acf_format=standard";

async function singlePost(url) {
    try {
        const response = await fetch(url);
        
        const post = await response.json();

        createHtml(post)
        showImages(post)
    } 
    catch(error) {
        postContainer.innerHTML =  `<p class="apiError">We thank you for your patience while we are working to correct the problem</p>`
    }
};

singlePost(wpUrl)

function createHtml(post) {

    postContainer.innerHTML =  `<h2 class="single-post-h2">Destination | ${post.title.rendered} </h2>
                                <div class="single-post-container">
                                    <div class="single-img">
                                        <img src="${post.acf.FeaturedImage.url}" class="post-images" alt="${post.acf.FeaturedImage.alt}" id="images">
                                    </div>
                                    <div class="single-post-text">
                                        <h3 class="h3-single-post">${post.acf.paragraph2}</h3>
                                        <p class="p-single-post">${post.acf.Text}</p>
                                        <p class="p-single-post">${post.acf.moretext}</p>
                                        <div class="view-btn-single">
                                            <a href="posts.html" class="View-all">View More Posts</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="futured-img">
                                    <img src="${post.acf.image.url}" class="post-images-futured" alt="${post.acf.image.alt}" id="images">
                                </div>`;
};

/* pop image onclick funvtion using outerHTML property*/

const popup = document.querySelector(".popup-images");
const popImages = document.querySelector(".pop-image");

function showImages() {
    const img = document.querySelectorAll(".single-post img");

    img.forEach(image => {
        image.onclick = () => {
            popup.style.display = "block";
            popImages.innerHTML = image.outerHTML;
        }
    });

    closePopImage()
}

/* close when clicking outside the imgae or the X icon */

function closePopImage() {
    const close = document.querySelector(".close-images"); 

    close.onclick = () => {
        document.querySelector(".popup-images").style.display = "none";
    }

    popup.onclick = () => {
        document.querySelector(".popup-images").style.display = "none";
    }
};