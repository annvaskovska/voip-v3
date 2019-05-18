import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Navigation from './sections/nav/Nav';
import HomePage from './sections/home/home';
import Products from './sections/propducts/Products';
import Prices from './sections/prices/Prices';
import ContactUs from './sections/contact-us/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
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
                <Route component={HomePage} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
