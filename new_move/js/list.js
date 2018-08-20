//飘动js
//new WOW().init();
//swiper banner轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
//  direction: 'vertical',轮播焦点竖向
    loop:true,
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
//轮播四
var swiper = new Swiper('.swiper_four', {
    paginationClickable: true,
    autoplayDisableOnInteraction : false,
    slideActiveClass : 'swiper-slide1-active1',
    autoplay: 2000,
    loop:true,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	centeredSlides : true,
	slidesPerView:3,
	onSlideChangeStart: function(swiper){
//    console.log(swiper.activeIndex);
	$('.swiper-slide_class1').each(function(x,y){
		if($(this).hasClass('swiper-slide1-active1')){
			$('.swipchil').children('div').hide();
			$('.swipchil').children('div').eq(x).show();
		}
	})
	}
});
//学校介绍展开更多
//$(document).ready(function(){
//	$('.xxjszk').click(function(){
//		if($(this).html().indexOf('详情')!=-1){
//			$(this).html('【收起】');
//			$(this).css('bottom','0.4rem');
//			$('.xxjs_more').css('height','auto');
//		}else{
//			$(this).html('...【详情】');
//			$(this).css('bottom','0');
//			$('.xxjs_more').css('height','8rem');
//		}
//	})
//});
//新闻滚动
//var swiper = new Swiper('.swiper-toproll', {
//  paginationClickable: true,
//  direction: 'vertical',
//  slidesPerView:3,
//  loop:true,
//  autoplay:2000,
//  slideActiveClass : 'toproll-active',
//  speed:300,
//  autoplayDisableOnInteraction : false
//	slideClass : 'swiper-slide1'
//});
//学校首页学校简介查看更多
//$(function(){
//		$(".xxjz_jjco").attr("displayLength","264")
//		$(".xxjz_jjco").text_overflow();
//	$(".xxjz_jjmore").click(function(){
//		$(".xxjz_jjco").attr("displayLength","264")
//		$(".xxjz_jjco").un_displayPart();
//		if($('.xxjz_jjmore').html().indexOf('查看更多')!=-1){
//			$('.xxjz_jjmore').html('【点击收起】');
//			$('.xxjz_jjcon').css({'background':'none','height':'auto'});
//			$('.xxjz_jjmore').css('bottom','0.05rem');
//		}else{
//			$('.xxjz_jjmore').html('【查看更多】');
//			$('.xxjz_jjcon').removeAttr('style');
//			$('.xxjz_jjmore').removeAttr('style');
//		}
//	});
//});
//招生对象查看更多
//$(document).ready(function(){
//	$('.butt_more1').click(function(){
//		if($(this).html().indexOf('更多')!=-1){
//			$(this).html('<i class=" iconfont icon-triangle-bottom" style="font-size: 0.24rem;"></i>&nbsp;点击收起');
//			$('.xxjz_dxback').css({'background':'none','height':'auto','padding-bottom':'0.2rem'});
//			$('.xxjz_dxcon').css({'height':'auto','border':'1px solid #a8a6a6'});
//		}else{
//			$(this).html('<i class=" iconfont icon-triangle-right" style="font-size: 0.24rem;"></i>&nbsp;查看更多');
//			$('.xxjz_dxback').removeAttr('style');
//			$('.xxjz_dxcon').removeAttr('style');
//		}
//	})
//});
//优势查看更多
//$(document).ready(function(){
//	$('.xconmo').click(function(){
//		if($(this).html().indexOf('更多')!=-1){
//			$(this).siblings('p').css('height','auto');
//			$(this).html('【点击收起】');
//		}else{
//			$(this).siblings('p').css('height','1.41rem');
//			$(this).html('....【查看更多】');
//		}
//		
//	})
//})
//项目优势大查看更多
//$(document).ready(function(){
//	$('.butt_more2').click(function(){
//		if($(this).html().indexOf('更多')!=-1){
//			$(this).html('<i class=" iconfont icon-triangle-bottom" style="font-size: 0.24rem;"></i>&nbsp;点击收起');
//			$('.xmyszk').slideToggle();
//		}else{
//			$(this).html('<i class=" iconfont icon-triangle-right" style="font-size: 0.24rem;"></i>&nbsp;查看更多');
//			$('.xmyszk').slideToggle();
//		}
//	})
//});
//招生简章第一个more
//$(document).ready(function(){
//	$('.zsjz_morp1fu').click(function(){
//		if($(this).html().indexOf('详情')!=-1){
//			$(this).parent('p').css('height','auto');
//			$(this).html('【收起】');
//		}else{
//			$(this).parent('p').css('height','2.1rem');
//			$(this).html('...【详情】');
//		}
//		
//	})
//})
//专题页tab
$(document).ready(function(){
	$('.kc_fd').children('img').click(function(){
		$(this).siblings('img').removeClass('xz');
		$(this).addClass('xz');
		$('.kc_tabcon').css('display','none');
		$('.kc_tabcon').eq($(this).index()).fadeIn();
	})
})
//高中专题加载更多
$(document).ready(function(){
	$('.gz_more').click(function(){
		if($(this).html().indexOf('更多')!=-1){
			$('.gz_over').css('max-height','10rem');	
			$(this).html('点击收起……');
		}else{
			$('.gz_over').css('max-height','3.5rem');	
			$(this).html('点击加载更多&gt;&gt;');
		}

	})
});