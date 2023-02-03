// 1.
const button = document.querySelector(".button-icon");
button.addEventListener("click",() => {
    button.remove();
    const src = document.getElementById("body");
    src.appendChild(img);
})
// 2.
const img = document.createElement("img");
img.setAttribute("src", "https://media.tenor.com/LRTkUYkU1kkAAAAC/ok-okay.gif");
img.setAttribute("alt", "okay");
// const src = document.getElementById("body");
// src.appendChild(img);