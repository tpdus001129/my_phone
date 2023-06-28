const clockSetup = document.querySelector(".clockSetup");
document.querySelector(".homeClockBtn").addEventListener("click", function () {
  document.querySelector(".clock-box").style.display = "block";
  $(".textBox, .clockSetup").css("display", "none");
});

// 추가버튼 (option, label, day, tryAlert 초기화)
document.querySelector(".clockPlus").addEventListener("click", function () {
  clockSetup.style.display = "block";
  const select = document.querySelectorAll('select[name="select"]');
  for (let i = 1; i <= select.length; i++) {
    $(`#select${i} option:eq(0)`).prop("selected", true);
  }
  label.value = "";
  for (let i = 0; i < day.length; i++) {
    day[i].checked = false;
  }
  document.querySelector("#tryAlert").checked = false;
});
// 취소버튼
document.querySelector(".clockCancle").addEventListener("click", function () {
  clockSetup.style.display = "none";
});
// 저장버튼
document.querySelector(".clockSave").addEventListener("click", function () {
  if (!select1.selectedIndex || !select2.selectedIndex || !select3.selectedIndex) {
    alert("시간을 선택해주세요.");
  } else if (label.value == "") {
    alert("레이블을 입력해주세요.");
  } else if (document.querySelectorAll('input[name="day"]:checked').length == 0) {
    alert("요일을 체크해주세요.");
  } else {
    clockSetup.style.display = "none";
    clockAdd();
  }
});

const label = document.querySelector("#label");
const clockSave = document.querySelector(".clockSave");
const clockList = document.querySelector(".clockList");

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

const day = document.querySelectorAll('input[name="day"]');

function clockAdd() {
  const clock = document.createElement("div");
  clock.setAttribute("class", "clock");

  const clockText = document.createElement("div");
  clockText.setAttribute("class", "clockText");

  // 시간
  const value1 = select1.options[select1.selectedIndex].value;
  const value2 = select2.options[select2.selectedIndex].value;
  const value3 = select3.options[select3.selectedIndex].value;
  clockText.innerHTML += `<span class="clock-font">${value1} ${value2}:${value3} </span>`;

  // 레이블
  clockText.innerHTML += label.value + "<br />";

  // 요일
  const arr = [];
  for (let i = 0; i < day.length; i++) {
    if (day[i].checked == true) {
      arr.push(day[i].value);
    }
  }
  const arrDay = arr.toString();
  clockText.innerHTML += arrDay;

  // 삭제
  const clockDelete = document.createElement("div");
  clockDelete.innerHTML = '<i class="fa-regular fa-trash-can clockDelete"></i>';
  clockDelete.addEventListener("click", function () {
    clockList.removeChild(clock);
  });

  // 추가
  clockList.appendChild(clock);
  clock.appendChild(clockText);
  clock.appendChild(clockDelete);
}
