import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Navigation from './sections/nav/Nav';
import HomePage from './sections/home/home';
import Products from './sections/propducts/Products';
import Prices from './sections/prices/Prices';
import ContactUs from './sections/contact-us/ContactUs';
import BuyStep1 from './sections/buy/BuyStep1';
import BuyStep2 from './sections/buy/BuyStep2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossOrigin="anonymous"
            />
            <Navigation select={this.renderApp}/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/products" component={Products} />
                <Route path="/prices" component={Prices} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/buy-step-1" component={BuyStep1} />
                <Route path="/buy-step-2" component={BuyStep2} />
                <Route component={HomePage} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
