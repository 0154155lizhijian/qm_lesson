import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import Counter from './Counter';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';
import rootSaga from './sagas'

const sagaMiddleware=createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(reduxLogger,sagaMiddleware));
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})
// function AsyncIncrement(){    //方法不可取，不能在业务中对数据进行处理,违反了redux的原则
//     setTimeout(()=>{
//         action('INCREMENT_ASYNC')
//     },1000)
// }

function render(){
    ReactDOM.render(
    <Counter 
        value = {store.getState()}
        onIncrementAsync = {()=>action('INCREMENT_ASYNC')}
        onIncrement = {()=>action('INCREMENT')}
        onDecrement = {()=>action('DECREMENT')}
    />,document.getElementById('root'));
}
render();
store.subscribe(render)




