import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import ScienceToy from '../Toys/ScienceToy/ScienceToy';

const Categoric = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("science");

    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })
    }, [activeTab])

    // const result = toys.filter(toy=> toy.section === activeTab);
    // setToys(result)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }


    return (
        <div className='text-center max-w-screen-xl max-h-screen mx-auto rounded-lg my-60'>
            <div className='space-x-10 mb-20'>
                <div
                    onClick={() => handleTabClick("science")}
                    className={`tab tab2 science text-3xl font-semibold ${activeTab == "science" ? "text-blue-500 btn btn-outline" : ""
                        }`}
                >Science kits</div>


                <div
                    onClick={() => handleTabClick("math learning")}
                    className={`tab tab2 math learning text-3xl font-semibold ${activeTab == "math learning" ? "text-blue-500 btn btn-outline" : ""
                        }`}
                >Math learning toys</div>


                <div
                    onClick={() => handleTabClick("engineering")}
                    className={`tab tab2 engineering text-3xl font-semibold ${activeTab == "engineering" ? "text-blue-500 btn btn-outline" : ""
                        }`}
                >Engineering tools</div>

            </div>

            <div className='grid grid-cols-2 gap-5'>
                {
                    toys.map(toy => <ScienceToy
                        key={toy._id}
                        toy={toy}
                    ></ScienceToy>)
                }

            </div>
        </div>
    );
};

export default Categoric;