const Koa = require('koa');
const app = new Koa();  //后端应用
const router = require('koa-router')();

router.get('/api',(ctx)=>{
    const data = {
        'name':'唐唐',
        'age':18
    }
    ctx.body = JSON.stringify(data);
});

// koa 的实现是通过middlewares实现 compose
app.use(router.routes());
app.listen(3000);