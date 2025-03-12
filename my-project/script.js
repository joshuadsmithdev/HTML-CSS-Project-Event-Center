document.addEventListener("DOMContentLoaded", () => {
    // Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            console.log("Toggle button clicked!"); // Debugging
            navMenu.classList.toggle("active");
            console.log("Menu active state:", navMenu.classList.contains("active"));
        });
    } else {
        console.error("Navigation elements not found.");
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission

            let valid = true;
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            // Clear previous errors
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            // Name validation
            if (name.value.trim() === "") {
                nameError.textContent = "Name is required.";
                valid = false;
            }

            // Email validation (basic format check)
            if (!/^\S+@\S+\.\S+$/.test(email.value)) {
                emailError.textContent = "Enter a valid email.";
                valid = false;
            }

            // Message validation
            if (message.value.trim() === "") {
                messageError.textContent = "Message cannot be empty.";
                valid = false;
            }

            // If valid, show submission result
            if (valid) {
                document.getElementById("submissionResult").innerHTML =
                    "<p style='color:green;'>Form submitted successfully!</p>";
                contactForm.reset(); // Reset form after submission
            }
        });
    } else {
        console.error("Contact form not found.");
    }
});

// Order Button Handler
function orderItem(dishName, price) {
    alert(`You have ordered: ${dishName} for ${price} gold coins!`);
}
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
