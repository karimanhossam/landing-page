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
const button = document.querySelector("#topBtn");
/* End Global Variables*/

/* Start Helper Functions */
let nearViewPort = (element) => {
  const dist = element.getBoundingClientRect();
  return dist.top >= 0;
};

/* End Helper Functions */

/* Begin Events*/
// Scroll to section on link click
scrollToSection = (item, sectionId) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(sectionId).scrollIntoView();
  });
};
// Build menu
buildMenu = () => {
  let documentFragment = document.createDocumentFragment();
  navbar.style.display = "block";
  clearInterval();

  for (section of sections) {
    let item = document.createElement("li");
    item.innerHTML = `<a href=" #${
      section.id
    }" class="menu__link">  ${section.getAttribute("data-nav")} </a>
    `;
    // Scroll to anchor ID
    let sectionId = `#${section.id}`;
    scrollToSection(item, sectionId);
    documentFragment.appendChild(item);
  }
  navbar.appendChild(documentFragment);
};

/* End Events */

/* Begin Main Functions */

// Build the nav
document.addEventListener("load", buildMenu());

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
  navbar.style.display = "block";
  clearInterval();
  for (section of sections) {
    if (nearViewPort(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
  // Show go to top button when the user scrolls below the fold of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
    button.style.display = "block";
  else button.style.display = "none";
});
//Hide the nav
setInterval(() => {
  navbar.style.display = "none";
}, 15000);

// Go to Top
button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

/* End Main Functions */
