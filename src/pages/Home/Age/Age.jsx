import React from 'react';

const Age = () => {
    return (
        <div className='mt-auto'>
            <h1 className='my-10 text-5xl font-bold text-center text-sky-700'>Shop By Age</h1>
            <p className='mb-10 text-center'>ipsum dolor sit, amet consectetur adipisicing elit. Dolorum libero error omnis nihil nulla velit, <br /> cum sequi. Adipisci blanditiis repellendus placeat, culpa voluptas</p>
            <div className='lg:flex justify-around mx-20 space-x-4 space-y-5'>
            <div data-aos="zoom-in-down" className="card w-72 bg-blue-300 shadow-xl ml-4 lg:ml-0">
                <figure className="px-5 pt-5">
                    <img src="https://media.istockphoto.com/id/1455750836/photo/daycare-children-playing.jpg?b=1&s=170667a&w=0&k=20&c=0elwGnoqH2hZKMRpBaW00f7QpilDquD9QHhL1fBLKQc=" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">0-2 years</h2>
                </div>
            </div>

            <div data-aos="zoom-in-down" className="card w-72 bg-blue-400 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeDjUn9zqVa7omyQ9g8bQwtu37AADGF66sA&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">3-4 years</h2>
                </div>
            </div>

            <div data-aos="zoom-in-down" className="card w-72 bg-blue-500 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://st.depositphotos.com/1301532/3780/i/600/depositphotos_37807033-stock-photo-happy-child-with-painted-hands.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">5-7 years</h2>
                </div>
            </div>

            <div data-aos="zoom-in-down" className="card w-72 bg-blue-600 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src="https://t4.ftcdn.net/jpg/01/54/75/75/360_F_154757548_y3InrEx22kncp0w1V0MrQvedh9MJLvqA.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">8-10 years</h2>
                </div>
            </div>

            <div data-aos="zoom-in-down" className="card w-72 bg-blue-700 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src=" https://st2.depositphotos.com/1037987/10275/i/950/depositphotos_102753260-stock-photo-brother-and-sister-sitting-in.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-bold">10+ years</h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Age;