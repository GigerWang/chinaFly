 // JavaScript Document
$(function () {
	
            var universityList = [
                
                {
                    name: '北京航空航天大学',
                    id: '北京航空航天大学'
                },
                {
                    name: '北京工商嘉华学院',
                    id: '北京工商嘉华学院'
                },
                {
                    name: '上海交通大学',
                    id: '上海交通大学'
                },
                {
                    name: '哈尔滨工程大学',
                    id: '哈尔滨工程大学'
                },
                {
                    name: '北京文理研修学院',
                    id: '北京文理研修学院'
                },
                {
                    name: '四川外国语大学',
                    id: '四川外国语大学'
                },
                {
                    name: '大连海事大学',
                    id: '大连海事大学'
                },
                {
                    name: '吉林大学',
                    id: '吉林大学'
                },
                {
                    name: '沈阳工业大学',
                    id: '沈阳工业大学'
                },
                {
                    name: '湖南商学院',
                    id: '湖南商学院'
                },
                {
                    name: '南昌大学',
                    id: '南昌大学'
                },
                {
                    name: '哈尔滨工业大学',
                    id: '哈尔滨工业大学'
                },
                {
                    name: '四川外国语大学成都学院',
                    id: '四川外国语大学成都学院'
                },
                {
                    name: '南昌航空大学',
                    id: '南昌航空大学'
                },
                {
                    name: '广东财经大学',
                    id: '广东财经大学'
                },
                {
                    name: '吉林大学珠海学院',
                    id: '吉林大学珠海学院'
                },
                {
                    name: ' 西安交通大学苏州研究院 ',
                    id: ' 西安交通大学苏州研究院 '
                },
                {
                    name: '浙江海洋大学',
                    id: '浙江海洋大学'
                },
                {
                    name: ' 哈尔滨工业大学威海校区',
                    id: ' 哈尔滨工业大学威海校区'
                },
                {
                    name: '河南师范大学',
                    id: '河南师范大学'
                },
                {
                    name: '贵州财经大学',
                    id: '贵州财经大学'
                },
                {
                    name: '哈尔滨工程大学青岛校区',
                    id: '哈尔滨工程大学青岛校区'
                },
                {
                    name: '鲁东大学',
                    id: '鲁东大学'
                },
                {
                	name: '其他院校',
                    id: '其他院校'
                }
            ];
            
            var professionList = [
                [
                    {
                        name: '国际飞行员',   /*文理*/
                        id: '国际飞行员'
                    },
                    {
                        name: '国际空乘',
                        id: '国际空乘'
                    },
                    {
                        name: '航空服务',
                        id: '航空服务'
                    },
                    {
                        name: '高铁乘务与管理',
                        id: '高铁乘务与管理'
                    },
                    {
                        name: '民航机务',
                        id: '民航机务'
                    },
                    {
                        name: '航空预科',
                        id: '航空预科'
                    },
                    {
                        name: '护理学院',
                        id: '护理学院'
                    }
                ],
                [
                    {
                        name: '国际航空服务',/*北航*/
                        id: '国际航空服务'
                    },
                    {
                        name: '航空服务',
                        id: '航空服务'
                    }
                ],
                [
                    {
                        name: '国际空乘',/*重庆新世纪*/
                        id: '国际空乘'
                    },
                    {
                        name: '民航服务与管理',
                        id: '民航服务与管理'
                    }
                ],
                [
                    {
                        name: '航空服务国际方向',/*中国传媒大学凤凰学院*/
                        id: '航空服务国际方向'
                    },
                    {
                        name: '航空服务国内方向',
                        id: '航空服务国内方向'
                    },
                    {
                        name: '影视表演',
                        id: '影视表演'
                    },
                    {
                        name: '平面艺术设计',
                        id: '平面艺术设计'
                    },
                    {
                        name: '环境艺术设计',
                        id: '环境艺术设计'
                    }
                ],
                [
                    {
                        name: '英语+航空服务方向',/*四川外国语大学*/
                        id: '英语+航空服务方向'
                    },
                    {
                        name: '韩语+航空服务方向',
                        id: '韩语+航空服务方向'
                    },
                    {
                        name: '日语+航空服务方向',
                        id: '日语+航空服务方向'
                    }
                ],
                [
                    {
                        name: '国际航空服务',/*哈尔滨工程大学*/
                        id: '国际航空服务'
                    },
                    {
                        name: '航空服务',
                        id: '航空服务'
                    },
                    {
                        name: '航空预科',
                        id: '航空预科'
                    }
                ],
                [
                    {
                        name: '精品班',/*上海交通大学*/
                        id: '精品班'
                    },
                    {
                        name: '国际航空服务',
                        id: '国际航空服务'
                    },
                    {
                        name: '航空服务',
                        id: '航空服务'
                    }
                ],
                [
                    {
                        name: '民航服务与管理',/*中国农业大学*/
                        id: '民航服务与管理'
                    }
                    
                ],
                [
                    {
                        name: '国际航空服务管理',/*中国人民大学苏州校区*/
                        id: '国际航空服务管理'
                    },
                    {
                        name: '航空服务与管理',
                        id: '航空服务与管理'
                    },
                    {
                        name: '平面艺术设计',
                        id: '平面艺术设计'
                    },
                    {
                        name: '影视动漫',
                        id: '影视动漫'
                    }
                ],
                [
                    {
                        name: '航空服务',/*江西师范大学*/
                        id: '航空服务'
                    },
                    {
                        name: '基础强化班',
                        id: '基础强化班'
                    }
                ],
                [
                    {
                        name: '民航服务与管理  （基础提高班）',/*柳州大学*/
                        id: '民航服务与管理  （基础提高班）'
                    },
                    {
                        name: '民航服务与管理',
                        id: '民航服务与管理'
                    }
                ],
                [
                    {
                        name: '英语（航空服务方向）',/*四川外国语大学成都学院*/
                        id: '英语（航空服务方向）'
                    },
                    {
                        name: '韩语（航空服务方向）',
                        id: '韩语（航空服务方向）'
                    },
                    {
                        name: '日语（航空服务方向）',
                        id: '日语（航空服务方向）'
                    },
                    {
                        name: '基础班',
                        id: '基础班'
                    }
                ],
                [
                    {
                        name: '英语（航空服务方向）',/*广西电力*/
                        id: '英语（航空服务方向）'
                    },
                    {
                        name: '韩语（航空服务方向）',
                        id: '韩语（航空服务方向）'
                    },
                    {
                        name: '日语（航空服务方向）',
                        id: '日语（航空服务方向）'
                    },
                    {
                        name: '基础班',
                        id: '基础班'
                    }
                ],
                [
                    {
                        name: '物流管理（航空服务）',/*昆明工业职业技术学院*/
                        id: '物流管理（航空服务）'
                    },
                    {
                        name: '机电设备维修与管理（民航服务管理）',
                        id: '机电设备维修与管理（民航服务管理）'
                    }
                ],
                [
                    {
                        name: '旅游管理（民航服务方向）',/*湖南现代物流职业技术学院*/
                        id: '旅游管理（民航服务方向）'
                    },
                    {
                        name: '航空服务方向',
                        id: '航空服务方向'
                    }
                ],
                [
                    {
                        name: '航空服务',/*吉大*/
                        id: '航空服务'
                    }
                ],
               [
                    {
                        name: '旅游管理（航空服务）',/*哈尔滨工业大学*/
                        id: '旅游管理（航空服务）'
                    }
                   
                ],
                [
                    {
                        name: '乘务员',/*大连海事*/
                        id: '乘务员'
                    },
                    {
                        name: '机场VIP服务员',
                        id: '机场VIP服务员'
                    },
                    {
                        name: '安检员',
                        id: '安检员'
                    },
                    {
                        name: '机场票务员',
                        id: '机场票务员'
                    },
                    {
                        name: '值机员',
                        id: '值机员'
                    },
                    {
                        name: '国际机场地勤',
                        id: '国际机场地勤'
                    },
                    {
                        name: '高铁动车乘务员',
                        id: '高铁动车乘务员'
                    }
                ],
                [
                    {
                        name: '乘务员',/*广财*/
                        id: '乘务员'
                    },
                    {
                        name: '机场VIP服务员',
                        id: '机场VIP服务员'
                    },
                    {
                        name: '安检员',
                        id: '安检员'
                    },
                    {
                        name: '机场票务员',
                        id: '机场票务员'
                    },
                    {
                        name: '值机员',
                        id: '值机员'
                    },
                    {
                        name: '国际机场地勤',
                        id: '国际机场地勤'
                    },
                    {
                        name: '高铁动车乘务员',
                        id: '高铁动车乘务员'
                    }
                ],
                [
                    {
                        name: '航空服务',/*黑龙江生态*/
                        id: '航空服务'
                    }
                ],
                [
                    {
                        name: '航空服务与管理',/*北京工商*/
                        id: '航空服务与管理'
                    },
                    {
                        name: '航空服务与管理基础班',
                        id: '航空服务与管理基础班'
                    }
                ],
                [
                    {
                        name: '航空服务',/*海南职业*/
                        id: '航空服务'
                    }
                ],
                [
                    {
                        name: '航空服务',/*吉林城市*/
                        id: '航空服务'
                    }
                ],
               [
                    {
                        name: '航空服务',/*湖南艺术*/
                        id: '航空服务'
                    },
                    {
                        name: '工',/*湖南艺术*/
                        id: '工'
                    },
                    {
                        name: '111',/*湖南艺术*/
                        id: '111'
                    }
                ]
            ];

            $("#select_l").html('');
            $("#select_l").append('<option>请选择</option>');
            $.each(universityList, function (i, v) {
                var obj = v;
                var opt = $("<option>").html(obj.name).val(obj.id);
                $("#select_l").append(opt);
            });

            $("#select_l").change(function (i, v) {

                $("#select_r").html('');
                $("#select_r").append('<option>请选择</option>');

                if (this.selectedIndex == 0) return;

                var subList = professionList[this.selectedIndex - 1];
                $.each(subList, function (i, v) {
                    var opt = $("<option>").html(v.name).val(v.id);
                    $("#select_r").append(opt)
                });
            });
            function school_name(school_n_box){
                $("."+school_n_box).html('');
                $("."+school_n_box).append('<option>请选择</option>');
                $.each(universityList, function (i, v) {  
                    var opt = $("<option>").html(v.name).val(v.id);
                    $("."+school_n_box).append(opt);
                });
            }
            school_name('n_school_name_box_1');
            school_name('n_school_name_box_2');
            school_name('n_school_name_box_3');
            school_name('n_school_name_box_4');
            school_name('n_school_name_box_5');
        })











