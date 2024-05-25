// navbar
const button = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-link");
const menuBtnIcon = document.querySelector("#hamburger i");

document.addEventListener("click", (e) => {
  const isButtonClicked = button.contains(e.target);
  const isNavLinkClicked = navLinks.contains(e.target);

  if (isButtonClicked) {
    navLinks.classList.toggle("open");
    const open = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isButtonClicked && open
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars-staggered"
    );
  } else if (!isButtonClicked && !isNavLinkClicked) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars-staggered");
  } else {
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars-staggered");
  }
});

const nav = document.getElementById("navbar");
const prevScroll = window.scrollY;
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  nav.style.top = currentScrollTop > lastScrollTop ? "-100px" : "0";
  lastScrollTop = currentScrollTop;
});
