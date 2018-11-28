import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
const heading = <h1 className="site-heading">Hello,WuMian</h1>;


class App extends Component {
    // jsx最终要编译成js的class 防止冲突
    render() {
        return (
            <div className="App container">
                <Table/> 
            </div>
        )

    }
}
ReactDOM.render(<App />,
    document.getElementById('root'));
