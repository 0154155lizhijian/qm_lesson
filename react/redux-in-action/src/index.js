import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers } from 'redux';
import {Provider,connect} from 'react-redux';

// actionTypes 常量，声明动作类型
// 统一查看管理及修改
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

//state 的get 函数 可以对状态值进行返回或者追加修饰。state 就代表着状态树,因为有多个分支，就有多个reducer命名空间
const getVisibility = state => state.visible;
const getCounterValue = state => state.counter.value;

//初始化状态
const initialState = {
    visible:true,
    counter:{
        value:0
    }
}

//reducer部分 是combineReducer的分支 ,将应用的state设计模块化
const CounterReducer = function(state=initialState.counter,action){
    if(action.type ===ADD){
        return {value :state.value +1}
    }else if(action.type === SUBTRACT){
        return {value :state.value -1}
    }
    return state;
}
const visibilityReducer = (state=initialState.visible,action) => {
    if(action.type === CHANGE_VISIBILITY){
        return action.visible
    }
    return state;
}
const rootReducer = combineReducers({
    visible:visibilityReducer,
    counter:CounterReducer
})

//action动作函数
const add = () => ({type:ADD});
const subtract = () => ({type:SUBTRACT})
const changeVisibility = (visible) => ({
    type:CHANGE_VISIBILITY,
    visible
})

//创建仓库，传入reducer和初始值
const store = createStore(rootReducer,initialState)

// redux架构影响了组件的设计为 函数表现型组件，加connect设计了state和dispatch的高阶容器性组件
function Counter({value,add,subtract}){
    return(
        <div>
            <p>Value:{value}</p>
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
        </div>
    )
}
//redux 的核心是可以不管层级，向redux发出请求
const CounterConnected = connect( state => ({
    value:getCounterValue(state)
}),dispatch => ({
    add:()=> dispatch(add()),
    subtract:()=> dispatch(subtract()),
}))(Counter)

const Visibility = ({changeVisibility}) => (
    <div>
        <button onClick={()=>changeVisibility(true)}>Visible</button>
        <button onClick={()=>changeVisibility(false)}>Hidden</button>
    </div>
)
const VisibilityConnected = connect(null,dispatch=>({
    changeVisibility:value => dispatch(changeVisibility(value))
}))(Visibility);

const App = ({visible}) =>(
    <div>
        <VisibilityConnected/>
        {visible&&<CounterConnected />}
    </div>
)
//connet()高阶组件，在原有组件基础上，可以增加其他特性
const AppConnected = connect(
    state => ({
        visible:getVisibility(state)
    })
)(App);                     


ReactDOM.render(<Provider store={store}><AppConnected /></Provider>,document.getElementById('root'))