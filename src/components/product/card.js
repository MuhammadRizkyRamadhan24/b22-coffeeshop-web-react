import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import imgCoupon from '../../assets/images/spageti.png'

import '../../styles/page-product.css'

class Card extends Component{
    render(){
        return(
            <>
            <Link class="flex flex-col shadow-xl h-60 w-40 text-center items-center justify-center m-2 rounded-t-full product-card p-2">
                <div class="flex justify-center">
                    <img class="h-24 w-24 rounded-full" src={imgCoupon} alt=""/>
                </div>
                <p class="font-bold text-xl product-f-p my-2">Veggie tomato mix</p>
                <p class="font-normal product-f-p">IDR 34.000</p>
            </Link>
            </>
        )
    }
}

export default Card