const homeCallBtn = document.querySelector(".homeCallBtn").addEventListener("click", function () {
  textBox.style.display = "block";
  document.querySelector(".callBtn-box").style.display = "grid";
  document.querySelector(".calling-box").style.display = "none";
});

// 키패드 화면
const number = document.querySelectorAll(".number");
const textBox = document.querySelector(".textBox");
number.forEach((a) => {
  a.addEventListener("click", function (e) {
    textBox.insertAdjacentHTML("beforeend", e.target.value);
    if (textBox.innerHTML.substring(0, 2) == "02") {
      textBox.innerHTML = textBox.innerHTML
        .replace(/[^0-9*#]/g, "")
        .replace(/^(\S{0,2})(\S{0,4})(\S{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    } else {
      textBox.innerHTML = textBox.innerHTML
        .replace(/[^0-9*#]/g, "")
        .replace(/^(\S{0,3})(\S{0,4})(\S{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    }
  });
});

// 전화번호 삭제
document.querySelector(".callBtn-delete").addEventListener("click", function () {
  textBox.innerHTML = textBox.innerHTML.substring(0, textBox.innerHTML.length - 1);
  if (textBox.innerHTML.substring(textBox.innerHTML.length - 1, textBox.innerHTML.length) == "-") {
    textBox.innerHTML = textBox.innerHTML.substring(0, textBox.innerHTML.length - 1);
  }
});

// 전화 걸기
const callBtn = document.querySelector(".callBtn");
callBtn.addEventListener("click", function () {
  if (textBox.innerHTML == "") {
    return;
  } else {
    whiteBox.style.backgroundColor = "#2E2E2E";
    document.querySelector(".callBtn-box").style.display = "none";
    document.querySelector(".calling-box").style.display = "grid";
    document.body.style.color = "white";
    document.querySelector(".callAudio").play();
  }
});

// 전화 끊기
document.querySelector(".hangUP").addEventListener("click", function () {
  $(".whiteBox, .textBox").css("display", "none");
  whiteBox.style.backgroundColor = "white";
  textBox.style.marginBottom = "20px";
  textBox.innerHTML = "";
  document.body.style.color = "black";
  document.querySelector(".callAudio").pause();
});
