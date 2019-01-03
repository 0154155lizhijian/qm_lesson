// 1.context API 共享状态机制
// 2.Provider的能力
// 3.react-redux 基于context
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Provider} from './context';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <Provider value={{title:'React In Patterns'}}>
        <Header></Header>
      </Provider>
    )
  }
}

ReactDom.render(<App></App>,document.getElementById('root'))


