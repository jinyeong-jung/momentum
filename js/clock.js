const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    clock.innerHTML = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);