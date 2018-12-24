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
//专委会查看更多
$(document).ready(function(){
	$('#zwh_more').click(function(){
		if($(this).html().indexOf('更多')!=-1){
			$(this).html('【点击收起】');
			$('.zwh_sqp').removeClass('zwh_over');
		}else{
			$(this).html('【查看更多】');
			$('.zwh_sqp').addClass('zwh_over');
	}
	});
	$('#zwh_more1').click(function(){
		if($(this).html().indexOf('更多')!=-1){
			$(this).html('【点击收起】');
			$('.zwh_sqp1').removeClass('zwh_over1');
		}else{
			$(this).html('【查看更多】');
			$('.zwh_sqp1').addClass('zwh_over1');
	}
	})
});


[
	{
		"id":"1",
		"s_name":"\u5317\u4eac\u822a\u7a7a\u822a\u5929\u5927\u5b66",
		"s_advantage":"211,985\u91cd\u70b9\u5b66\u6821\u5317\u4eac\u822a\u7a7a\u822a\u5929\u5927\u5b66\u5b98\u65b9\u529e\u5b66\uff1b\r\n\u5168\u56fd\u6700\u4e13\u4e1a\u6700\u6743\u5a01\u7684\u822a\u7a7a\u5bf9\u53e3\u7c7b\u822a\u6821\uff1b\r\n\u822a\u7a7a\u670d\u52a1\u7cbe\u82f1\u73ed\u5f00\u529e\u7b2c\u5341\u4e09\u5c4a\uff0c\u6388\u8bfe\u3001\u5c31\u4e1a\u4f53\u7cfb\u6210\u719f\uff1b\r\n",
		"s_logo":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180904\/1536043736174004.jpg",
		"s_img":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180904\/1536043753636055.png",
		"s_img2":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180904\/1536043771637957.jpg",
		"s_object":"3,4,5,6","s_area":"1","s_time":"3","s_sort":"999"
	},
	{
		"id":"7",
		"s_name":"\u5317\u4eac\u5de5\u5546\u5927\u5b66\u5609\u534e\u5b66\u9662",
		"s_advantage":"\u878d\u5165\u56fd\u9645\u662f\u5609\u534e\u5b66\u9662\u6700\u9c9c\u660e\u7684\u529e\u5b66\u7279\u8272\u4e4b\u4e00\uff1b\r\n\u56fd\u9645\u5148\u8fdb\u9ad8\u7b49\u6559\u80b2\u7406\u5ff5\u4f18\u79c0\u5e08\u8d44\uff1b\r\n\u5f00\u5c55\u5168\u65b9\u4f4d\u3001\u591a\u5c42\u6b21\u3001\u5bbd\u9886\u57df\u7684\u56fd\u9645\u4ea4\u6d41\uff1b",
		"s_logo":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180905\/1536126241364990.jpg",
		"s_img":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180905\/1536126254304676.png",
		"s_img2":"http:\/\/139.224.3.138\/ueditor\/php\/upload\/image\/20180905\/1536126268237952.jpg",
		"s_object":"1,2,3,4,5,6","s_area":"1","s_time":"3,4","s_sort":"999"
	}
]