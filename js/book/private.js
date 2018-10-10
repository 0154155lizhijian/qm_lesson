//isbn title author 
//public 有问题
//私有化
//立即执行函数
var Book =(function(){
    //闭包
    var numofBooks = 0;
    return function(newIsbn,newTitle,newAuthor){
        //局部作用域内的变量
        console.log(newIsbn,newTitle,newAuthor,numofBooks);
        var isbn,title,author
        var checkIsbn = function(isbn){
            if (isbn === undefined || typeof isbn !== 'string') {
               throw new Error ('isbn有误')
            }
            if (isbn.length != 10 && isbn.length !=3) {
                throw new Error('请输入正确的isbn')
            }
            return true;
        }
        this.setTitle = function(newTitle){
            title = newTitle 
        },
        this.getTitle = function(){
            return title;
        }
        this.setIsbn = function(newIsbn){
            console.log('fffffff',newIsbn);
            if (checkIsbn(newIsbn))
            isbn = newIsbn 
            
        },
        this.getIsbn = function(){
            return isbn;
        }
        this.setTitle(newTitle);
        this.setIsbn(newIsbn);
        numofBooks++;
        console.log(`创建了${numofBooks} 本书`)
        //constructor
    }
})();


Book.convertTotitleCase = function(inpuuString){
    return inpuuString.toUPPerCase();
},
Book.prototype = {
    display:function(){
        console.log(`这本书的作者是${this.getTitle}`);
    }
}

var book = new Book('123','飞鸟集','泰戈尔');
var books = new Book('124','HTML神级编程','聂鹏');
console.log(typeof Book);
console.log(book.getTitle())
console.log(book.getIsbn())
