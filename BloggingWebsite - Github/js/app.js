let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 100, origin: 'left'})
sr.reveal('.featured-left, .featured-right, .blog-card', {delay: 100, origin: 'top'})

// Header 
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const logo2 = document.querySelector('#logo2');
  const navbarLinks = document.querySelectorAll('.navbar a');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    if (logo) logo.classList.add('scrolled');
    if (logo2) logo2.classList.add('scrolled');
    navbarLinks.forEach(link => link.classList.add('scrolled'));
  } else {
    header.classList.remove('scrolled');
    if (logo) logo.classList.remove('scrolled');
    if (logo2) logo2.classList.remove('scrolled');
    navbarLinks.forEach(link => link.classList.remove('scrolled'));
  }
});
