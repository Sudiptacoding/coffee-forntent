import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { BsCup } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import { HiMiniEye } from "react-icons/hi2";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { RxCross2 } from "react-icons/rx";

const Home = () => {
    const loaderData = useLoaderData()
    const [data, setData] = useState(loaderData)
    const [instaPhoto, setInstaPhoto] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        fetch('https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/instgramphoto')
            .then((response) => response.json())
            .then((json) => setInstaPhoto(json));
    }, [loader])

    const handelItemDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "To delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/coffee/${id}`, {
                    method: 'DELETE',
                })
                    .then((response) => response.json())
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const newValue = data.filter(item => item._id !== id)
                        setData(newValue)
                    });
            }
        })
    }

    const handelPhotoUplode = async () => {
        setLoader(false)
        Swal.fire({
            title: 'Enter your Image URL',
            input: 'text',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                const photo = result.value;
                const data = { photo }
                fetch('https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/instgramphoto', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then(() => {
                        setLoader(true)
                        swal("Good job!", "You clicked the button!", "success");
                    });
            }
        })
    }

    const handelInstraPhotoDelet = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "To delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/instgramphoto/${id}`, {
                    method: 'DELETE',
                })
                    .then((response) => response.json())
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const newValue = instaPhoto.filter(item => item._id !== id)
                        setInstaPhoto(newValue)
                    });
            }
        })
    }

    const handelInstraPhotoUpded = (id) => {
        setLoader(false)
        fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/instgramphoto/${id}`)
            .then((response) => response.json())
            .then((json) => {
                Swal.fire({
                    title: 'Enter your Image URL',
                    input: 'text',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        const photo = result.value;
                        const data = { photo }
                        fetch(`https://coffyshop-backend-pp6jslwjl-sudiptacoding.vercel.app/instgramphoto/${json._id}`, {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                            .then((response) => response.json())
                            .then(() => {
                                setLoader(true)
                                swal("Good job!", "You clicked the button!", "success");
                            });
                    }
                })

            });
    }
    return (
        <div>
            <div><Banner></Banner></div>
            {/* service area */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[39px] lg:px-[300px] bg-[#ECEAE3] lg:py-[55px] p-7 text-center lg:text-left'>
                <Services img={'https://i.postimg.cc/0QnqRKhH/1.png'} h1={'Awesome Aroma'} p={'You will definitely be a fan of the design & aroma of your coffee'}></Services>
                <Services img={'https://i.postimg.cc/1RL24Hs1/2.png'} h1={'High Quality'} p={'We served the coffee to you maintaining the best quality'}></Services>
                <Services img={'https://i.postimg.cc/htnY1tXC/3.png'} h1={'Pure Grades'} p={'The coffee is made of the green coffee beans which you will love'}></Services>
                <Services img={'https://i.postimg.cc/R0sbm1X8/4.png'} h1={'Proper Roasting '} p={'Your coffee is brewed by first roasting the green coffee beans'}></Services>
            </div>
            {/* our popular production */}
            <div className='pb-12 popular-bg'>
                <div className='text-center lg:pt-[120px] lg:pb-[48px]'>
                    <h5 className='Raleway font-normal text-xl text-[#1B1A1A]'>--- Sip & Savor ---</h5>
                    <h2 className='text-shadow text-[#331A15] Rancho  lg:text-[55px] text-3xl font-md pb-5 pt-2'>Our Popular Products</h2>
                    <Link to='/addcoffee'> <button className='Rancho text-2xl text-white font-normal bg-[#E3B577] rounded-[5px] border-2 hover:bg-transparent border-[#331A15] px-[22px] py-[9px] '><span className='text-shadow'>Add Coffee </span><span><BsCup className='inline ml-[10px] text-[#331A15] '></BsCup></span></button></Link>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 2xl:px-[300px]'>
                        {
                            data?.map((item) => {
                                return <div key={item._id} className='flex justify-between items-center bg-[#f5f4f1b8] rounded-[10px] p-8 flex-col lg:flex-row lg:gap-0 gap-5'>
                                    <div><img className='w-[193px] h-[239px]' src={item.photo} alt="" /></div>
                                    <div className='flex-1 pl-10'>
                                        <h1 className='text-xl Raleway'><span className='text-[#1B1A1A] font-semibold text-xl'>Name: </span>{item?.name}</h1>
                                        <h1 className='py-3 text-xl Raleway'><span className='text-[#1B1A1A] font-semibold text-xl'>Chef: </span>{item?.chef}</h1>
                                        <h1 className='text-xl Raleway'><span className='text-[#1B1A1A] font-semibold text-xl'>Price: </span>{item?.price} Taka</h1>
                                    </div>
                                    <div className='flex flex-row gap-4 lg:flex-col'>
                                        <Link to={`moredetails/${item._id}`}><div className='bg-[#D2B48C] p-[10px] rounded-md cursor-pointer hover:bg-pink-400 duration-150'><HiMiniEye className='text-white '></HiMiniEye></div></Link>
                                        <Link to={`productupded/${item._id}`}><div className='bg-[#3C393B] p-[10px] rounded-md cursor-pointer hover:bg-pink-400 duration-150'><MdOutlineModeEditOutline className='text-white '></MdOutlineModeEditOutline></div></Link>
                                        <div onClick={() => handelItemDelete(item._id)} className='bg-[#EA4744] p-[10px] rounded-md cursor-pointer hover:bg-pink-400 duration-150'><MdDelete className='text-white '></MdDelete></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* instgram */}

            <div>
                <div className='text-center lg:pt-[120px] lg:pb-[48px]'>
                    <h5 className='Raleway font-normal text-xl text-[#1B1A1A]'>Follow Us Now</h5>
                    <h2 className='text-shadow text-[#331A15] Rancho  lg:text-[55px] text-3xl font-md pb-5 pt-2'>Follow on Instagram</h2>
                    <button onClick={handelPhotoUplode} className='Rancho text-2xl text-white font-normal bg-[#E3B577] rounded-[5px] border-2 hover:bg-transparent border-[#331A15] px-[22px] py-[9px] '><span className='text-shadow'>Add photo for instgram </span></button>
                </div>
                <div>
                    <div className='grid xl:grid-cols-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 2xl:px-[300px] lg:py-10 p-10'>
                        {
                            instaPhoto?.map((item) => {
                                return <div key={item._id}>
                                    <div className="relative overflow-hidden">
                                        <div className="relative group">
                                            <img src={item?.photo} alt="" className="w-full rounded-md h-[350px] transform transition-transform duration-300 group-hover:scale-110" />
                                            <div className="absolute inset-0 flex items-start justify-end gap-1 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                                                <div onClick={() => handelInstraPhotoUpded(item._id)} className='pt-2 pr-2 cursor-pointer'>
                                                    <MdOutlineModeEditOutline className='text-xl font-bold text-white'></MdOutlineModeEditOutline>
                                                </div>
                                                <div onClick={() => handelInstraPhotoDelet(item._id)} className='pt-2 pr-2 cursor-pointer'>
                                                    <RxCross2 className='text-xl font-bold text-white'></RxCross2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;