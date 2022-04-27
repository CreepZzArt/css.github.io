function time(){
    var time = new Date();
    var hour;
    var minutes;
    var seconds;
    var year;
    var month;
    var day;
    year=time.getFullYear();
    month=time.getMonth();
    day = time.getDate();
    document.getElementById("date-year").innerHTML = year;
    document.getElementById("date-month").innerHTML = month + 1;
    document.getElementById("date-day").innerHTML = day;
    var temph = time.getHours();
    if(temph <= 9 && timeh > 0){
        hour = "0" + temph;
    }else{
        hour = temph;
    }
    var tempm = time.getMinutes();
    if(tempm < 10 && tempm > 0){
        minutes = "0" + tempm;
    }else{
        minutes = tempm;
    }
    var temps = time.getSeconds();
    if(temps < 10 && temps > 0){
        seconds = "0" + temps;
    }else{
        seconds = temps;
    }
    document.getElementById("time-hour").innerHTML = hour;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-second").innerHTML = seconds;
}
window.setInterval("time()",1000);