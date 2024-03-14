document.addEventListener("DOMContentLoaded", function() {
  var addItemButton = document.getElementById("addItemButton");

  addItemButton.addEventListener("click", function() {
    var newItemText = document.getElementById("newItem").value;
    if (newItemText.trim() !== "") {
      addItemToList(newItemText);
    }
  });

  function addItemToList(text) {
    var list = document.getElementById("todo");
    var newItem = document.createElement("li");
    newItem.textContent = text;
    list.appendChild(newItem);
  }
});
