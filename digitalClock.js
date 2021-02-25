function digitalClock(time){

    let hour = Math.floor(time / 3600);
    time -= hour * 3600;
    if(hour < 10){
        hour = "0" + hour;
    }
    if(hour >= 24){
        hour = "00";
    }

    let minute = Math.floor(time / 60);
    time -= minute *  60;
    if(minute < 10){
        minute = "0" + minute;
    }
    if(time < 10){
        time = "0" + time;
    }

    time = `${hour}:${minute}:${time}`;

    return time;

}



console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));