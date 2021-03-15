"use strict";
let mainNav = document.querySelector(".main-nav"),
    menuBtn = document.querySelector(".main-nav__toogle"),
    orderBtnIndex = document.querySelector('.info__btn--top'),
    popUp = document.querySelector('.modal'),
    closeModalBtn = document.querySelector('.modal__link-close'),
    popUpBottom = document.querySelector('.info__btn--bottom');

function openMenu() {
    mainNav.classList.toggle("main-nav--closed"),
    menuBtn.classList.toggle("main-nav__toogle--close");
}

mainNav.classList.remove("main-nav--no-js"), menuBtn.addEventListener("click", openMenu);


// Модалка

orderBtnIndex.addEventListener('click', openModal ); 
popUpBottom.addEventListener('click', openModal ); 

closeModalBtn.addEventListener('click', openModal ); 

document.addEventListener("keydown", function (e) {
    if ('Escape' === e.key && !popUp.classList.contains("hidden")) {
      popUp.classList.add("hidden");

    }
  });

function openModal(){
    popUp.classList.toggle('hidden');
}


//Анимация 

var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("main section");

function scrolling(e) {
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("section--active");
    } else {
      listItem.classList.remove("section--active");
    }
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}