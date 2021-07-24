/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import Swal from 'sweetalert2';
import Header from '../components/header';
import Footer from '../components/footer';
import { getDataSearch } from '../redux/actions/product';
import Card from '../components/product/card';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      page: '',
      sort: '',
      order: ''
    };
  }

  componentDidMount() {
    this.getSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getSearch();
    }
    if (prevState.sort !== this.state.sort) {
      this.sort();
    }
    if (prevState.order !== this.state.order) {
      this.sortOrder();
    }
  }

  getSearch = () => {
    const { token } = this.props.auth;
    const qs = QueryString.parse(this.props.location.search);
    qs.search = qs.search || '';
    qs.limit = qs.limit || '8';
    qs.page = qs.page || '';
    qs.order = qs.order || 'name';
    qs.sort = qs.sort || 'ASC';
    this.setState({
      page: qs.page,
      sort: qs.sort,
      order: qs.order
    });
    this.props.getDataSearch(token, qs.search, qs.limit, qs.page, qs.order, qs.sort).then(() => {
      if (this.props.product.errMsg === 'Item not found') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Item not found',
          confirmButtonColor: '#6A4029'
        });
      }
    });
  }

  sortOrder = () => {
    const qs = QueryString.parse(this.props.location.search);
    if (qs.order) {
      const url = this.props.location.search.replace(`order=${qs.order}`, `order=${this.state.order}`);
      this.props.history.push(url);
    } else {
      this.props.history.push(`${this.props.location.search}&order=${this.state.order}`);
    }
  }

  sort = () => {
    const qs = QueryString.parse(this.props.location.search);
    if (qs.sort) {
      const url = this.props.location.search.replace(`sort=${qs.sort}`, `sort=${this.state.sort}`);
      this.props.history.push(url);
    } else {
      this.props.history.push(`${this.props.location.search}&sort=${this.state.sort}`);
    }
  }

  redirect = (e) => {
    if (e.keyCode === 13) {
      this.props.history.push(`/products?search=${this.state.search}&order=${this.state.order}&sort=${this.state.sort}&page=1`);
    }
  }

  redirect2 = (value) => {
    this.setState({
      page: value
    }, () => {
      this.props.history.push(`/products?search=${this.state.search}&order=${this.state.order}&sort=${this.state.sort}&page=${this.state.page}`);
    });
  }

  render() {
    const pageArr = [];
    for (let i = 1; i <= this.props.product.pageInfo.lastPage; i++) {
      pageArr.push(i);
    }
    const prev = '<';
    const next = '>';
    const page = parseInt(this.state.page);
    return (
      <div className="flex flex-col min-h-full">
        <Header history={this.props.history} />
        <div className="flex flex-col items-center">
          <div className="w-2/3 h-20 flex flex-row justify-center items-center my-14 rounded-xl shadow-2xl md:w-3/6">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onKeyDown={(e) => this.redirect(e)}
              onChange={(e) => this.setState({ search: e.target.value })}
              className="focus:outline-none h-full text-xl w-3/6 md:w-2/3 history-font mx-4"
            />
            <select className="history-font mx-2 focus:outline-none" onChange={(e) => this.setState({ sort: e.target.value })} value={this.state.sort}>
              <option disabled>Sort</option>
              <option value="ASC">A - Z</option>
              <option value="DESC">Z - A</option>
            </select>
            <select className="history-font mx-2 focus:outline-none" onChange={(e) => this.setState({ order: e.target.value })} value={this.state.order}>
              <option disabled>Order</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 h-5/6 p-10 md:px-12 md:mb-20">
            {this.props.product.dataSearch
              ? this.props.product.dataSearch.map((d) => (
                <Card key={d.id} status="Search" data={d} />
              ))
              : 'loading'}
          </div>
          <div className="flex flex-row mb-16 justify-center items-center">
            {this.props.product.pageInfo.prevPage !== null && <button type="button" onClick={() => this.redirect2(page - 1)} className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 history-font">{prev}</button>}
            {pageArr.map((d) => (
              <button key={d} type="button" onClick={() => this.redirect2(d)} className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 history-font">{d}</button>
            ))}
            {this.props.product.pageInfo.nextPage !== null && <button type="button" onClick={() => this.redirect2(page + 1)} className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 history-font">{next}</button>}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  product: state.product
});

const mapDispatchToProps = {
  getDataSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);