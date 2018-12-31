import React, { Component } from 'react';
// 在组件中static一定要传参
import Body from './component/Body/Body'
import Head from './component/Head/Head'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head></Head>
        <Body></Body>
      </div>
    );
  }
}

export default App;
