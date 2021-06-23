import React from 'react'

import '../../styles/page-product.css'

function nav (props){
    return (
        <button onClick={props.func} className="focus:outline-none flex-1 text-sm md:text-md text-center product-nav">{props.data.name_category}</button>
    );
}

export default nav;