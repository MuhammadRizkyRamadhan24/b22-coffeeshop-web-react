import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import imgUser from '../assets/images/user.png'

import '../styles/page-profile.css';


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <div className="flex flex-col min-h-full">

            <Header history={this.props.history}/>
            
            <div class="flex flex-col w-full profile-wrap p-28 h-auto">
                <div class="profile-title py-4 h-1/6">User Profile</div>
                <div class="flex flex-row w-full h-2/6 mb-16">
                    <div class="flex flex-col w-4/12 bg-white py-4 mr-8 rounded-md profile-border justify-center items-center">
                        <img class="rounded-full w-36 h-36" src={imgUser} alt=" "/>
                        <a href="#ChangePhoto" class="flex justify-center items-center rounded-full h-8 w-8 mr-3 profile-bi profile-bi-p">
                            <i class="fa fa-pencil-alt p-2 text-md profile-i"></i>
                        </a>
                        <div class="text-xl profile-name">Zulaikha</div>
                        <div class="text-xs profile-email">zulaikha17@gmail.com</div>
                        <div class="text-base profile-email mt-6">Has been ordered 15 products</div>
                    </div>
                    <div class="flex flex-col w-8/12 bg-white py-4 px-8 rounded-md profile-border">
                        <div class="flex flex-row w-full h-1/6">
                            <div class="flex w-2/4 items-center justify-start profile-textContact text-2xl">Contacts</div>
                            <div class="flex w-2/4 items-center justify-end">
                                <button class="focus:outline-none flex justify-center items-center rounded-full profile-bi" type="submit">
                                    <i class="fa fa-pencil-alt p-3 text-lg profile-i"></i>
                                </button>
                            </div>
                        </div>
                        <form class="flex flex-col flex-wrap w-full py-8 h-5/6">
                            <label class="profile-label text-lg pr-2" for="email">Email adress:</label>
                            <input class="focus:outline-none profile-input" value="zulaikha17@gmail.com" type="email" id="email" name="email" placeholder="Enter your value"/>

                            <label class="profile-label text-lg pr-2" for="adress">Delivery adress:</label>
                            <input class="focus:outline-none profile-input" value="Iskandar Street no. 67 Block A Near Bus Stop" type="text" id="adress" name="adress" placeholder="Enter your value"/>

                            <label class="profile-label text-lg pr-2" for="p-number">Mobile number:</label>
                            <input class="focus:outline-none profile-input" value="(+62)813456782" type="text" id="p-number" name="p-number" placeholder="Enter your value"/>
                        </form>
                    </div>
                </div>
                <div class="flex flex-row w-full h-3/6 mb-16">
                    <div class="flex flex-col w-4/6 bg-white py-4 px-8 rounded-md profile-border">
                        <div class="flex flex-row w-full h-1/6">
                            <div class="flex w-2/4 items-center justify-start profile-textContact text-2xl">Details</div>
                            <div class="flex w-2/4 items-center justify-end">
                                <button class="focus:outline-none flex justify-center items-center rounded-full profile-bi" type="submit">
                                    <i class="fa fa-pencil-alt p-3 text-lg profile-i"></i>
                                </button>
                            </div>
                        </div>
                        <form class="flex flex-col flex-wrap w-full h-5/6">
                            <label class="profile-label text-lg pr-2 py-4" for="d-name">Display name:</label>
                            <input class="focus:outline-none profile-input" value="Zuaikha" type="text" id="d-name" name="d-name" placeholder="Enter your value"/>

                            <label class="profile-label text-lg pr-2 py-4" for="f-name">First name:</label>
                            <input class="focus:outline-none profile-input" value="Zulaikha" type="text" id="f-name" name="f-name" placeholder="Enter your value"/>

                            <label class="profile-label text-lg pr-2 py-4" for="l-name">Last name:</label>
                            <input class="focus:outline-none profile-input" value="Nirmala" type="text" id="l-name" name="l-name" placeholder="Enter your value"/>

                            <label class="profile-label text-lg pr-2 py-4" for="l-name">DD/MM/YY:</label>
                            <input class="focus:outline-none profile-input" value="1990-04-03" type="date" id="l-name" name="l-name" placeholder="Enter your value"/>

                            <label class="profile-rb text-lg pl-8 mb-4 mt-8">Male
                                <input type="radio" id="male" name="gender" value="male"/>
                                <span class="checkmark"></span>
                            </label>

                            <label class="profile-rb text-lg pl-8 my-4">Female
                                <input type="radio" id="female" name="gender" value="female"/>
                                <span class="checkmark"></span>
                            </label>
                        </form>
                    </div>
                    <div class="flex flex-col w-2/6 px-4">
                        <div class="flex justify-center items-center profile-title-2">Do you want to save the change?</div>
                        <button class="focus:outline-none my-4 shadow-md profile-button-b" type="submit">Save change</button>
                        <button class="focus:outline-none mt-1 mb-8 shadow-md profile-button-y">Cancel</button>
                        <button class="focus:outline-none my-4 shadow-md profile-button-w">Edit Password</button>
                        <button class="focus:outline-none mt-1 mb-4 shadow-md profile-button-w">Log out</button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
        )
    }
}

export default Profile