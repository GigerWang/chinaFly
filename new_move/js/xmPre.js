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

