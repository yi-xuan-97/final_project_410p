function countdown () 
{
    var curtime = new Date();//curr time
    //---------change the date in here---------
    var endtime = new Date("2020,6,13");//end time
    var lefttime = Math.ceil((endtime.getTime() - curtime.getTime())/(24*60*60*1000));

    document.getElementById("countdown").innerHTML = lefttime;
}

