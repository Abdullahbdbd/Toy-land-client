import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToy from '../MyToy/MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                            ></MyToy>)
                        }
                    </tbody>
                       
                </table>
            </div>
        </div>
    );
};

export default MyToys;