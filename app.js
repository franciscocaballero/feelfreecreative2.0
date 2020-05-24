console.log('helloword');

const x = document.querySelector(".x");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});

x.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});

