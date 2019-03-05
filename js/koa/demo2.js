const Koa = require('koa');
const app = new Koa();
const staticServer = require('koa-static');
const path = require('path');


app.use(staticServer(path.join(__dirname)));
app.listen(3000);