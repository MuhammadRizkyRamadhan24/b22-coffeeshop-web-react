import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './pages/Home';
import Login from './pages/login'
import Signup from './pages/signup'
import Product from './pages/product'
import ProductDetail from './pages/productDetail';
import ForgotPass from './pages/forgotpass';
import Payment from './pages/payment';
import Profile from './pages/profile';
// import Search from './pages/Search';
// import History from './pages/History'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/product' exact component={Product} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/forgotpass' component={ForgotPass} />
        <Route path='/payment' component={Payment} />
        <Route path='/profile' component={Profile} />
        {/* <Route path='/history' component={History} /> */}
      </Switch>
    </Router>
  );
}

export default App;