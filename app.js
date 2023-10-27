const menuBtn = document.getElementById("menu-btn");
const date = document.getElementById("date");
const menuItems = document.getElementById("menu-items");
const menuLinks = document.querySelectorAll(".menu-links");

// Date Setup
date.innerHTML = new Date().getFullYear();
// Nav Setup
menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("show-nav");
  menuItems.classList.toggle("hidden");
});
// Menu Items
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  });
});

var swiper = new Swiper(".fleets", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  loop: true,
  looFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 50,
    strectch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});
