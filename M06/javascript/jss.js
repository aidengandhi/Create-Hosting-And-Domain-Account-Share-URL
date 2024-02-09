function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (var i = 0; i < pHeight; i++) {
    rLine += "<p>";
    // Create each line on the Rhombus
    for (var j = 0; j < pHeight - i - 1; j++) {
      rLine += "&nbsp;"; // Add spaces for indentation
    }
    for (var k = 0; k <= i; k++) {
      // Is the position even or odd so we change the color
      if (k % 2)
        // even
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        // odd
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
  }

  document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (var i = 0; i < pHeight; i++) {
    rLine += "<p>";
    // Create each line on the Rhombus
    for (var j = 0; j < i; j++) {
      rLine += "&nbsp;"; // Add spaces for indentation
    }
    for (var k = 0; k < pHeight - i; k++) {
      // Is the position even or odd so we change the color
      if (k % 2)
        // even
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else
        // odd
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
  }

  document.getElementById("downRight").innerHTML = rLine;
}
