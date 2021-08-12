import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Homea';
import Login from './pages/Logina';
import Signup from './pages/Signupa';
import Product from './pages/Producta';
import ProductDetail from './pages/ProductDetaila';
import ForgotPass from './pages/ForgotPassa';
import Payment from './pages/Paymenta';
import Profile from './pages/Profilea';
import History from './pages/Historya';
import PrivateRoute from './components/PrivateRoutea';
import Search from './pages/Searcha';

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
