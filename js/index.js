/**
 * Created by Administrator on 2017/7/7.
 */
function moveT() {
    if(!document.getElementById) return false;
    if(!document.getElementById("moveTrain")) return false;
    var mTrain=document.getElementById("moveTrain");
    // mTrain.style.position="absolute";
    mTrain.style.left="-187px";
    mTrain.style.top="0px";
    movement=setTimeout("movingT()",1000);
}
function movingT() {
    if(!document.getElementById) return false;
    if(!document.getElementById("moveTrain")) return false;
    var mTrain=document.getElementById("moveTrain");
    var mTrainL=parseInt(mTrain.style.left);
    var mTrainT=parseInt(mTrain.style.top);
    if(mTrainL==1000 && mTrainT==0) {
        mTrainL=200;
    }else if(mTrainL<1000){
        mTrainL+=2;
    }
    mTrain.style.left=mTrainL+"px";
    mTrain.style.top=mTrainT+"px";
    movement=setTimeout("movingT()",20);
}
function foregallery() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery =document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
            return showPic(this) ? false : true;
        }
    }
}
function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description=document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;
        }
    }
    return true;
}
//导航图移动
function bannerMove() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("bannerHolder")) return false;
    if(!document.getElementById("bannerId")) return false;
    var bannerHolder=document.getElementById("bannerHolder");
    bannerHolder.style.position="absolute";
    bannerHolder.style.left="-937px";
    bannerHolder.style.top="0px";
    var list=document.getElementById("bannerId");
    var links=list.getElementsByTagName("a");
    links[0].onmouseover=function () {
       moveElement("bannerHolder",-0,0,10);
    }
    links[1].onmouseover=function () {
        moveElement("bannerHolder",-1874,0,10);
    }
}

//记忆回转
function preparaSlideshow() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("preview")) return false;
    if(!document.getElementById("imagegallery")) return false;
    var preview=document.getElementById("preview");
    preview.style.position="absolute";
    preview.style.left="0px";
    preview.style.top="0px";
    var list=document.getElementById("imagegallery");
    var links=list.getElementsByTagName("a");
    links[0].onmouseover=function () {
       moveElement("preview",0,0,10);
    }
    links[1].onmouseover=function () {
        moveElement("preview",0,-200,10);
    }
    links[2].onmouseover=function () {
        moveElement("preview",0,-400,10);
    }
    links[3].onmouseover=function () {
        moveElement("preview",0,-600,10);
    }
    links[4].onmouseover=function () {
        moveElement("preview",0,-850,10);
    }
    links[5].onmouseover=function () {
        moveElement("preview",0,-1085,10);
    }
    links[6].onmouseover=function () {
        moveElement("preview",0,-1300,10);
    }
    links[7].onmouseover=function () {
        moveElement("preview",0,-1500,10);
    }
    links[8].onmouseover=function () {
        moveElement("preview",0,-1750,10);
    }
}
function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    if (elem.movement){clearTimeout(elem.movement);}
   if(!elem.style.left){elem.style.left="0px";}
   if(!elem.style.top){elem.style.top="0px";}
   var xpos=parseInt(elem.style.left);
   var ypos=parseInt(elem.style.top);
   var dist=0;
   if(xpos == final_x && ypos == final_y){return  true;}
   if(xpos<final_x){
       dist=Math.ceil((final_x-xpos)/10);
       xpos=xpos+dist;
   }
    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/10);
        xpos=xpos-dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((final_y-ypos)/10);
        ypos=ypos+dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((ypos-final_y)/10);
        ypos=ypos-dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
        elem.movement=setTimeout(repeat,interval);
}
//电视机播放
function tvSlideshow() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("watchTv")) return false;
    if(!document.getElementById("tvBtn")) return false;
    var watchTv=document.getElementById("watchTv");
    watchTv.style.position="absolute";
    watchTv.style.left="-6px";
    watchTv.style.top="4px";
    var list=document.getElementById("tvBtn");
    var links=list.getElementsByTagName("a");
    links[0].onclick=function () {
        moveElement("watchTv",-6,-680,280);
    }
    links[1].onclick=function () {
        moveElement("watchTv",-6,4,200);
    }
}
//总加载
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(foregallery);
addLoadEvent(moveT);
addLoadEvent(preparaSlideshow);
addLoadEvent(bannerMove);
addLoadEvent(tvSlideshow);