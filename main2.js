// Existing menu button toggle for navigation
const menuBtn = document.getElementById("menu-btn"); 
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal configuration
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
};

// Apply ScrollReveal to different sections

// Header Section
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_image_card", {
    duration: 1000,
    interval: 500,
    delay: 2500,
});

// About Us Section
ScrollReveal().reveal(".about_us-text", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

// Service Team Section
ScrollReveal().reveal(".service_team", {
    ...scrollRevealOption,
    delay: 200,
});

ScrollReveal().reveal(".list .item", {
    ...scrollRevealOption,
    interval: 200, // Staggered reveal for each item
    origin: "bottom",
});

// Framework section animation
ScrollReveal().reveal(".framework-container .box", {
    ...scrollRevealOption,
    interval: 200, // Staggered reveal for each box
    origin: "bottom",
});

// History section
ScrollReveal().reveal(".history-img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".history-text", {
    ...scrollRevealOption,
    origin: "right",
    delay: 700,
});


// 3D hover effect for items
let items = document.querySelectorAll('.item2');
items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;

        let positionPy = e.y - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        item.style.setProperty('--rX', (0.5) * (50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
    });
    item.addEventListener('mouseout', () => {
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    });
});

