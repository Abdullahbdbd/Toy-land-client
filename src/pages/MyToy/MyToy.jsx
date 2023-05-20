import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyToy = ({ toy }) => {

    const { _id, price, available_quantity, detail_description } = toy;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allToy/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                            'Your Toy has been deleted.',
                                    'success'
                                )
                        }
                    })

            }

        })
    }
    return (
        <tr>
            <td>
                <p>${price}</p>
            </td>

            <td>
                <p>{available_quantity}</p>
            </td>

            <td>
                <p>{detail_description.slice(0, 40)}....</p>
            </td>


            <th>
               <Link to={`/updateToy/${_id}`}><button className="btn btn-outline">Update</button></Link>

            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline btn-error">
                    X
                </button>
            </th>
        </tr>

    );
};

export default MyToy;