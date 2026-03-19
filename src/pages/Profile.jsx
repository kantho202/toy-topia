import React, { use, useState, } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCircleUser } from 'react-icons/fa6';
import { toast } from 'react-toastify';


const Profile = () => {


    const {  user, setUser, updateUser,  } = use(AuthContext)
    const [editMode, setEditMode] = useState(false)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(photo, email, password)
      
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        setEditMode(false)
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    })
               
           
           
    }
    const handleSaveChange=()=>{
        toast.success('Profile update successfully')
    }
    return (

        <div className=' flex justify-center items-center  mt-5 lg:mx-auto py-12 max-w-6xl '>
            <div className=" flex-row lg:flex justify-center   bg-base-100 w-full items-center ">

                <div className='flex justify-center items-center '>
                    {
                        user ? <img className='flex justify-center  items-center  h-[350px] rounded-[10px] mr-5  object-cover' src={user.photoURL} alt="" /> :
                            <FaCircleUser className=' text-gray-400 flex justify-center items-center mx-auto ' size={350} />
                    }
                </div>



                <form onSubmit={handleRegister} className="card-body flex-1 w-full lg:w-1/2    ">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label text-xl font-bold">Full name</label>
                        {/* {
                            user && user.displayName
                        } */}

                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                
                                onChange={name}
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                                required
                            />
                        ) : (
                            <p className="text-lg font-semibold">{user?.displayName || "No Name Set"}</p>
                        )}
                        {/* <input type="text" name='name' className="input w-full" placeholder="Enter your Name" required /> */}

                        {/* photo */}
                        <label className="label font-bold text-xl ">Photo URL</label>
                       <div className=''>
                         {
                            editMode ? (
                                <input 
                                type="text"
                                name='photo'
                            
                                className='input input-bordered w-full mx-auto '
                                placeholder='Enter your photo url'
                                />
                            ) :( 
                                <p className='text-lg font-semibold'>{user?.photoURL || "No phot url"} </p>
                            )
                        }
                       </div>
                       
                        <label className="label font-bold text-xl">Email</label>
                       <div className='text-lg font-semibold'>
                         {
                            user ? <span>{user.email}</span> :"No email found"
                        }
                       </div>

                      
                        <div className='mt-6 flex gap-6'>
                            {editMode ? (
                                <>
                                    <button onClick={handleSaveChange} type='submit' className='btn btn-success flex-1'>
                                        Save Change 
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setEditMode(false) 
                                        }}
                                        className='btn btn-ghost flex-1'
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button type='button'
                                    onClick={() => { setEditMode(true) }}
                                    className='w-full btn btn-accent '
                                >
                                    Update Profile
                                </button>
                            )}
                        </div>

                     



                    </fieldset>
                </form>
            </div>
        </div>



    );

  
};

export default Profile;