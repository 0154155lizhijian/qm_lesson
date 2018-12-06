import React,{Component} from 'react';
import Header from './compontents/Header';
import Search from './compontents/Search';
import Result from './compontents/Result'

class App extends Component{
  render(){
    return(
      <div className="wrapper">
        <Header siteName="首页!"/>
        <Search></Search>
        <Result></Result>
      </div>
    )
  }
}

export default App;
