import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Link to='/addservice'><button className="btn btn-primary m-3">Details</button></Link>
        </div>
    );
};

export default Home;