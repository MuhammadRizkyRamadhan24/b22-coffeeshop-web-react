import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import img from '../assets/images/pd-item.png'

import '../styles/page-payDel.css';


class Payment extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <div className="flex flex-col min-h-full">
            <Header history={this.props.history}/>
            
            <div className="flex flex-row w-full pd-wrap py-12 px-28">
                <div className="flex flex-col w-3/6 h-full">
                    <div className="text-left text-4xl w-72 text-white pd-title mb-10">Checkout your item now!</div>
                    <div className="flex flex-col bg-white rounded-3xl h-full justify-center items-center px-10">
                        <div className="text-center text-3xl pd-title-detail pb-8">Order summary</div>
                        <div className="flex flex-col">
                            <div className="flex flex-row my-4 text-xl justify-center items-center">
                                <img className="rounded-lg pr-4" src={img} alt=""/>
                                <div className="flex flex-col pr-4 pd-text-iDetail">
                                  <p>Hazelnut latte</p>
                                  <p>x1</p>
                                  <p>Regular</p>
                                </div>
                                <div className="flex justify-end items-center text-center pd-text-iDetail">
                                  <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div className="flex flex-row my-4 text-xl justify-center items-center">
                                <img className="rounded-lg pr-4" src={img} alt=""/>
                                <div className="flex flex-col pr-4 pd-text-iDetail">
                                  <p>Hazelnut latte</p>
                                  <p>x1</p>
                                  <p>Regular</p>
                                </div>
                                <div className="flex justify-end items-center text-center pd-text-iDetail">
                                  <p>IDR 24.0</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-10">
                                <div className="flex flex-col w-3/6">
                                    <p className="text-xl pd-text-iDetail">SUBTOTAL</p>
                                    <p className="text-xl pd-text-iDetail">TAX & FEES</p>
                                    <p className="text-xl pd-text-iDetail">SHIPPING</p>
                                </div>
                                <div className="flex flex-col w-3/6 items-end">
                                    <p className="text-xl pd-text-iDetail">IDR 120.000</p>
                                    <p className="text-xl pd-text-iDetail">IDR 20.000</p>
                                    <p className="text-xl pd-text-iDetail">IDR 10.000</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col w-3/6">
                                    <p className="text-2xl font-medium pd-text-iDetail">SUBTOTAL</p>
                                </div>
                                <div className="flex flex-col w-3/6 items-end">
                                    <p className="text-2xl font-medium pd-text-iDetail">IDR 120.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col w-3/6 h-full pt-32 pl-5">
                    <div className="flex flex-row w-full h-10 items-center">
                        <div className="text-xl pd-title text-white w-5/6">Address details</div>
                        <a href=" " className="text-lg pd-title text-white w-1/6">edit</a>
                    </div>
                    <div className="flex flex-col bg-white rounded-3xl w-full h-52 justify-center p-10">
                        <div className="pd-text-iDetail text-xl py-2 border-b-2"><span className="font-bold">Delivery </span>to Iskandar Street</div>
                        <div className="pd-text-iDetail text-xl py-2 border-b-2">Km 5 refinery road oppsite re public road, effurun, Jakarta</div>
                        <div className="pd-text-iDetail text-xl py-2">+62 81348287878</div>
                    </div>
                    <div className="flex items-center text-xl pd-title text-white w-full h-20 pt-10">Payment method</div>
                    <div className="flex flex-col bg-white rounded-3xl w-full h-52 pl-10 justify-center">
                        <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium"><i className="fas fa-credit-card pr-2"></i>Card
                            <input type="radio" id="card" name="payment" value="card"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium"><i className="fas fa-university pr-2"></i>Bank account
                            <input type="radio" id="bank-account" name="payment" value="bank-account"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium"><i className="fas fa-truck pr-2"></i>Cash on delivery
                            <input type="radio" id="cod" name="payment" value="cod"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <a className="shadow-md text-lg rounded-3xl pd-btn mt-10 w-full h-16" href=" ">Confirm and Pay</a>

                </div>
            </div>

            <Footer />

        </div>
        )
    }
}

export default Payment