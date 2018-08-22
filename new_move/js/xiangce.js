var s=0;
var s1;
$(document).ready(function(){
	$('.show_pic').click(function(event){
		if(!$('html').hasClass('show_over')){
			$('html').addClass('show_over')	
			$('.pingzhang').css('height','100%');
		}else{
			$('html').removeClass('show_over')
		}
	});
	$('.pingzhang').click(function(e){
		$(this).css('height','0');
		$('html').removeClass('show_over')
	})
	$('.swiper-wrapper').click(function(e){
	e.stopPropagation();
})

$('.show_picz').children('.show_pic').click(function(){
	var abc = $(this).index()-1;
	$('.pingzhang').children('.showpicone').css({'height':'0','overflow': 'hidden'});
	$('.pingzhang').children('.showpicone').eq(abc).css('height','auto');
	s1=$('.pingzhang').children('.showpicone').eq(abc).children('.swiper_con');
})
});
var mySwiper = new Swiper('.swiper-container',{
onSlideChangeEnd: function(swiper){
		s=swiper.activeIndex;
		s1.children('div').css('display','none');
		s1.children('div').eq(s).css('display','block');
    }
})
