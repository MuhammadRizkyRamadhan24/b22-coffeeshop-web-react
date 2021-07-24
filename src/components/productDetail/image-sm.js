import React, { Component } from 'react';
import '../../styles/page-productDetail.css';
// eslint-disable-next-line react/prefer-stateless-function
class Img extends Component {
  render() {
    return (
      <>
        <img src={`http://localhost:8880/static/images/${this.props.image}`} alt="" className="rounded-full w-10 h-10 md:w-24 md:h-24" />
      </>
    );
  }
}

export default Img;
