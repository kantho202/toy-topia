import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import LogIn from '../../pages/LogIn';

const AuthLayout = () => {
    return (
       <div>
         <div className='w-11/12 mx-auto min-h-screen  py-4'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
               
                 <Outlet></Outlet>   
            </main>
           
        </div>
         <footer>
                <Footer></Footer>
            </footer>
       </div>
    );
};

export default AuthLayout;