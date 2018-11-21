"use strict";

// function _classCallCheck(instance, Constructor) { 
//     if (!(instance instanceof Constructor)) { 
//         throw new TypeError("Cannot call a class as a function"); 
//     } 
// }

// var Person = function Person(name) {
//     _classCallCheck(this, Person);
//     this.name = name; //改变了this的指向
//     console.log(name);
// }
// Person('wumian');
var wumian = new Person('wumian');
class Person{
    constructor(name){
        this.name = name   //改变了this的指向
        console.log(name)
    }
    sayhello(){
        let output = `i am ${this.name}`
        console.log(this)
        console.log(output)
    }
}

// const wumian = new Person('吴冕')
// wumian.sayhello()

// var Person = function () {
//     function Person(name) {
//         this.name = name; //改变了this的指向
//         console.log(name);
//     }

//     Person.prototype(
//         function sayhello() {
//             var output = 'i am ' + this.name;
//             console.log(this);
//             console.log(output);
//         }
//     );

//     return Person;
// }();

// var hanmeimmei = Person('hanmeimei');
// var lilei = new Person('lilei');
