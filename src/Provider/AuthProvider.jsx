import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth";

export const AuthContext =createContext()

const googleProvider=new GoogleAuthProvider()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading]=useState(true)
    console.log(user,loading)
    const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }
    const updateUserEmail =(updateEmail)=>{
        return updateEmail(auth.currentUser ,updateEmail)
    }
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        googleSignIn,
        loading,
        setLoading,
        updateUser,
        updateUserEmail
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;