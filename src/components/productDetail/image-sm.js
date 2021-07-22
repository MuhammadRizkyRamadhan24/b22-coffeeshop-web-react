import React, { Component } from 'react';
import '../../styles/page-productDetail.css';
// eslint-disable-next-line react/prefer-stateless-function
class Img extends Component {
  render() {
    return (
      <>
        <img src={`http://localhost:8880/static/images/${this.props.image}`} alt="" className="rounded-full w-24 h-24" />
      </>
    );
  }
}

export default Img;
