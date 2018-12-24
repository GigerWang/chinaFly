$(document).ready(function(){
	var flag;
	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; 
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	$('.sub').click(function(){
		flag=true;
		$('.inpusp').each(function(){
			if($(this).val()==""){
				flag=false;
			}
		})
		if($('.sele').children('option:first-child').is(':checked')){
			flag=false;
		}
		if(!flag){
				alert('请将信息填写完整'); return false;
		}else if(!phoneReg.test($('.inpusp1').val())){
				alert('请输入有效的手机号码！'); return false;
		}
		})
})
