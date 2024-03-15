document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById("contact-form").style.display = "none"; // Hide the contact form
    document.getElementById("thankYou").style.display = "block"; // Show the thank you message
});
