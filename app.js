let burgerMenu  = document.querySelector(".burger-container");
let mobileMenu = document.querySelector(".mobile-menu");

burgerMenu.addEventListener("click",()=>{
    mobileMenu.classList.toggle("show-menu");
})