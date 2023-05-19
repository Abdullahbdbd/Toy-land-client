import React, { useEffect, useState } from 'react';
import ScienceToy from './ScienceToy/ScienceToy';

const Toys = () => {
    const [toys, setToys]= useState([]);

    useEffect(()=>{
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])
    return (
        <div>
          {/* { 
          toys.map(toy => <ScienceToy
          key={toy._id}
          toy={toy}
          ></ScienceToy>)
          } */}
        </div>
    );
};

export default Toys;
