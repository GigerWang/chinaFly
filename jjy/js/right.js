	$(document).ready(function(){
		$('.right_r').children('div').hover(function(){
			$(this).children('div').fadeIn(500);
		},function(){
			$(this).children('div').css('display','none');
		});
		$('.right_r4').click(function(){
			$("html,body").animate({
				scrollTop:"0px"},
				666
				)
		})
	});