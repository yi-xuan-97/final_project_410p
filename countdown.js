function countdown () 
{
    var curTime = new Date();
    //---------change the date in here---------
    var endTime = new Date("2020,6,13");
    var leftTime = Math.ceil((endTime.getTime() - curTime.getTime())/(24*60*60*1000));

    document.getElementById("countdown").innerHTML = leftTime;
}

