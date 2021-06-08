import React, { Component } from 'react'
import Background from '../components/ls/background-ls'
import Logo from '../components/ls/logo-ls'
import ButtonMini from '../components/ls/button-mini-ls'
import Form from '../components/ls/form-ls'
import ButtonForm from '../components/ls/button-form-ls'
import Footer from '../components/footer'
import {FaGoogle} from 'react-icons/fa'

import '../styles/page-ls.css';

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    // handleLogin = (event) => {
    //     event.preventDefault();
    //     const data = {
    //         username: this.state.username,
    //         password: this.state.password
    //     };
    //     this.props.login(data).then(() => {
    //         this.props.history.push('/');
    //     }).catch((error)=>{
            
    //     });
    // }

    // goToRegister = () =>{
    //     this.props.history.push('/register')
    // }

    // goToHome = () =>{
    //     document.location.href='/';
    // }

    render(){
        return(
            <div className="flex flex-col ls-wrap">
                <div className="flex flex-col md:flex-row w-full ls-hw">
                    <div className="w-full md:w-2/4 h-full">
                        <Background/>
                    </div>
                    <div className="flex flex-col w-full md:w-2/4 h-full">
                        <div className="flex flex-row h-28 w-full">
                            <div className="flex flex-row w-2/4 h-full items-center justify-start">
                                <Logo/>
                            </div>
                            <div className="flex flex-row w-2/4 h-full items-center justify-end">
                                <ButtonMini page="Login" definition="login" history={this.props.history}/>
                            </div>

                        </div>
                        <div className="flex flex-col h-auto w-full items-center justify-center px-10 md:px-32">
                            <div className="ls-titleForm">Sign Up</div>
                            <form className="w-full text-lg md:text-2xl ls-form">
                                <Form for="email" type="email" id="email" name="email" placeholder="Enter your email adress" label="Email Adress:"/>
                                <Form for="password" type="password" id="password" name="password" placeholder="Enter your password" label="Password:"/>
                                <Form for="text" type="text" id="phonenumber" name="phonenumber" placeholder="Enter your number" label="Phone Number:"/>

                                <ButtonForm page="Sign Up" definition="login" history={this.props.history}/>
                            </form>
                            <a className="flex justify-center items-center shadow-md ls-button-g" href="http://google.com"><FaGoogle className="pr-1"/>Sign Up with Google</a>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-52 flex px-10 md:px-32 justify-center items-center top-1/4 md:top-full" >
                    <div className="flex flex-col md:flex-row items-center rounded-2xl bg-white shadow-xl w-full h-full">
                        <div className="flex flex-col w-full md:w-4/6 h-full px-14 py-11 md:px-14 md:py-12">
                            <p className="text-xl md:text-4xl w-48 md:w-80 ls-font-r font-bold py-2">Get your member card now!</p>
                            <p className="text-md ls-font-r py-2">Let's join with our member and enjoy the deals.</p>
                        </div>
                        <div className="flex flex-col w-full md:w-2/6 h-full md:h-2/6 px-14 py-12 justify-center items-center">
                            <a className="my4 shadow-md ls-button" href=" ">Create Now </a>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        )
    }
}

export default Signup