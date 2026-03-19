import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const { createUser, setUser, googleSignIn, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState(false)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        if (name.length < 6) {
            return setNameError("Name should be 6 character")
        }
        else {
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(photo, email, password)

        const length6Pattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const specialCharacter = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

        if (!length6Pattern.test(password)) {
            console.log('password did not match')
            setPasswordError('Password must be 6 character longer')
            return
        }

        if (!casePattern.test(password)) {
            setPasswordError('Password at least one upper case ')
            return;
        }

        if (!specialCharacter.test(password)) {
            setPasswordError('Password at least one special Character')
            return;
        }
        // reset status
        setNameError("")
        setPasswordError("")
        setSuccess(false)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })

                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode)
                setPasswordError(errorCode)
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleTogglePasswordShow = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 px-3  shadow-2xl">
                <h1 className='text-2xl font-bold text-center pt-10'>Register your Account</h1>
                <form onSubmit={handleRegister} className="card-body px- ">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Your name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter your Name" required />
                        {
                            nameError && <p className='font-bold text-red-500'>{nameError}</p>
                        }
                        {/* photo */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter your photo url" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        {/* password */}
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input w-full" placeholder="Password" required />

                            <button onClick={handleTogglePasswordShow} className="absolute  bottom-2 right-2 btn btn-xs">
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}</button>

                        </div>
                        {
                            passwordError && <p className='font-bold text-red-500'>{passwordError}</p>
                        }
                        {
                            success && <p className='font-bold text-green-500'>Account Create Successfully</p>
                        }
                        {/* Google */}
                        <button onClick={handleGoogleSignIn} className="btn mt-4  bg-white text-black border-0 ">
                            <FcGoogle size={22} /> Login with Google
                        </button>

                        <button className="btn btn-accent mt-4">Register</button>
                        <p className='font-semibold text-base mt-3 text-center'>Already have an account ? <Link to="/auth/login" className='text-red-700'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;