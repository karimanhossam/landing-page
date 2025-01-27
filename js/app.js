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
  return (
    dist.top >= 0 &&
    dist.left >= 0 &&
    dist.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    dist.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
activateNavItem = (sectionId) => {
  let navbarItems = document.querySelectorAll(".menu__link");
  for (navbarItem of navbarItems) {
    if (navbarItem.getAttribute("href") == `#${sectionId}`) {
      navbarItem.classList.add("your-active-navitem");
    }
  }
};

deactivateNavItems = (sectionId) => {
  let navbarItems = document.querySelectorAll(".menu__link");
  for (navbarItem of navbarItems) {
    if (navbarItem.getAttribute("href") == `#${sectionId}`) {
      navbarItem.classList.remove("your-active-navitem");
    }
  }
};
toggleSection = (sectionId, num) => {
  let sectionContent = document.querySelector(`#content-${sectionId}`);
  let arrow = document.querySelector(`#${sectionId} .arrow`);
  if (sectionContent.style.display == "none") {
    sectionContent.style.display = "block";
    arrow.innerHTML = "&#8595;";
  } else {
    sectionContent.style.display = "none";
    if (num == 0) {
      arrow.innerHTML = "&#8592;";
    } else {
      arrow.innerHTML = "&#8594;";
    }
  }
};
/* End Helper Functions */

/* Begin Events*/
// Scroll to section on link click
scrollToSection = (item, sectionId) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ block: "center" });
  });
};
// Build menu
buildMenu = () => {
  let documentFragment = document.createDocumentFragment();
  navbar.style.display = "block";
  clearInterval();

  for (section of sections) {
    let item = document.createElement("li");
    item.innerHTML = `<a href="#${
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
      activateNavItem(section.id);
    } else {
      section.classList.remove("your-active-class");
      deactivateNavItems(section.id);
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
