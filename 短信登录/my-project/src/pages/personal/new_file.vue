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
    	<picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
		    <view class="picker">
		    	{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
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
      barray: ['点击选择','哈工程', '哈工业', '华南理工', '星海音乐学院'],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      multiIndex: [0, 0, 0],
    }
  },
  methods: {
	  bindPickerChange: function (e) {
	  	console.log(e);
	    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
	    this.index = e.mp.detail.value
		},
		
	  bindMultiPickerChange: function (e) {
	  	console.log(e)
	    console.log('picker发送选择改变，携带值为', e.mp.detail.value)
	    this.multiIndex = e.mp.detail.value
  	},
  	bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.mp.detail.column, '，值为', e.mp.detail.value);
    var data = {
      multiArray: this.multiArray,
      multiIndex: this.multiIndex
    };
    data.multiIndex[e.mp.detail.column] = e.mp.detail.value;
    switch (e.mp.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
		console.log(this.multiArray)
		console.log(data.multiArray)
    console.log(this.multiArray==data.multiArray==[['无脊柱动物', '脊柱动物'], ['鱼', '两栖动物', '爬行动物'], ['鲫鱼', '带鱼']])
    this.multiArray=data.multiArray
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
