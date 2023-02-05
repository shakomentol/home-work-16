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
let productData = [
    {
        product_id: 1,
        amount: 200
    },
    {
        product_id: 2,
        amount: 300
    },
    {
        product_id: 3,
        amount: 500
    }
]
let sum = 0;
const sumProducts = (arr) => {
    for (let i = 0; i < arr.length; i++)
    sum = sum + arr[i].amount
    return sum
}
console.log(sumProducts(productData));
// // 4.
// let users = [
//     {
//         id: 7,
//         email: "michael.lawson@reqres.in",
//         first_name: "Michael",
//         last_name: "Lawson",
//         avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
//         id: 8,
//         email: "lindsay.ferguson@reqres.in",
//         first_name: "Lindsay",
//         last_name: "Ferguson",
//         avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
//         id: 9,
//         email: "tobias.funke@reqres.in",
//         first_name: "Tobias",
//         last_name: "Funke",
//         avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
//         id: 10,
//         email: "byron.fields@reqres.in",
//         first_name: "Byron",
//         last_name: "Fields",
//         avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
//         id: 11,
//         email: "george.edwards@reqres.in",
//         first_name: "George",
//         last_name: "Edwards",
//         avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
//         id: 12,
//         email: "rachel.howell@reqres.in",
//         first_name: "Rachel",
//         last_name: "Howell",
//          avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     }]

// const users = document.getElementById('user-list');
// კარგად ვერ მივხვდი როგორ გამეკეთებინა ეს დავალება მაას
// 5 
document.getElementById("button").addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("button").innerHTML = "KOBE BRYANT";
  }
