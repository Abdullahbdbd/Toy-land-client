import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Categoric from '../Categoric/Categoric';
import Age from '../Age/Age';
import TopToy from '../TopToy/TopToy';
import Gallery2 from '../Gallery2/Gallery2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery2></Gallery2>
            <Gallery></Gallery>
            <Categoric></Categoric>
            <Age></Age>
            <TopToy></TopToy>
        </div>
    );
};

export default Home;