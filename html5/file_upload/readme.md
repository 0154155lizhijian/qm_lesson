- 实现文件的上传
1. type = "file"  传统自带的文件上传 不推荐使用

2. multiple可以一次上传多张图片

3. 利用
  const selectBtn = document.getElementById('selectbtn');
            selectBtn.addEventListener('click',function(){
                fileselect.click();
            })

可以实现对selectbtn的监听。实现原本的是上传文件功能。

4. 实现拖拽式上传
     fileselect.addEventListener('change',displayFileInfo,false);
