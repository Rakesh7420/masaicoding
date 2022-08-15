// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
import sidebar from "../components/sidebar.js";
document.querySelector("#sidebar").innerHTML = sidebar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";

let hero = async () => {
  let url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
hero();

let append = async (data) => {
  let container = document.querySelector("#results");
  container.innerHTML = "";
  data.forEach((el) => {
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let div2 = document.createElement("div");
    div2.setAttribute("class", "nws");
    let title = document.createElement("h3");
    title.innerText = el.title;
    let par = document.createElement("p");
    par.innerText = el.content;
    div2.append(title, par);
    div1.setAttribute("class", "news");
    div1.addEventListener("click", (index) => {
      window.location.href = "news.html";
    });
    div1.append(img, div2);
    container.append(div1);
  });
};

let getDataIndia = async () => {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
let getDataChina = async () => {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=ch";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
let getDataUS = async () => {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=us";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
let getDataUK = async () => {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=uk";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
let getDataNz = async () => {
  const url = "https://masai-api.herokuapp.com/news/top-headlines?country=nz";
  let res = await fetch(url);
  let data = await res.json();
  append(data.articles);
  console.log(data.articles);
};
document.querySelector("#ch").addEventListener("click", function () {
  getDataChina();
});
document.querySelector("#in").addEventListener("click", function () {
  getDataIndia();
});
document.querySelector("#us").addEventListener("click", function () {
  getDataUS();
});
document.querySelector("#uk").addEventListener("click", function () {
  getDataUK();
});
document.querySelector("#nz").addEventListener("click", function () {
  getDataNz();
});
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "search.html";
  let query = document.querySelector("#search_input").value;
  localStorage.setItem("Q", query);
});
