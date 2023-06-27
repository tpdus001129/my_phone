function time() {
  const clock = document.querySelector(".time");
  const date = new Date();
  const hour = String(date.getHours(12)).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = hour + ":" + minute;
}
time();
setInterval(time, 1000);

const battery = document.querySelector(".battery");
battery.innerText = 100;

// 서브 화면
const whiteBox = document.querySelector(".whiteBox");
const blackBox = document.querySelector(".blackBox");
document.querySelector(".home-btn").addEventListener("click", function () {
  whiteBox.style.display = "none";
  whiteBox.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.querySelector(".textBox").innerHTML = "";
  document.querySelector("#weatherInput").value = "";
  $(".city, .temp, .weather, .icon").html("");
});

// 메인 아이콘 3
const homeIconBtn = document.querySelectorAll(".homeIconBtn");
homeIconBtn.forEach((a) => {
  a.addEventListener("click", function () {
    whiteBox.style.display = "block";
    $(".callBtn-box, .calling-box, .weather-box, .clock-box").css("display", "none");
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
