// Auto-updating the footer year
const currentYear = new Date().getFullYear(); //access the current year from the Date object.
let footerDate = document.getElementById('date'); //get the DOM element with id 'date'
footerDate.textContent = currentYear; //set the text content of the element to the current year


// Mobile navigation menu toggle
const navToggle = document.getElementById('mobile-menu-btn'); //select the element with class 'nav-toggle'
const mobileMenu = document.getElementById('mobile-dropdown');
const closeMenu = document.getElementById('close-menu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden'); //remove the 'hidden' class to show the menu
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden'); //add the 'hidden' class to hide the menu
});