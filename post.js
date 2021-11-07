/*window.addEventListener('load', () =>{
    const params = (new URL (document.location)).searchParams;
    const title = params.get('title');
    const post = params.get('post');

    
    let pTitle = localStorage.setItem("pTitle");
    let pBody = localStorage.setItem("pBody");


    document.getElementById('post-title').innerHTML = pTitle;
    document.getElementById('post-body').innerHTML = pBody;
})*/

function getPost(){
    let postID = localStorage.getItem("postID");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postBody = document.getElementById('post-body')
        let html =""
        html += `
        <div>
            <div class="card">
                <div class="card-body">
                    <div class=" d-flex justify-content-end">
                        <h
<h6 class="text-danger">${data.id}</h6>
                    </div>
                    <h5 class="post-title mb-4">${data.title}</h5>
                    <p class="post-body">${data.body}</p>
                </div>
            </div>
        </div>
        `
            postBody.innerHTML = html
    })
}
getPost();