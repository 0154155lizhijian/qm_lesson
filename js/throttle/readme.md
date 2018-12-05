Ajax Google Suggestion
猜出用户想要搜索的内容
用户边输入(input) 边做建议(ajax后端取返回list dom)
react onChange  则input
以前用户搜，只要向后端请求一次
频繁的被触发 减少触发次数 但不影响效果   //因此要用到节流
节流 在一段时间内只执行一次(500ms)
限制事件执行的方式 ：防抖和节流


使用lodash  _.throttle(fn,time);  进行节流

onmousemove ontouchmove 这样的操作会频繁触发多次，
throttle 在一定时间内只执行一次

1. 使用时间戳+闭包
2. 使用定时器setimeout
区别：实现的方式，体验的细节，第一次执行的方式不同，时间戳由于开始previous=0 now-previous>wait 会立即执行，先执行方式
setTimeout timeout null，是在wait 到点时执行   经过delay以后再执行，后执行的方式