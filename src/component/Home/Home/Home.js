import React from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Contact from '../Contact/Contact';
import Review from '../../Review/Review';
import Service from '../../Service/Service/Service';


const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Service></Service>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;