import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Coupon from '../components/product/coupon'
import Card from '../components/product/card'

import '../styles/page-ls.css';


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <div class="flex flex-col min-h-full">
            <Header history={this.props.history}/>
            
            <div class="flex flex-row w-full h-auto">
                <div class="flex flex-col w-2/6 items-center py-10" style={{borderRight: '.1rem solid #9F9F9F'}}>
                    <div class="text-center product-title">
                        Promo for you
                    </div>
                    <div class="text-center product-paragraph w-64 pt-4 pb-4">
                        Coupons will be updated every weeks. Check them out! 
                    </div>
                    <Coupon />
                    <a class="product-card-btn w-60 pt-4 pb-4" href=" ">Apply coupon</a>
                    <div class="flex flex-col pt-24">
                        <div class="product-tc font-bold">
                            Terms and Condition
                        </div>
                        <div class="product-tc font-normal">
                            1. You can only apply 1 coupon per day
                        </div>
                        <div class="product-tc font-normal">
                            2. It only for dine in
                        </div> 
                        <div class="product-tc font-normal">
                            3. Buy 1 get 1 only for new user
                        </div>
                        <div class="product-tc font-normal">
                            4. Should make member card to apply coupon
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-4/6">
                    <div class="flex flex-row h-1/6 justify-center items-center mx-12">
                        <a class="flex-1 text-md text-center product-nav active" href=" ">Favorite Product</a>
                        <a class="flex-1 text-md text-center product-nav" href=" ">Coffee</a>
                        <a class="flex-1 text-md text-center product-nav" href=" ">Non Coffee</a>
                        <a class="flex-1 text-md text-center product-nav" href=" ">Foods</a>
                        <a class="flex-1 text-md text-center product-nav" href=" ">Add-on</a>
                    </div>
                    <div class="grid grid-cols-4 gap-3 h-5/6 px-12 mb-20">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />  
                    </div>
                </div>

            </div>

            <Footer />

        </div>
        )
    }
}

export default Product