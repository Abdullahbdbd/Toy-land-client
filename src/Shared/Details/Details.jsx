import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Details = () => {
    const data = useLoaderData();
    const { toy_name, seller_name, section, price, available_quantity, img_url
        , seller_email, rating, detail_description} = data;
    return (
        <div>
             <Helmet>
                <title>Toy Land | Details</title>
            </Helmet>
            <div className="card max-w-7xl mx-auto my-10 bg-blue-50">
                <figure><img className='h-96' src={img_url} alt="car!" /></figure>
                <div className="card-body space-y-3">
                <p>Detail Description: {detail_description}</p>
                    <h2 className="card-title text-3xl font-semibold">Name: {toy_name}</h2>
                    <h2 className="card-title text-3xl font-semibold">Seller Name: {seller_name}</h2>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <p className='text-xl font-semibold'>Quantity: {available_quantity}</p>
                    <p className='text-xl font-semibold'>Section: {section}</p>
                    <p className='text-xl font-semibold'>Seller Email: {seller_email}</p>
                    <p className='text-xl font-semibold'>Rating: {rating}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;