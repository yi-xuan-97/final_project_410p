var i;
function append() {

  var todo = document.getElementById("alist").value;

  var final = document.createElement("li");

  final.style = "list-style:none; text-align:center; font-size:22px;";
  final.id = "als";

  final.innerHTML = todo;
  // final.innerHTML = todo + "<input type='checkbox'  id='abut'>";

  document.getElementById("aform").appendChild(final);

  var but =document.createElement("input");

  but.type = "checkbox";
  but.id="but";

  document.getElementById("aform").appendChild(final);
  


  document.getElementById("alist").value = '';
}


