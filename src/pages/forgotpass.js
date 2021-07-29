import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import '../styles/page-fp.css';

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="flex flex-col min-h-full">
        <div className="flex flex-col w-full justify-center items-center text-center fp-wrap">
          <div className="text-5xl fp-font font-bold text-white">
            Forgot your password?
          </div>
          <div className="text-xl fp-font font-medium text-white">
            Don’t worry, we got your back!
          </div>
          <div className="flex flex-row my-20 h-32 fp-input justify-center items-center">
            <input className="focus:outline-none rounded-2xl pl-6 h-20 m-10 fp-email-form" type="email" id="email" name="email" placeholder="Enter your email adress to get link" />
            <input className="focus:outline-none fp-email-btn w-44 h-20 m-10" type="submit" value="Login" />
          </div>
          <div className="text-2xl fp-font width-3 font-medium text-white">
            Click here if you didn’t receive any link in 2 minutes
          </div>
          <button className="focus:outline-none flex justify-center items-center fp-resend-btn w-96 h-24 my-4" type="submit">
            <Link to="/login">
              Resend Link
            </Link>
          </button>
          <div className="text-2xl fp-font width-3 font-medium text-white">
            01:23
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ForgotPass;
