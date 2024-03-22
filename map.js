fetch("buildinglist.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // 'data'는 JSON 파일의 내용을 담고 있습니다.
    // 이제 JSON 데이터로 작업을 수행할 수 있습니다.

    const buttonArea = document.querySelector(".buttonArea");

    // 'data' 대신 'buttons' 변수 사용을 제거하고, 직접 'data'를 forEach로 순회합니다.
    data.forEach((button) => {
      const buttonElement = document.createElement("div");
      buttonElement.id = button.id;

      if (button.coordinates.length == 0) {
        //바로가기 버튼일 경우
        buttonElement.className = "shortcut";
        buttonElement.textContent = button.name;
        buttonArea.appendChild(buttonElement);

        const spanElement = document.createElement("span"); // 새로운 span 요소 생성
        spanElement.id = "target" + button.description;
        spanElement.className = "hreftarget";
        spanElement.textContent = "."; // span에 텍스트 콘텐츠 설정
        buttonArea.appendChild(spanElement); // div 요소에 span 요소를 자식으로 추가
      } else {
        buttonElement.textContent = button.description; // 'name' 속성이 있는지 확인하세요. JSON 데이터에 'name' 키가 존재해야 합니다.
        buttonElement.onclick = function () {
          createMarker(...button.coordinates, button.description);
        };
        buttonArea.appendChild(buttonElement);
      }
    });
  })
  .catch((error) => console.error("Error loading the JSON file:", error));

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(35.9694467008573, 126.95808664531884), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };
var map = new kakao.maps.Map(mapContainer, mapOption);
// 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var markerPosition = new kakao.maps.LatLng(35.9684744, 126.9579818);
var markers = [];

count = 0; //전역변수 선언
a = 0;
b = 0;
name = "";
linkValue = "";
level = map.getLevel();
aa = 0;
bb = 0;
nname = "";
let locationAccess = 0;
let locPosition;
ccvalue = 0;

findMyLocation();
function findMyLocation() {
  if (locationAccess == 0) {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        (locPosition = new kakao.maps.LatLng(lat, lon)), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          (message = '<div style="padding:5px;">현재 위치</div>'); // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        if (locationAccess == 1) {
          map.setCenter(locPosition); // 지도 중심좌표를 접속위치로 변경합니다
        }
        locationAccess = 1;
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      (locPosition = new kakao.maps.LatLng(
        35.9694467008573,
        126.95808664531884
      )),
        (message = "위치 정보 허용을 해주세요");

      displayMarker(locPosition, message);
      locationAccess = 0;
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var content =
        '<div class="customoverlay">' +
        '  <a href="#">' +
        '    <span class="title">현재 위치</span>' +
        "  </a>" +
        "</div>";

      overlay2 = new kakao.maps.CustomOverlay({
        position: locPosition,
        content: content,
        yAnchor: 1,
      });
      overlay2.setMap(map); //overlay 2는 현재 위치 오버레이를 삭제하지 않게 하기 위해 지정
    }
  }
  if (locationAccess == 1) {
    map.setCenter(locPosition);
  }
}
//--------------------------------------------------------
function createMarker(a, b, name) {
  aa = a;
  bb = b;
  nname = name;
  removeMarker();
  markerPosition = new kakao.maps.LatLng(a, b);
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: markerPosition, // 마커의 위치
  });
  marker.setMap(map);
  markers.push(marker);

  panTo(a, b);
  linkValue = name + "," + a + "," + b;

  createOverlay();
  explainOn();

  function createOverlay() {
    if (count > 0) {
      closeOverlay();
    }

    count += 1;
    level = map.getLevel();
    var content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/to/' +
      linkValue +
      '"' +
      'target="_blank">' +
      '    <span class="title">' +
      name +
      "</span>" +
      "  </a>" +
      "</div>";

    var position = new kakao.maps.LatLng(a, b);
    overlay = new kakao.maps.CustomOverlay({
      position: position,
      content: content,
      yAnchor: 1,
    });
    overlay.setMap(map);
  }
  ccvalue = 1;
}

/*kakao.maps.event.addListener(map, 'zoom_changed',function(){
    ccvalue=0;
    if (count>0){
    closeOverlay();
    createMarker(aa,bb,nname);
}
}); 줌 변경시 마커 위치 변경*/

function zoomIn() {
  // 현재 지도의 레벨을 얻어옵니다
  var level = map.getLevel();

  // 지도를 1레벨 내립니다 (지도가 확대됩니다)
  map.setLevel(3);
}

function panTo(a, b) {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(a, b);

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}

function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function removeMarker() {
  setMarkers(null);
}
function openOverlay() {
  overlay.setMap(map);
}
function closeOverlay() {
  overlay.setMap(null);
}
function setCenter() {
  panTo(35.9694467008573, 126.95808664531884);
}
function setNormalMap() {
  map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
}
function setSkyMap() {
  map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
}
let explainCount = 0;
function explainOn() {
  if (explainCount == 0) {
    document.querySelector(".explainArea").style.display = "flex";
    let TimerID = setTimeout(
      () => (document.querySelector(".explainArea").style.display = "none"),
      7000
    );
    explainCount = 1;
  }
}

let TimerID = setTimeout(setCenter(), 5000);
let linkPosition = "";
function openWin() {
  window.location = "https://map.kakao.com/link/to/" + linkValue;
}

window.addEventListener("resize", panTo(aa, bb));

clickcheck = document.getElementById("getButton");
ccvalue = 1;
//clickcheck.addEventListener("click",function(){ccvalue=1;});

function res() {
  document.querySelector(".buttonArea").style.height =
    "calc(100vh - (80px + 65vh))";
  document.querySelector(".buttonArea").style.top = "calc(80px + 65vh)";
  document.querySelector("#map").style.height = "65vh";
  document.querySelector(".nav").style.height = "calc(100vh - (80px + 65vh))";
  map.relayout();
}
