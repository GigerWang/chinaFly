const Koa = require ('koa')
const Router = require('koa-router');
const koaLog = require('./koa-logger')

const app = new Koa()
const router = new Router()

router.get('/',(ctx,next)=>{
	ctx.body = '孙悟空'
})
router.get('/zbj',(ctx,next)=>{
	ctx.body = '猪八戒'
})
app.use(koaLog)
app
  .use(router.routes())
  .use(router.allowedMethods());

//app.use(async(ctx,next)=>{
//	console.log(ctx)
//	ctx.body = '1'
//	if(ctx.request.url=='/'){
//		ctx.body = 'hahaha1'
//	}else if( ctx.request.url=='/111'){
//		ctx.body = 'hhhhhhh2'
//	}
////	await delay()
//	await next()
//	ctx.body +='2'
//})

//function delay(){
//	return new Promise((res,rej)=>{
//		setTimeout(()=>{
//			res()
//		},1000)
//	})
//}
//app.use(async(ctx,next)=>{
//	ctx.body += '3'
//	await next()
//	ctx.body += '4'
//})
//app.use(async(ctx,next)=>{
//	ctx.body += '5'
//	await next()
//	ctx.body +='6'
//})

//app.use(async(ctx,next)=>{
//	ctx.body = 'hello koa'
//})

app.listen(3000)
