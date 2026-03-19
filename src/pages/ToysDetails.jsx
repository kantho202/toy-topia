import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useLoaderData, useParams,  } from 'react-router';
import ToyDetailsCard from '../components/ToyDetailsCard/ToyDetailsCard';

const ToysDetails = () => {
    const {id} =useParams()
    // console.log(typeof id)
    const userId =parseInt(id)
    // console.log(typeof userId)
    const data = useLoaderData()
    const [toys,setToys] =useState({})
    console.log(data,toys,id)
    useEffect(()=>{
        const newDetails =data.find((singleToy)=>singleToy.toyId ===userId)
        setToys(newDetails)
    },[data,userId])
    return (
        <div className=''>
            <div className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
                <div>
                    
                        <ToyDetailsCard toys={toys}  ></ToyDetailsCard>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ToysDetails;