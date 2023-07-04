let interval = null;
let [seconds, minutes, hours] = [0,0,0];
let time = document.querySelector(".timer .time");
const btnStart = document.getElementById("start").addEventListener("click",startTimer);
const btnPause = document.getElementById("pause").addEventListener("click",pauseTimer);
const btnReset = document.getElementById("reset").addEventListener("click",resetTimer);

function timer() {
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = h + ":" + m + ":" + s;
}

function startTimer() {
    if(interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(timer, 1000);
}
function pauseTimer() {
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    [seconds, minutes, hours] = [0,0,0];
    time.innerHTML = "00:00:00"
}