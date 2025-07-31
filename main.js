const menuBtn = document.getElementById("menu-btn"); 
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");

});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    opacity:0,
    easing: 'ease-in-out',
    reset: true
  };

  // Apply ScrollReveal to different sections
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

// Animation for the About Us section
ScrollReveal().reveal(".about_us-text", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".ctr-accordion", {
  ...scrollRevealOption,
  origin: "right",
  delay: 700,
});

// Framework section animation
ScrollReveal().reveal(".framework-container .box", {
  ...scrollRevealOption,
  interval: 200,  // Staggered reveal for each box
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

// Footer section
ScrollReveal().reveal(".bottom-bar", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});

