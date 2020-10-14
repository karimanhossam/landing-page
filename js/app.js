/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/*Define Global Variables*/
let navbar = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");
/* End Global Variables*/

/* Start Helper Functions */

/* End Helper Functions */

/* Begin Events*/
// Scroll to section on link click

// Build menu
buildMenu = () => {
  let documentFragment = document.createDocumentFragment();
  for (section of sections) {
    let item = document.createElement("li");
    item.innerHTML = `<a href=" #${
      section.id
    }" class="menu__link">  ${section.getAttribute("data-nav")} </a>
    `;
    documentFragment.appendChild(item);
  }
  navbar.appendChild(documentFragment);
};

// Set sections as active

/* End Events */

/* Begin Main Functions */

// Build the nav
document.addEventListener("load", buildMenu());

// Add class 'active' to section when near top of viewport

/* End Main Functions */
