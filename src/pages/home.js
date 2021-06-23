import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import image1 from '../assets/images/image1.png'

import { FaCheckCircle } from 'react-icons/fa'

import '../styles/home.css';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <div className="flex flex-col min-h-full">
            <Header history={this.props.history}/>
            
            <div className="flex flex-col w-full h-auto">
                <div className="flex flex-row w-full home-wrap-1 px-24 pt-4 pb-40">
                    <div className="flex flex-col w-4/6 justify-center">
                        <div className="text-5xl home-font font-bold text-white my-2">
                        Start Your Day with Coffee and Good Meals
                        </div>
                        <p className="text-lg home-font font-normal text-white my-2">
                        We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                        </p>
                        <button className="focus:outline-none font-bold home-button-y w-60 my-4 home-font">
                        Get Started
                        </button>

                    </div>
                    <div className="flex flex-col w-2/6">

                    </div>

                </div>

                <div className='flex flex-row w-full h-auto px-24 pt-40 pb-24'>
                    <img className='w-3/6' src={image1} alt=""/>
                    <div className='flex flex-col w-full ml-10 justify-center'>
                        <div className='home-font text-3xl font-medium my-2'>
                        We Provide Good Coffee and Healthy Meals
                        </div>
                        <p className='home-font text-normal font-normal my-2'>
                        You can explore the menu that we provide with fun and have their own taste and make your day better.
                        </p>
                        <p className='flex flex-row home-font text-sm font-normal mt-4 mb-2 items-center'>
                            <FaCheckCircle className='mr-2'/> High quality beans
                        </p>
                        <p className='flex flex-row home-font text-sm font-normal my-2 items-center'>
                            <FaCheckCircle className='mr-2'/> Healthy meals, you can request the ingredients
                        </p>
                        <p className='flex flex-row home-font text-sm font-normal my-2 items-center'>
                            <FaCheckCircle className='mr-2'/> Chat with our staff to get better experience for ordering
                        </p>
                        <p className='flex flex-row home-font text-sm font-normal my-2 items-center'>
                            <FaCheckCircle className='mr-2'/> Free member card with a minimum purchase of IDR 200.000.
                        </p>

                    </div>
                </div>

               
            </div>

            <Footer />

        </div>
        )
    }
}

export default Home