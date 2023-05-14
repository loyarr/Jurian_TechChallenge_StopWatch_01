let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
const timer = document.querySelector(".timer");
let interval = null;

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(updateTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timer.innerHTML = "00 : 00 : 00 : 000";
});

function updateTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const ms = milliseconds.toString().padStart(3, "0");

  timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
