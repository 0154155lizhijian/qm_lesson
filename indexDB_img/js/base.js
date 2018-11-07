(function () {
    // 前端数据库。新的html5 兼容性window
    const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.mozIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 2.0;
    let request = indexedDB.open("elephantFiles", dbVersion);
    const createObjectStore = function (database) {
        database.createObjectStore("elephants")
    };
    let db;
    const getImageFile = () => {
        // 图片？ 不在库里， 在根目录 => 将其存到库里
        const xhr = new XMLHttpRequest();
        let blob = null;
        xhr.open('GET', 'elephant.png', true);
        xhr.responseType = 'blob'; //相应的内容 内容格式 text/json text text/html
        xhr.addEventListener('load', function () {
            if (xhr.status == 200) {
                blob = xhr.response;
                console.log(blob);
                putElephantInDb(blob);
            }
        }, false);
        xhr.send();
    }

    const putElephantInDb = function (blob) {
        const readWriteMode = typeof IDBTransaction.READ_WRITE == 'undefined' ? 'readwrite' : IDBTransaction.READ_WRITE;
        //事务
        const transaction = db.transaction(["elephants"],readWriteMode);
        transaction.objectStore("elephants").put(blob,"image");
        transaction.objectStore("elephants").get("image")
        .onsuccess = function(event){
            const imgFile = event.target.result;
            //blob文件 img  src url 本地，blob://
            const URL = window.URL || window.webkitURL;
            const imgURL = URL.createObjectURL(imgFile);
            console.log(imgURL);
            document.getElementById('elephant').src = imgURL;
            document.getElementById('elephant').onload = function(){
                window.URL.revokeObjectURL(this.src);
            };
        }
    }
    request.onerror = function (event) {
        console.log('error creating/accessing IndexedDB database');
    }
    request.onsuccess = function () {
        db = request.result
        db.onerror = function (event) {
            console.log('error u not get the transaction')
        }
        getImageFile();
    }
    request.onupgradeneeded = function (event) {
        console.log(event.target.result)
        createObjectStore(event.target.result);
    }
})()












