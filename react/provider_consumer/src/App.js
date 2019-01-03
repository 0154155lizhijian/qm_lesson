import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux'
import {filmAction} from './actions'

class App extends Component {
    componentDidMount = () => {
      this.props.getFilmDate();
    }
    
  render() {
    return (
      <div>
         <ul>
        {
          this.props.films.map((film, index) => {
            return (
              <li key={index}>
                <h2>{film.name}</h2>
                <img src={film.poster} alt={film.name}/>
              </li>
            );
          })
        }
        </ul>
      </div>
    )
  }
}

//你要的数据，在中央state里面取出操作  mapStateToprops 数据管理
const mapStateToprops = (state) => {
    return{
        films:state.films
    }
}

//你要的方法，在中央里面取出disapth执行的操作， mapDispatchToprops 函数管理
const mapDispatchToprops = (dispatch) => {
    return {
        getFilmDate:()=>{
            dispatch(filmAction(dispatch));
        }
    }
} 

export default connect(mapStateToprops,mapDispatchToprops)(App)
