function countdown () 
{
    var curTime = new Date();
    //---------change the date in here---------
    var endTime = new Date("2020,6,13");

    document.getElementById("countdown").innerHTML = LeftTime();
    
    function LeftTime() {
        return Math.ceil((endTime.getTime() - curTime.getTime()) / (24 * 60 * 60 * 1000));
    }
}

