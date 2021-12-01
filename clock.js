window.onload = startTime();
function startTime()
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    // If the number is less than 10, add 0 in front.
    m=checkTime(m);
    document.getElementById('clock').innerHTML=h + ":" + m;
    t=setTimeout('startTime()',500);
}
function checkTime(i)
{
    if (i<10) 
    {
        i="0" + i;
    }
    return i;
}