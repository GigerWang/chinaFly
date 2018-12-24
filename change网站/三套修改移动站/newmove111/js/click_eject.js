 $(function(){
                $(".test_bg_icon").click(function(){
                    $(".test_bg_icon").hide();
                    $(".test_bg_box").show();
                    $(".test_big_box").show();
                })
                $(".float_test_close").click(function(){
                    $(".test_bg_box").hide();
                    $(".test_big_box").hide();
                    $(".test_bg_icon").show();
                })
                $(".test_bg_box").click(function(){
                    $(".test_bg_box").hide();
                    $(".test_big_box").hide();
                    $(".test_bg_icon").show();
                })
            })
            var $test = $(".test_big_box").height();
            var $height = $(window).height();
            var $bottom = ($height-$test)/2;
            $(".test_big_box").css({"bottom":$bottom});