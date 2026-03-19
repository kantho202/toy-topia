import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoMdPricetags } from 'react-icons/io';
import { Link, } from 'react-router';
import Aos from 'aos';
import "aos/dist/aos.css"
const ToyCard = ({ toy }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    // const {id}= useParams()
    const { toyId, toyName, pictureURL, availableQuantity, price, rating } = toy
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className='p-6 bg-base-200 rounded-[10px] space-y-3 hover:scale-105 transition ease-in-out duration-3000 ' >
            <img  data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000" className='h-[300px] w-full object-cover rounded-[10px]  ' src={pictureURL} alt="" />
            <span className='font-bold text-[20px]  '>{toyName}</span>
            {/* <p className='text-base font-semibold pt-4'>{description}</p> */}
            <p className='font-semibold text-base mt-2'>Available Quantity:{availableQuantity}</p>
            <div className='font-semibold text-base flex justify-between  '>
                <p className='flex items-center '> <IoMdPricetags className='' /><span className='px-2'> Price : </span>{price}$</p>
                <p className='flex justify-center items-center'> <FaStar /><span className='px-2'> Rating:</span>{rating}</p>
            </div>
            <Link to={`/toys-details/${toyId}`} className='btn w-full bg-accent text-white'>View More</Link>
        </div>
    );
};

export default ToyCard;