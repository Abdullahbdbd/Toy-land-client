import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';
import {Helmet} from "react-helmet";

const AllToy = () => {
    const [allToys, setAllToy] = useState([]);
    const [searchToy, setSearchToy] = useState("");


    useEffect(() => {
        fetch("https://toy-land-server-nine.vercel.app/allToy")
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])

    const handleSearch = ()=>{
        fetch(`https://toy-land-server-nine.vercel.app/toySearchByToy/${searchToy}`)
        .then(res => res.json())
        .then(data => setAllToy(data))
    }

    return (
        <div>
            <Helmet>
                <title>Toy Land | All Toy</title>
            </Helmet>
              <div className='text-center my-10'>
                <input
                onChange={(e) => setSearchToy(e.target.value)}
                type="text"
                className='p-2 border-blue-200 border-4 rounded-lg'
                />{" "}
                <button onClick={handleSearch} className='btn btn-outline'>Search</button>
              </div>

            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <Toy
                                key={allToy._id}
                                allToy={allToy}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;