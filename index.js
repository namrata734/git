function increseTimer (){
    var currTime = document.getElementById("timer_time").innerHTML;
    console.log(currTime); 
    var min = parseInt(currTime.split(":")[0]);
    var sec = parseInt(currTime.split(":")[1]);
    console.log(min, sec);
    currTime = min*60 +sec;
    currTime += 1;
    min = Math.floor(currTime/60);
    sec = currTime%60;
    currTime = min.toString().padstart(2,'0').concat(":").concat(sec.toString().padstart(2,'0'));
    document.getElementById("timer-time").innerHTML= currTime;
    setTimeout(increseTimer, 1000);
}
document.getElementById("button").addEventListener("click",function(){
    increseTimer();
})