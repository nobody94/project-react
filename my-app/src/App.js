import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Header from './module/Header/Header';
import Home from './module/Pages/Home/Home';
import Shop from './module/Shop/Shop';
import Contact from './module/Pages/Contact/Contact';
import Form from './module/User/Form-SignIn/Form';
import Checkout from './module/Cart/Checkout/Checkout';
import Logout from './module/User/SignOut/Logout';
import User from './module/User/Account/User';
import CheckoutSuccess from './module/Cart/Checkout/CheckoutSuccess';
import Error from './module/Pages/404/Error';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/sign-in" component={Form}/>
        <Route exact path="/checkout" component={Checkout}/>     
        <Route exact path="/logout" component={Logout}/>
        <Route path='/user' component={User}/>   
        <Route path='/checkout-success' component={CheckoutSuccess}/>   
        <Route component={Error}/>   
      </Switch>
  </Router>
  );
}

export default App;
