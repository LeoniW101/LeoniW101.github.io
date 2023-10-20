// PortFolio Link : https://leoniw101.github.io/

// https://pages.github.com/ - hoe portfolio met GitPages maken

// https://fmontes.com/blog/how-to-create-a-portfolio-as-a-frontend-developer-with-no-experience 

// https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/ Stap voor stap bouwen simpele website

//Gitrepo naar bovenstaande site https://github.com/Ksound22/developer-portfolio/tree/master


// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
