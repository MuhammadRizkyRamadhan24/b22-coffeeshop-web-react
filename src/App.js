import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';
import ForgotPass from './pages/forgotpass';
import Payment from './pages/payment';
import Profile from './pages/profile';
import History from './pages/history';
import PrivateRoute from './components/privateRoute';
// import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotpass" component={ForgotPass} />
        <PrivateRoute>
          <Route path="/product" exact component={Product} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/profile" component={Profile} />
          <Route path="/payment" component={Payment} />
          <Route path="/history" component={History} />
        </PrivateRoute>
        {/* <Route path='/product' exact component={Product} /> */}
        {/* <Route path='/product/:id' component={ProductDetail} /> */}
        {/* <Route path='/history' component={History} /> */}
        {/* <Route path='/payment' component={Payment} /> */}
        {/* <Route path='/profile' component={Profile} /> */}
      </Switch>
    </Router>
  );
}

export default App;
