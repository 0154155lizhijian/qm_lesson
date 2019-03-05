const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
const Router = require('koa-router')
var router = new Router()

// ctx上下文环境
const main = ctx => {
    // ctx.response.body = 'Hello World';
    // ctx.response.type = 'html';
    // //利用fs以流的方式读取文件作为body
    // ctx.response.body = fs.createReadStream('./template.html')
    // //web server 支持html 路由
    // if(ctx.request.path !== '/'){
    //     ctx.response.type = 'html';
    //     ctx.response.body = '<a href="/">Index Page</a>'
    // }else{
    //     ctx.response.body = 'Hello World';
    // }
    ctx.renponse.type = 'html';
    ctx.renponse.body = '<a href="/">Index Page</a>';
}
const about = ctx =>{
    ctx.renponse.type = 'html'
    ctx.renponse.body = 'hello wumian'
}
// template.html V  main C 
router
  .get('/', (ctx) => {
    ctx.response.body = 'Hello World';
  }).get('/about', (ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  })

app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
