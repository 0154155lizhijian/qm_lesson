// // var str = 'Visit Microsoft!';
// // console.log(str.replace('Microsoft','alibaba'));
// var money = '$dasdajshj$ahfadsa$'
// console.log(money.replace(/\$/g,'￥'));   // g表示全局匹配，一直匹配到结束   利用正则查找 /你想找的东西/   当为特殊字符时用反斜杠\进行转义


// let html = `abd{{username}}efg{{logo}}ccc`;
// let reg = /\{\{(.*?)\}\}/gm;  
// console.log(reg.test(html),RegExp.$1);


const html = `
    <view>
        <text>{{username}}</text>
    </view>
`;
let obj = {
    'username': '唐唐'
  };


function compile(html){
    // 匹配数据占位符
    if (/\{\{(.*)\}\}/.test(html)) {
        let key = RegExp.$1;
        html = html.replace(/\{\{(.*)\}\}/gm, obj[key]);
      }
      // test => $1 => key(username) => replace
      // {{.*}} => key的值 
      // 正则表达式
      // 找到key
      // replace  正则表达式 ，  变量的value 
      return html;
    

}
const compileHTML = compile(html);
console.log(compileHTML)
