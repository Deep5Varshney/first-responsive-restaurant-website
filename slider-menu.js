

document.getElementById("menu").onclick=function(){
    document.getElementById("section-slider-menu").style.right="0";
}

document.getElementById("close-icon").onclick=function(){
    document.getElementById("section-slider-menu").style.right="-320px";
}


var el=document.querySelector(".flex");
var el1=document.querySelector(".flex1")
el.innerHTML=el.innerHTML.replace(/&nbsp;/g,'');
el1.innerHTML=el1.innerHTML.replace(/&nbsp;/g,'');

document.getElementById("current_year").innerHTML=new Date().getFullYear(); 