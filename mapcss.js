let navBtnWidth = 150;
let mapHeight = 45;
let itv;
let heightCount=0;
var shortcutBtn = document.querySelectorAll('.shortcut');
var changeColor = "yellow";

window.addEventListener('resize', re);

function re() {     
    /*if (window.innerWidth>=800) {
        document.querySelector('.nav').style.width = navBtnWidth+'px';
        document.querySelector('.buttonArea').style.width = 'calc(100% - '+navBtnWidth+'px)';
    }

    else {
        document.querySelector('.nav').style.width = '15%';
        document.querySelector('.buttonArea').style.width = 'calc(100% - 15%)';
    }*/
    if (aa>20)
    panTo(aa,bb);
}

let mapSizeBtnValue = 50;
function upMapHeight(){
    heightCount=0;
    itv = setInterval(frame,1);
    function frame(){
        if (heightCount>=50){
            clearInterval(itv);
        }else {
            mapHeight+=0.2;
            mapSizeBtnValue += 0.2; 
            document.querySelector('.mapSizeBtn').style.top = mapSizeBtnValue+'vh';
            resizemap();
            heightCount+=1;
        }

    }
}

function downMapHeight(){
    heightCount=0;
    itv = setInterval(frame,1);
    function frame(){
        if (heightCount>=50){
            clearInterval(itv);
        }else {
            mapHeight-=0.2;
            mapSizeBtnValue -= 0.2; 
            document.querySelector('.mapSizeBtn').style.top = mapSizeBtnValue+'vh';
            resizemap();
            heightCount+=1;
        }

    }
}

function resizemap() {
    document.querySelector('.buttonArea').style.height = 'calc(100vh - (80px + '+mapHeight+'vh))';
    document.querySelector('.buttonArea').style.top = 'calc(80px + '+mapHeight+'vh)';
    document.querySelector('#map').style.height = mapHeight+'vh';
    document.querySelector('.nav').style.height = 'calc(100vh - (80px + '+mapHeight+'vh))';
    map.relayout();
}

setTimeout(re,300);

/*var searchBtn = document.querySelectorAll('#searchButton');
var shortcutBtn = document.querySelectorAll('.shortcut');

for (var i=0; i<searchBtn.length; i++){
    searchBtn[i].addEventListener("click",res);
}

function changeColor() {

}*/

document.querySelector('.nav기타').addEventListener("click",function(){colorReset(); 기타버튼.style.backgroundColor=changeColor});
document.querySelector('.navㄱ').addEventListener("click",function(){colorReset(); ㄱ.style.backgroundColor=changeColor});
document.querySelector('.navㄴㄷ').addEventListener("click",function(){colorReset(); ㄴㄷ.style.backgroundColor=changeColor});
document.querySelector('.navㅁㅂ').addEventListener("click",function(){colorReset(); ㅁㅂ.style.backgroundColor=changeColor});
document.querySelector('.navㅁㅂ').addEventListener("click",function(){colorReset(); ㅁㅂ.style.backgroundColor=changeColor});
document.querySelector('.navㅅ').addEventListener("click",function(){colorReset(); ㅅ.style.backgroundColor=changeColor});
document.querySelector('.navㅇ').addEventListener("click",function(){colorReset(); ㅇ.style.backgroundColor=changeColor});
document.querySelector('.navㅈ').addEventListener("click",function(){colorReset(); ㅈ.style.backgroundColor=changeColor});
document.querySelector('.navㅊ').addEventListener("click",function(){colorReset(); ㅊ.style.backgroundColor=changeColor});
document.querySelector('.navㅍㅎ').addEventListener("click",function(){colorReset(); ㅍㅎ.style.backgroundColor=changeColor});
function colorReset(){
    for (var i=0; i<shortcutBtn.length; i++){
        shortcutBtn[i].style.backgroundColor="white";
    }
}

document.querySelector('.testBtn').addEventListener("click",function(){colorReset()});



setInterval(() => {
    step();
}, 500);
function step(){
    if (document.querySelector('.nav').style.width=="150px") {
        document.querySelector('.nav').style.width="300px";
    }
}