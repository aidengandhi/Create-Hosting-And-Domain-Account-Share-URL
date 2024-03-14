// Validation functions for each field
function validateFirstName() {
    var firstName = document.getElementById("firstName").value.trim();
    var firstNameError = document.getElementById("firstNameError");
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameError.innerHTML = "First name can only contain alphabets.";
        return false;
    } else {
        firstNameError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

function validateLastName() {
    var lastName = document.getElementById("lastName").value.trim();
    var lastNameError = document.getElementById("lastNameError");
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameError.innerHTML = "Last name can only contain alphabets.";
        return false;
    } else {
        lastNameError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        emailError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

function validatePhone() {
    var phone = document.getElementById("phone").value.trim();
    var phoneError = document.getElementById("phoneError");
    if (!/^\d+$/.test(phone) && !/^\d+-\d+$/.test(phone)) {
        phoneError.innerHTML = "Please enter a valid phone number (only digits or digits separated by dash).";
        return false;
    } else {
        phoneError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

function validateUsername() {
    var username = document.getElementById("username").value.trim();
    var usernameError = document.getElementById("usernameError");
    // You can add additional validation for username if needed
    // For example, minimum length, allowed characters, etc.
    return true;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    // You can add validation rules for password if needed
    // For example, minimum length, special characters, etc.
    return true;
}

function validateAddress() {
    // You can add validation rules for address if needed
    // For example, minimum length, allowed characters, etc.
    return true;
}

function validateCity() {
    var city = document.getElementById("city").value.trim();
    var cityError = document.getElementById("cityError");
    if (!/^[a-zA-Z]+$/.test(city)) {
        cityError.innerHTML = "City name can only contain alphabets.";
        return false;
    } else {
        cityError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

function validateState() {
    var state = document.getElementById("state").value;
    var stateError = document.getElementById("stateError");
    // Add validation for state if needed
    return true;
}

function validateCountry() {
    // You can add validation rules for country if needed
    return true;
}

function validateZipCode() {
    var zipCode = document.getElementById("zipCode").value.trim();
    var zipCodeError = document.getElementById("zipCodeError");
    if (!/^\d{5}$/.test(zipCode)) {
        zipCodeError.innerHTML = "Please enter a valid 5-digit zip code.";
        return false;
    } else {
        zipCodeError.innerHTML = ""; // Clear any previous error messages
        return true;
    }
}

// Main form validation function
function validateForm() {
    var isValid = true;

    isValid = validateFirstName() && isValid;
    isValid = validateLastName() && isValid;
    isValid = validateEmail() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateUsername() && isValid;
    isValid = validatePassword() && isValid;
    isValid = validateAddress() && isValid;
    isValid = validateCity() && isValid;
    isValid = validateState() && isValid;
    isValid = validateCountry() && isValid;
    isValid = validateZipCode() && isValid;

    return isValid;
}
