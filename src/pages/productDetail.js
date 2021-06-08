import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageXL from '../components/productDetail/image-xl'
import ImageSM from '../components/productDetail/image-sm'
import ButtonVariant from '../components/productDetail/button-variant'

import '../styles/page-productDetail.css';

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        return(
            <div class="flex flex-col min-h-full">
                <Header/>
                <div class="flex flex-row w-full productDetail-wrap py-12 px-36">
                    <div class="flex flex-col w-2/6">
                        <div class="text-md font-normal productDetail-font-r brown text-left w-full mb-10">Favorite & Promo<span class="font-bold"> Cold Brew</span></div>
                        <ImageXL/>
                        <p class="text-4xl productDetail-font-p font-bold text-center w-full">COLD BREW</p>
                        <p class="text-2xl productDetail-font-p font-normal text-center w-full">IDR 30.000</p>
                        <a href="payDel.html" class="flex items-center justify-center rounded-2xl w-full h-16 mt-5 mb-3 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-brown text-white">Add to Cart</a>
                        <button class="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow brown">Ask a Staff</button>
                    </div>
                    <div class="flex flex-col w-4/6 ml-10 mt-5">
                        <div class="flex flex-col w-full h-4/6 px-20 py-12 rounded-2xl bg-white">
                            <div class="text-xl productDetail-font-p productDetail-textDel brown">
                                Delivery only on <span class="font-bold">Monday to friday at  1 - 7 pm</span>
                            </div>
                            <p class="text-xl productDetail-font-p productDetail-detailDel brown my-4">
                                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                            </p>
                            <div class="w-full text-center text-2xl my-6 productDetail-font-p font-bold">
                                Choose a size
                            </div>
                            <div class="flex flex-row w-full justify-center items-center">
                                <ButtonVariant variant="R"/>
                                <ButtonVariant variant="L"/>
                                <ButtonVariant variant="XL"/>
                            </div>
                        </div>
                        <div class="flex flex-col w-full h-2/6">
                            <div class="w-full text-center text-xl mt-6 productDetail-font-p font-bold">
                                Choose Delivery Methods
                            </div>
                            <div class="flex flex-row w-full justify-center items-center">
                            <button class="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Dine In</button>
                                <button class="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Door Delivery</button>
                                <button class="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Pick up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute w-full h-40 flex flex-row px-24 justify-center items-center" style={{top: "60rem"}}>
                    <div class="flex flex-row h-full w-3/6 bg-white rounded-2xl shadow-md mr-5 px-6 items-center">
                        <ImageSM/>
                        <div class="flex flex-col ml-5 w-72">
                            <div class="text-xl productDetail-font-p font-extrabold">
                                COLD BREW
                            </div>
                            <div class="text-xl productDetail-font-p font-normal">
                                x1 (Large)
                            </div>
                            <div class="text-xl productDetail-font-p font-normal">
                                x1 (Regular)
                            </div>
                        </div>
                        <div class="flex flex-row w-48">
                            <button class="rounded-full h-8 w-8 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">-</button>
                            <div class="text-xl productDetail-font-p font-extrabold px-8">
                                1
                            </div>
                            <button class="rounded-full h-8 w-8 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">+</button>
                        </div>
                    </div>
                    <button class="flex justify-center items-center h-full w-1/6 text-xl font-bold productDetail-btn productDetail-font-p focus:outline-none productDetail-bg-yellow rounded-2xl shadow-md ml-5">
                        CHECKOUT
                    </button>
                </div>
                <Footer/>
            </div>
           
        )
    }
}

export default ProductDetail