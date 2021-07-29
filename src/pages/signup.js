import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';
import Background from '../components/ls/BackgroundLs';
import Logo from '../components/ls/LogoLs';
import ButtonMini from '../components/ls/ButtonMiniLs';
import Form from '../components/ls/FormLs';
import ButtonForm from '../components/ls/ButtonFormLs';
import Footer from '../components/Footer';
import '../styles/page-ls.css';
import { authRegister } from '../redux/actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone_number: '',
      password: ''
    };
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

  onRegister = (e) => {
    e.preventDefault();
    const { email, phone_number, password } = this.state;
    this.props.authRegister(email, phone_number, password)
      .then(() => {
        console.log(this.props.auth.errMsg);
        if (this.props.auth.msg === 'Register Successfully') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success Create Account!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.props.history.push('/login');
        }
      });
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  changePhoneNumber = (e) => {
    this.setState({
      phone_number: e.target.value
    });
  }

  // componentDidUpdate(){
  //     const {msg} = this.props.auth
  //     if(msg !== ''){
  //         this.props.history.push('/login')
  //     }
  // }

  render() {
    const { errMsg } = this.props.auth;
    return (
      <div className="flex flex-col ls-wrap">
        <div className="flex flex-col md:flex-row w-full ls-hw">
          <div className="hidden md:flex w-full md:w-2/4 h-full">
            <Background />
          </div>
          <div className="flex flex-col w-full md:w-2/4 h-full">
            <div className="flex flex-row h-28 w-full">
              <div className="flex flex-row w-2/4 h-full items-center justify-start">
                <Logo />
              </div>
              <div className="flex flex-row w-2/4 h-full items-center justify-end">
                <ButtonMini page="Login" definition="login" history={this.props.history} />
              </div>

            </div>
            <div className="flex flex-col h-auto w-full items-center justify-center px-10 md:px-32">
              <div className="ls-titleForm">Sign Up</div>
              {errMsg !== '' && <div className="bg-red-300 text-red-600 font-bold w-full px-5 py-5 m-2 rounded-full">{errMsg}</div>}
              <form onSubmit={this.onRegister} className="w-full text-lg md:text-2xl ls-form">
                <Form type="email" id="email" name="email" placeholder="Enter your email adress" value={this.state.email} func={this.changeEmail} label="Email Adress:" />
                <Form type="password" id="password" name="password" placeholder="Enter your password" value={this.state.password} func={this.changePassword} label="Password:" />
                <Form type="text" id="phonenumber" name="phonenumber" placeholder="Enter your number" value={this.state.phone_number} func={this.changePhoneNumber} label="Phone Number:" />

                <ButtonForm page="Sign Up" />
              </form>
              <a className="flex justify-center items-center my-4 shadow-md ls-button-g" href="http://google.com">
                <FaGoogle className="pr-1" />
                Sign Up with Google
              </a>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-52 hidden md:flex px-10 md:px-32 justify-center items-center top-1/4 md:top-full">
          <div className="flex flex-col md:flex-row items-center rounded-2xl bg-white shadow-xl w-full h-full">
            <div className="flex flex-col w-full md:w-4/6 h-full px-14 py-11 md:px-14 md:py-12">
              <p className="text-xl md:text-4xl w-48 md:w-80 ls-font-r font-bold py-2">Get your member card now!</p>
              <p className="text-md ls-font-r py-2">Let&quot;s join with our member and enjoy the deals.</p>
            </div>
            <div className="flex flex-col w-full md:w-2/6 h-full md:h-2/6 px-14 py-12 justify-center items-center">
              <a className="my4 shadow-md ls-button" href=" ">Create Now </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  authRegister
};

// export default Signup

export default connect(mapStateToProps, mapDispatchToProps)(Signup);