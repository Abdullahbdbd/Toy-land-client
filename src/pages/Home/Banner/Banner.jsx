
import React from 'react';

const Banner = () => {
    return (
        <div className="carousel max-w-screen-xl max-h-screen mx-auto rounded-lg my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://m.media-amazon.com/images/I/81WIgNnQCrL.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/1619/4221/products/DSC00516.jpg?v=1661735539&width=1445" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.immediate.co.uk/production/volatile/sites/28/2021/10/910_Of_The_Best_Green_Template-ff850e1.jpg?resize=768,574" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;