/* eslint-disable */
import React, { Component } from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import Header from '../components/header';
import Footer from '../components/footer';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/1.png';
import image3 from '../assets/images/2.png';
import image4 from '../assets/images/3.png';
import image5 from '../assets/images/Global.png';
import image6 from '../assets/images/p1.png';
import image7 from '../assets/images/p2.png';
import image8 from '../assets/images/p3.png';

import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="flex flex-col min-h-full">
        <Header history={this.props.history} />

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
            <div className="flex flex-col w-2/6" />

          </div>

          <div className="flex flex-row w-full h-auto px-24 pt-40 pb-24">
            <img className="w-3/6" src={image1} alt="" />
            <div className="flex flex-col w-full ml-10 justify-center">
              <div className="home-font text-3xl font-medium my-2">
                We Provide Good Coffee and Healthy Meals
              </div>
              <p className="home-font text-normal font-normal my-2">
                You can explore the menu that we provide with fun and have their own taste and make your day better.
              </p>
              <p className="flex flex-row home-font text-sm font-normal mt-4 mb-2 items-center">
                <FaCheckCircle className="mr-2" />
                {' '}
                High quality beans
              </p>
              <p className="flex flex-row home-font text-sm font-normal my-2 items-center">
                <FaCheckCircle className="mr-2" />
                {' '}
                Healthy meals, you can request the ingredients
              </p>
              <p className="flex flex-row home-font text-sm font-normal my-2 items-center">
                <FaCheckCircle className="mr-2" />
                {' '}
                Chat with our staff to get better experience for ordering
              </p>
              <p className="flex flex-row home-font text-sm font-normal my-2 items-center">
                <FaCheckCircle className="mr-2" />
                {' '}
                Free member card with a minimum purchase of IDR 200.000.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center text-center home-wrap-2 p-24">
            <div className="flex flex-col justify-center items-center h-1/5 w-full">
              <h1 className="text-3xl font-bold history-font text-black">Here is People’s Favorite</h1>
              <p className="text-lg font-normal history-font text-black">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            </div>

            <div className="grid grid-cols-3 gap-4 h-4/5 w-full p-16">
              <div className="flex flex-col mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ height: '670px' }}>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <img src={image2} className="h-24 w-24 rounded-full object-cover shadow-xl" alt="" />
                  <h1 className="text-center font-semibold pt-14">Hazelnut Latte</h1>
                </div>
                <div className="flex flex-col h-64">
                  <ul className="text-sm text-left text-gray-500">
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Hazelnut Syrup
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Vanilla Whipped Cream
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Ice / Hot
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Sliced Banana On Top
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-20 mb-10 justify-center items-center">
                  <h1 className="font-semibold text-lg pb-3">IDR 25.000</h1>
                  <button className="focus:outline-none text-xs hover:bg-yellow-400 hover:text-white bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                </div>
              </div>

              <div className="flex flex-col mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ height: '670px' }}>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <img src={image3} className="h-24 w-24 rounded-full object-cover shadow-xl" alt="item" />
                  <h1 className="text-center font-semibold pt-14">Pinky Promise</h1>
                </div>
                <div className="flex flex-col h-64">
                  <ul className="text-sm text-left text-gray-500">
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      1 Shot of Coffee
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Vanilla Whipped Cream
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Chocolate Biscuits
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Strawberry Syrup
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Sliced strawberry on Top
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-20 mb-10 justify-center items-center">
                  <h1 className="font-semibold text-lg pb-3">IDR 30.000</h1>
                  <button className="focus:outline-none text-xs hover:bg-yellow-400 hover:text-white bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                </div>
              </div>

              <div className="flex flex-col mb-20 items-center bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ height: '670px' }}>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <img src={image4} className="h-24 w-24 rounded-full object-cover shadow-xl" alt="" />
                  <h1 className="text-center font-semibold pt-14">Chicken Wings</h1>
                </div>
                <div className="flex flex-col h-64  items-center">
                  <ul className="text-sm text-gray-500">
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Wings
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Drum Sticks
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Mayonaise and Lemon
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Hot Fried
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Secret Recipe
                    </li>
                    <li className="flex flex-row items-center py-1">
                      <FcCheckmark size={15} />
                      Buy 1 Get 1 only for Dine in
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-20 mb-10 justify-center items-center">
                  <h1 className="font-semibold text-lg pb-3">IDR 40.000</h1>
                  <button className="focus:outline-none hover:bg-yellow-400 hover:text-white text-xs bg-white border-yellow-400 border-2 rounded-full py-2 px-10 font-semibold text-yellow-900">Order Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center text-center home-wrap-2 p-40">
            <div className="flex flex-col justify-center items-center h-1/5 w-full">
              <h1 className="text-3xl w-96 font-bold history-font text-black">Visit Our Store in the Spot on the Map Below</h1>
              <p className="text-lg font-normal history-font text-black">See our store in every city on the spot and spen your good day there. See you soon!</p>
            </div>
            <img src={image5} className="flex w-full h-full pt-24" alt="" />
          </div>

          <div className="flex flex-col w-full justify-center items-center text-center home-wrap-2 px-20 py-40">
            <div className="flex flex-col justify-center items-center h-1/5 w-full">
              <h1 className="text-3xl w-96 font-bold history-font text-black">Loved by Thousands of Happy Customer</h1>
              <p className="text-lg font-normal history-font text-black">These are the stories of our customers who have visited us with great pleasure.</p>
            </div>
            <div className="grid grid-cols-3 h-4/5 w-full py-16">
              <div className="flex flex-col pt-3 px-6  bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '380px', height: '230px' }}>
                <div className="flex flex-row h-24 items-center">
                  <img src={image6} className="h-16 w-16 rounded-full object-cover" alt="" />
                  <div className="flex flex-col ml-5">
                    <h1 className="font-semibold">Viezh Robert</h1>
                    <h1 className="text-gray-500">Warsaw, Poland</h1>
                  </div>
                  <div className="flex flex-row items-center ml-16">
                    4.5
                    <FaStar className="pl-1" size={20} color="#FFBA33" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="text-sm">
                    <li>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col pt-3 px-6  bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '380px', height: '230px' }}>
                <div className="flex flex-row h-24 items-center">
                  <img src={image7} className="h-16 w-16 rounded-full object-cover" alt="" />
                  <div className="flex flex-col ml-5">
                    <h1 className="font-semibold">Viezh Robert</h1>
                    <h1 className="text-gray-500">Warsaw, Poland</h1>
                  </div>
                  <div className="flex flex-row items-center ml-16">
                    4.5
                    <FaStar className="pl-1" size={20} color="#FFBA33" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="text-sm">
                    <li>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col pt-3 px-6  bg-white border-gray-200 hover:border-yellow-900 border-2 rounded-lg" style={{ width: '380px', height: '230px' }}>
                <div className="flex flex-row h-24 items-center">
                  <img src={image8} className="h-16 w-16 rounded-full object-cover" alt="" />
                  <div className="flex flex-col ml-5">
                    <h1 className="font-semibold">Viezh Robert</h1>
                    <h1 className="text-gray-500">Warsaw, Poland</h1>
                  </div>
                  <div className="flex flex-row items-center ml-16">
                    4.5
                    <FaStar className="pl-1" size={20} color="#FFBA33" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <ul className="text-sm">
                    <li>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Home;
