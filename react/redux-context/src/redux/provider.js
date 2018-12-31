import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {createStore,storeChange} from '../redux';

export class Provider extends Component{
     // 在这个属性里面的值，在内部 打破层次，拿到在顶级组件中的共享的状态
    static childContextTypes = {
        store:PropTypes.object,
        dispatch:PropTypes.func,
        subscribe:PropTypes.func,
        getStore:PropTypes.func
    }
    getChildContext(){
        const state = this.props.store;
        const {store,dispatch,subscribe,getStore} = createStore(state,storeChange);
        return{
            store,dispatch,subscribe,getStore
        }
    }
    render(){
        return(
            <div className='provider'> 
                {this.props.children}
            </div>
        )
    }
}
