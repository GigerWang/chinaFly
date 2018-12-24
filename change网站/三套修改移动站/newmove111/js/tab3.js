$(document).ready(function(){
	$('.tab_change').children('div').click(function(){
		$(this).siblings('div').removeClass('tab_change_back');
		$(this).addClass('tab_change_back');
		$(this).parent('.tab_change').siblings('.tab_change_content').children('div').css('display','none');
		$(this).parent('.tab_change').siblings('.tab_change_content').children('div').eq($(this).index()).fadeIn(300);
	})
	$('.tab2-right').children('img').click(function(){

/*		$(this).siblings('div').removeClass('tab_change_back');
		$(this).addClass('tab_change_back');*/
		$(this).parent('div').siblings('div').css('display','none');
		$(this).parent('div').siblings('div').eq($(this).index()).fadeIn(500);
	})
	//more
	//点击查看更多
	$('.more_more').click(function(){
		if($('.more_li').hasClass('more_overflow')){
			$('.more_li').removeClass('more_overflow');
			$(this).children("h2").text('收起');
		}else{
			$('.more_li').addClass('more_overflow');
			$(this).children("h2").text('更多>>')
		}
		
	})
})

