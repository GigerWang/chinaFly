// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Todolist from './Todolist'

Vue.config.productionTip = false

/* eslint-disable no-new */


//new Vue({
//el: '#app',
//router,
//components: { App },
//template: '<App/>'
//})

new Vue({
	el:'#app',
	components:{
		Todolist:Todolist
	},
	template:'<Todolist />'
})

//	data:{
//		'title':'hello Vue ',
//		'subTitle':'vue react angular',
//		'showSub':true,
//		'mytodo':'',
//		'todos':[
//			{text:'吃饭',done:'false'},
//			{text:'睡觉',done:'false'},
//			{text:'写代码',done:'false'}
//		]
//	},
//	computed:{
//		remains(){
//		 return	this.todos.filter(s=>!s.done).length
//		}
//	},
//	methods:{
//		handleClick(){
////			console.log(this.mytodo)
//			this.showSub = false
//			this.title = '你好小程序'
//			this.todos.push({
//				text:this.mytodo,
//				done:false
//			})
//			this.mytodo = ''
//		},
//		toggle(i){
//			this.todos[i].done = !this.todos[i].done
//			console.log(this.todos.filter(s=>!s.done))
//		},
//		clean(){
//			this.todos = this.todos.filter(s=>!s.done)
//		}
//	}









//ES6


//let name = 'nihao';
//let name1 = 'wobuhao';
//console.log(name+'空格'+name1)
//console.log(`
//	${name}空格1${name1}	
//`)
//const double = (num,num1) => num*num1+2;
//console.log(double(10,2))
//const add = (num=1,num1=2) => num+num1;
//console.log(add(5,8))
//let arr= [10,11,112];
//console.log(add(...arr));
//console.log([1,2,3,4,...arr]);
//const key = 'job';
//const obj = {
//	num:1,
//	str:'nihao',
//	work: function(){}  ,
//	[key]: 'fe',
//	[key+'world']: 'fe',
//	[`world${key}`]:'fe'
//}
//
//obj[key] = 'fe';
//console.log(obj)
//console.log(obj.job)

//let arr =[1,2]
//let num1 = arr[0]
//let num2 = arr[1]
//
//let [a,b]=arr;
//console.log(`${a}kg${b}`)
//
//const obj1 = {aaa:'hahaha',bbb:'xixixi'}
//
//let {aaa,bbb} = obj1
//let{aaa:n,bbb:m} =obj1
//console.log(aaa)
//console.log(n)
//import {name} from './module1';
//console.log(name);
//import haha from './module1';
//haha();
