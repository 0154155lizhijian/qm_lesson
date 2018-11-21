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

var _createClass = function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) {
             var descriptor = props[i]; 
             descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true;
             if ("value" in descriptor) descriptor.writable = true; 
             Object.defineProperty(target, descriptor.key, descriptor); 
            } 
        } 
        return function (Constructor, protoProps, staticProps) { 
            if (protoProps) defineProperties(Constructor.prototype, protoProps); 
            if (staticProps) defineProperties(Constructor, staticProps); 
            return Constructor; 
        }; 
    }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wumian = new Person('wumian');

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name; //改变了this的指向
        console.log(name);
    }

    _createClass(Person, [{
        key: "sayhello",
        value: function sayhello() {
            var output = "i am " + this.name;
            console.log(this);
            console.log(output);
        }
    }]);

    return Person;
}();

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
