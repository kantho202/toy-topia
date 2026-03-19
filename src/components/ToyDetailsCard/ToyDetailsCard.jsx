import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoMdPricetags } from 'react-icons/io';
import { Link } from 'react-router';

const ToyDetailsCard = ({toys}) => {
    const {pictureURL,toyName,description,availableQuantity,price,rating}=toys
    return (
       
        <div>
             <h2 className='font-bold text-2xl py-8 text-center'>Toys Details</h2>
            <div className='p-6 bg-base-200 rounded-[10px] space-y-4  '>
            <img className='h-[300px] w-full object-cover rounded-[10px]' src={pictureURL} alt="" />
            <span className='font-bold text-2xl '>{toyName}</span>
            <p className='text-base font-semibold pt-4'>{description}</p>
            <p className='font-semibold text-base '>Available Quantity:{availableQuantity}</p>
           <div className='font-semibold text-base flex justify-between  '>
                           <p className='flex items-center '> <IoMdPricetags className='' /><span className='px-2'> Price : </span>{price}$</p>
                           <p className='flex justify-center items-center'> <FaStar /><span className='px-2'> Rating:</span>{rating}</p>
                       </div>
           <Link to="/" className='btn bg-red-600 rounded-[5px] text-white' >Back to categories</Link>
        </div>
        </div>
    );
};

export default ToyDetailsCard;