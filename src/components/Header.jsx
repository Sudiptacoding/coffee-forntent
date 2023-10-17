import React from 'react';

const Header = () => {
    return (
        <div className='header-bg flex items-center justify-center gap-4'>
            <div className=''><img className='lg:w-[75px] lg:h-[90px] w-14' src="https://i.postimg.cc/D0cVd3y4/logo1.png" alt="" /></div>
            <div className='py-6'><h1 className='Rancho font-normal lg:text-6xl text-3xl text-white '>Espresso Emporium</h1></div>
        </div>
    );
};

export default Header;