document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        var formData = new FormData(form); // Create a FormData object to collect form data
        var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    window.location.href = 'thankyou.html'; // Redirect to thank you page
                } else {
                    console.error('Error:', xhr.statusText);
                }
            }
        };

        xhr.open(form.method, form.action); // Open a connection with the form's action and method
        xhr.send(formData); // Send the form data to the server
    });
});
