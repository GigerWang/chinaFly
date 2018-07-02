$(document).ready(function(){
	var flag;
	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; 
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	$('.inpusub').children('input:first-child').click(function(){

		flag=true;
		$('.online_input_bottom').children('input[data-se="tr"]').each(function(){
			if($(this).val()==""){
				$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color','red');
				flag=false;
			}
		})

		$('.online_input_bottom').children('.se').each(function(){
			if($(this).children('option:first-child').is(':checked')){
				$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color','red');
				flag=false;
			}
		})

		if(!flag){
				alert('请将信息填写完整'); return false;
		}
		})
	
	$('.inpusub').children('input:last-child').click(function(){
		$('.inpu')
	})
	
	
	$('.online_input_bottom').children('input[data-se="tr"]').each(function(){
		$(this).click(function(){
			$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color', '#bdbdbd');
		});
	})
	$('.online_input_bottom').children('.se').each(function(){
		$(this).click(function(){
			$(this).parents('.online_input_bottom').siblings('.online_input_title1').css('color', '#bdbdbd');
		});
	})
	
	
	

})
