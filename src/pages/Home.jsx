import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from '../components/ToyCard/ToyCard';
import Slider from '../components/Slider/Slider';

const Home = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div className='w-11/12 mx-auto  space-y-10 py-10'>
            <Slider></Slider>
            <h1 className='text-2xl font-bold text-center'>Popular Toys</h1>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
             {
            data.map(toy => <ToyCard toy={toy}></ToyCard> )
           }
          </div>
        </div>
    );
};

export default Home;