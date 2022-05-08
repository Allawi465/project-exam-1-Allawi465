const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=100";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const posts = await response.json();

        console.log(posts)

        allPosts(posts)

        allPosts2(posts)
        
    
    } 
    catch(error) {
       /*  messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>` */
       console.log(error)
    }
};

getPost(wpUrl)

function allPosts(posts) {

    for (let i = 0 ; i < posts.length; i++) {

        const allPost = document.querySelector(".all-post");

        allPost.innerHTML += `<div class="card">
                                        <div class="post"> 
                                        <div class="background-image" style="background-image: url('${posts[i].acf.image}')"></div>
                                            <div class="post-content">
                                                <h3 class="post-title">${posts[i].title.rendered}</h3>
                                                <p class="post-paragf">${posts[i].acf.Paragraph}</p>
                                                <a href="#" class="post-link">show post</a>
                                            </div>
                                        </div>
                                    </div>`;
    }
};


const showMoreBtn = document.querySelector(".show-more-btn");
const contentPost = document.querySelector(".post-container");

showMoreBtn.onclick = function() {
    if (contentPost.className ==="post-container-open" ) {
        contentPost.className = "post-container";
        showMoreBtn.innerHTML = "Show More"
    } else {
        contentPost.className = "post-container-open"
        showMoreBtn.innerHTML = "Show Less"
    }
};
