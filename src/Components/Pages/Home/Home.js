import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import ContactHome from './ContactHome';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <HomeAppointment/>
            <Testimonial/>
            <ContactHome/>
            <Footer/>
        </div>
    );
};

export default Home;