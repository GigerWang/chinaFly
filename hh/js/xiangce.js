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
				 var content = '';
				 var content1 = '';
			 for (var i=0;i<5;i++){
				content+='<div class="swiper-slide" style="background-image: url('+'images/xy/xy_pic1.png'+');background-position: center;background-size: cover;"></div>';
				content1+='<div>'+'sssss'+i+6+'</div>';
			 }
			$('.xyxy_show').html(content);
			$('.swiper_con').html(content1);
			s1=$('.pingzhang').children('.showpicone').children('.swiper_con');
			s1.children('div').css('display','none');
			s1.children('div').eq(s).css('display','block');
			var mySwiper = new Swiper('.swiper-container',{
onSlideChangeEnd: function(swiper){
		s=swiper.activeIndex;
		s1.children('div').css('display','none');
		s1.children('div').eq(s).css('display','block');
    }
})
})
});

