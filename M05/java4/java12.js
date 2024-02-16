function showMultiplicationTable() {
      var userInput = document.getElementById('userInput').value;
      var table = parseInt(userInput);

      if (isNaN(table) || table < 0 || table > 10) {
        alert("Invalid input. Please enter a number from 0 to 10.");
      } else {
        var msg = '<h2>Multiplication Table for ' + table + '</h2>';
        var i = 1;

        while (i < 11) {
          msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
          i++;
        }

        var el = document.getElementById('blackboard');
        el.innerHTML = msg;
      }
    }
