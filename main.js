const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-link");


hamburger.addEventListener("click", () => {
    navlink.classList.toggle("open");
})
