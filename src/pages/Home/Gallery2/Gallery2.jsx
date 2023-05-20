import React from 'react';

const Gallery2 = () => {
    return (
        <div>
           <div className='text-center mt-60 mb-28'>
           <h1 className='text-5xl font-bold mb-5 '>New Toy Gallery</h1>
           <p>A new gallery section. Galleries are a great way to showcase images or visual content on a website or application. <br /> a new gallery section. Galleries are a great way to showcase images.</p>
           </div>

            <div className='space-y-5'>
                <div className='lg:flex max-w-7xl mx-auto space-x-5 space-y-5'>

                    <div className="card w-96 bg-base-100 shadow-xl ml-5">
                        <figure><img className='h-80' src="https://cdn.shopify.com/s/files/1/0403/6755/4718/products/94062_BN_VR-ScienceKit_Render_FrontLeft_Shadow_3000px_210930_1_1024x1024.png?v=1664526995" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                SCIENCE KIT
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end mt-5">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-80' src="https://cdn.shopify.com/s/files/1/0403/6755/4718/products/VR_ScienceKit_BillNye_PKG_16in_Render_OPEN_083120_1024x1024.png?v=1664526995" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            SCIENCE KIT
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-80' src="https://www.jrtoycanada.ca/images/detailed/56/PlayMonster-Math-Discovery-1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                MATH DISCOVERY
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='lg:flex max-w-7xl mx-auto space-x-5 space-y-5'>

                    <div className="card w-96 bg-base-100 shadow-xl ml-5">
                        <figure><img className='h-80' src="https://www.lego.com/cdn/cs/set/assets/blt2d9fb32f00ef8f66/42144_alt1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                TECHNIC
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end mt-5">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-80' src="https://www.jrtoycanada.ca/images/detailed/54/Meccano_Erector_Intro_to_Robotics_Building_Kit__1_.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                INTRO TO ROBOTICS
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-80' src="https://www.lego.com/cdn/cs/set/assets/blt755c470818be2041/60348_alt1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                LEGO CITY
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-active">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Gallery2;