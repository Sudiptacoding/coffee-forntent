import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Link to='/'><div className='lg:px-[300px] py-12 cursor-pointer'><h1 className='text-shadow Rancho text-[#374151] text-3xl font-normal'><span><HiOutlineArrowNarrowLeft className='inline mr-3'></HiOutlineArrowNarrowLeft></span>Back to home</h1></div></Link>
            <img className='w-full h-screen' src="https://i.postimg.cc/bvF481Nd/404.gif" alt="" />
        </div>
    );
};

export default Error;