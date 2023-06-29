import AuthContext from '@/contexts/AuthContext';
import auth from '@/firebase/firebase.auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { Children, useEffect, useState } from 'react';

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate = (user,name,photo) => {
        setLoading(true)
        return updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[])

const AuthValue = {
    user,loading,createUser,signIn,profileUpdate,logOut
}
    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;