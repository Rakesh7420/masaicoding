// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html pag
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let rt = localStorage.getItem("Q");
console.log(rt);

let mainData = async (query) => {
  let url = `https://masai-api.herokuapp.com/news?q=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
mainData(rt);

let append = (data) => {
  let container = document.querySelector("#results");
  container.innerHTML = "";
  data.forEach((el) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let div = document.createElement("div");
    div.setAttribute("class", "nws");
    let title = document.createElement("h3");
    title.innerText = el.title;
    let c = document.createElement("p");
    c.innerText = el.content;
    div.append(title, c);
    card.setAttribute("class", "news");
    card.addEventListener("click", (index) => {
      window.location.href = "news.html";
    });
    card.append(img, div);
    container.append(card);
  });
};

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "search.html";
  let query = document.querySelector("#search_input").value;
  localStorage.setItem("Q", query);
});
