var ms = 0, s = 0, m = 0;
var timer;

var cronometroEl = document.querySelector('.cronometro');

function incio() {
    if (!timer) {
        timer = setInterval(correr, 10);
    }
}

function correr() {
    cronometroEl.textContent = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
}

function detenerTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function detener() {
    detenerTimer();
}

function reiniciar() {
    detenerTimer();
    ms = 0;
    s = 0;
    m = 0;
    cronometroEl.textContent = getTimer();
}
