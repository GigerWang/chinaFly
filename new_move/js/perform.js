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
		$(this).parent('div').siblings('div').children('video').fadeOut(200);
		$(this).parent('div').siblings('div').children('video').eq($(this).index()).fadeIn(200);
	});
})
