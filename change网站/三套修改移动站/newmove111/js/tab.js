$(function(){
	function tabslide(tabClass){
		var Otab = $("."+tabClass);//获取类名
		var Otab_menu = Otab.children(".tab_menu");//获取导航
		var Otab_title = $(".tab_menu_title")//获取导航栏目
		var Otab_content_box = Otab.children(".tab_content_box");//获取内容容器
		var Otab_content = Otab_content_box.children(".tab_content")//获取内容栏目		
		Otab_title.click(function(){
			$(this).addClass('tab_menu_title1');
			$(this).siblings('div').removeClass('tab_menu_title1');
			var a = Otab_title.index($(this));
			Otab_title.removeClass("current");
			Otab_title.eq(a).addClass("current");
			Otab_content.removeClass("current");
			Otab_content.eq(a).addClass("current")
		})					
	}
	tabslide('tab_box');//使用函数
	
})