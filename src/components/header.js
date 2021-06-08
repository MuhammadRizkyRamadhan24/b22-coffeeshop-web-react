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
                <div class="flex flex-row w-full h-wrap">
                    <a href="/product" class="flex flex-row w-2/6 justify-center items-center">
                        <img src={logo} alt="" class="h-logo"/>
                        <img src={textLogo} alt="" class="h-textLogo"/>
                    </a>
                    <div class="flex flex-row w-2/6 justify-center items-center">
                        <button onClick={this.goToHome} class="focus:outline-none h-sh text-sm">Home</button>
                        <button onClick={this.goToProduct} class="focus:outline-none h-sh text-sm">Product</button>
                        <button onClick={this.goToCart} class="focus:outline-none h-sh text-sm">Your Cart</button>
                        <button onClick={this.goToHistory} class="focus:outline-none h-sh text-sm">History</button>
                    </div>
                    <div class="flex flex-row w-2/6 justify-center items-center" >
                        <div class="flex rounded-full h-8 w-32 px-2 mr-3 h-ci p-1 text-md border-2 justify-center items-center">
                            <input
                                type='text'
                                name='search'
                                placeholder='Search'
                                className='w-full h-full focus:outline-none'
                            />
                            <FaSearch/>
                        </div>
                        <a href="#Message" class="flex justify-center items-center rounded-full h-8 w-8 mr-3 h-ci p-2 text-md">
                            <FaEnvelope />
                        </a>
                        <button onClick={this.goToProfile} class="flex justify-center items-center focus:outline-none rounded-full h-8 w-8 mr-3 f-bc-sm">
                            <img src={user} alt="" class="h-up-sm"/>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Header