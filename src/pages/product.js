import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Coupon from '../components/product/coupon'
import Card from '../components/product/card'
import axios from 'axios';

import '../styles/page-ls.css';


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: true,
            status: ''
        }
    }

    getDataByFavorite = async() => {
        await axios({
            method: 'GET',
            url:'http://localhost:8880/category/4/items',
        })
        .then((response)=>{
            this.setState({
                data: response.data.results,
                loading: false,
                status: 'Favorite Product'
            });
        })
        .catch((error)=>{
            this.setState({
              data: [{id:1, message: "Not Find Data!", status: "error"}],
              loading: true
            });
        })
    }

    getDataByCoffee = async() => {
        await axios({
            method: 'GET',
            url:'http://localhost:8880/category/1/items',
        })
        .then((response)=>{
            this.setState({
                data: response.data.results,
                loading: false,
                status: 'Coffee'
            });
        })
        .catch((error)=>{
            this.setState({
              data: [{id:1, message: "Not Find Data!", status: "error"}],
              loading: true
            });
        })
    }

    getDataByNonCoffee = async() => {
        await axios({
            method: 'GET',
            url:'http://localhost:8880/category/2/items',
        })
        .then((response)=>{
            this.setState({
                data: response.data.results,
                loading: false,
                status: 'Non Coffee'
            });
        })
        .catch((error)=>{
            this.setState({
              data: [{id:1, message: "Not Find Data!", status: "error"}],
              loading: true
            });
        })
    }

    componentDidMount(){
        this.getDataByFavorite()
    }

    render(){
        return(
        <div className="flex flex-col min-h-full">
            <Header history={this.props.history}/>
            
            <div className="flex flex-row w-full h-auto">
                <div className="flex flex-col w-2/6 items-center py-10" style={{borderRight: '.1rem solid #9F9F9F'}}>
                    <div className="text-center product-title">
                        Promo for you
                    </div>
                    <div className="text-center product-paragraph w-64 pt-4 pb-4">
                        Coupons will be updated every weeks. Check them out! 
                    </div>
                    <Coupon />
                    <a className="product-card-btn w-60 pt-4 pb-4" href=" ">Apply coupon</a>
                    <div className="flex flex-col pt-24">
                        <div className="product-tc font-bold">
                            Terms and Condition
                        </div>
                        <div className="product-tc font-normal">
                            1. You can only apply 1 coupon per day
                        </div>
                        <div className="product-tc font-normal">
                            2. It only for dine in
                        </div> 
                        <div className="product-tc font-normal">
                            3. Buy 1 get 1 only for new user
                        </div>
                        <div className="product-tc font-normal">
                            4. Should make member card to apply coupon
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-4/6">
                    <div className="flex flex-row h-1/6 justify-center items-center mx-12">
                        <button onClick={this.getDataByFavorite} className="focus:outline-none flex-1 text-md text-center product-nav">Favorite Product</button>
                        <button onClick={this.getDataByCoffee} className="focus:outline-none flex-1 text-md text-center product-nav" >Coffee</button>
                        <button onClick={this.getDataByNonCoffee} className="focus:outline-none flex-1 text-md text-center product-nav" >Non Coffee</button>
                        <button className="focus:outline-none flex-1 text-md text-center product-nav" href=" ">Foods</button>
                        <button className="focus:outline-none flex-1 text-md text-center product-nav" href=" ">Add-on</button>
                    </div>
                    <div className="grid grid-cols-4 gap-3 h-5/6 px-12 mb-20">
                    {this.state.data
                        ? this.state.data.map((d, i) => (
                            <Card key={d.id} status={this.state.status} data={d}/>
                        ))
                    : "loading"}
                    </div>
                </div>

            </div>

            <Footer />

        </div>
        )
    }
}

export default Product