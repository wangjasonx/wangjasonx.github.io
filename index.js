let clock = document.getElementById("MyClockDisplay");
let date = document.getElementById("DateDisplay");

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let timeperiod = "AM";

    if(h == 0) {
        h = 12;
    } else if(h > 12) {
        h = h - 12;
        timeperiod = "PM";
    }

    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }

    let time = h + ":" + m + ":" + s + " " + timeperiod;

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

function showDate() {
    let days = new Date();
    let month = days.getMonth() + 1;
    let day = days.getDate();
    let year = days.getFullYear();

    if(day < 10) {
        day = "0" + day;
    }

    let calendar = month + "/" + day + "/" + year;

    date.textContent = calendar;
}

showDate();

