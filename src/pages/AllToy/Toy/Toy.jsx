import React from 'react';
import { Link } from "react-router-dom";

const Toy = ({ allToy }) => {

    const { _id, seller_name, toy_name, section, price, available_quantity} = allToy

    return (
        <tr>
            <th>
               <p>{seller_name}</p>
            </th>

            <td>
              <p>{toy_name}</p>
            </td>

            <td>
             <p>{section}</p>
            </td>

            <td>
              <p>${price}</p>
            </td>

            <td>
             <p>{available_quantity}</p>
            </td>

            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-outline">View Details</button></Link>
            </th>
        </tr>
    );
};

export default Toy;