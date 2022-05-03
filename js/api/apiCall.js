const postontainer = document.querySelector(".card-slider");
const wpUrl = "http://localhost/blog-travel/wp-json/wp/v2/destinations?acf_format=standard&per_page=100";

async function getPost(url) {
    try {
        const response = await fetch(url);
        
        const posts = await response.json();

        console.log(posts)

        getPosts(posts)
    
    } 
    catch(error) {
       /*  messageCotainer.innerHTML = `<p> An error occurred when showing the Games</p>` */
       console.log(error)
    }
};

getPost(wpUrl)

function getPosts(posts) {

    for (let i = 0 ; i < posts.length; i++) {

        postontainer.innerHTML += `<div class="card">
                                        <div class="post"> 
                                            <div class="post-content">
                                                <h3 class="post-title">${posts[i].title.rendered}</h3>
                                                <p>${posts[i].acf.Paragraph}</p>
                                                <a href="#">show post</a>
                                            </div>
                                        </div>
                                    </div>`;
    }
};