 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoHeight: true, //enable auto height
		autoplay:3000/*每隔3秒自动播放*/
    });
var swiper1 = new Swiper('.swiper_two', {
        slidesPerView: 3,
        paginationClickable: true,
        autoplay: 3000,
        loop:true
    });
  	var swiper3 = new Swiper('.linx.swiper-container111', {
		pagination: '.linx.swiper-pagination',
        scrollbar: '.linx.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: '3',
        centeredSlides: false,
        spaceBetween: 15,
    });