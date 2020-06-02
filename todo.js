var sub = document.getElementById("list");
// var timer = setInterval(helper, num*1000);
var chec;

sub.onclick = function () {

  var todo = document.getElementById("alist").value;

  var final = document.createElement("label");

  final.style = "display:block; padding-left:25px; font-size:22px;";
  final.htmlFor = "but";
  final.innerHTML = todo;
  document.getElementById("aform").appendChild(final);

  chec = document.createElement("input");
  chec.id = "but";
  chec.type = "checkbox";
  chec.style = "display:none";
  document.getElementById("aform").appendChild(chec);

  var brea = document.createElement("br");
  document.getElementById("aform").appendChild(brea);

  document.getElementById("alist").value = '';
}
