//组件不仅仅使用自己的状态，否则都不需要用redux
//写入操作  需要一个规则 怎么才可以写 dispath只是一个代号
export const storeChange=(state,action) =>{
    switch(action.type){
        case 'HEAD_COLOR':
          state.head.color = action.color
        break;
        case 'BODY_COLOR':
            state.body.color = action.color
        break;
        case 'BODY_TEXT':
            state.body.text = action.text
        break;
        default:
        break;
    }
}