<template>
	<div class="title">
		<p>
			{{title}}
		</p>
		<p>
			{{subTitle}}
		</p>
	</div>
</template>
<script>
	export default{
		props:[
			'title',
			'subTitle'
		]
	}
</script>
<style>
	.title p{
		color: red;
	}
</style>