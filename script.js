// 1.
const button = document.querySelector(".button-icon");
button.addEventListener("click",() => {
    button.remove();
})
const newBackgroundColor = document.querySelector(".button-icon");
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = "blue";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);
// 2.
const img = document.createElement("img");
img.setAttribute("src", "https://media.tenor.com/LRTkUYkU1kkAAAAC/ok-okay.gif");
img.setAttribute("alt", "okay");
img.style.marginLeft = "10%";
img.style.marginTop = "50px";
img.style.borderRadius = "10px"
const src = document.getElementById("body");
src.appendChild(img);
// 3.
const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }]
const sum = (productData) => productData + productData;
console.log(productData);
// 5 
document.getElementById("button").addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("button").innerHTML = "KOBE BRYANT FOREVER";
  }
