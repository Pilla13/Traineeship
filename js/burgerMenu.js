const burger = document.querySelector(".button_burger");
const menu = document.querySelector(".nav-wrapper");
const header = document.querySelector(".header");
const close = document.querySelector(".close-button");

burger.addEventListener("click", function () {
  menu.classList.add("nav_active");
});

close.addEventListener("click", function () {
  menu.classList.remove("nav_active");
});
