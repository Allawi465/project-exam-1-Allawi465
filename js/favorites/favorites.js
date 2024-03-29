import { existingFavs } from "../localStorage/favor.js"; 
import { navOpenClos } from "../index.js";
const favContainer = document.querySelector(".all-post");
const loading = document.querySelector(".loading");
const message = document.querySelector("#formMessage");
const favourites = existingFavs();

if (favourites.length === 0) {
    message.innerHTML = `<h2 class="h2-favouritest-us">Choose your favourites from Posts page!</h2>`;
    loading.classList.remove("loading");
} 

favourites.forEach(favourite => {
    loading.classList.remove("loading");

    favContainer.innerHTML += `<div class="card">
                                <div class="post"> 
                                    <div class="background-image">
                                        <a href="post.html?id=${favourite.id}"><img src="${favourite.image}" class="image" alt="${favourite.alt}"></a>
                                    </div>
                                    <div class="post-content">
                                        <h3 class="post-title">${favourite.name}</h3>
                                        <p class="post-paragf">${favourite.paragf}</p>
                                        <a href="post.html?id=${favourite.id}" class="post-link">show post</a>
                                    </div>
                                </div>
                            </div>`;
});

/* hamburger menu dropdown navbar */
navOpenClos();