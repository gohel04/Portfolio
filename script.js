const navbar = document.getElementById('nav');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.menu');
const navLinkItems = document.querySelectorAll(".menu a");


// Toggle navigation menu on mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});