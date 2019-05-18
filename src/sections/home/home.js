import React from 'react';
import Header from '../home/header/Header';
import WorkWith from '../home/work-with/WorkWith';
import WhyUs from '../home/why-us/WhyUs';
import WeOffer from '../home/we-offer/WeOffer';
import Title from '../home/titile/Title';
import Total from '../home/total/Total';
import Opportunities from '../home/opportunities/Opportunities';
import KeyPoints from '../home/key-points/KeyPoints';
import Feedbacks from '../home/feedbacks/Feedbacks';
import Services from '../home/services/Services';
import ContactUs from '../home/contact-us/ContactUs';
import Footer from '../home/footer/Footer';
import JoinUs from '../home/join-us/JoinUs';

const HomePage = () => (
    <div>
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

export default HomePage;