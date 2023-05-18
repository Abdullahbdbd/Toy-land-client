import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Categoric from '../Categoric/Categoric';
import Age from '../Age/Age';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categoric></Categoric>
            <Age></Age>
        </div>
    );
};

export default Home;