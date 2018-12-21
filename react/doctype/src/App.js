import React, { Component } from 'react';
import './App.css';
import DocumentType from './DocumentType';

class App extends Component {
  state={
    tags:['草稿','关于','常见问题','组件开发','陈红的聚集地撒卡拉是可敬大声道'],
    selectedTags: []
  }
  render() {
    return (
      <div className="App">
        <DocumentType selectedTags={this.state.selectedTags} tags={this.state.tags} addTag = {this.addTag} 
        onChange={this.onChange} activeColor="#123"></DocumentType>
      </div>
    );
  }
  addTag=(tag)=>{
    const tags = this.state.tags;
    this.setState({
      tags:[...tags,tag]
    })
  }
  onChange=(tag)=>{
    const tags = this.state.selectedTags;
    if(tags.indexOf === -1){
      this.setState({
        selectedTags:[...tags,tag]
      })
    }
  }
  onClose = (index) => {
    console.log(index);
  }
}

export default App;
