// gets the hamburger button element and the mobile menu
let menuToggle = document.querySelector(".header__menu-toggle");
let menuMobile = document.querySelector(".menu-mobile");
let bodyElem = document.body;

// on Click calls toggleMobileMenu
menuToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  // toggles the show-mobile-menu class of the mobile menu
  menuMobile.classList.toggle('show-mobile-menu');

  // toggles the menu-open class of the hamburger button element
  menuToggle.classList.toggle('menu-open');

  //disables body scroll when the mobile menu is open
  if (menuToggle.classList.contains('menu-open')) {
    bodyElem.style.overflow = 'hidden';
  } else {
    bodyElem.style.overflow = 'auto';
  }
}

// gets the categories button and the categories list element
let menuCategoryToggle = document.querySelector(".menu-mobile__category-toggle");
let menuCategory = document.querySelector(".menu-mobile__category-list");

// when the button is Clicked calls toggleCategoryMenu function
menuCategoryToggle.addEventListener('click', toggleCategoryMenu);

function toggleCategoryMenu() {
  // toggles the 'show-category-list' class of the categories list element
  menuCategory.classList.toggle('show-category-list');

  // toggles the categories button 'list-open' class
  menuCategoryToggle.classList.toggle('list-open');
}
