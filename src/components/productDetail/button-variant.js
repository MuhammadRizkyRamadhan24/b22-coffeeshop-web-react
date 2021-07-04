/* eslint-disable */
import React, { Component } from 'react';

import '../../styles/page-productDetail.css';

class Button extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.func} className="rounded-full w-16 h-16 mt-5 mb-3 mx-3 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">{this.props.variant}</button>
      </>
    );
  }
}

export default Button;
