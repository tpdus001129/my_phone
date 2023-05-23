function time() {
  const clock = document.querySelector(".time");
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = hour + ":" + minute;
}
time();
setInterval(time, 1000);

const battery = document.querySelector(".battery");
battery.innerText = 100;

const whiteBox = document.querySelector(".whiteBox");
const blackBox = document.querySelector(".blackBox");
document.querySelector(".home-btn").addEventListener("click", function () {
  whiteBox.style.display = "none";
  textBox.innerHTML = "";
});

const homeGreenBtn = document.querySelectorAll(".homeGreenBtn");
homeGreenBtn.forEach((a) => {
  a.addEventListener("click", function () {
    whiteBox.style.display = "block";
    document.querySelector(".callBtn-box").style.display = "none";
    document.querySelector(".calling-box").style.display = "none";
    document.querySelector(".weather-box").style.display = "none";
    battery.innerText = battery.innerText - 10;
    if (battery.innerText == 70) {
      battery.style.backgroundColor = "yellow";
    } else if (battery.innerText == 20) {
      battery.style.backgroundColor = "red";
    } else if (battery.innerText == 0) {
      blackBox.style.display = "block";
    }
  });
});
