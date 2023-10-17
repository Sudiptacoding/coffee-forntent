import React from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Addcoffy = () => {
    const navigate = useNavigate()
    const handelAddCoffee = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const chef = e.target.chef.value
        const supplier = e.target.supplier.value
        const taste = e.target.taste.value
        const category = e.target.category.value
        const details = e.target.details.value
        const photo = e.target.photo.value
        const price = e.target.price.value
        const data = { name, chef, supplier, taste, category, details, photo, price }
        fetch('https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/coffee', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.acknowledged) {
                    swal("Good job!", "Product added sucessfully!", "success");
                    navigate('/')
                }
            });
    }

    return (
        <div className='addcoffee-bg'>
            <Link to='/'><div className='lg:px-[300px] py-12 cursor-pointer'><h1 className='text-shadow Rancho text-[#374151] text-3xl font-normal'><span><HiOutlineArrowNarrowLeft className='inline mr-3'></HiOutlineArrowNarrowLeft></span>Back to home</h1></div></Link>
            <div className="flex items-center justify-center lg:px-[300px]">
                <form onSubmit={handelAddCoffee} className="grid bg-[#F4F3F0] rounded-lg shadow-xl py-[70px] ">

                    <div className="flex justify-center ">
                        <div className="flex">
                            <div className='text-center'>
                                <h1 className='text-[#374151] font-normal text-[45px] Rancho text-shadow'>Add New Coffee</h1>
                                <p className='Raleway text-[18px] text-[#5d5c5c] px-28 py-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 md:gap-8 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Name</label>
                            <input name='name' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee name" required />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Chef</label>
                            <input name='chef' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee chef" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 md:gap-8 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Supplier</label>
                            <input name='supplier' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee supplier" required />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Taste</label>
                            <input name='taste' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee taste" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 md:gap-8 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Category</label>
                            <input name='category' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee category" required />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Details</label>
                            <input name='details' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter coffee details" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">price</label>
                        <input name='price' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="number" placeholder="Enter coffee price" required />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="text-xs font-semibold text-gray-500 uppercase md:text-sm text-light">Photo</label>
                        <input name='photo' className="px-3 py-3 mt-1 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-primary focus:border-transparent" type="text" placeholder="Enter photo URL" required />
                    </div>
                    <div className="grid grid-cols-1 mt-5 mx-7 ">
                        <input type="submit" className='Rancho cursor-pointer py-[13px] bg-[#D2B48C] border-2 border-[#331A15] text-2xl rounded-[5px]' value="Add Coffee" />
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default Addcoffy;