var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(35.9694467008573, 126.95808664531884), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '학군단 뒤 비상벨', 
        latlng: new kakao.maps.LatLng(35.972090,126.958234)
    },
    {
        title: '경상대학,새천년관 사이 비상벨', 
        latlng: new kakao.maps.LatLng(35.970773,126.958033)
    },
    {
        title: '사회과학대학 옆 비상벨', 
        latlng: new kakao.maps.LatLng(35.971729,126.956769)
    },
    {
        title: '교학대학 옆 비상벨',
        latlng: new kakao.maps.LatLng(35.970616,126.955417)
    },
    {
        title: '생활과학대학 옆 비상벨',
        latlng: new kakao.maps.LatLng(35.970088,126.954462)
    },
    {
        title: '공공정책대학쪽 비상벨',
        latlng: new kakao.maps.LatLng(35.968798,126.956869)
    },
    {
        title: '노천극장 옆 비상벨',
        latlng: new kakao.maps.LatLng(35.967653,126.954300)
    },
    {
        title: '60주년기념관쪽 비상벨(1)',
        latlng: new kakao.maps.LatLng(35.965854,126.955325)
    },
    {
        title: '60주년기념관쪽 비상벨(2)',
        latlng: new kakao.maps.LatLng(35.965455,126.954183)
    },
    {
        title: '문화체육관 별관 뒤쪽 비상벨',
        latlng: new kakao.maps.LatLng(35.966091,126.957909)
    },
    {
        title: '의과대학쪽 비상벨',
        latlng: new kakao.maps.LatLng(35.965902,126.959382)
    },
    {
        title: '사범대학뒤편 비상벨',
        latlng: new kakao.maps.LatLng(35.967580,126.961192)
    },
    {
        title: '프라임관 기계공작실 사이 비상벨',
        latlng: new kakao.maps.LatLng(35.968467,126.959412)
    }
    ,{
        title: '생명자원과학대학 뒤편 비상벨',
        latlng: new kakao.maps.LatLng(35.969283,126.960576)
    }
    ,{
        title: '자연 식물원 뒤편 비상벨',
        latlng: new kakao.maps.LatLng(35.970058,126.962679)
    },
    {
        title: '승리관 뒤편 비상벨',
        latlng: new kakao.maps.LatLng(35.970930,126.961223)
    }
];

function setNormalMap(){
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
}
function setSkyMap(){
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);   
}

// 마커 이미지의 이미지 주소입니다
var imageSrc = "marker.png"; 
//var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";     
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}
a=0; b=0; name="";

function creatOverlay(a,b,name){
    linkValue=name+","+a+","+b;
  var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/to/'+linkValue+'"'+'target="_self">' +
    '    <span class="title">'+name+'</span>' +
    '  </a>' +
    '</div>';
    
    var position = new kakao.maps.LatLng(a,b);  
    overlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    yAnchor: 1 
});
overlay.setMap(map);
}
function panTo(a,b) {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(a, b);
    
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);            
} 
function insert(a,b,name){
    aa=a;
    bb=b;
    nname=name;
creatOverlay(aa,bb,name);
}

insert(35.972090,126.958234,'학군단 뒤 🚨');
insert(35.970773,126.958033,'경상대학 새천년관 사이 🚨');
insert(35.971729,126.956769,'사회과학대학 옆 🚨');
insert(35.970616,126.955417,'교학대학 옆 🚨');
insert(35.970088,126.954462,'생활과학대학 옆 🚨');
insert(35.968798,126.956869,'공공정책대학쪽 🚨');
insert(35.967653,126.954300,'노천극장 옆 🚨');
insert(35.965854,126.955325,'60주년기념관쪽(1) 🚨');
insert(35.965455,126.954183,'60주년기념관쪽(2) 🚨');
insert(35.966091,126.957909,'문화체육관 별관 뒤쪽 🚨');
insert(35.965902,126.959382,'의과대학쪽 🚨');
insert(35.967580,126.961192,'사범대학뒤편 🚨');
insert(35.968467,126.959412,'프라임관 기계공작실 사이 🚨');
insert(35.969283,126.960576,'생명자원과학대학 뒤편 🚨');
insert(35.970058,126.962679,'자연 식물원 뒤편 🚨');
insert(35.970930,126.961223,'승리관 뒤편 🚨');

let locationAccess=0;
let locPosition;

findMyLocation();
function findMyLocation(){
    if(locationAccess==0){
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
            locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        if (locationAccess==1){
            map.setCenter(locPosition);  // 지도 중심좌표를 접속위치로 변경합니다  
        }
        locationAccess=1;
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
     locPosition = new kakao.maps.LatLng(35.9694467008573, 126.95808664531884),    
        message = '위치 정보 허용을 해주세요';
        
    displayMarker(locPosition, message);
    locationAccess=0;
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var content = '<div class="customoverlay">' +
    '  <a href="#">' +
    '    <span class="title">현재 위치</span>' +
    '  </a>' +
    '</div>';
    
    
    overlay = new kakao.maps.CustomOverlay({
    position: locPosition,
    content: content,
    yAnchor: 1 
});
overlay.setMap(map);
    
      
}
}
else if (locationAccess==1){
    map.setCenter(locPosition);
}
}

function explainOff(){
    let TimerIID=setTimeout(()=>panTo(35.9694467008573, 126.95808664531884),100);
    document.querySelector(".explainArea").style.display = "flex";
    let TimerID=setTimeout(()=>document.querySelector(".explainArea").style.display = "none",7000);
}

document.querySelector('#normalMap').style.backgroundColor = "rgb(255, 122, 144)";

document.querySelector('#normalMap').addEventListener("click",function(){
    document.querySelector('#normalMap').style.backgroundColor = "rgb(255, 122, 144)";
    document.querySelector('#satelliteMap').style.backgroundColor = "rgb(38, 35, 194)";
});
document.querySelector('#satelliteMap').addEventListener("click",function(){
    document.querySelector('#normalMap').style.backgroundColor = "rgb(38, 35, 194)";
    document.querySelector('#satelliteMap').style.backgroundColor = "rgb(255, 122, 144)";
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('touchend', () => {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('scroll', () => {
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//지도 줌에 따른 오버레이 사이즈 조절
let overlaySizeValue = 1.1;
let bottomValue= 55;
document.documentElement.style.setProperty('--overlaySize', `${overlaySizeValue}`);
document.documentElement.style.setProperty('--bottom', `${bottomValue}px`);

kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    
    // 지도의 현재 레벨을 얻어옵니다
    var level = map.getLevel();

    if (level<=2) {
        let overlaySizeValue = 1.1;
        let bottomValue= 55;
        document.documentElement.style.setProperty('--overlaySize', `${overlaySizeValue}`);
        document.documentElement.style.setProperty('--bottom', `${bottomValue}px`);
    }
    
    if (level==3) {
        let overlaySizeValue = 0.9;
        let bottomValue= 50;
        document.documentElement.style.setProperty('--overlaySize', `${overlaySizeValue}`);
        document.documentElement.style.setProperty('--bottom', `${bottomValue}px`);
    }

    if (level==4) {
        let overlaySizeValue = 0.6;
        let bottomValue= 35;
        document.documentElement.style.setProperty('--overlaySize', `${overlaySizeValue}`);
        document.documentElement.style.setProperty('--bottom', `${bottomValue}px`);
    }

    if (level==5) {
        let overlaySizeValue = 0;
        let bottomValue= 0;
        document.documentElement.style.setProperty('--overlaySize', `${overlaySizeValue}`);
        document.documentElement.style.setProperty('--bottom', `${bottomValue}px`);
    }
    
});

