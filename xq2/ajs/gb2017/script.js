//搜索点击弹出效果
function SerMax(){
    $('#btn_ser').click(function(){
    	$('.ser').toggle(300);
    })
}
//导航置顶
$(function(){
	
	$(window).resize(function(){
		var sWSon = document.documentElement.clientWidth ;
		
		if(sWSon>1000){
			$('.topWrap').css({display:'block'})
				$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			var sHeader = $(".wraq_header").height();
			var sMain = $('#main').height();
			var sTotalHeight = sHeader + sMain;
			if(scrollTop > sTotalHeight){
				$('.wraq_nav').addClass('current');
				
				var liWidth = $("#nav li").width()
				$('.subNav').css('width',liWidth)
				}
				
			else{
				$('.wraq_nav').removeClass('current');
				var liWidth = $("#nav li").width()
				$('.subNav').css('width',liWidth)
				}
		});
			
		}else{
			$ (window).unbind ('scroll');
			$('.topWrap').css({display:'none'});
			$('.header').removeClass('current');
		}
	})
	})
 


//判断子菜单的宽度
function snavWidth(){
	var liWidth = $("#nav li").width()
	$('.subNav').css('width',liWidth)
	$(window).resize(function(){
		var liWidth = $("#nav li").width()
		$('.subNav').css('width',liWidth)
		})
	
	}
//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
		// $(this).find('.subNav').slideUp(300)
        $(this).addClass('on');
		
	},function (){
		// $(this).find('.subNav').slideDown(200)
        $(this).removeClass('on');
		
	})	
};
//12.移动端顶部点击弹出下拉菜单
// function Menu(menu,main){
//     var onOff = true;
//     $(menu).bind('click',function (){
//         $(main).slideToggle();
// 		if($(this).hasClass('open')){
// 			$(this).removeClass('open');
// 		}else{
// 			$(this).addClass('open');
// 			}
//     })
//     $(main).find('li>a').bind('click',function (){
//         if($(this).parent().hasClass('on')){
//             $(this).parent().find('dl').slideUp();
//             $(this).parent().removeClass('on');
//             return false;
//         };
//         $(this).parent().siblings().removeClass('on');
//         $(this).parent().siblings().find('dl').slideUp();
//         $(this).parent().addClass('on');
//         $(this).parent().find('dl').slideDown();
//     })
	
// };
//12.移动端顶部点击弹出下拉菜单
// function Menu(menu,main){
//     var onOff = true;
//     $(menu).bind('click',function (){  //绑定this为menu
//         $(main).slideToggle();
//         if($(this).find('span').hasClass('fa-navicon')){
// 			$(this).find('span').removeClass('fa-navicon');
// 			$(this).find('span').addClass('fa-remove');
// 		}else{
// 			$(this).find('span').addClass('fa-navicon');
// 			$(this).find('span').removeClass('fa-remove');
// 			}
		
//     })
//     $(main).find('li > span').bind('click',function (){
//     	if($(this).hasClass('fa-chevron-right')){
// 			$(this).removeClass('fa-chevron-right');
// 			$(this).addClass('fa-chevron-down');
// 		}else{
// 			$(this).addClass('fa-chevron-right');
// 			$(this).removeClass('fa-chevron-down');
// 			}
//         if($(this).parent().hasClass('on')){
//             $(this).parent().find('.subNavs').slideUp();
//             $(this).parent().removeClass('on');
//             return false;  //退出循环
//         };
//         $(this).parent().siblings().removeClass('on').find('.subNavs');
//         $(this).parent().siblings().find('.subNavs').slideUp();
//         $(this).parent().addClass('on').find('.subNavs');
//         $(this).parent().find('.subNavs').slideDown();
//     })
	
// };
function Menu(menu,main){
    // var onOff = true;
    $(menu).bind('click',function (){  //绑定this为menu
        $(main).slideToggle();
        if($(this).find('span').hasClass('fa-navicon')){
			$(this).find('span').removeClass('fa-navicon');
			$(this).find('span').addClass('fa-remove');
		}else{
			$(this).find('span').addClass('fa-navicon');
			$(this).find('span').removeClass('fa-remove');
			}
		
    })
    $(main).find('li > span').bind('click',function (){
    	if($(this).hasClass('fa-chevron-right')){
			$(this).removeClass('fa-chevron-right');
			$(this).addClass('fa-chevron-down');
		}else{
			$(this).addClass('fa-chevron-right');
			$(this).removeClass('fa-chevron-down');
			}
        if($(this).parent().hasClass('on')){
            $(this).parent().find('.subNavs').slideUp();
            $(this).parent().removeClass('on');
            return false;  //退出循环
        };
        $(this).parent().siblings().removeClass('on').find('.subNavs');
        $(this).parent().siblings().find('.subNavs').slideUp();
        $(this).parent().addClass('on').find('.subNavs');
        $(this).parent().find('.subNavs').slideDown();
    })
	
};

function weixinNav(id){
	var oNav1 = $(id);
	var aLi1 = oNav1.find('li');
	
	aLi1.click(function (){
		$(this).find('.weixinCode').toggle(300)
        $(this).addClass('on');
		
	},function (){
		$(this).find('.weixinCode').toggle(300)
        $(this).removeClass('on');
		
	})	
};

// 手机端下拉菜单
// function navMin() {
//     $("#mbtn").click(function(){
//         $(".navm").slideToggle(300);
// 		$('.header').slideToggle(100);
// 		$('.header_logo').slideToggle(100);
// 		$('.topWrap').slideToggle(100);

// 		// $('.nav-wrapper').slideToggle(100);
// 		// $('.searchWrap').slideToggle(100);
//     });
// };

//手机端下拉菜单
function navMin() {
    $("#mbtn").click(function(){
        $(".navm").toggle(300);
    });
};


// 二级页头部大图高度
// function SubImgHeight(){
	
//     var oSubbanner = document.getElementById('subbanner');
// 	$(window).resize(function(){
// 		 var iWSon = document.documentElement.clientWidth;
// 		if(iWSon>=1172){
//     	oSubbanner.style.height = 286+'px';
// 		}else if(iWSon<1172){
// 			oSubbanner.style.height = iWSon * (286/1172)+'px';
// 		}
	
// 		window.onscroll = window.onresize = function (){
// 			var iWSon = document.documentElement.clientWidth;
// 			if(iWSon>=1172){
// 				oSubbanner.style.height = 286+'px';
// 			}else if(iWSon<1172){
// 				oSubbanner.style.height = iWSon * (286/1172)+'px';
// 			}
// 		}
// 		})
// }

/*//字号大小
function ToMax(){
    var oArt = document.getElementById('art');
    var aEm = $('.rt01a_general em');

    aEm[0].onclick = aEm[3].onclick =function (){
    	oArt.style.fontSize = 'http://www.cup.edu.cn/js/gb2017/1.4em';
    }
    aEm[1].onclick = aEm[4].onclick =function (){
    	oArt.style.fontSize = 'http://www.cup.edu.cn/js/gb2017/1.6em';
    }
    aEm[2].onclick = aEm[5].onclick =function (){
    	oArt.style.fontSize = 'http://www.cup.edu.cn/js/gb2017/1.8em';
    }
}*/
//字号大小
function FontSize2(Size,obj){
    var iNum = 13;

    $(Size).find('.max').bind('click',function (){
        iNum+=2;
        if(iNum>=24){
            iNum = 24;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.mid').bind('click',function (){
        iNum = 13;
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.min').bind('click',function (){
        iNum-=2;
        if(iNum<=14){
            iNum = 12;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })
};

//大图切换高度问题
function ImgHeight(){
	// var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');

	 window.onload = function (){
		var iHeight = document.documentElement.clientWidth * (320/532);
		$('.slide_container,.rslides,.caption,.wz_caption').css('height',iHeight+'px');

		window.onscroll = window.onresize = function (){
			var iHeight = document.documentElement.clientWidth * (320/532);
			$('.slide_container,.rslides,.caption,.wz_caption').css('height',iHeight+'px');
		}
     }
}

//大图切换高度问题
// function ImgHeight(){
// 	 window.onload = function (){
// 		var iHeight = document.documentElement.clientWidth * (400/1920);
// 		$('.slides,.slides li,slides li img').css('height',iHeight+'px');

// 		window.onscroll = window.onresize = function (){
// 			var iHeight = document.documentElement.clientWidth * (400/1920);
// 			$('.slides,.slides li,slides li img').css('height',iHeight+'px');
// 		}
//      }
// }

//选项卡切换
function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
 }
}

function cover(){
	$('.story').click(function(){
		$(this).find('.item-info-overlay').toggle(500)
		})
	}
/*回到顶部*/
$(function(){
 	$(window).resize(function(){
					var h = $(window).height();
					$('.goTop').css('top',h-60);
					$(window).scroll(function(){				
						var scrollTop = $(document).scrollTop();					  
						$('.goTop').stop().animate({
							top: h + scrollTop-60
						},300);
					});
	}).resize();
	});
//gotop

		$('.goTop').click(function(){

			$('body,html').stop().animate({scrollTop:0});

			return false;

		});
		


function tab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd')
	 oLi.hover(function(e) {
		 var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
				thisLi.addClass('active');                            // 添加当前元素的样式
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   },600)
        });
	}

function pass(){
	$('.pass_title').click(function(){
		$(this).parent('li').children('.passToggle').slideToggle(300);
		$(this).parent('li').toggleClass('current')
		})
	}


/*动画效果*/
//$(function(){
//	sr.reveal('.logo',{origin:"left",distance:"40px",delay:"0",viewFactor:0.2});
//	sr.reveal('.top',{origin:"top",distance:"20px",delay:"400",viewFactor:0.2});
//	sr.reveal('.nav',{origin:"right",distance:"20px",delay:"600",viewFactor:0.2});
//	sr.reveal('.news',{origin:"left",distance:"30px",delay:"800",viewFactor:0.2});	
//	sr.reveal('.notice',{origin:"right",distance:"30px",delay:"1000",viewFactor:0.2},200);	
//	sr.reveal('.mode02',{origin:"right",distance:"80px",delay:"0",viewFactor:0.2},200);	
//	sr.reveal('.mode03 li',{origin:"left",distance:"40px",delay:"0",viewFactor:0.2});
//	sr.reveal('.mode04 .lf',{origin:"left",distance:"80px",delay:"200",viewFactor:0.2});
//	sr.reveal('.mode04 .md',{origin:"bottom",distance:"80px",delay:"400",viewFactor:0.2});
//	sr.reveal('.mode04 .rt',{origin:"right",distance:"80px",delay:"600",viewFactor:0.2});
//	sr.reveal('.footer ul li',{origin:"left",distance:"100px",delay:"600",viewFactor:0.2});	
//	sr.reveal('.footer_right',{origin:"bottom",distance:"80px",delay:"900",viewFactor:0.2});	
//	sr.reveal('footer .bottomBox',{origin:"bottom",distance:"20px",delay:"600",viewFactor:0.2});			
//});
