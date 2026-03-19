import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
// import button from 'daisyui/components/button';
import { FaCircleUser } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const links = <>
        <NavLink to="/"><li className=' text-[18px]'>Home</li></NavLink>
        <NavLink to="/profile"> <li className='ml-5 text-[18px]'>Profile</li></NavLink>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {

                toast.success('Log out Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className="text-accent font-bold text-2xl">Toy Topia</a>
                {/* {user && user.email} */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/profile">    {
                    user ? (<div className='relative group'>
                        <img className='rounded-full  w-15 h-15 mr-5 hover: user.displayName' src={user.photoURL} alt="" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm bg-gray-700 text-white px-2 
                        py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {user.displayName || user.email}
                        </span>
                    </div>) :
                        (<FaCircleUser className='mr-5 text-gray-400' size={40} />)
                }  </Link>



                {
                    user ? <button onClick={handleLogOut} className="btn btn-accent  btn-outline px-8 py-2"> Logout</button> :
                        <Link to="/auth/login" className="btn btn-accent btn-outline px-8 py-2">Login</Link>

                }

            </div>
        </div>
    );
};

export default Navbar;