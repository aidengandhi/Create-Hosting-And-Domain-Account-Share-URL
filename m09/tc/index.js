var clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function(event) {
  var dots = document.getElementsByClassName("dot");
  while (dots.length > 0) {
    dots[0].parentNode.removeChild(dots[0]);
  }

  // Let us stop the propagation of events
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
