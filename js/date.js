function timer() {
    // Set start date to February 15, 2022, at 20:53 (Month is 0-indexed)
    var start = new Date(2022, 1, 15, 20, 53);  // Updated to Feb 15, 2022 (Month is 0-indexed)
    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }
    var m = Math.floor(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }
    var s = Math.floor(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    }
    else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);