let navBtnWidth = 150;
let mapHeight = 45;
let itv;
let heightCount = 0;
var shortcutBtn = document.querySelectorAll(".shortcut");
var changeColor = "rgb(90, 174, 255)";
let mapSizeBtnDefault = 50;
let mapSizeBtnValue = 0;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
document.querySelector("#normalMap").style.backgroundColor =
  "rgb(255, 122, 144)";

window.addEventListener("resize", re);

function re() {
  /*if (window.innerWidth>=800) {
        document.querySelector('.nav').style.width = navBtnWidth+'px';
        document.querySelector('.buttonArea').style.width = 'calc(100% - '+navBtnWidth+'px)';
    }

    else {
        document.querySelector('.nav').style.width = '15%';
        document.querySelector('.buttonArea').style.width = 'calc(100% - 15%)';
    }*/

  /*if (window.innerHeight<=700) {
        mapSizeBtnDefault = 51;
        document.querySelector('.mapSizeBtn').style.top = (mapSizeBtnDefault + mapSizeBtnValue)+'vh';
    }
    else if (window.innerHeight>700 && window.innerHeight<1200){
        mapSizeBtnDefault = 48.5;
        document.querySelector('.mapSizeBtn').style.top = (mapSizeBtnDefault + mapSizeBtnValue)+'vh';
    }
    else if (window.innerHeight>1200){
        mapSizeBtnDefault = 47;
        document.querySelector('.mapSizeBtn').style.top = (mapSizeBtnDefault + mapSizeBtnValue)+'vh';
    }*/

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  if (window.innerWidth < 1300) {
    document.querySelector(".main__bottomArea").style.height =
      "calc(100% - " + mapHeight + "% - 30px)";
    document.querySelector("#map").style.height = mapHeight + "%";
  }

  if (window.innerWidth >= 1300) {
    document.querySelector(".main__bottomArea").style.height = "100%";
    document.querySelector("#map").style.height = "100%";
  }
  map.relayout();
  if (aa > 20) {
    panTo(aa, bb);
  }
  navArrowBtnSetPosition();
}

window.addEventListener("touchend", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

window.addEventListener("scroll", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function upMapHeight() {
  heightCount = 0;
  itv = setInterval(frame, 1);
  function frame() {
    if (heightCount >= 50) {
      clearInterval(itv);
    } else {
      mapHeight += 0.2;
      mapSizeBtnValue += 0.2;
      //document.querySelector('.mapSizeBtn').style.top = 'calc((45% + '+mapSizeBtnValue+'%) + 15px)';
      resizemap();
      heightCount += 1;
      navArrowBtnSetPosition();
    }
  }
}

function downMapHeight() {
  heightCount = 0;
  itv = setInterval(frame, 1);
  function frame() {
    if (heightCount >= 50) {
      clearInterval(itv);
    } else {
      mapHeight -= 0.2;
      mapSizeBtnValue -= 0.2;
      //document.querySelector('.mapSizeBtn').style.top = 'calc((45% + '+mapSizeBtnValue+'%) + 15px)';
      resizemap();
      heightCount += 1;
      navArrowBtnSetPosition();
    }
  }
}

function resizemap() {
  document.querySelector(".main__bottomArea").style.height =
    "calc(100% - " + mapHeight + "% - 30px)";
  //document.querySelector('.main__bottomArea').style.top = 100-mapHeight+'%';
  document.querySelector("#map").style.height = mapHeight + "%";
  //document.querySelector('.nav').style.height = 'calc(100% - (80px + '+mapHeight+'%))';
  map.relayout();
}

setTimeout(re, 500);

/*var searchBtn = document.querySelectorAll('#searchButton');
var shortcutBtn = document.querySelectorAll('.shortcut');

for (var i=0; i<searchBtn.length; i++){
    searchBtn[i].addEventListener("click",res);
}

function changeColor() {

}*/

document.querySelector(".nav기타").addEventListener("click", function () {
  colorReset();
  기타버튼.style.backgroundColor = changeColor;
});
document.querySelector(".navㄱ").addEventListener("click", function () {
  colorReset();
  ㄱ.style.backgroundColor = changeColor;
});
document.querySelector(".navㄴㄷ").addEventListener("click", function () {
  colorReset();
  ㄴㄷ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅁㅂ").addEventListener("click", function () {
  colorReset();
  ㅁㅂ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅁㅂ").addEventListener("click", function () {
  colorReset();
  ㅁㅂ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅅ").addEventListener("click", function () {
  colorReset();
  ㅅ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅇ").addEventListener("click", function () {
  colorReset();
  ㅇ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅈ").addEventListener("click", function () {
  colorReset();
  ㅈ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅊ").addEventListener("click", function () {
  colorReset();
  ㅊ.style.backgroundColor = changeColor;
});
document.querySelector(".navㅍㅎ").addEventListener("click", function () {
  colorReset();
  ㅍㅎ.style.backgroundColor = changeColor;
});
function colorReset() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  for (var i = 0; i < shortcutBtn.length; i++) {
    shortcutBtn[i].style.backgroundColor = "white";
  }
}

//document.querySelector('.testBtn').addEventListener("click",function(){colorReset()});

setInterval(() => {
  //step();
}, 500);
function step() {
  if (document.querySelector(".nav").style.width == "150px") {
    document.querySelector(".nav").style.width = "300px";
  }
}

document.querySelector("#normalMap").addEventListener("click", function () {
  document.querySelector("#normalMap").style.backgroundColor =
    "rgb(255, 122, 144)";
  document.querySelector("#satelliteMap").style.backgroundColor =
    "rgb(38, 35, 194)";
});
document.querySelector("#satelliteMap").addEventListener("click", function () {
  document.querySelector("#normalMap").style.backgroundColor =
    "rgb(38, 35, 194)";
  document.querySelector("#satelliteMap").style.backgroundColor =
    "rgb(255, 122, 144)";
});
let heightGap;
let buttonAreaValue = document.querySelector(".buttonArea");
document.querySelector(".nav기타").style.backgroundColor = "rgb(80, 151, 231)";
buttonAreaValue.addEventListener("scroll", btscroll);
let btcolor = "rgb(80, 151, 231)";
function btscroll() {
  buttonAreaValue = document.querySelector(".buttonArea");
  console.log(buttonAreaValue.scrollTop + buttonAreaValue.offsetHeight);
  console.log(buttonAreaValue.scrollHeight);

  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop <
    (document.querySelector("#기타버튼").offsetTop +
      document.querySelector("#ㄱ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".nav기타").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#기타버튼").offsetTop +
      document.querySelector("#ㄱ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㄱ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㄱ").offsetTop +
      document.querySelector("#ㄴㄷ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㄴㄷ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㄴㄷ").offsetTop +
      document.querySelector("#ㅁㅂ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅁㅂ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㅁㅂ").offsetTop +
      document.querySelector("#ㅅ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅅ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㅅ").offsetTop +
      document.querySelector("#ㅇ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅇ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㅇ").offsetTop +
      document.querySelector("#ㅈ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅈ").style.backgroundColor = btcolor;
  }
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㅈ").offsetTop +
      document.querySelector("#ㅊ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅊ").style.backgroundColor = btcolor;
  }
  heightGap =
    buttonAreaValue.scrollHeight -
    (buttonAreaValue.scrollTop + buttonAreaValue.offsetHeight);
  if (
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
    (document.querySelector("#ㅊ").offsetTop +
      document.querySelector("#ㅍㅎ").offsetTop) /
      2
  ) {
    resetbt();
    document.querySelector(".navㅍㅎ").style.backgroundColor = btcolor;
  } else if (
    heightGap < 15 &&
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
      (document.querySelector("#ㅈ").offsetTop +
        document.querySelector("#ㅊ").offsetTop) /
        2
  ) {
    resetbt();
    document.querySelector(".navㅊ").style.backgroundColor = btcolor;
    document.querySelector(".navㅍㅎ").style.backgroundColor = btcolor;
  } else if (
    heightGap < 15 &&
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
      (document.querySelector("#ㅇ").offsetTop +
        document.querySelector("#ㅈ").offsetTop) /
        2
  ) {
    resetbt();
    document.querySelector(".navㅈ").style.backgroundColor = btcolor;
    document.querySelector(".navㅊ").style.backgroundColor = btcolor;
    document.querySelector(".navㅍㅎ").style.backgroundColor = btcolor;
  } else if (
    heightGap < 15 &&
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop >
      (document.querySelector("#ㅅ").offsetTop +
        document.querySelector("#ㅇ").offsetTop) /
        2 &&
    buttonAreaValue.offsetTop + buttonAreaValue.scrollTop <
      (document.querySelector("#ㅇ").offsetTop +
        document.querySelector("#ㅈ").offsetTop) /
        2
  ) {
    resetbt();
    document.querySelector(".navㅇ").style.backgroundColor = btcolor;
    document.querySelector(".navㅈ").style.backgroundColor = btcolor;
    document.querySelector(".navㅊ").style.backgroundColor = btcolor;
    document.querySelector(".navㅍㅎ").style.backgroundColor = btcolor;
  }
}

function resetbt() {
  let btAll = document.querySelectorAll("#searchButton");
  for (i = 0; i < btAll.length; i++) {
    btAll[i].style.backgroundColor = "rgb(57, 135, 224)";
  }
}

let upBtY, upBtWidth, upBtHeight, downBtY, downBtWidth, downBtHeight;

document
  .querySelector(".nav")
  .addEventListener("scroll", navArrowBtnSetPosition);

function navArrowBtnSetPosition() {
  if (document.querySelector(".nav").scrollTop > 5) {
    document.querySelector(".navUpArrow").style.zIndex = 1;
  }
  if (document.querySelector(".nav").scrollTop <= 5) {
    document.querySelector(".navUpArrow").style.zIndex = -1;
  }
  if (
    document.querySelector(".nav").scrollTop +
      document.querySelector(".nav").offsetHeight +
      5 <
    document.querySelector(".nav").scrollHeight
  ) {
    document.querySelector(".navDownArrow").style.zIndex = 1;
  } else {
    document.querySelector(".navDownArrow").style.zIndex = -1;
  }

  upBtY = document.querySelector(".nav기타").offsetTop;
  upBtWidth = document.querySelector(".nav기타").offsetWidth;
  upBtHeight = document.querySelector(".nav기타").offsetHeight;
  document.querySelector(".navUpArrow").style.top = `${upBtY}px`;
  document.querySelector(".navUpArrow").style.width = `${upBtWidth}px`;
  document.querySelector(".navUpArrow").style.height = `${upBtHeight}px`;

  downBtWidth = document.querySelector(".navㅍㅎ").offsetWidth;
  downBtHeight = document.querySelector(".navㅍㅎ").offsetHeight;
  document.querySelector(".navDownArrow").style.top = `${downBtY}px`;
  document.querySelector(".navDownArrow").style.width = `${downBtWidth}px`;
  document.querySelector(".navDownArrow").style.height = `${downBtHeight}px`;
  downBtY = window.innerHeight - downBtHeight;
}

navArrowBtnSetPosition();

document.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    alert(opa);
  }
});
