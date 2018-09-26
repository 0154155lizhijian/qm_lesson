const gane = new Pharser.Game();

//Phraser  命名空间 JSON object
const Phraser = {};
Pharser.Game = function(w,h,type,ele,options){
    console.log('构造函数') ;
    this.width = w;
    this.height = h;
}

let zombiegame = new Pharser.Game(800,600);
console.log(zombiegame.width,zombiegame.height);

