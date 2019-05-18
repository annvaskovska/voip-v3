import React, { Component } from 'react';
import Navigation from './sections/nav/Nav';
import HomePage from './sections/home/home';
import Products from './sections/propducts/Products';
import Prices from './sections/prices/Prices';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            app: HomePage,
        };
        this.renderApp = this.renderApp.bind(this);
    }
  renderApp(appKey) {
      const mapper = {
          1: HomePage,
          2: Products,
          3: Prices,
      };

      const app = mapper[appKey] || HomePage;

      this.setState({ app })
  }

  render() {
    return (
      <div className="App">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
        <Navigation select={this.renderApp}/>
        { this.state.app() }
      </div>
    );
  }
}

export default App;
