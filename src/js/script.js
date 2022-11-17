const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu__block")) {
        menu.classList.remove("active");
    }
});

const percents = document.querySelectorAll(".progress-item__percent");
const levels = document.querySelectorAll(".progress-item__level");
percents.forEach((item, i) => {
    levels[i].style.width = item.innerHTML;
});