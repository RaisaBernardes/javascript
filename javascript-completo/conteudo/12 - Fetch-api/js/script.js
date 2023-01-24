const url = "https://jsonplaceholder.typicode.com/posts" //url da api

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container"); //post individual
const commentsContainer = document.querySelector("#comments-container")

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

//Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

//get all posts
async function getAllPosts(){
    const response = await fetch(url); //a 1ª resposta que recebemos após o fetch

    console.log(response);

    const dataReceived = await response.json(); //response.json() retorna um objeto JSON do resultado (se o resultado foi escrito no formato JSON, caso contrário, gerará um erro). Observe que, apesar do método ser denominado json(), o resultado não é JSON, mas sim o resultado de tomar JSON como entrada e analisá-lo para produzir um objeto JavaScript.

    console.log(dataReceived);

    loadingElement.classList.add("hide");

    dataReceived.map((post) => { //O map passa por cada um dos elementos que veio da requisição. "post" pq é singular de "posts".
        const div = document.createElement("div");
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";
        link.setAttribute("href", `/javascript-completo/conteudo/12%20-%20Fetch-api/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);
        postsContainer.appendChild(div);
    });
}

//Get individual post
async function getPost(id){
    const [responsePost, responseComments] = await Promise.all([ //Promise.all é uma promise que recebe um array de promises como entrada (um iterável). Em seguida, ela é resolvida quando todas as promises são resolvidas ou quando qualquer uma delas é rejeitada.
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ]); 

    const dataPost = await responsePost.json(); //peguei os dados do post
    const dataComments = await responseComments.json();

    loadingElement.classList.add("hide");
    postPage.classList.remove("hide");

}

if(!postId) {
    getAllPosts();
} else {
    getPost(postId);
}
