import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useRouteError } from 'react-router';
import ErrorPages from '../../pages/ErrorPages';

const HomeLayout = () => {
    const error =useRouteError()
    return (
        <div>
            <header className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </header>
            <main>
               {
                error ? <ErrorPages></ErrorPages>  :  <Outlet></Outlet>
               }
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;