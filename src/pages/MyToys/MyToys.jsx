import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToy from '../MyToy/MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
  const [reload, setReload]= useState(true);

    useEffect(() => {
        fetch(`https://toy-land-server-nine.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user, reload])

    return (
        <div>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToy
                                key={toy._id}
                                toy={toy}
                                reload={reload}
                                setReload={setReload}
                            ></MyToy>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;