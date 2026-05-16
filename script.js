// Toggle Navigation Menu

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Filter Projects

function filterProjects(category) {

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {

        if (category === "all") {
            project.style.display = "block";
        }
        else if (project.classList.contains(category)) {
            project.style.display = "block";
        }
        else {
            project.style.display = "none";
        }

    });

}

// Lightbox Effect

const images = document.querySelectorAll(".project-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "block";
        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";

    contactForm.reset();

});