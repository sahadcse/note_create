// Get the note from the local storage
window.onload = function () {
  getNote();
};

// save the note to the local storage
function saveNote() {
  var notes = document.getElementById("notes").innerHTML;
  localStorage.setItem("notes", notes);
}

// Get the note from the local storage
function getNote() {
  var notes = localStorage.getItem("notes");
  document.getElementById("notes").innerHTML = notes;
}

// Create a new note and add it to the list with make a button to delete it
function addNote() {
  // if the input is empty then alert the user
  if (document.getElementById("note").value == "") {
    alert("Please write a note");
    return;
  } else {
    var note = document.getElementById("note").value;
    var notes = document.getElementById("notes");
    var li = document.createElement("li");
    var p = document.createElement("p");
    var text = document.createTextNode(note);
    var button = document.createElement("button");
    var buttonText = document.createTextNode("Delete");
    button.appendChild(buttonText);
    button.setAttribute("onclick", "deleteNote()");
    p.appendChild(text);
    li.appendChild(p);
    li.appendChild(button);
    notes.appendChild(li);

    // Save the note to the local storage
    saveNote();

    // Clear the input field
    document.getElementById("note").value = "";
  }
}

// Delete the note from the list
function deleteNote() {
  var notes = document.getElementById("notes");
  var li = notes.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {
      this.parentNode.removeChild(this);

      // Save the note to the local storage
      saveNote();
    };
  }
}
// function to create note by pressing enter and need to execute the code after html is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("note").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("add").click();
    }
  });
});
