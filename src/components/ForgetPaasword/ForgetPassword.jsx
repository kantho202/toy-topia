import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ForgetPassword = () => {
    const {user}=use(AuthContext)
    return (
        <div className='flex justify-center items-center min-h-screen '>
                   <div className="card bg-base-100 w-full max-w-lg shrink-0 px-3  shadow-2xl">
                       <h1 className='text-2xl font-bold text-center pt-10'>Forget Password</h1>
                       <form  className="card-body ">
                           <fieldset className="fieldset">
                               {/* email */}
                               <label className="label">Email</label>
                               {
                                user && user.email
                               }
                               <input type="email" name='email' className="input w-full" placeholder="Email" required />
                               <label className="label">Password</label>
                               <input type="password" name='password' className="input w-full" placeholder="Password" required />
                            
                               <a href='https://mail.google.com/mail/u/0/#inbox' className="btn btn-accent mt-4 mb-4">Reset Button</a>
                               
                           </fieldset>
                       </form>
                   </div>
               </div>
    );
};

export default ForgetPassword;