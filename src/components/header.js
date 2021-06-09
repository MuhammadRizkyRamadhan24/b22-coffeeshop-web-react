import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import textLogo from '../assets/images/textLogo.png'
import user from '../assets/images/user.png'

import { FaSearch, FaEnvelope } from 'react-icons/fa'

import '../styles/header.css';

class Header extends Component{

    goToHome = () =>{
        this.props.history.push('/')
    }
    
    goToProduct = () =>{
        this.props.history.push('/product')
    }
    
    goToCart = () =>{
        this.props.history.push('/payment')
    }
    
    goToHistory = () =>{
        this.props.history.push('/history')
    }

    goToProfile = () =>{
        this.props.history.push('/profile')
    }

    render(){
        return(
            <>
                <div className="flex flex-row w-full h-wrap">
                    <a href="/product" className="flex flex-row w-1/6 md:w-2/6 justify-center items-center">
                        <img src={logo} alt="" className="h-logo"/>
                        <img src={textLogo} alt="" className="h-textLogo hidden md:block"/>
                    </a>
                    <div className="md:flex flex-row w-2/6 justify-center items-center hidden">
                        <button onClick={this.goToHome} className="focus:outline-none h-sh text-sm">Home</button>
                        <button onClick={this.goToProduct} className="focus:outline-none h-sh text-sm">Product</button>
                        <button onClick={this.goToCart} className="focus:outline-none h-sh text-sm">Your Cart</button>
                        <button onClick={this.goToHistory} className="focus:outline-none h-sh text-sm">History</button>
                    </div>
                    <div className="flex flex-row w-5/6 md:w-2/6 justify-center items-center" >
                        <div className="flex rounded-full h-8 w-72 md:w-32 px-2 mr-3 h-ci p-1 text-md border-2 justify-center items-center">
                            <input
                                type='text'
                                name='search'
                                placeholder='Search'
                                className='w-full h-full focus:outline-none'
                            />
                            <FaSearch/>
                        </div>
                        <a href="#Message" className="flex justify-center items-center rounded-full h-8 w-8 mr-3 h-ci p-2 text-md">
                            <FaEnvelope />
                        </a>
                        <button onClick={this.goToProfile} className="flex justify-center items-center focus:outline-none rounded-full h-6 w-6 md:h-8 md:w-8 mr-3 f-bc-sm">
                            <img src={user} alt="" className="h-up-sm"/>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Header