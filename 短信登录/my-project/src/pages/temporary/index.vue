<template>
	<div class="box">
		<div class="enter">
			<div class="enter_head">
				<div class="enter_head_con">请使用手机号登录</div>
				<div class="enter_head_bot"></div>
			</div>
			<div class="user">
				<input adjust-position='true' placeholder="请输入手机号" type="number" cursor="3" cursor-spacing="15" maxlength="11" placeholder-class="placeuse" v-model="model"/>
			</div>
			<div class="pass">
				<div class="pass_chl">
					<input adjust-position='true' placeholder="请输入6位验证码" type="number" cursor="3" cursor-spacing="15" maxlength="6" placeholder-class="placepass" v-model="model1" />
				</div>
				<div class="pass_chr">
					<span class="vali"  @click="getCode">{{count}}</span>
				</div>
			</div>
			<div class="notice" @click="tryhaha">
				{{notice}}
			</div>
			<div class="login" @click="ajaxtj">点击登录</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	haha:'我是变动的',
    	validation:'点击获取验证码',
		count: '点击获取验证码',
		timer: null,
		notice:'',
		model:'',
		model1:''
    }
  },
methods:{
	tryhaha(){
		wx.switchTab({
		  url: '../personal/main'
		})
		console.log(1111)
	},
   getCode(){
     const TIME_COUNT = 2;
     if (!this.timer && this.model.length==11 && (/^1[346578]\d{9}$/.test(this.model))) {
     	this.model1= '';
     	this.notice='';
       this.count = TIME_COUNT;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         clearInterval(this.timer);
         this.timer = null;
         this.count='点击再次获取验证码';
        }
       }, 1000)
      }else{
      	this.notice="请输入正确的手机号码格式"
      }
   },
   ajaxtj(){
   	this.notice='请您填写正确手机号进行登录'
   	console.log(this.model)
   	console.log(this.model.length)
   	 if(!(/^1[346578]\d{9}$/.test(this.model))){
   	 	console.log('true')	
   	 }
   }
 }
  }
</script>

<style>
.box{
	position: fixed;
	height: 100%;
	width: 100%;
	background: pink;
	background-image: url('http://123.56.181.149/test_wg/bj.jpg');
	background-size: cover;
	background-position: center;
	display:flex;
	flex-direction:column;
	align-items:center;/*垂直居中*/
	padding-top: 30%;
	/*justify-content: center;*//*水平居中*/
}
.enter{
	width: 600rpx;
	height: 500rpx;
	/*border: 1px solid #3399FF;*/
	background: #110e0b;
	display:flex;
	flex-direction:column;
	align-items:center;/*垂直居中*/
}
.enter_head{
	margin-top: 20rpx;
}
.enter_head_con{
	font-size: 32rpx;
	color: #ef770b;
	font-family: "微软雅黑";
	font-weight: 600;
	margin-bottom: 10rpx;
	letter-spacing: 2rpx;
}
.enter_head_bot{
	border-bottom: 3rpx solid #ef770b;
}

.enter input{
	height: 60rpx;
	line-height: 60rpx;
}
.pass{
	border: 1px solid #fff;
	border-radius: 10rpx;
	width: 500rpx;
	margin-top: 35rpx;
	background: #fff;
}
.pass>div{
	display: block;float: left;
	height: 60rpx;
}
.pass_chl{
	width: 300rpx;
	line-height: 60rpx;
	font-size: 28rpx;
	padding-left: 10rpx;
}
.pass_chr{
	width: 187rpx;
	font-size: 20rpx;
	line-height: 60rpx;
	text-align: center;
	border-left: 3rpx solid #cdcdcd;
}
.vali{
	color: #ef770b;
}
.placeuse{
	color: red;
}
.placepass{
	color: red;
}
.user{
	border: 1px solid #fff;
	border-radius: 10rpx;
	width: 490rpx;
	margin-top: 35rpx;
	line-height: 60rpx;
	font-size: 28rpx;
	padding-left: 10rpx;
	background: #fff;
}
.notice{
	color: red;
	font-size: 24rpx;
	margin-top: 20rpx;
}
.login{
	border-radius: 10rpx;
	width: 490rpx;
	margin-top: 20rpx;
	line-height: 60rpx;
	font-size: 28rpx;
	padding-left: 10rpx;
	background: #ef770b;
	text-align: center;
}
</style>
