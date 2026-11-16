// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});


// CLOSE MENU AFTER CLICKING A LINK

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// NAVBAR SCROLL EFFECT

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent = new Date().getFullYear();
