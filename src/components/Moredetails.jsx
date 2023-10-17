import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';

const Moredetails = () => {
    const data = useLoaderData()
    return (
        <div>
            <Link to='/'><div className='lg:px-[300px] py-12 cursor-pointer p-5'><h1 className='text-shadow Rancho text-[#374151] text-3xl font-normal'><span><HiOutlineArrowNarrowLeft className='inline mr-3'></HiOutlineArrowNarrowLeft></span>Back to home</h1></div></Link>
            <div className='2xl:px-[300px]'>
                <div className='flex xl:py-[70px] p-10 xl:px-[185px] items-center bg-[#F4F3F0] rounded-[5px] flex-col lg:flex-row gap-5 lg:gap-0'>
                    <div className='flex-1'><img className='w-[351px] h-[455px] ' src={data?.photo} alt="" /></div>
                    <div className='flex-1'>
                        <h1 className='text-shadow Rancho text-4xl pb-8'>Niceties</h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Name: </span>{data?.name}</h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Chef: </span>{data?.chef}</h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Supplier: </span>{data?.supplier}</h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Taste: </span>{data?.taste} </h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Category: </span>{data?.category} </h1>
                        <h1 className='Raleway text-xl text-[#5C5B5B] pt-2'><span className='text-[#1B1A1A] font-semibold text-xl'>Details: </span>{data?.details} </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moredetails;