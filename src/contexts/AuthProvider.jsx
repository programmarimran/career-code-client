import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContexts';
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                
            }
            else{
                setUser(null)
            }
setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const userInfo={
       createUser,
       loading,
       signInGoogle,
       loginUser,
       logOutUser,
       user
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;