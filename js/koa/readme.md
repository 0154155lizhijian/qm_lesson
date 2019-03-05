- 启动web server
HTTP Server 3000 伺服

用户 => request(n) 来请求  中间件的右边即 response(访问结束)

图片/css/js/text 都给他们构建url 静态资源服务

中间件是有顺序的， next
遇到response.body 退出循环