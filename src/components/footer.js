import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import textLogo from '../assets/images/textLogo.png'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import '../styles/footer.css';

class Footer extends Component{
    render(){
        return(
            <>
                <div class="flex flex-col md:flex-row w-full f-wrap">
                    <div class="flex flex-col w-full md:w-2/4 h-2/4 md:h-full px-32 pt-10 md:pt-48 pb-10">
                        <div class="flex flex-row">
                            <img src={logo} alt="" class="f-logo"/>
                            <img src={textLogo} alt="" class="f-textLogo"/>
                        </div>
                        <p class="w-24 md:w-96 f-p">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                        <div class="flex flex-row py-4 justify-start items-center">
                            <a href="http://facebook.com" class="flex justify-center items-center rounded-full p-2 text-md f-c-sm h-8 w-8 mr-3 f-bc-sm">
                                <FaFacebookF/>
                            </a>
                            <a href="http://twitter.com" class="flex justify-center items-center rounded-full p-2 text-md f-c-sm h-8 w-8 mr-3 f-bc-sm">
                                <FaTwitter />
                            </a>
                            <a href="http://instagram.com" class="flex justify-center items-center rounded-full p-2 text-md f-c-sm h-8 w-8 mr-3 f-bc-sm">
                                <FaInstagram />
                            </a>
                        </div>
                        <div class="f-text-cr w-24 md:w-96">©2020CoffeeStore</div>
                    </div>
                    <div class="flex flex-row flex-col w-full md:w-2/4 h-2/4 md:h-full px-32 pt-1 md:pt-48 pb-10">
                        <div class="flex flex-col w-2/4">
                            <div class="f-title-sf text-sm md:text-base">Product</div>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Download</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Pricing</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Locations</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Countries</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Blog</a>
                        </div>
                        <div class="flex flex-col w-2/4">
                            <div class="f-title-sf text-sm md:text-base">Engage</div>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Coffee Shop?</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">FAQ</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">About Us</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Privacy Policy</a>
                            <a href=" " class="f-content-sf text-xs md:text-sm">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer