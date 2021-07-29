import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import ForgotPass from './pages/ForgotPass';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import History from './pages/History';
import PrivateRoute from './components/PrivateRoute';
import Search from './pages/Search';

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
          <Route path="/products" component={Search} />
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
