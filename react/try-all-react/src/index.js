import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class HelloUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'wumian',
            age:21
        }
        // this.handleChange = this.handleChange.bind(this);
        // setTimeout(() => {
        //     this.setState({
        //         username:'chenyuhan'
        //     })
        // }, 2000);
    }
    render(){
        return(
            <div>Hello {this.state.username} i am {this.state.age} years old<nav></nav>
            <input type="text" value={this.state.username} placeholder="小帅哥小美女快来玩啊" onChange={(e)=>{this.handleChange(e)}} />
            </div>
            
        )
        // return React.createElement(      //这是js的原生写法，很繁琐，无限递归
        //     'div',
        //     null,
        //     React.createElement(
        //         'h1',
        //         null,
        //         'hello,wumian!'
        //     )
        // )
        
    }
    
    handleChange(e){ 
        this.setState({
            username:e.target.value
        })
    }
}
ReactDOM.render(<HelloUser/>, document.getElementById('root'));

serviceWorker.unregister();
