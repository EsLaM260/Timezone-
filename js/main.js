// task color
let root = document.querySelector(":root");
let getElement = document.querySelectorAll(".fixed1 span");
let openList = document.querySelector(".fixed1 .contentContainer i");
let fixed = document.querySelector(".fixed1");
let photo = document.querySelector(".home_page .photo img");
let photo1 = document.querySelector("header img");
let photo2 = document.querySelector("footer .fot_botton .text .photo img");

openList.addEventListener("click", ()=>{
    fixed.classList.toggle("show1");
})

for (let i = 0; i < getElement.length; i++) {
    getElement[i].onclick = function () {
        let color = this.style.backgroundColor;
        console.log(color);
        root.style.setProperty("--main-color", `${color}`);
        photo1.src = `img/logo-${color}.jpg`
        photo2.src = `img/logo-${color}.jpg`
        photo.src = `img/watch-${color}.jpg`
    }
}

// test to change color with jqeury
// $(".fixed1 span").eq(0).css("backgroundColor","red")
// $(".fixed1 span").eq(1).css("backgroundColor","blue")
// $(".fixed1 span").eq(2).css("backgroundColor","green")
// $(".fixed1 span").eq(3).css("backgroundColor","purple")
// $(".fixed1 span").click(() => {
//     let color = $(this).css("backgroundColor")
//     $(":root").css("--main-color", `${color}`)
// })


// loading with js only test
// let loading = document.querySelector(".loading");
// document.body.onload = setTimeout(() => {
//     loading.style.display = "none"
// }, 3000);

// loading with jqeury
$(document).ready(() => $(".loading").fadeOut(2000));