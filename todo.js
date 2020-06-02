function append() {

  var todo = document.getElementById("alist").value;

  var final = document.createElement("li");
  final.style= "list-style:none; text-align:center; font-size:22px;";
  final.innerHTML = todo;
  document.getElementById("aform").appendChild(final);

  document.getElementById("alist").value='';

}