import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Link to='/details'><button className="btn btn-primary m-3">See All</button></Link>
        </div>
    );
};

export default Home;