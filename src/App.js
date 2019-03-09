import React, { Component } from 'react';
import Navigation from './sections/nav/Nav';
import Header from './sections/header/Header';
import WorkWith from './sections/work-with/WorkWith';
import WhyUs from './sections/why-us/WhyUs';
import WeOffer from './sections/we-offer/WeOffer';
import Title from './sections/titile/Title';
import Total from './sections/total/Total';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
        <Navigation/>
        <Header/>
        <WorkWith/>
        <WhyUs/>
        <Title/>
        <WeOffer/>
        <Total/>
      </div>
    );
  }
}

export default App;
