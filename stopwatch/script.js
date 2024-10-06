const clock = document.querySelector('#clock');
let timeinit = 0;
let interval;

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

function startClock() {
    if (!interval) {
        interval = setInterval(() => {
            console.log(timeinit);
            timeinit++;
            clock.innerHTML = formatTime(timeinit);
        }, 1000);
    }
}
function pauseClock() {
    clearInterval(interval);
    interval = null;
}
function resetClock() {
    if ( confirm("Are you sure to reset?")) {
        timeinit = 0;
    clock.innerHTML = formatTime(timeinit);
    pauseClock();
    }
}
const buttons = document.querySelectorAll('.function')
buttons.forEach(buttons => {
    buttons.addEventListener('click', function (event) {
        if (event.target.id === "start") {
            startClock();
        }
        else if (event.target.id === "pause") {
            pauseClock();
        } else if (event.target.id === "reset") {
            resetClock();
        }
    })
});

