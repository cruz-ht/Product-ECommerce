
// JavaScript for Hamburger Menu
const hamburger = document.querySelector(".hamburger-Menu")
        const navLinks = document.querySelector(".navbar-Menu")
 
        hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })