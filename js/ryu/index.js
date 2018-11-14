// 命令？
// 1. 按键事件
// 不同按键做不同操作
// 2. 不同的player  JSON

//接口  Interface 英雄就可以替换使用 
const Ryu = {
    name:'Ryu',
    attack(){
        console.log(this.name+'攻击');
    },
    defense(){
        console.log(this.name+'防御');
    },
    crouch(){
        console.log(this.name+'蹲下'); 
    },
    jump(){
        console.log(this.name+'跳跃')
    }
}

const commands = {
    "119":"jump",
    "115":"crouch",
    "97":"defense",
    "100":"attack",
}

//回放功能，数据结构，栈,数组
const  commandStack = [];

const backBtn = document.getElementById('backBtn')
backBtn.addEventListener('click',function(){
    //此时有commandStack 操作的历史 makeCommand 返回了命令对象，命令时，要记起来命令对象
    var action;
    while(action = commandStack.shift()){
        action();
    }
},false)

const makeCommand = function(receiver,state){
    //命令对象生成者，按键对应的操作就出来了，即解耦
    //目的不是找到执行函数，而是找到对应的对象的想影动作函数，进行返回
    return function(){
        if(receiver[state]){
            receiver[state]();
        }
        
    }
}

document.onkeypress = function(ev){
    var keyCode = ev.keyCode;
    var command = makeCommand(Ryu,commands[keyCode]);
    if(command){
        commandStack.push(command);
        command();
    }
}