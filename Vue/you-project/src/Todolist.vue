<template>
	<div>
		<div>
			<Title :title="title" :subTitle="subTitle"></Title>
		</div>
		<!--<p>
    		{{title}}
    	</p>
    	<p v-if="showSub">
    		{{ subTitle}}
    	</p>-->
    	<div>
    		<input @keyup.enter="handleClick" type="text" v-model="mytodo" />
    		<button @click="handleClick">添加</button>
    		<button @click="clean">清空</button>
    	</div>
    	<ul>
    		<li :class="{'done':todo.done}" @click="toggle(index)" v-for="(todo,index) in todos">{{index+1}}.{{todo.text}}</li>
    	</ul>
    	<p>{{remains}}/{{todos.length}}</p>
	</div>
</template>

<script>
	import Title from './Title'
	export default{
		components:{
			Title
		},
		data(){
		return {
				'title':'hello Vue ',
				'subTitle':'vue react angular',
				'showSub':true,
				'mytodo':'',
				'todos':[{text:'吃饭',done:'false'},
						{text:'睡觉',done:'false'},
						{text:'写代码',done:'false'}]
				}
		},
	computed:{
		remains(){
		 return	this.todos.filter(s=>!s.done).length
		}
	},
	methods:{
		handleClick(){
//			console.log(this.mytodo)
			this.showSub = false
			this.title = '你好小程序'
			this.todos.push({
				text:this.mytodo,
				done:false
			})
			this.mytodo = ''
		},
		toggle(i){
			this.todos[i].done = !this.todos[i].done
			console.log(this.todos.filter(s=>!s.done))
		},
		clean(){
			this.todos = this.todos.filter(s=>!s.done)
		}
	}
	}
</script>

<style>
	li.done{
		text-decoration: line-through;
		cursor: pointer;
		color: red;
	}	
</style>