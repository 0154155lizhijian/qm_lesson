import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class Header extends Component {
  static propTypes = {
    siteName: PropTypes.string
  }
  render() {
    return (
      <h1>
        {/* a将被完全接管， */}
        <div>
          <Link to="/">{this.props.siteName}</Link>
        </div>
        <div>
          <Link to="/beer">点我进详情页</Link>
        </div>

      </h1>
    )
  }
}
export default Header;
