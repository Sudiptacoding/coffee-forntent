import React from 'react';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='lg:w-[724px] w-full lg:py-[288px] py-32 lg:ml-[46%] p-6 lg:p-0'>
                <h1 className='Rancho font-normal text-[55px] text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='Raleway font-normal text-md text-white pt-4 pb-8'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='Rancho text-[#242222] font-normal text-2xl py-[9px] px-[22px] bg-[#E3B577] border border-[#E3B577] hover:bg-transparent hover:text-white hover:border-white  hover:border'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;