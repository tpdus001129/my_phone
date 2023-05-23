const homeWeatherBtn = document
  .querySelector(".homeWeatherBtn")
  .addEventListener("click", function () {
    document.querySelector(".weather-box").style.display = "block";
    textBox.style.display = "none";
  });

function weather() {
  var cityName = "";
  const input = document.querySelector(".input");

  input.addEventListener("input", function (e) {
    cityName = e.target.value;
  });

  input.addEventListener("click", function () {
    input.value = null;
  });

  document
    .querySelector(".main-cityBtn")
    .addEventListener("click", function (e) {
      e.preventDefault();
    });

  document.querySelector(".search").addEventListener("click", function (e) {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=kr&appid=fbd9e9bae75a4be74df0467fdb3f943e&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const city = document.querySelector(".city");
        const temp = document.querySelector(".temp");
        const weather = document.querySelector(".weather");
        const icon = document.querySelector(".icon");
        const iconImg = data.weather[0].icon;

        temp.innerHTML = "기온 : " + data.main.temp.toFixed(1) + "°C";
        weather.innerHTML = "날씨 : " + data.weather[0].main;
        city.innerHTML = "지역 : " + data.name;

        const img = new Image();
        img.src = `./img/${iconImg}.png`;
        icon.appendChild(img);
      })
      .catch(() => {
        alert("잘못된 지역명입니다.");
      });
    document.querySelector(".icon").innerHTML = "";
  });
}
weather();
