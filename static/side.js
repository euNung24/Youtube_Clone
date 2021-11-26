const menu = document.querySelector("#menu");
const simpleSlide = document.querySelector("#simpleSide");
const wideSide = document.querySelector("#wideSide");
const contents = document.querySelector(".contents");

function openSlide() {
  simpleSlide.classList.toggle("open");
  wideSide.classList.toggle("open");
}

menu.addEventListener("click", openSlide);
