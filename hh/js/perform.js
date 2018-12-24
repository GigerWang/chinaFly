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
var tab1;
var tab2;
var tab3;
var s ='{"employees": [{ "firstName":"John" , "lastName":"Doe" },{ "firstName":"Anna" , "lastName":"Smith" },{ "firstName":"Peter" , "lastName":"Jones" }]}'
$(document).ready(function(){
//	tab选项卡点击条件变色
	$('.tho_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
			 $('.tho_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab1=$(this).text();
			 		}
	 			})
			 $('.tht_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab2=$(this).text();
			 		}
	 			})
			 $('.thth_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab3=$(this).text();
			 		}
	 			})
			 alert(tab1+tab2+tab3)
			 console.log(JSON.parse(s));
	});
	$('.tht_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
		$('.tho_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab1=$(this).text();
			 		}
	 			})
			 $('.tht_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab2=$(this).text();
			 		}
	 			})
			 $('.thth_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab3=$(this).text();
			 		}
	 			})
			 var content = '';
			 for (var i=0;i<s.length;i++){
				content+='<div class="tc_chil_fire"><div class="fire_left"><img src="'+s[i].s_img+'"/></div><div class="fire_cen"><div class="school_name"><h3>'+s[i].s_name+'</h3><img src="images/index/fire.jpg" alt="" class="picshan" /></div><div class="school_cen"><p>'+s[i].s_advantage+'</p></div></div><div class="fire_ri"><a href="#" class="school_but1">在线咨询</a><a href="#" class="school_but2">在线咨询</a></div></div>';
				}
			$('.tab_cont').html(content)
	});
	$('.thth_right').children('a').click(function(){
		$(this).addClass('a_clic').siblings('a').removeClass('a_clic');
		$('.tho_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab1=$(this).text();
			 		}
	 			})
			 $('.tht_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab2=$(this).text();
			 		}
	 			})
			 $('.thth_right').children('a').each(function(index,element){
			 	if($(this).hasClass('a_clic')){
			 		tab3=$(this).text();
			 		}
	 			})
			 alert(tab1+tab2+tab3)
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
//点击搜索显示隐藏
$(document).ready(function(){
	$('.fix_footer_right').click(function(){
		$('.index_search').slideToggle(500);
	})
})

