/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getUserById } from '../redux/actions/user';
import logo from '../assets/images/logo.png';
import textLogo from '../assets/images/textLogo.png';
import ButtonMini from './ls/button-mini-ls';
import img from '../assets/images/profile.jpg';
import '../styles/header.css';
// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      page: ''
    };
  }

  componentDidMount() {
    this.getDataUser();
  }

  goToHome = () => {
    this.props.history.push('/');
  }

  goToProduct = () => {
    this.props.history.push('/product');
  }

  goToCart = () => {
    this.props.history.push('/payment');
  }

  goToHistory = () => {
    this.props.history.push('/history');
  }

  goToProfile = () => {
    this.props.history.push('/profile');
  }

  getDataUser = () => {
    const { token } = this.props.auth;
    this.props.getUserById(token);
  }

  redirect=(event) => {
    if (event.keyCode === 13) {
      this.props.history.push(`/products?search=${this.state.search}`);
    }
  }

  render() {
    const { token } = this.props.auth;

    return (
      <>
        <div className="flex flex-row w-full h-wrap">
          <button type="button" onClick={this.goToHome} className="focus:outline-none flex flex-row w-1/6 md:w-2/6 justify-center items-center">
            <img src={logo} alt="" className="h-logo" />
            <img src={textLogo} alt="" className="h-textLogo hidden md:block" />
          </button>
          <div className="md:flex flex-row w-2/6 justify-center items-center hidden">
            <button type="button" onClick={this.goToHome} className="focus:outline-none h-sh text-sm">Home</button>
            <button type="button" onClick={this.goToProduct} className="focus:outline-none h-sh text-sm">Product</button>
            <button type="button" onClick={this.goToCart} className="focus:outline-none h-sh text-sm">Your Cart</button>
            <button type="button" onClick={this.goToHistory} className="focus:outline-none h-sh text-sm">History</button>
          </div>
          <div className="flex flex-row w-5/6 md:w-2/6 justify-center items-center">
            {token !== null
              ? (
                <>
                  <div className="flex rounded-full h-8 w-72 md:w-32 px-2 mr-3 h-ci p-1 text-md border-2 justify-center items-center">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search"
                      onKeyDown={(e) => this.redirect(e)}
                      onChange={(e) => this.setState({ search: e.target.value })}
                      className="w-full h-full focus:outline-none"
                    />
                    <FaSearch />
                  </div>
                  <a href="#Message" className="flex justify-center items-center rounded-full h-8 w-8 mr-3 h-ci p-2 text-md">
                    <FaEnvelope />
                  </a>
                  <button type="button" onClick={this.goToProfile} className="flex justify-center items-center focus:outline-none rounded-full h-6 w-6 md:h-8 md:w-8 mr-3 f-bc-sm">
                    {this.props.user.data.length === 0
                      ? <></>
                      : <img src={this.props.user.data[0].image === null ? img : `http://localhost:8880/static/images/${this.props.user.data[0].image}`} alt="" className="h-up-sm w-full h-full" />}
                  </button>
                </>
              )

              : (
                <>
                  <button type="button" onClick={() => this.props.history.push('/signup')} className="focus:outline-none history-font text-xs">Sign Up</button>
                  <ButtonMini page="Login" definition="login" history={this.props.history} />
                </>
              )}

          </div>
        </div>
      </>
    );
  }
}

// export default Header

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = {
  getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);