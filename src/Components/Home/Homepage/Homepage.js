import React from 'react';
import Fixer from '../Fixer/Fixer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Fixer></Fixer>
            <Product></Product>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
