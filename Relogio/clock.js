function showTime(){
    var date = new Date();
    var h = date.getHours();  
    var m = date.getMinutes();  
    var s = date.getSeconds();  
    var session = "AM"

    if(h==0){
        h=12;
    }

    if(h>12){
        h = h - 12;
        session = "PM"
    }

    h = (h<10) ? "0" +h : h;
    h = (m<10) ? "0" +h : h;
    h = (s<10) ? "0" +h : h;

    var time = h + ":" + m + ":" + s + ":" + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();