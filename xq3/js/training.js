var speed=30; //数字越大速度越慢
var xyshtu=document.getElementById("xysh");
var xyshtu1=document.getElementById("xysh1");
var xyshtu2=document.getElementById("xysh2");
xyshtu2.innerHTML=xyshtu1.innerHTML;
function Marquee(){
if(xyshtu2.offsetWidth-xyshtu.scrollLeft<=0)
xyshtu.scrollLeft-=xyshtu1.offsetWidth
else{
xyshtu.scrollLeft++;
}
}
var MyMar=setInterval(Marquee,speed);
xyshtu.onmouseover=function() {clearInterval(MyMar)};
xyshtu.onmouseout=function() {MyMar=setInterval(Marquee,speed)};


var speed1=30; //数字越大速度越慢
var xyshtuu=document.getElementById("xyshh");
var xyshtu11=document.getElementById("xysh11");
var xyshtu22=document.getElementById("xysh22");
xyshtu22.innerHTML=xyshtu11.innerHTML;
function Marquee1(){
if(xyshtu22.offsetWidth-xyshtuu.scrollLeft<=0)
xyshtuu.scrollLeft-=xyshtu11.offsetWidth
else{
xyshtuu.scrollLeft++;
}
}
var MyMar1=setInterval(Marquee1,speed1);
xyshtuu.onmouseover=function() {clearInterval(MyMar1)};
xyshtuu.onmouseout=function() {MyMar1=setInterval(Marquee1,speed1)};


$(document).ready(function(){
	$('.training_base_title_z').children('div').click(function(){
		$(this).siblings('div').removeClass('tab_border');
		$(this).addClass('tab_border');
		$(this).parent('div').siblings('.training_base').children('div').addClass('non');
		$(this).parent('div').siblings('.training_base').children('div').eq($(this).index()).removeClass('non').fadeIn(300);
	});
	
})
