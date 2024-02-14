// Ask the user for a number from 0-10
var userInput = prompt("Enter a number from 0 to 10:");

// Validate the input (optional)
var table = parseInt(userInput);
if (isNaN(table) || table < 0 || table > 10) {
  alert("Invalid input. Please enter a number from 0 to 10.");
} else {
  // Initialize the variable msg for the heading
  var msg = '<h2>Multiplication Table for ' + table + '</h2>';

  // Show the multiplication table
  var i = 1; // Set counter to 1
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

  // Write the message into the page
  var el = document.getElementById('blackboard');
  el.innerHTML = msg;
}
