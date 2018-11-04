const common={
    //获得当前state页面，一遍确定绘制页面
    curState:()=>go.game.state.getCurrentState(),
    addBtn:({x,y,callback,context,text})=>{
      //console.log(x,y);
      const btn=common.curState().add.button(x,y,'btn',callback,context,0);
      const label=common.curState().make.text(btn.width/2,btn.heigt/2,text,{font:'40px',fill:"#ff5420"});
      label.anchor={x:0.5,y:-0.5};
      btn.addChild(label);
      return btn;
    },
  }
  module.exports=common;