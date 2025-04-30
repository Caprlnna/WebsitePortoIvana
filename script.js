// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let menuBtn = document.querySelector('#menu-btn');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 150);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
        }
    });
    });
});

// sr.reveal('.logo', {delay:200 , origin:'left'});
// sr.reveal('.navbar', {delay:400 , origin:'top'});
// sr.reveal('.menu-btn', {delay:200 , origin:'right'});

// sr.reveal('.home-text span', {delay:500 , origin:'top'});
// sr.reveal('.home-text h1', {delay:550 , origin:'left'});
// sr.reveal('.home-text p', {delay:600 , origin:'right'});

// sr.reveal('.main-btn', {delay:650 , origin:'top'});
// sr.reveal('.share p', {delay:700 , origin:'left'});
// sr.reveal('.social', {delay:750 , origin:'right'});

// sr.reveal('.home-img', {delay:900 , origin:'right'});