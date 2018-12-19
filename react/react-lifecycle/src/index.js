import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            str:'Hello',
            name:'没有账号'
        }
        setTimeout(()=>{
            this.setState({
                str:'你好吗？吗好你'
            })
        },2000)
        // this.init();
    }
    componentWillMount(){
        console.log('compont will mount组件即将挂载');
    }
    componentDidMount(){
        console.log('组件已经挂载');
        // 此时 UI ready 最快看到外壳，接着再去取数据，不会阻塞界面
        fetch('https://api.github.com/users/shunwuyu')
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    name:data.name
                })
            })
    }
    componentWillUpdate(){
        console.log('组件要更新了')
    }
    componentDidUpdate(){
        console.log('组件更新了');
    }
    componentWillReceiveProps(){
        console.log('要接受props改变')   
    }
    shouldComponentUpdate(nextProps){
        if(nextProps === this.props){
            console.log(nextProps,this.props,'值未改变，不更新')
            return false;
        }
        return true;
    }
    componentWillUnmount(){
        console.log('我走了')
    }
    render(){
        return(
            <div>
                <div>{this.state.name}</div>
                <span>
                    <h2>{parseInt(this.props.num)}</h2>
                    <span>
                        <h2>
                            {this.state.str}
                        </h2>
                    </span>
                </span>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.setState({
                num:3
            })
        },5000)
        setTimeout(()=>{
            this.setState({
                showlifeCycle:false
            })  
        },10000)
    }
    state={
        num:2,
        showlifeCycle:true
    }
    render(){
        if(!this.state.showlifeCycle)
            return <div><h2>我走了，正如我轻轻的来，我挥一挥衣袖，不带走一片云彩</h2></div>
        return(
            <LifeCycle num={this.state.num}/>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
