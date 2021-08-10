import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEnvelope } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getUserById } from '../redux/actions/user';
import logo from '../assets/images/logo.png';
import textLogo from '../assets/images/textLogo.png';
import ButtonMini from './ls/ButtonMiniLs';
import img from '../assets/images/profile.jpg';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      showMenu: false,
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

  redirect = (event) => {
    const { search } = this.state;
    if (event.keyCode === 13) {
      this.props.history.push(`/products?search=${search}&order=name&sort=ASC`);
    }
  }

  menu = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu
    });
  }

  render() {
    const { token } = this.props.auth;

    return (
      <>
        <div className="flex flex-row w-full h-wrap">
          <button type="button" onClick={this.goToHome} className="focus:outline-none hidden md:flex flex-row w-1/6 md:w-2/6 justify-center items-center">
            <img src={logo} alt="" className="h-logo hidden md:block" />
            <img src={textLogo} alt="" className="h-textLogo hidden md:block" />
          </button>
          <button type="button" onClick={this.menu} className="focus:outline-none md:hidden flex flex-row w-1/6 md:w-2/6 justify-center items-center">
            <img src={logo} alt="" className="h-logo md:hidden block" />
          </button>
          {this.state.showMenu === true ? (
            <div className="flex md:hidden justify-end">
              <div className="flex flex-col w-full left-0 top-8 bg-white p-3 mt-10 fixed">
                <Link to="/" className="text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Home</Link>
                <Link to="/product" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Product</Link>
                <Link to="/payment" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Your Cart</Link>
                <Link to="/profile" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">Profile</Link>
                <Link to="/history" className=" text-gray-600 hover:underline text-sm md:text-base p-2 md:p-4">History</Link>
              </div>

            </div>

          ) : (
            <div />
          )}
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
                      : <img src={this.props.user.data[0].image === null ? img : `https://coffee-shopapp.herokuapp.com/static/images/${this.props.user.data[0].image}`} alt="" className="h-up-sm w-full h-full" />}
                  </button>
                </>
              )

              : (
                <>
                  <button type="button" onClick={() => this.props.history.push('/signup')} className="focus:outline-none history-font text-sm">Sign Up</button>
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