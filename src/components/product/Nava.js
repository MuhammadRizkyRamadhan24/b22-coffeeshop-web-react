import React from 'react';
import '../../styles/page-product.css';

function Nav(props) {
  return (
    <button type="button" onClick={props.func} className="focus:outline-none flex-1 text-sm md:text-md text-center product-nav">{props.data.name_category}</button>
  );
}

export default Nav;
