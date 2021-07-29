import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { authLogin } from '../redux/actions/auth';
import Background from '../components/ls/BackgroundLs';
import Logo from '../components/ls/LogoLs';
import ButtonMini from '../components/ls/ButtonMiniLs';
import Form from '../components/ls/FormLs';
import ButtonForm from '../components/ls/ButtonFormLs';
import Footer from '../components/Footer';
import '../styles/page-ls.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidUpdate() {
    const { token } = this.props.auth;
    if (token !== null) {
      this.props.history.push('/product');
    }
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

  onLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.authLogin(email, password);
  }

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
                <ButtonMini page="Sign Up" definition="signup" history={this.props.history} />
              </div>

            </div>
            <div className="flex flex-col h-auto w-full items-center justify-center px-10 md:px-32">
              <div className="ls-titleForm">Login</div>
              {errMsg !== '' && <div className="bg-red-300 text-red-600 font-bold w-full px-5 py-5 m-2 rounded-full">{errMsg}</div>}
              <form onSubmit={this.onLogin} className="w-full text-lg md:text-2xl ls-form">
                <Form type="email" id="email" name="email" placeholder="Enter your email adress" value={this.state.email} func={this.changeEmail} label="Email Adress:" />
                <Form type="password" id="password" name="password" placeholder="Enter your password" value={this.state.password} func={this.changePassword} label="Password:" />

                <ButtonForm page="Login" />
              </form>
              <a className="flex justify-center items-center shadow-md ls-button-g my-4" href="http://google.com">
                <FaGoogle className="pr-1" />
                Sign Up with Google
              </a>
              <Link to="/forgotpass" className="flex justify-center items-center shadow-md ls-button-g my-4">Forgot Password?</Link>
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
  authLogin
};

// export default Login

export default connect(mapStateToProps, mapDispatchToProps)(Login);