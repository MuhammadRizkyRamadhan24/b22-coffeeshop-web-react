import React, { Component } from 'react'
import imgCoupon from '../../assets/images/spageti.png'

import '../../styles/page-product.css';

class Coupon extends Component{
    render(){
        return(
            <>
            <div class="flex flex-row justify-center items-center pt-4 pb-4">
                <div class="flex flex-col h-96 w-56 rounded-2xl product-card-1 justify-center items-center">
                    <div class="flex flex-col justify-center items-center w-full h-4/6 p-6">
                        <img src={imgCoupon} alt="" class="rounded-full h-28 m-4"/>
                        <div class="text-center product-card-p">
                            Beff Spaghetti
                        </div>
                        <div class="text-center product-card-p">
                            20% OFF
                        </div>
                        <div class="text-center product-card-pd m-1">
                            Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center w-full h-2/6 border-t-2 border-black border-dashed">
                        <div class="text-center product-card-c">
                            COUPON CODE
                        </div>
                        <div class="text-center product-card-cc">
                            FNPR15RG
                        </div>
                        <div class="text-center product-card-cd">
                            Valid untill October 10th 2020
                        </div>
                    </div>
                </div>
                <div class="flex h-80 w-6 rounded-r-2xl product-card-2 justify-center items-center">
                </div>
                <div class="flex h-64 w-6 rounded-r-2xl product-card-3 justify-center items-center">
                </div>
            </div>
            </>
        )
    }
}

export default Coupon