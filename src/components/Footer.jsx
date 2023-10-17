import React from 'react';
import { BsFacebook, BsTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='pt-24 '>
            <div className='footer-bg 2xl:px-[300px] p-10'>
                <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-0'>
                    <div className='w-full lg:w-1/2'>
                        <img className='h-[90px] w-[75px]' src="https://i.postimg.cc/D0cVd3y4/logo1.png" alt="" />
                        <h2 className='text-shadow text-[#331A15] font-normal Rancho text-5xl pt-6 pb-8'>Espresso Emporium</h2>
                        <p className='Raleway font-normal text-xl text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex items-center gap-5 py-8'>
                            <BsFacebook className='text-[40px]'></BsFacebook>
                            <AiFillTwitterCircle className='text-[40px]'></AiFillTwitterCircle>
                            <AiFillInstagram className='text-[40px]'></AiFillInstagram>
                            <AiFillLinkedin className='text-[40px]'></AiFillLinkedin>
                        </div>
                        <h3 className='text-shadow text-[#331A15] Rancho text-[45px] pb-8'>Get in Touch</h3>
                        <h3 className='text-xl '><BsTelephoneFill className='inline mr-6'></BsTelephoneFill><span className='text-[#1B1A1A] font-normal text-xl Raleway'>+88 01533 333 333</span></h3>
                        <h3 className='text-xl '><AiOutlineMail className='inline mr-6'></AiOutlineMail><span className='text-[#1B1A1A] font-normal text-xl Raleway'>+88 01533 333 333</span></h3>
                        <h3 className='text-xl '><IoLocationSharp className='inline mr-6'></IoLocationSharp><span className='text-[#1B1A1A] font-normal text-xl Raleway'>+88 01533 333 333</span></h3>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='text-shadow text-[#331A15] font-normal text-5xl Rancho'>Connect with Us</h2>
                        <form>
                            <input className='w-full px-3 py-3 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent' type="text" placeholder='Name' />
                            <input className='w-full px-3 py-3 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent' type="text" placeholder='Email' />
                            <textarea className='w-full px-3 py-3 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent' name="" id="" cols="" rows="" placeholder='Message'></textarea>
                            <input className='text-[#331A15] Rancho text-2xl font-normal border border-[#331A15] rounded-full py-2 px-5 mt-5' type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;