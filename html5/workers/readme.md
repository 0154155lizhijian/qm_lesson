DOM 构建和渲染是主旋律， 快启动的图片们延迟加载，是另外旋律的多线程

js是单线程的
    web workers 可以启动一个跟主线程隔开的运行时
    图片的延迟加载，主线程是html ， 还有很多任务要抢主线程的，页面任务的排队。将图片的下载，放到单独的线程里去做
    再回到主线程。