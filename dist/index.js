const menuBtn = document.querySelector("#menu-btn");
const menuClose = document.querySelector("#menu-close");
const navMenu = document.querySelector("#nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.add("hidden");
  menuClose.classList.remove("hidden");
  navMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", function () {
  menuBtn.classList.remove("hidden");
  menuClose.classList.add("hidden");
  navMenu.classList.add("hidden");
});
