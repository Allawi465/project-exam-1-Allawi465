import { existingFavs, saveFavs  } from "../localStorage/favor.js"; 

const allPost = document.querySelector(".all-post");

const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=10";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const data = await response.json();

        allPosts(data)
    
    } 
    catch(error) {
       /*  allPost.innerHTML = `<p> An error occurred when showing the Games</p>` */
       console.log(error)
    }
};

getPost(wpUrl)

function allPosts(data) {

    const favourites = existingFavs();

    for (let i = 0 ; i < data.length; i++) {
    
        const id = data[i].id;
        const title = data[i].title.rendered;

        let red = "far";

       const ObjectExist = favourites.find(function(fav) {
            return parseInt(fav.id) === id;
        });

        if (ObjectExist) {
            red = "fa";
        } 

        allPost.innerHTML += `<div class="card">
                                        <div class="post"> 
                                            <div class="background-image" style="background-image: url('${data[i].acf.image}')"></div>
                                            <div class="heart-container"><i class="${red} fa-heart" data-id="${id}" data-name="${title}"></i></div>
                                            <div class="post-content">
                                                <h3 class="post-title">${data[i].title.rendered}</h3>
                                                <p class="post-paragf">${data[i].acf.Paragraph}</p>
                                                <a href="#" class="post-link">show post</a>
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
        
        const currentFavs = existingFavs();

        const destinationEcists = currentFavs.find(function(fav) {
            return fav.id === id;
        })

        if (destinationEcists === undefined) {
            const product = { id: id, name: name };
            currentFavs.push(product);
            saveFavs(currentFavs);
        } else {
            const newFavs = currentFavs.filter(fav => fav.id !== id);
            saveFavs(newFavs);
        }
    } 
};

const searchButton = document.querySelector(".search-btn")


const searchUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations";

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search").value;
    const newurl = searchUrl + `?search=${searchInput}&acf_format=standard`;
    allPost.innerHTML = "";
    getPost(newurl)
};

const showMoreBtn = document.querySelector(".show-more-btn");

const newUrl = `http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=12`

showMoreBtn.onclick = function() {

    if (showMoreBtn.innerHTML === "Show More") {
        allPost.innerHTML = "";
        showMoreBtn.innerHTML = "Show Less"
        getPost(newUrl)
    } else {
        allPost.innerHTML = "";
        showMoreBtn.innerHTML = "Show More"
        getPost(wpUrl)
    }
};