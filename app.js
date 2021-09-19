let button = document.querySelectorAll("button");
let posts = document.querySelector(".posts");
let page = 1;
localStorage.setItem("page", 1);
let xhr = new XMLHttpRequest();


ShowData();
button.forEach(function(content){
    content.addEventListener("click",function(e){
        localStorage.setItem("page",content.textContent);
        page = localStorage.getItem("page")-0;

        button.forEach(function (elem) {
            if(elem === content){
                content.classList.add("active");
            }else {
                elem.classList.remove("active")
            }
        });

        ShowData();
        posts.innerHTML = ""
    })
});




function ShowData(){
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = function () {
        let data = JSON.parse(this.response);

    data.forEach(function(elem){

        console.log(page);
        let first = (page-1)*20;
        let last = page*20 + 1;
        if(elem.id < last && elem.id> first){

            posts.innerHTML += `
                    <div class="card">
                        <div class="card-header">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, odio.</div>
                        <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, perspiciatis.</div>
                    </div>
                    `
        }
    })
    }
}