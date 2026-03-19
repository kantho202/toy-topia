import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState("")
    const { logIn, googleSignIn } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(error)
                 setError(errorCode);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
           .catch(error => {
                
                console.log(error);
               
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 px-3  shadow-2xl">
                <h1 className='text-2xl font-bold text-center pt-10'>Log in your Account</h1>
                <form onSubmit={handleLogIn} className="card-body ">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" required />
                        <Link to="/auth/forget-password"><a className="link link-hover">Forgot password?</a></Link>
                         {
                            error && <p className='text-red-500 font-semibold'>{error}</p>
                        }
                        {/* Google */}
                        <button type='text' onClick={handleGoogleSignIn} className="btn mt-4 bg-white text-black border-0 ">
                            <FcGoogle size={22} /> Login with Google
                        </button>
                        <button type='submit' className="btn btn-accent mt-4">Login</button>
                        <p className='font-semibold text-center text-base mt-3'>Don't have an account ? <Link to="/auth/register" className='text-red-700'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LogIn;