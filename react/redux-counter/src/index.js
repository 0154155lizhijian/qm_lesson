import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './reducers/index';
import Counter from './components/Counter'


//单独管理状态的地方,  状态和UI统一，状态计算器 reducer
const store = createStore(counter,composeWithDevTools());
const rootEl = document.getElementById('root')
const render = () => 
    ReactDOM.render((<Counter value={store.getState()} onIncrement={()=>{
        store.dispatch({
            type: 'INCREMENT'
        });
    }} onDecrement={()=>{
        return store.dispatch({
            type:'DECREMENT'
        })
    }}
    />), rootEl);
render();
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
