var sub = document.getElementById("list");
var checkbox;

sub.onclick = function () {

  var todo = document.getElementById("alist").value;

  var final = document.createElement("label");

  final.style = "display:block; padding-left:25px; font-size:22px;";
  final.htmlFor = "but";
  final.innerHTML = todo;
  document.getElementById("aform").appendChild(final);

  checkbox = document.createElement("input");
  checkbox.id = "but";
  checkbox.type = "checkbox";
  checkbox.style = "display:none";
  document.getElementById("aform").appendChild(checkbox);

  var brea = document.createElement("br");
  document.getElementById("aform").appendChild(brea);

  document.getElementById("alist").value = '';
}
