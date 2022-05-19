import { existingFavs, saveFavs  } from "../localStorage/favor.js"; 
const allPost = document.querySelector(".all-post");
const loading = document.querySelector(".loading");

const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=10";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const post = await response.json();

        allPosts(post)
    } 
    catch(error) {
       /*  allPost.innerHTML = `<p> An error occurred when showing the Games</p>` */
       console.log(error)
    }
};

getPost(wpUrl)

function allPosts(post) {

    const favourites = existingFavs();

    loading.classList.remove("loading");

    for (let i = 0 ; i < post.length; i++) {
    
        const id = post[i].id;
        const title = post[i].title.rendered;
        const image = post[i].acf.image;
        const paragf = post[i].acf.Paragraph;


        let red = "far";

       const favouritesExist = favourites.find(function(fav) {
            return parseInt(fav.id) === id;
        });

        if (favouritesExist) {
            red = "fa";
        } 

        allPost.innerHTML += `<div class="card">
                                        <div class="post"> 
                                            <div class="background-image">
                                                <a href="post.html?id=${post[i].id}"><img src="${post[i].acf.image}" class="image" alt=""></a>
                                            </div>
                                            <div class="heart-container"><i class="${red} fa-heart" data-id="${id}" data-name="${title}" data-image="${image}" data-paragf="${paragf}"></i></div>
                                            <div class="post-content">
                                                <h3 class="post-title">${post[i].title.rendered}</h3>
                                                <p class="post-paragf">${post[i].acf.Paragraph}</p>
                                                <a href="post.html?id=${post[i].id}" class="post-link">show post</a>
                                            </div>
                                        </div>
                                    </div>`;
    }

    const favButtons = document.querySelectorAll(".post i"); 

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
    
    function handleClick() {;
        this.classList.toggle("fa");
        this.classList.toggle("far")
        const name = this.dataset.name;
        const id = this.dataset.id;
        const image = this.dataset.image;
        const paragf = this.dataset.paragf;
        
        const currentFavourites = existingFavs();

        const destinationEcists = currentFavourites.find(function(fav) {
            return fav.id === id;
        })

        if (destinationEcists === undefined) {
            const product = { id: id, name: name, image: image, paragf: paragf};
            currentFavourites.push(product);
            saveFavs(currentFavourites);
        } else {
            const newfavourites = currentFavourites.filter(fav => fav.id !== id);
            saveFavs(newfavourites);
        }
    } 
};

const searchButton = document.querySelector(".search-btn")
const searchUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations";

searchButton.onclick = function(e) {
    e.preventDefault();
    const searchInput = document.querySelector("#search").value;
    const newurl = searchUrl + `?search=${searchInput}&acf_format=standard`;
    allPost.innerHTML = "";
    loading.classList.add("loading");
    getPost(newurl)
}; 

const showMoreBtn = document.querySelector(".show-more-btn");

const newUrl = `http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=12`

showMoreBtn.onclick = function() {

    if (showMoreBtn.innerHTML === "Show More") {
        allPost.innerHTML = "";
        loading.classList.add("loading");
        showMoreBtn.innerHTML = "Show Less"
        getPost(newUrl)
    } else {
        allPost.innerHTML = "";
        loading.classList.add("loading");
        showMoreBtn.innerHTML = "Show More"
        getPost(wpUrl)
    }
};

/* const timescroll = setTimeout(function() {
    window.scrollTo(0,document.body.scrollHeight);
    1000}); */

/* const searchInputField = document.querySelector(".search-container input")

function search() {
    if (searchInputField.value === "" ) {
        allPost.innerHTML = "";
        getPost(wpUrl)
    }
};

console.log(searchInputField) */