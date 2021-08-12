import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Header from '../components/Headera';
import Footer from '../components/Footera';
import ImageXL from '../components/productDetail/ImageXla';
import ImageSM from '../components/productDetail/ImageSma';
import ButtonVariant from '../components/productDetail/ButtonVarianta';

import { getDataById } from '../redux/actions/product';
import { addItems } from '../redux/actions/carts';

import '../styles/page-productDetail.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      number: 0,
      item: [],
      button: true,
      // hehe: ''
    };
  }

  // getDetailData = async() => {
  //     await axios({
  //         method: 'GET',
  //         url:`${process.env.REACT_APP_BASE_URL}/items/${this.props.match.params.id}`,
  //     })
  //     .then((response)=>{
  //         this.setState({
  //             data: response.data.results,
  //             loading: false
  //         });
  //     })
  //     .catch((error)=>{
  //         this.setState({
  //           data: [{id:1, message: "Not Find Data!", status: "error"}],
  //           loading: true
  //         });
  //     })
  // }

  componentDidMount() {
    this.getDetailData();
  }

  plusValue = () => {
    const { number } = this.state;
    if (this.state.number === this.props.product.detailData.quantity) {
      console.log(`Value Dont > ${this.props.product.detailData.quantity}`);
    } else {
      this.setState({
        number: number + 1
      });
      const item = { ...this.state.item[0] };
      item.amount = this.state.number + 1;
      this.setState({
        item: [item],
        button: false
      });
    }
  }

  minusValue = () => {
    const { number } = this.state;
    if (this.state.number === 0) {
      this.setState({
        button: true
      });
      console.log('Value Dont < 0');
    } else {
      this.setState({
        number: number - 1
      });
      const item = { ...this.state.item[0] };
      item.amount = this.state.number - 1;
      this.setState({
        item: [item]
      });
    }
  }

  setItem = (variant, price) => {
    const data = {
      id: this.props.product.detailData.id,
      name: this.props.product.detailData.name,
      image: this.props.product.detailData.image,
      variant,
      end_price: price,
      additional_price: price - this.props.product.detailData.base_price,
      amount: 0
    };
    this.setState({
      item: [data],
      number: 0,
    });
  }

  addItems = (data) => {
    this.props.addItems(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Success add to cart!',
      showConfirmButton: false,
      timer: 1500
    });
    this.props.history.push('/payment');
  }

  addToCarts = (data) => {
    this.props.addItems(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Success add to cart!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  getDetailData = () => {
    const { token } = this.props.auth;
    const { id } = this.props.match.params;
    this.props.getDataById(id, token).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const bread = '>';
    return (
      <>
        {this.state.loading !== true
          ? (
            <div className="flex flex-col min-h-full">
              <Header history={this.props.history} />
              <div className="flex flex-col md:flex-row w-full productDetail-wrap pb-20 pt-12 px-12 md:py-36 md:px-36">
                <div className="flex flex-col h-3/6 md:w-2/6 md:h-full items-center">
                  <div className="text-md font-normal productDetail-font-r brown text-left w-full mb-10">
                    {this.props.location.state.status}
                    {' '}
                    {bread}
                    <span className="font-bold">
                      {' '}
                      {this.props.product.detailData.name}
                    </span>
                  </div>
                  <div className="rounded-full justify-center mt-2 mb-5 md:mt-5 md:mb-10 md:w-72 md:h-72">
                    <ImageXL image={this.props.product.detailData.image} />
                  </div>

                  <p className="text-2xl md:text-4xl productDetail-font-p font-bold text-center w-full">{this.props.product.detailData.name}</p>
                  <p className="text-xl md:text-2xl productDetail-font-p font-normal text-center w-full">
                    IDR
                    {' '}
                    {this.props.product.detailData.base_price}
                  </p>
                  <button type="button" onClick={() => this.addToCarts(this.state.item[0])} disabled={this.state.button} className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-brown text-white">Add to Cart</button>
                  <button type="button" className="rounded-2xl w-full h-16 mt-3 mb-5 font-bold text-xl productDetail-btn focus:outline-none productDetail-bg-yellow brown">Ask a Staff</button>
                </div>
                <div className="flex flex-col h-3/6 md:w-4/6 md:h-full md:ml-10 md:mt-5">
                  <div className="flex flex-col w-full h-5/6 md:h-4/6 p-5 md:px-20 md:py-12 rounded-2xl bg-white">
                    <div className="text-lg productDetail-font-p brown">
                      Delivery :
                      {this.props.product.detailData.delivery}
                    </div>
                    <p className="text-sm md:text-lg productDetail-font-p overflow-y-auto h-96 productDetail-detailDel brown my-4">
                      {this.props.product.detailData.detail}
                    </p>
                    <div className="w-full text-center text-sm md:text-2xl productDetail-font-p font-bold">
                      Choose a size
                    </div>
                    <div className="flex flex-row w-full justify-center items-center">
                      {this.props.product.detailData.variants
                        ? this.props.product.detailData.variants.map((d) => (
                          <ButtonVariant key={d.id} variant={d.variant} func={() => this.setItem(d.variant, d.price)} />
                        ))
                        : 'loading'}
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-2/6">
                    <div className="w-full text-center text-lg mt-3 md:mt-6 productDetail-font-p font-bold">
                      Choose Delivery Methods
                    </div>
                    <div className="flex flex-row w-full justify-center items-center">
                      <button type="button" className="rounded-xl md:rounded-2xl w-30 h-10 md:w-40 md:h-16 mt-5 mb-3 mx-3 px-2 text-sm md:text-lg productDetail-btn focus:outline-none bg-white target">Dine In</button>
                      <button type="button" className="rounded-xl md:rounded-2xl w-30 h-10 md:w-40 md:h-16 mt-5 mb-3 mx-3 px-2 text-sm md:text-lg productDetail-btn focus:outline-none bg-white target">Door Delivery</button>
                      <button type="button" className="rounded-xl md:rounded-2xl w-30 h-10 md:w-40 md:h-16 mt-5 mb-3 mx-3 px-2 text-sm md:text-lg productDetail-btn focus:outline-none bg-white target">Pick up</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full h-20 md:h-40 flex flex-row px-12 md:px-24 justify-center items-center productDetail-top">
                <div className="flex flex-row h-full w-5/6 md:w-3/6 bg-white rounded-2xl shadow-md mr-5 px-6 items-center">
                  {this.state.item.length > 0
                    ? this.state.item.map((d) => (
                      <div key={d.id} className="flex flex-row h-full w-full items-center">
                        <ImageSM image={d.image} />
                        <div className="flex flex-col ml-2 md:ml-5 w-72">
                          <div className="text-sm md:text-xl productDetail-font-p font-extrabold">
                            {d.name}
                          </div>
                          <div className="text-sm md:text-xl productDetail-font-p font-normal">
                            (
                            {d.amount}
                            )
                            {' '}
                            {d.variant}
                          </div>
                          <div className="text-sm md:text-xl productDetail-font-p font-normal">
                            IDR
                            {' '}
                            {d.end_price}
                          </div>
                        </div>
                        <div className="flex flex-row w-48">
                          <button type="button" onClick={this.minusValue} className="rounded-full h-4 w-4 md:h-8 md:w-8 font-bold text-sm md:text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">-</button>
                          <div className="text-sm md:text-xl productDetail-font-p font-extrabold px-4 md:px-8">
                            {this.state.number}
                          </div>
                          <button type="button" onClick={this.plusValue} className="rounded-full h-4 w-4 md:h-8 md:w-8 font-bold text-sm md:text-xl productDetail-btn focus:outline-none productDetail-bg-yellow">+</button>
                        </div>
                      </div>
                    ))
                    : (
                      <div className="flex w-full h-full text-xs md:text-xl productDetail-font-p font-bold justify-center items-center">
                        Please Select Variant!
                      </div>
                    )}
                </div>
                <button type="button" onClick={() => this.addItems(this.state.item[0])} disabled={this.state.button} className="flex justify-center items-center h-16 px-2 md:h-full w-2/6 md:w-1/6 text-xs md:text-xl font-bold productDetail-btn productDetail-font-p focus:outline-none productDetail-bg-yellow rounded-2xl shadow-md md:ml-5">
                  CHECKOUT
                </button>
              </div>
              <Footer />
            </div>
          )
          : (
            <div className="flex flex-col h-screen justify-center items-center">
              <Loader
                type="TailSpin"
                color="#6A4029"
                height={50}
                width={100}
              />
            </div>
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
  carts: state.carts
});

const mapDispatchToProps = {
  getDataById,
  addItems
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);