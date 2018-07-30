//飘动js
new WOW().init();
//swiper banner轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
//  direction: 'vertical',轮播焦点竖向
    loop:true,
    effect:'fade',
    speed:700,
    autoplay:3000
});
//fly轮播
    var swiper = new Swiper('.swiper_two', {
        slidesPerView: 3,
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        autoplay: 1000,
        loop:true,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next'
    });
//轮播三
var swiper = new Swiper('.swiper_three', {
    paginationClickable: true,
    autoplayDisableOnInteraction : false,
    slideActiveClass : 'swiper-slide1-active1',
    autoplay: 2000,
    loop:true,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	centeredSlides : true,
	slidesPerView:5
});
$(document).ready(function(){
//	tab选项卡点击条件变色
	$('.tho_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
	});
	$('.tht_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
	});
	$('.thth_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
	});
//	视频tab选项卡
	$('.tcl_nav').click(function(){
		$(this).addClass('tcl_nav1').siblings('div').removeClass('tcl_nav1');
		$(this).parent('div').siblings('div').children('video').css('display','none');
		$(this).parent('div').siblings('div').children('video').eq($(this).index()).fadeIn(200);
	});
//	学校渐变选项卡
	$('.sc_ch').click(function(){
		$(this).addClass('sc_chfu').siblings('div').removeClass('sc_chfu');
		$(this).parent('div').siblings('.scta_ri').children('.student1').css('display','none');
		$(this).parent('div').siblings('.scta_ri').children('.student1').eq($(this).index()).fadeIn(200);
	})
})
