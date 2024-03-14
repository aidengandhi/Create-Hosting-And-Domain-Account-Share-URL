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

// Array of states
var states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

// Function to populate the states dropdown
function populateStates() {
    var select = document.getElementById("state");
    for (var i = 0; i < states.length; i++) {
        var option = document.createElement("option");
        option.text = states[i];
        option.value = states[i];
        select.appendChild(option);
    }
}

populateStates();
