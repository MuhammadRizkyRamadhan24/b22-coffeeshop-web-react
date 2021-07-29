import React, { Component } from 'react';
import '../../styles/page-productDetail.css';

class ImageXl extends Component {
  render() {
    return (
      <>
        <img src={`http://localhost:8880/static/images/${this.props.image}`} alt="" className="rounded-full object-cover w-32 h-32 md:w-full md:h-full" />
      </>
    );
  }
}

export default ImageXl;
