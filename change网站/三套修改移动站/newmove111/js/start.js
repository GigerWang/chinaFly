
$(function() {
//		星级评测
function stars(className, number) { //className表示评级的class标签名，number：显示星星数
var Ostars = $('.' + className);
for (var i = 0; i < number; i++) {
Ostars.children("li").eq(i).addClass("onStars");
}
};
//		第一个学校星级设定
stars('stars_1_1', 5);
stars('stars_1_2', 5);
stars('stars_1_3', 4);
stars('stars_1_4', 4);
//		第二个学校星级设定		
stars('stars_2_1', 2);
stars('stars_2_2', 1);
stars('stars_2_3', 4);
stars('stars_2_4', 5);
//		第三个学校星级设定		
stars('stars_3_1', 4);
stars('stars_3_2', 1);
stars('stars_3_3', 4);
stars('stars_3_4', 5);
//		第四个学校星级设定		
stars('stars_4_1', 5);
stars('stars_4_2', 1);
stars('stars_4_3', 4);
stars('stars_4_4', 5);
//		第五个学校星级设定		
stars('stars_5_1', 3);
stars('stars_5_2', 1);
stars('stars_5_3', 4);
stars('stars_5_4', 5);
//		第六个学校星级设定		
stars('stars_6_1', 4);
stars('stars_6_2', 1);
stars('stars_6_3', 4);
stars('stars_6_4', 5);
//		第七个学校星级设定		
stars('stars_7_1', 3);
stars('stars_7_2', 1);
stars('stars_7_3', 4);
stars('stars_7_4', 5);
//		第八个学校星级设定		
stars('stars_8_1', 5);
stars('stars_8_2', 1);
stars('stars_8_3', 4);
stars('stars_8_4', 5);
//		第九个学校星级设定		
stars('stars_9_1', 5);
stars('stars_9_2', 1);
stars('stars_9_3', 4);
stars('stars_9_4', 5);
//		第十个学校星级设定		
stars('stars_10_1', 4);
stars('stars_10_2', 1);
stars('stars_10_3', 4);
stars('stars_10_4', 5);
})
