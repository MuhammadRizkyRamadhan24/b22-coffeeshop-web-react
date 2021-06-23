import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageXL from '../components/productDetail/image-xl'
import ImageSM from '../components/productDetail/image-sm'
import ButtonVariant from '../components/productDetail/button-variant'
import Swal from 'sweetalert2'

import { connect } from 'react-redux'

import { getDataById } from '../redux/actions/product'
import { addItems } from '../redux/actions/carts'

import '../styles/page-productDetail.css'

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            number: 0,
            item: [],
            button: true,
            hehe:''
        }
    }

    plusValue = () =>{
        if(this.state.number === this.props.product.detailData.quantity ){
          console.log(`Value Dont > ${this.props.product.detailData.quantity}`)
        } else {
            this.setState({
                number: this.state.number + 1
            })
            const item = {...this.state.item[0]}
            item.amount = this.state.number +1
            this.setState({
                item: [item],
                button: false
            })
        }
    }
  
    minusValue = () =>{
        if(this.state.number === 0 ){
            this.setState({
                button: true
            })
            console.log('Value Dont < 0')
        } else {
            this.setState({
                number: this.state.number - 1
            })
            const item = {...this.state.item[0]}
            item.amount = this.state.number - 1
            this.setState({
                item: [item]
            })
        }
    }

    setItem = (variant, price) => {
        const data = {
            id: this.props.product.detailData.id,
            name: this.props.product.detailData.name,
            image: this.props.product.detailData.image,
            variant: variant,
            end_price: price,
            additional_price: price - this.props.product.detailData.base_price,
            amount: 0
        }
        this.setState({
            item : [data],
            number: 0,
        })
    }

    addItems = (data) => {
        this.props.addItems(data)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success add to cart!',
            showConfirmButton: false,
            timer: 1500
        })
        this.props.history.push('/payment')
    }

    addToCarts = (data) => {
        this.props.addItems(data)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success add to cart!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    getDetailData = () => {
        const {token} = this.props.auth
        const id = this.props.match.params.id
        this.props.getDataById(id, token)
        this.setState({
            loading: false
        })

    }

    componentDidMount(){
        this.getDetailData()
    }
    
    render(){
        const bread = '>'
        // console.log(this.state.item.length);
        return(
            <div className="flex flex-col min-h-full">
                <Header history={this.props.history}/>
                <div className="flex flex-row w-full productDetail-wrap py-12 px-36">
                    <div className="flex flex-col w-2/6 items-center">
                        <div className="text-md font-normal productDetail-font-r brown text-left w-full mb-10">{this.props.location.state.status} {bread}<span className="font-bold"> {this.props.product.detailData.name}</span></div>
                        <div className="rounded-full mt-5 mb-10 w-72 h-72">
                            <ImageXL image={this.props.product.detailData.image}/>
                        </div>
                        
                        <p className="text-4xl productDetail-font-p font-bold text-center w-full">{this.props.product.detailData.name}</p>
                        <p className="text-2xl productDetail-font-p font-normal text-center w-full">IDR {this.props.product.detailData.base_price}</p>
                        <button onClick={() => this.addToCarts(this.state.item[0])} disabled={this.state.button} className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-brown text-white">Add to Cart</button>
                        <button className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow brown">Ask a Staff</button>
                    </div>
                    <div className="flex flex-col w-4/6 ml-10 mt-5">
                        <div className="flex flex-col w-full h-4/6 px-20 py-12 rounded-2xl bg-white">
                            <div className="text-xl productDetail-font-p productDetail-textDel brown">
                                {this.props.product.detailData.delivery}
                            </div>
                            <p className="text-xl productDetail-font-p productDetail-detailDel brown my-4">
                                {this.props.product.detailData.detail}
                            </p>
                            <div className="w-full text-center text-2xl my-6 productDetail-font-p font-bold">
                                Choose a size
                            </div>
                            <div className="flex flex-row w-full justify-center items-center">
                            {this.props.product.detailData.variants
                                ? this.props.product.detailData.variants.map((d, i) => (
                                    <ButtonVariant key={d.id} variant={d.variant} func={() => this.setItem(d.variant, d.price)}/>
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
                        
                        {this.state.item.length > 0 ?
                        this.state.item.map((d, i) => (
                            <div key={d.id} className="flex flex-row h-full w-full items-center">
                                <ImageSM image={d.image}/>
                                <div className="flex flex-col ml-5 w-72">
                                    <div className="text-xl productDetail-font-p font-extrabold">
                                        {d.name}
                                    </div>
                                    <div className="text-xl productDetail-font-p font-normal">
                                        ({d.amount}) {d.variant}
                                    </div>
                                    <div className="text-xl productDetail-font-p font-normal">
                                        IDR {d.end_price}
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
                        ))
                        :
                            <div className="flex w-full h-full text-xl productDetail-font-p font-bold justify-center items-center">
                                Please Select Variant!
                            </div>
                        }
                        
                    </div>
                    <button onClick={() => this.addItems(this.state.item[0])} disabled={this.state.button} className="flex justify-center items-center h-full w-1/6 text-xl font-bold productDetail-btn productDetail-font-p focus:outline-none productDetail-bg-yellow rounded-2xl shadow-md ml-5">
                        CHECKOUT
                    </button>
                </div>
                <Footer/>
            </div>
           
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    product: state.product,
    carts: state.carts
})

const mapDispatchToProps = {
    getDataById,
    addItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)