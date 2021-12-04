function countdown () 
{
    var curTime = new Date();
    //---------change the date in here---------
    var endTime = new Date("2020,6,13");
    var leftTime = LeftTime();

    document.getElementById("countdown").innerHTML = leftTime;
    
    function LeftTime() {
        return Math.ceil((endTime.getTime() - curTime.getTime()) / (24 * 60 * 60 * 1000));
    }
}

