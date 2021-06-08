import React, { Component } from 'react'

import img from '../../assets/images/productdetail.png'

import '../../styles/page-productDetail.css'

class Img extends Component{
    render(){
        return(
            <>
                <img src={img} alt="" class="rounded-full w-24 h-24"/>
            </>
        )
    }
}

export default Img