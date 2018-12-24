<template>
  <div class="box">
    <Swiper :images="images" />
    <div class="box_content">
    	<span>请选择您将要预约面试的学校：</span><br />
    	<picker @change="bindPickerChange" :value="index" :range="barray">
		    <view class="picker">
		    	{{barray[index]}}
		    </view>
		  </picker>
		  <span>请选择您将要预约面试的时间：</span><br />
    	<picker @change="bindPickerChange" :value="index" :range="barray">
		    <view class="picker">
		    	{{barray[index]}}
		    </view>
		  </picker>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";

export default {
  components: { Swiper },
  data() {
    return {
      images: [
        {
          url:"http://123.56.181.149/test_wg/1.png"
        },
        {
          url:"http://123.56.181.149/test_wg/2.png"
        },
        {
          url:"http://123.56.181.149/test_wg/3.png"
        },
        {
          url:"http://123.56.181.149/test_wg/4.png"
        },
      ],
      index:0,
      insexs:[0,0,0],
      barray: ['点击选择','哈工程', '哈工业', '华南理工', '星海音乐学院'],
      
      
      
      arrarr:
      	{
      		code:'0',
      		
      		dateof:[
      			{
      				month:'9月',
      				days:[
      					{
      						day:'10日',
      						duan:['6:00-9:00','9:00-12:00','12:00-3:00']
      					},
      					{
      						day:'11日',
      						duan:['6:00-9:00','9:00-12:00']
      					}
      				]
      			},
      			{
      				month:'9月',
      				days:[
      					{
      						day:'10日',
      						duan:['6:00-9:00','9:00-12:00','12:00-3:00']
      					},
      					{
      						day:'11日',
      						duan:['6:00-9:00','9:00-12:00']
      					}
      				]
      			}
      		]
      	}
    }
  },
  methods: {
	  bindPickerChange: function (e) {
	  	console.log(e);
	    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
	    this.index = e.mp.detail.value
	    console.log(this.arrarr.dateof[0].month)
		}
  },
  computed: {}
};
</script>

<style>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>
