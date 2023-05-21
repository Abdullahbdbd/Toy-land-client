import React from 'react';
import Swal from 'sweetalert2'
import {Helmet} from "react-helmet";

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const img_url = form.img_url.value;
        const section = form.section.value;
        const detail_description = form.detail_description.value;

        const newToy = { toy_name, seller_name, seller_email, price, rating, available_quantity, img_url, section, detail_description };
        console.log(newToy)


        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Add A Toy Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div>
             <Helmet>
                <title>Toy Land | Add Toy</title>
            </Helmet>
            <form onSubmit={handleAddToy} className='mt-10 mb-36 bg-blue-200 max-w-7xl mx-auto py-20 rounded-lg'>
                <h1 className='text-4xl font-bold text-center mb-14'>ADD A TOY</h1>
                <div className='flex max-w-3xl mx-auto space-x-20'>

                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='toy_name' placeholder="Toy Name" className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='seller_name' placeholder="Seller Name" className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>
                    </div>



                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" name='seller_email' className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='price' placeholder='Price' className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>
                    </div>




                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='rating' placeholder='Rating' className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='available_quantity' placeholder='Quantity' className=" border-2 border-blue-300 p-3" />
                            </label>
                        </div>
                    </div>

                </div>



                <div className='flex max-w-3xl mx-auto space-x-20'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Toy Img URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='img_url' placeholder='Img URL' className=" border-2 border-blue-300 p-3" />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='detail_description' placeholder='detail_description' className=" border-2 border-blue-300 p-3" />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label ml-16">
                            <span className="label-text text-lg font-semibold">Sub Category</span>
                        </label>
                        <label className="input-group ml-16">
                            <input type="text" name='section' placeholder='Sub Category' className=" border-2 border-blue-300 p-3" />
                        </label>
                    </div>

                </div>
                <div className='text-center mt-10'>
                    <input className="btn btn-outline btn-wide" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;