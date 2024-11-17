// burger Menu
const burgerMenu = document.getElementById("burger-menu");
const navContainer = document.querySelector(".nav__container");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navContainer.classList.toggle("active");
});

