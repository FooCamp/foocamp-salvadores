// gets the hamburger button element and the mobile menu
let mobileMenuToggle = document.querySelector('.header__menu-toggle');
let menuMobile = document.querySelector('.menu-mobile');
let bodyElem = document.body;

// on Click calls toggleMobileMenu
mobileMenuToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  // toggles the show-mobile-menu class of the mobile menu
  menuMobile.classList.toggle('show-mobile-menu');

  // toggles the menu-open class of the hamburger button element
  mobileMenuToggle.classList.toggle('menu-open');

  //disables body scroll when the mobile menu is open
  if (mobileMenuToggle.classList.contains('menu-open')) {
    bodyElem.style.overflow = 'hidden';
  } else {
    bodyElem.style.overflow = 'auto';
  }
}

// gets the categories button and the categories list element
let menuCategoryToggle = document.querySelector('.menu-mobile__category-toggle');
let menuCategory = document.querySelector('.menu-mobile__category-list');

// when the button is Clicked calls toggleCategoryMenu function
menuCategoryToggle.addEventListener('click', toggleCategoryMenu);

function toggleCategoryMenu() {
  // toggles the 'show-category-list' class of the categories list element
  menuCategory.classList.toggle('show-category-list');

  // toggles the categories button 'list-open' class
  menuCategoryToggle.classList.toggle('list-open');
}

// dropdown menu elements

// listener to the whole document for opening and closing the menu
document.addEventListener('click', toggleDropdownMenu);

// listener for keyup event to close dropdown with ESC
document.addEventListener('keyup', closeWithEscKey);

let dropdownButton = document.querySelector('.dropdown__button');
let dropdownMenu = document.querySelector('.dropdown__menu');

function toggleDropdownMenu(event) {

  // if the dropdown button or a child are clicked => toggle the menu and button classes
  if (event.target.classList.contains('dropdown__button') || event.target.parentNode.classList.contains('dropdown__button')) {
    dropdownMenu.classList.toggle('show-dropdown');
    dropdownButton.classList.toggle('list-open');
  } else {

    // if a different element is clicked close the menu
    closeDropdownMenu();
  }
}

// is esc key is pressed, close dropdown
function closeWithEscKey(keyup) {
  if (keyup.code == 'Escape') {
    closeDropdownMenu();
  }
}

function closeDropdownMenu() {
  dropdownMenu.classList.remove('show-dropdown');
  dropdownButton.classList.remove('list-open');
}
