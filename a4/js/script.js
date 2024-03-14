function validateForm() {
    var errorMessages = "";

    var validFirstName = validateFirstName();
    var validLastName = validateLastName();
    var validEmail = validateEmail();
    var validPhone = validatePhone();
    var validUsername = validateUsername();
    var validPassword = validatePassword();
    var validAddress = validateAddress();
    var validCity = validateCity();
    var validState = validateState();
    var validCountry = validateCountry();
    var validZipCode = validateZipCode();

    if (!validFirstName || !validLastName || !validEmail || !validPhone || !validUsername || !validPassword || !validAddress || !validCity || !validState || !validCountry || !validZipCode) {
        errorMessages += "<p>Please fix the errors above.</p>";
    }

    document.getElementById("errorMessages").innerHTML = errorMessages;

    return validFirstName && validLastName && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipCode;
}

function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    if (!/^[a-zA-Z]+$/.test(firstName) || firstName.length > 20) {
        document.getElementById("firstName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("firstName").style.border = "";
        return true;
    }
}


function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    if (!/^[a-zA-Z]+$/.test(lastName) || lastName.length > 50) {
        document.getElementById("lastName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("lastName").style.border = "";
        return true;
    }
}
