import React, { Component } from 'react';
import './index.css';
import Header from './Header';

export default class Index extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Header users={this.props.users} registerActions = {this.props.registerActions}/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              category
            </div>
            <div className="main">
              main
            </div>
            <div className="sidebar">
              sidebar
            </div>
          </div>
        </div>
      </div>
    )
  }
} 
