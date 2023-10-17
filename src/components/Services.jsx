import React from 'react';

const Services = ({ img, h1, p }) => {
    return (
        <div>
            <div><img className='mx-auto lg:mx-0' src={img} alt="" /></div>
            <div><h1 className='Rancho text-[35px] text-[#331A15] font-normal'>{h1}</h1></div>
            <div><p className='Raleway font-normal text-md text-[#1B1A1A] '>{p}</p></div>
        </div>
    );
};

export default Services;