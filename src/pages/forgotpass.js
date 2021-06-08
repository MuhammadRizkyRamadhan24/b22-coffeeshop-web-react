import React, { Component } from 'react'
import Footer from '../components/footer'
import {Link} from 'react-router-dom'

import '../styles/page-fp.css';

class Forgot extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="flex flex-col min-h-full">
                <div class="flex flex-col w-full justify-center items-center text-center fp-wrap">
                    <div class="text-5xl fp-font font-bold text-white">
                        Forgot your password?
                    </div>
                    <div class="text-xl fp-font font-medium text-white">
                        Don’t worry, we got your back!
                    </div>
                    <div class="flex flex-row my-20 h-32 fp-input justify-center items-center">
                        <input class="focus:outline-none rounded-2xl pl-6 h-20 m-10 fp-email-form" type="email" id="email" name="email" placeholder="Enter your email adress to get link"/>
                        <input class="focus:outline-none fp-email-btn w-44 h-20 m-10" type="submit" value="Login"/>
                    </div>
                    <div class="text-2xl fp-font width-3 font-medium text-white">
                        Click here if you didn’t receive any link in 2 minutes
                    </div>
                    <button class="focus:outline-none flex justify-center items-center fp-resend-btn w-96 h-24 my-4" type="submit">
                        <Link to='/login'>
                        Resend Link
                        </Link>    
                    </button>
                    <div class="text-2xl fp-font width-3 font-medium text-white">
                        01:23
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Forgot