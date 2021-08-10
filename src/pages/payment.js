import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTruck, FaUniversity, FaCreditCard } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import { deleteAllItems } from '../redux/actions/carts';
import { getUserById } from '../redux/actions/user';
import { createTransaction } from '../redux/actions/transaction';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/page-payDel.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: [],
      item_amount: [],
      item_variant: [],
      item_additional_price: [],
      subTotal: '',
      tax: '10%',
      shipping: 10000,
      total: '',
      payment_method: '',
      button: true
    };
  }

  // getDataUser = () => {
  //     const {token} = this.props.auth
  //     this.props.getUserById(token)
  // }

  componentDidMount() {
    // this.getDataUser()
    if (this.props.carts.items.length > 0) {
      this.setData();
    } else {
      this.setState({
        subTotal: 0,
        total: 0
      });
    }
  }

  setData = () => {
    const item_id = [];
    const item_amount = [];
    const item_variant = [];
    const item_additional_price = [];
    this.props.carts.items.map((element) => item_id.push(element.id));
    this.props.carts.items.map((element) => item_amount.push(element.amount));
    this.props.carts.items.map((element) => item_variant.push(element.variant));
    this.props.carts.items.map((element) => item_additional_price.push(element.additional_price));
    const {
      item_id: itemId, item_amount: itemAmount, item_variant: itemVariant, item_additional_price: itemAdditionalPrice, shipping
    } = this.state;
    this.setState({
      item_id: itemId.concat(item_id),
      item_amount: itemAmount.concat(item_amount),
      item_variant: itemVariant.concat(item_variant),
      item_additional_price: itemAdditionalPrice.concat(item_additional_price)
    }, () => {
      const subTotal = this.props.carts.items.map((element, idx) => element.end_price * this.state.item_amount[idx]).reduce((acc, curr) => acc + curr);
      this.setState({
        subTotal,
        total: subTotal + shipping + (subTotal * (10 / 100))
      });
    });
  }

  createTransaction = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Create Transaction?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6A4029',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        const { token } = this.props.auth;
        const {
          item_id, item_amount, item_variant, item_additional_price, payment_method
        } = this.state;
        this.props.deleteAllItems();
        this.setState({
          subTotal: 0,
          total: 0
        });
        this.props.createTransaction(item_id, item_amount, item_variant, item_additional_price, payment_method, token)
          .then(() => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Successful payment!',
              showConfirmButton: false,
              timer: 1500
            });
          }).catch((err) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong'
            });
          });
      }
    });
  }

  render() {
    return (
      <div className="flex flex-col min-h-full">
        <Header history={this.props.history} />
        <div className="flex flex-col h-auto md:flex-row w-full pd-wrap p-12 md:py-12 md:px-28">
          <div className="flex flex-col w-full md:w-3/6 md:h-full">
            <div className="text-center md:text-left text-2xl md:text-4xl w-full md:w-72 text-white pd-title my-10 md:mt-0 md:mb-10">Checkout your item now!</div>
            <div className="flex flex-col bg-white rounded-3xl h-full justify-center items-center py-10 md:px-10">
              <div className="text-center text-2xl md:text-3xl pd-title-detail pb-8">Order summary</div>
              <div className="flex flex-col">
                <div className="flex flex-col h-80 w-80 overflow-y-auto">
                  {this.props.carts.items.length > 0
                    ? this.props.carts.items.map((d) => (
                      <div key={d.id} className="flex my-4 mx-4 text-xl items-center">
                        <img className="w-20 h-20 rounded-full mr-4 object-cover" src={`https://coffee-shopapp.herokuapp.com/static/images/${d.image}`} alt="" />
                        <div className="flex flex-col w-full pr-4 pd-text-iDetail">
                          <p>{d.name}</p>
                          <p>
                            (
                            {d.amount}
                            )
                          </p>
                          <p>{d.variant}</p>
                        </div>
                        <div className="flex justify-end items-center text-center pd-text-iDetail">
                          <p>
                            IDR
                            {' '}
                            {d.end_price}
                          </p>
                        </div>
                      </div>
                    ))
                    : (
                      <div className="flex flex-row my-4 mx-4 text-xl justify-center items-center">
                        No Item!
                      </div>
                    )}

                </div>
                <div className="flex flex-row px-4 md:px-0 py-10">
                  <div className="flex flex-col w-3/6">
                    <p className="text-xl pd-text-iDetail">SUBTOTAL</p>
                    <p className="text-xl pd-text-iDetail">TAX & FEES</p>
                    <p className="text-xl pd-text-iDetail">SHIPPING</p>
                  </div>
                  <div className="flex flex-col w-3/6 items-end">
                    <p className="text-xl pd-text-iDetail">
                      IDR
                      {' '}
                      {this.state.subTotal}
                    </p>
                    <p className="text-xl pd-text-iDetail">{this.state.tax}</p>
                    <p className="text-xl pd-text-iDetail">
                      IDR
                      {' '}
                      {this.state.shipping}
                    </p>
                  </div>
                </div>
                <div className="flex px-4 md:px-0 flex-row">
                  <div className="flex flex-col w-3/6">
                    <p className="text-2xl font-medium pd-text-iDetail">TOTAL</p>
                  </div>
                  <div className="flex flex-col w-3/6 items-end">
                    <p className="text-2xl font-medium pd-text-iDetail">
                      IDR
                      {' '}
                      {this.state.total}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-3/6 md:h-full pt-8 pb-8 md:pb-0 md:pt-32 md:pl-5">
            <div className="flex flex-row w-full h-10 items-center">
              <div className="text-xl pd-title text-white w-5/6">Address details</div>
              {/* <a href=" " className="text-lg pd-title text-white w-1/6">edit</a> */}
            </div>
            {this.props.user.data[0] !== undefined
              ? (
                <div className="flex flex-col bg-white rounded-3xl w-full h-auto justify-center p-10">
                  <div className="pd-text-iDetail text-xl py-2 border-b-2">
                    <span className="font-bold">Delivery </span>
                    to
                    {' '}
                  </div>
                  <div className="pd-text-iDetail text-xl py-2 border-b-2">{this.props.user.data[0].address}</div>
                  <div className="pd-text-iDetail text-xl py-2">{this.props.user.data[0].phone_number}</div>
                </div>
              )
              : (
                <div className="flex flex-col bg-white rounded-3xl w-full h-auto justify-center items-center p-10">
                  <Loader
                    type="TailSpin"
                    color="#6A4029"
                    height={50}
                    width={100}
                  />
                </div>
              )}

            <div className="flex items-center text-xl pd-title text-white w-full h-20 pt-10">Payment method</div>
            <div className="flex flex-col bg-white rounded-3xl w-full h-52 pl-10 justify-center">
              <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium">
                <FaCreditCard className="pr-1" />
                {' '}
                Card
                <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Credit Card" />
                <span className="checkmark" />
              </label>
              <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium">
                <FaUniversity className="pr-1" />
                Bank account
                <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Bank" />
                <span className="checkmark" />
              </label>
              <label className="pd-rb text-lg pd-text-iDetail pl-8 mb-4 mt-4 font-medium">
                <FaTruck className="pr-1" />
                Cash on delivery
                <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Cod" />
                <span className="checkmark" />
              </label>
            </div>
            <button type="button" disabled={this.state.button} onClick={() => this.createTransaction()} className="focus:outline-none shadow-md text-lg rounded-3xl pd-btn mt-10 w-full h-16">Confirm and Pay</button>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  carts: state.carts,
  user: state.user
});

const mapDispatchToProps = {
  getUserById,
  createTransaction,
  deleteAllItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);