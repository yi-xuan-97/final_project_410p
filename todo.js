var sub = document.getElementById("list");
var checkbox;

//Once user click on button submitted, it will append user input into the list
sub.onclick = function () {

  var todo = document.getElementById("alist").value;
  var final = document.createElement("label");

  //Append the final result from input box as label
  final.style = "display:block; padding-left:25px; font-size:22px;";
  final.htmlFor = "but";
  final.innerHTML = todo;
  document.getElementById("aform").appendChild(final);

  //Append a checkbox within the form
  checkbox = document.createElement("input");
  checkbox.id = "but";
  checkbox.type = "checkbox";
  checkbox.style = "display:none";
  document.getElementById("aform").appendChild(checkbox);

  var brea = document.createElement("br");
  document.getElementById("aform").appendChild(brea);

  document.getElementById("alist").value = '';
}
