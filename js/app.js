"use strict";
let mainNav = document.querySelector(".main-nav"),
    menuBtn = document.querySelector(".main-nav__toogle");
function openMenu() {
    mainNav.classList.toggle("main-nav--closed"), bgDiv.classList.toggle("hidden"), menuBtn.classList.toggle("main-nav__toogle--close");
}
mainNav.classList.remove("main-nav--no-js"), menuBtn.addEventListener("click", openMenu);
let prevBtn = document.querySelector(".button--prev"),
    nextBtn = document.querySelector(".button--next"),
    reviewItems = document.querySelectorAll(".slider__item");
prevBtn.addEventListener("click", slidePrev), nextBtn.addEventListener("click", slideNext);
let slideIndex = 0;
function slideNext() {
    reviewItems.forEach((e) => e.classList.add("hidden")), slideIndex < reviewItems.length - 1 ? slideIndex++ : (slideIndex = reviewItems.length - 1) && (slideIndex = 0), reviewItems[slideIndex].classList.remove("hidden");
}
function slidePrev() {
    reviewItems.forEach((e) => e.classList.add("hidden")), 0 == slideIndex ? (slideIndex = reviewItems.length - 1) : 0 < slideIndex < reviewItems.length - 1 && slideIndex--, reviewItems[slideIndex].classList.remove("hidden");
}

