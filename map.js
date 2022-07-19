var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = {
center: new kakao.maps.LatLng(35.9694467008573, 126.95808664531884), // 지도의 중심좌표
level: 3 // 지도의 확대 레벨
};
var map = new kakao.maps.Map(mapContainer, mapOption);
// 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var markerPosition = new kakao.maps.LatLng(35.9684744,126.9579818)
var markers=[];

count=0;  //전역변수 선언
a=0; b=0; name="";
linkValue="";
moveY=0;
level=map.getLevel();
aa=0; bb=0; nname="";
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
if (locationAccess==1){
    map.setCenter(locPosition);
}
}
//--------------------------------------------------------
function createMarker(a,b,name){
    aa=a; bb=b; nname=name;
removeMarker();
    markerPosition = new kakao.maps.LatLng(a,b);
var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: markerPosition  // 마커의 위치
    })
marker.setMap(map);
markers.push(marker);
if(ccvalue==1)
{panTo(a,b);}
linkValue=name+","+a+","+b;

createOverlay();
explainOn();
function createOverlay(){
    if (count>0){
    closeOverlay();
}

count+=1;
level=map.getLevel();
    if (level==6) moveY=0.0017;
    if (level==5) moveY=0.0010;
    if (level==4) moveY=0.0005;
    if (level==3) moveY=0.00025;
    if (level==2) moveY=0.0001;
    if (level==1) moveY=0.00005;
    moveY=0;
var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/to/'+linkValue+'"'+'target="_self">' +
    '    <span class="title">'+name+'</span>' +
    '  </a>' +
    '</div>';
    
    var position = new kakao.maps.LatLng(a-moveY,b);  
    overlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    yAnchor: 1 
});
overlay.setMap(map);
}
ccvalue=1;

}

kakao.maps.event.addListener(map, 'zoom_changed',function(){
    ccvalue=0;
    if (count>0){
    closeOverlay();
    createMarker(aa,bb,nname);
}
});

function zoomIn() {        
    // 현재 지도의 레벨을 얻어옵니다
    var level = map.getLevel();
    
    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(3);
    
}  

function panTo(a,b) {
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
function openOverlay(){
    overlay.setMap(map);
}
function closeOverlay() {
   overlay.setMap(null);
}
function setCenter(){
    panTo(35.9694467008573, 126.95808664531884);

}
function setNormalMap(){
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
}
function setSkyMap(){
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);   
}
let explainCount=0;
function explainOn() {
    if (explainCount==0){
        document.querySelector(".explainArea").style.display = "flex";
        let TimerID=setTimeout(()=>document.querySelector(".explainArea").style.display = "none",9000);
        explainCount=1;
    }
}

let TimerID=setTimeout(setCenter(),5000);
let linkPosition='';
function openWin(){
    window.location="https://map.kakao.com/link/to/"+linkValue;
}

window.addEventListener('resize', panTo(aa,bb));

clickcheck = document.getElementById('getButton');
ccvalue=1;
clickcheck.addEventListener("click",function(){ccvalue=1;});


function res() {
    document.querySelector('#map').style.height = '65vh';
    document.querySelector('.buttonArea').style.height = 'calc(100vh - (80px + 65vh))';
    document.querySelector('.buttonArea').style.top = 'calc(80px + 65vh)';
    map.relayout();
}
