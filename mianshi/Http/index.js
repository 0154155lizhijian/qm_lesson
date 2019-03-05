const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mime = require('mime');


function send404(res,pathname){
  res.writeHead(404,{"Content-Type":"text/plain"})
  res.end(`${pathname} is not found`)
}
// 静态资源目录
const Expire = {
  fileMatch:/(gif|png|jpg|js|css)$/ig,
  maxAge:60*60*24*365
}
const staticPath = '/public/';

const app = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  const extname = path.extname(req.url);
  const filePath = path.join(__dirname, staticPath, pathName);
  console.log(filePath);
  const isFile = fs.existsSync(filePath);

  if (!isFile) {
    send404(res, pathName);
    return
  }
  fs.readFile(filePath, 'binary', (err, file) => {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end(err);
      return
    }
    //缓存
    if(extname.match(Expire.fileMatch)){
      let expire = new Date();
      expire.setTime(expire.getTime())
    }
    
    let hashStr = fs.statSync(filePath).mtime.toUTCString()
    let hash = crypto.createHash('sha1')
    .update(hashStr)
    .digest('base64');
    

    res.writeHead(200, {"Content-Type": mime.getType(extname)});
    res.write(file, 'binary');
    res.end();
  })

})

app.listen(3000, () => {
  console.log('server is running');
})
