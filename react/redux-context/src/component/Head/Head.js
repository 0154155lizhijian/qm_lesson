import React, { Component } from 'react';
import {connect} from '../../redux';

class Head extends Component {

  render() {
    return (
      <div className="head">
        {this.props.head}
      </div>
    );
  }
}


export default connect(Head);