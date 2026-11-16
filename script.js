```javascript
// =====================================
// 1. SCROLL REVEAL ANIMATIONS
// =====================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


// =====================================
// 2. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");

const navLinksContainer = document.getElementById("nav-links");

const menuIcon = menuToggle.querySelector("i");


function closeMenu() {

    navLinksContainer.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");

    menuIcon.classList.remove("fa-xmark");

    menuIcon.classList.add("fa-bars");

}


menuToggle.addEventListener("click", () => {

    const isOpen = navLinksContainer.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuIcon.classList.toggle("fa-bars", !isOpen);

    menuIcon.classList.toggle("fa-xmark", isOpen);

});


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


// Close menu when clicking outside

document.addEventListener("click", (event) => {

    const clickedInsideNavbar = event.target.closest(".navbar");

    if (!clickedInsideNavbar) {

        closeMenu();

    }

});


// =====================================
// 3. NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();


// =====================================
// 4. ACTIVE NAVIGATION LINK
// =====================================

const pageSections = document.querySelectorAll("main section[id]");

function updateActiveLink() {

    let currentSection = "home";

    pageSections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 180) {

            currentSection = section.id;

        }

    });

    navLinks.forEach((link) => {

        const target = link.getAttribute("href");

        link.classList.toggle(
            "active",
            target === `#${currentSection}`
        );

    });

}

window.addEventListener("scroll", updateActiveLink, {
    passive: true
});

updateActiveLink();


// =====================================
// 5. CLOSE MENU ON RESIZE
// =====================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 780) {

        closeMenu();

    }

});


// =====================================
// 6. SMOOTH ANCHOR NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

        const targetId = anchor.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
```
