import React, { Component } from 'react'

import img from '../../assets/images/productdetail.png'

import '../../styles/page-productDetail.css'

class Img extends Component{
    render(){
        return(
            <>
                <img src={img} alt="" class="rounded-full mt-5 mb-10 w-full"/>
            </>
        )
    }
}

export default Img