import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageXL from '../components/productDetail/image-xl'
import ImageSM from '../components/productDetail/image-sm'
import ButtonVariant from '../components/productDetail/button-variant'
import axios from 'axios';
import {Link} from 'react-router-dom'

import '../styles/page-productDetail.css';

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            loading: true,
            number: 0
        }
    }

    plusValue = () =>{
        if(this.state.number === this.state.data.quantity ){
          console.log('Value Dont > 10')
        } else {
          this.setState({
            number: this.state.number + 1
          })
        }
    }
  
    minusValue = () =>{
        if(this.state.number === 0 ){
            console.log('Value Dont < 0')
        } else {
          this.setState({
            number: this.state.number - 1
          })
        }
    }

    getDetailData = async() => {
        await axios({
            method: 'GET',
            url:`http://localhost:8880/items/${this.props.match.params.id}`,
        })
        .then((response)=>{
            this.setState({
                data: response.data.results,
                loading: false
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
        this.getDetailData()
    }
    
    render(){
        return(
            <div className="flex flex-col min-h-full">
                <Header/>
                <div className="flex flex-row w-full productDetail-wrap py-12 px-36">
                    <div className="flex flex-col w-2/6 items-center">
                        <div className="text-md font-normal productDetail-font-r brown text-left w-full mb-10">Favorite & Promo<span className="font-bold"> {this.state.data.name}</span></div>
                        <div className="rounded-full mt-5 mb-10 w-72 h-72">
                            <ImageXL image={this.state.data.image}/>
                        </div>
                        
                        <p className="text-4xl productDetail-font-p font-bold text-center w-full">{this.state.data.name}</p>
                        <p className="text-2xl productDetail-font-p font-normal text-center w-full">IDR {this.state.data.base_price}</p>
                        <button className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-brown text-white">Add to Cart</button>
                        <button className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow brown">Ask a Staff</button>
                    </div>
                    <div className="flex flex-col w-4/6 ml-10 mt-5">
                        <div className="flex flex-col w-full h-4/6 px-20 py-12 rounded-2xl bg-white">
                            <div className="text-xl productDetail-font-p productDetail-textDel brown">
                                {this.state.data.delivery}
                            </div>
                            <p className="text-xl productDetail-font-p productDetail-detailDel brown my-4">
                                {this.state.data.detail}
                            </p>
                            <div className="w-full text-center text-2xl my-6 productDetail-font-p font-bold">
                                Choose a size
                            </div>
                            <div className="flex flex-row w-full justify-center items-center">
                            {this.state.data.variants
                                ? this.state.data.variants.map((d, i) => (
                                    <ButtonVariant key={d.id} variant={d.variant}/>
                                ))
                            : "loading"}
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-2/6">
                            <div className="w-full text-center text-xl mt-6 productDetail-font-p font-bold">
                                Choose Delivery Methods
                            </div>
                            <div className="flex flex-row w-full justify-center items-center">
                            <button className="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Dine In</button>
                                <button className="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Door Delivery</button>
                                <button className="rounded-2xl w-40 h-16 mt-5 mb-3 mx-3 text-lg productDetail-btn focus:outline-none bg-white target">Pick up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-40 flex flex-row px-24 justify-center items-center" style={{top: "60rem"}}>
                    <div className="flex flex-row h-full w-3/6 bg-white rounded-2xl shadow-md mr-5 px-6 items-center">
                        <ImageSM image={this.state.data.image}/>
                        <div className="flex flex-col ml-5 w-72">
                            <div className="text-xl productDetail-font-p font-extrabold">
                                {this.state.data.name}
                            </div>
                            <div className="text-xl productDetail-font-p font-normal">
                                x1 (Large)
                            </div>
                            <div className="text-xl productDetail-font-p font-normal">
                                x1 (Regular)
                            </div>
                        </div>
                        <div className="flex flex-row w-48">
                            <button onClick={this.minusValue} className="rounded-full h-8 w-8 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">-</button>
                            <div className="text-xl productDetail-font-p font-extrabold px-8">
                                {this.state.number}
                            </div>
                            <button onClick={this.plusValue} className="rounded-full h-8 w-8 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">+</button>
                        </div>
                    </div>
                    <button className="flex justify-center items-center h-full w-1/6 text-xl font-bold productDetail-btn productDetail-font-p focus:outline-none productDetail-bg-yellow rounded-2xl shadow-md ml-5">
                        <Link to='/payment'>
                        CHECKOUT
                        </Link>
                    </button>
                </div>
                <Footer/>
            </div>
           
        )
    }
}

export default ProductDetail