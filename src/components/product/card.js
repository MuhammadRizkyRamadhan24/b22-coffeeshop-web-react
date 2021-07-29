import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/page-product.css';

class Card extends Component {
  render() {
    return (
      <>
        <Link to={{ pathname: `/product/${this.props.data.id}`, state: { status: this.props.status } }} className="flex flex-col shadow-xl h-40 w-24 md:h-60 md:w-40 text-center items-center justify-center m-2 rounded-t-full product-card p-2">
          <div className="flex justify-center">
            <img className="h-20 w-20 object-cover md:h-28 md:w-28 rounded-full" src={`http://localhost:8880/static/images/${this.props.data.image}`} alt="" />
          </div>
          <p className="font-bold text-xs md:text-xl product-f-p my-2">{this.props.data.name}</p>
          <p className="font-normal text-sm product-f-p">
            IDR
            {' '}
            {this.props.data.price}
          </p>
        </Link>
      </>
    );
  }
}

export default Card;
