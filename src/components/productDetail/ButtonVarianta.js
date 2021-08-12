import React, { Component } from 'react';
import '../../styles/page-productDetail.css';

class ButtonVariant extends Component {
  render() {
    return (
      <>
        <button type="button" onClick={this.props.func} className="rounded-full w-8 h-8 md:w-16 md:h-16 mt-5 mb-3 mx-3 font-bold text-sm md:text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">{this.props.variant}</button>
      </>
    );
  }
}

export default ButtonVariant;
