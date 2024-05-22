// navbar
const button = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-link");

button.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});
