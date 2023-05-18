
import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="h-screen carousel carousel-vertical">
                <div className="carousel-item h-full">
                    <img className='w-screen' src="https://m.media-amazon.com/images/I/81WIgNnQCrL.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img className='w-screen' src="https://images.immediate.co.uk/production/volatile/sites/28/2021/10/910_Of_The_Best_Green_Template-ff850e1.jpg?resize=768,574" />
                </div>
                <div className="carousel-item h-full">
                    <img className='w-screen' src="https://cdn.shopify.com/s/files/1/1619/4221/products/DSC00516.jpg?v=1661735539&width=1445" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;