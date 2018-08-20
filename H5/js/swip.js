var aaaswiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction:'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  }
});
var swiper = new Swiper('.swiper_three', {
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
	$('.swiper-slide_class').each(function(x,y){
		if($(this).hasClass('swiper-slide1-active1')){
			$('.swipchil').children('div').hide();
			$('.swipchil').children('div').eq(x).show();
		}
	})
	}
});
$('.tz').click(function(){
aaaswiper.slideTo(7, 1000, true);//切换到第一个slide，速度为1秒
})