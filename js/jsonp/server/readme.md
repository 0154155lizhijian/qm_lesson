http://localhost:3000 web server
http://localhost:8080/data.json
http://localhost:8080/

跨域 A -> B 

A 8080 index.html -> B 3000 /api
同一个demain  但是因为port 不同，跨域js 同源(前端和后端 信任)机制 如果跨域请求，则不允许。

端口不一样都会跨域。在一家公司，因为提供的服务或部门或者项目不一样，需要使用跨域的能力来连调。

waimai.eleme.com 子域名
jiudian.eleme.com 酒店
同一个域名(一级，二级) 提供不同的服务
前端 8080(react client组件)  后端3000(server koa /api) ngnix
前后端分离来并行开发
