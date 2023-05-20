import React from 'react';
import { Link } from "react-router-dom";

const ScienceToy = ({ toy }) => {
const {_id, img_url, toy_name, price, rating, available_quantity} = toy || {};

    return (
        <div>
            <div className="card card-side bg-blue-50 shadow-xl">
                <figure><img className='h-72 w-80' src={img_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name: {toy_name}</h2>
                    <p className="card-title">Price: ${price}</p>
                    <p className="card-title">Rating: {rating}</p>
                    <p className="card-title">Quantity: {available_quantity}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn btn-outline font-bold">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScienceToy;
