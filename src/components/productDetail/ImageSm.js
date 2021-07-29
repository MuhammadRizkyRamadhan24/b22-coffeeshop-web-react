import React, { Component } from 'react';
import '../../styles/page-productDetail.css';

class ImageSm extends Component {
  render() {
    return (
      <>
        <img src={`http://localhost:8880/static/images/${this.props.image}`} alt="" className="rounded-full object-cover w-10 h-10 md:w-24 md:h-24" />
      </>
    );
  }
}

export default ImageSm;
