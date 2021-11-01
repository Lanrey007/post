
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
       // console.log(data)
        let postLayout = document.getElementById("post-layout")
        let html = " ";
        data.forEach(e => {
           // console.log(e)
            html +=`
            <div class="col-md-4 mb-3">
                       <div class="card h-100">
                        <div class="card-body">
                        <div class="d-flex text-danger justify-content-end">
                        <h6 class="card-id">${e.id}
                            </h6>
                      </div>
                            <h5 class="card-title">${e.title}
                            </h5>
                            <p class="card-post">
                                ${e.body}
                            </p>
                        </div>
                        </div>
                    </div>`
                    postLayout.innerHTML= html
        });
    })
    
}
getPost();
let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let postForm = document.getElementById("post-form")

postForm.addEventListener('submit',createPost())


function createPost(e) {
    e.preventDefault();
    let pTitle = postTitle.value;
    let pBody = postBody.value;
    console.log("Post Title", pTitle)
   fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              title: pTitle,
              body: pBody,
              userId: 5
          }),
          headers:{
              "content-type": "application/json; charset UTF-8",
          },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("POST", data)
        alert('Post Created successfully')
        
    })
}
