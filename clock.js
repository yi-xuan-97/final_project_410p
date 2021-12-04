function startTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    // If the number is less than 10, add 0 in front.
    minutes = checkTime(minutes);
  
    document.getElementById('clock').innerHTML = hours + ":" + minutes;
    timeout = setTimeout('startTime()', 500);
}
function checkTime(i){
    if (i < 10) 
        i = "0" + i;
    return i;
}
