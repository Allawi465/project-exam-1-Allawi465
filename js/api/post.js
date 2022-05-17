const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations/" + id + "?acf_format=standard";

async function singlePost(url) {
    try {
        const response = await fetch(url);
        
        const post = await response.json();

        createHtml(post)
    
    } 
    catch(error) {
       /*  allPost.innerHTML = `<p> An error occurred when showing the Games</p>` */
    /*    console.log(error) */
    }
};

singlePost(wpUrl)

function createHtml(post) {

    const postContainer = document.querySelector(".single-post");

    postContainer.innerHTML =  `<h2 class="single-post-h2">Destination | ${post.title.rendered} </h2>
                                <div class="single-post-container">
                                    <div class="single-img">
                                        <img src="${post.acf.FeaturedImage}" class="post-images" alt="" id="images">
                                    </div>
                                    <div class="single-post-text">
                                        <h3 class="h3-single-post">${post.acf.Paragraph}</h3>
                                        <p class="p-single-post">${post.acf.Text}</p>
                                        <p class="p-single-post">${post.acf.moretext}</p>
                                        <div class="view-btn-single">
                                            <a href="posts.html" class="View-all">View More Post</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="futured-img">
                                    <img src="${post.acf.image}" class="post-images-futured" alt="" id="images">
                                </div>`;

const popup = document.querySelector(".popup-images");
const img = document.querySelectorAll("#images");
const popImages = document.querySelector(".pop-image");

img.forEach(image => {
    image.onclick = () => {
        popup.style.display = "block";
        popImages.scr = this.scr;
    /*     popImages.scr = image.getAttribute("scr"); */
    }
});
console.log(img)

};

const close = document.querySelector(".close-images"); 

close.onclick = () => {
    document.querySelector(".popup-images").style.display = "none";
}

const popup = document.querySelector(".popup-images");

popup.onclick = () => {
    document.querySelector(".popup-images").style.display = "none";
}
