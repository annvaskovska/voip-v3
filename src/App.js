import React, { Component } from 'react';
import Navigation from './sections/nav/Nav';
import Header from './sections/header/Header';
import WorkWith from './sections/work-with/WorkWith';
import WhyUs from './sections/why-us/WhyUs';
import WeOffer from './sections/we-offer/WeOffer';
import Title from './sections/titile/Title';
import Total from './sections/total/Total';
import Opportunities from './sections/opportunities/Opportunities';
import KeyPoints from './sections/key-points/KeyPoints';
import Feedbacks from './sections/feedbacks/Feedbacks';
import Services from './sections/services/Services';
import ContactUs from './sections/contact-us/ContactUs';
import Footer from './sections/footer/Footer';
import JoinUs from './sections/join-us/JoinUs';

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
        <Opportunities/>
        <KeyPoints/>
        <Feedbacks/>
        <Services/>
        <JoinUs/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
