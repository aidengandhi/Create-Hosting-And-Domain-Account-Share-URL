document.addEventListener("DOMContentLoaded", function() {
  var addItemButton = document.getElementById("addItemButton");
  var newItemInput = document.getElementById("newItem");

  addItemButton.addEventListener("click", function() {
    var newItemText = newItemInput.value.trim();
    if (newItemText !== "") {
      addItemToList(newItemText);
      newItemInput.value = ""; // Clear the input box
    }
  });

  function addItemToList(text) {
    var list = document.getElementById("todo");
    var newItem = document.createElement("li");
    newItem.textContent = text;
    list.appendChild(newItem);
  }
});
