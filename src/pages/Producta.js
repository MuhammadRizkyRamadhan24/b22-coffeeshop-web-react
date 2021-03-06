import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Header from '../components/Headera';
import Footer from '../components/Footera';
import Coupon from '../components/product/Coupona';
import Card from '../components/product/Carda';
import Nav from '../components/product/Nava';
import '../styles/page-ls.css';

import { getDataByCategories } from '../redux/actions/product';
import { getCategory } from '../redux/actions/category';
import { getUserById } from '../redux/actions/user';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      status: ''
    };
  }

  componentDidMount() {
    this.getCategory();
    this.getDataByCategories(1, 'Favorite Product');
  }

  getCategory = () => {
    const { token } = this.props.auth;
    this.props.getCategory(token);
  }

  getDataByCategories = (id, name) => {
    const { token } = this.props.auth;
    this.props.getDataByCategories(id, token).then(() => {
      this.setState({
        status: name,
        loading: false
      });
    });
  }

  render() {
    return (
      <>
        {this.state.loading !== true
          ? (
            <div className="flex flex-col min-h-full">
              <Header history={this.props.history} />
              <div className="flex flex-col md:flex-row w-full h-auto">
                <div className="flex flex-col h-2/6 md:w-2/6 items-center py-10">
                  <div className="text-center product-title text-xl">
                    Promo for you
                  </div>
                  <div className="text-center product-paragraph text-base w-64 pt-4 pb-4">
                    Coupons will be updated every weeks. Check them out!
                  </div>
                  <Coupon />
                  <button type="button" className="focus:outline-none product-card-btn w-60 pt-4 pb-4 text-lg">Apply coupon</button>
                  <div className="flex flex-col pt-24">
                    <div className="product-tc text-sm font-bold">
                      Terms and Condition
                    </div>
                    <div className="product-tc text-sm font-normal">
                      1. You can only apply 1 coupon per day
                    </div>
                    <div className="product-tc text-sm font-normal">
                      2. It only for dine in
                    </div>
                    <div className="product-tc text-sm font-normal">
                      3. Buy 1 get 1 only for new user
                    </div>
                    <div className="product-tc text-sm font-normal">
                      4. Should make member card to apply coupon
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-4/6 md:w-4/6" style={{ borderLeft: '.1rem solid #9F9F9F' }}>
                  <div className="flex flex-row h-1/6 justify-center items-center mx-12 my-6">
                    {this.props.category
                      ? this.props.category.data.map((d) => (
                        <Nav key={d.id} func={() => this.getDataByCategories(d.id, d.name_category)} data={d} />
                      ))
                      : 'loading'}
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 h-5/6 p-10 md:px-12 md:mb-20">
                    {this.props.product
                      ? this.props.product.data.map((d) => (
                        <Card key={d.id} status={this.state.status} data={d} />
                      ))
                      : 'loading'}
                  </div>
                </div>

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
  category: state.category,
  user: state.user
});

const mapDispatchToProps = {
  getDataByCategories,
  getCategory,
  getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);