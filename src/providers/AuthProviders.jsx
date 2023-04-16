import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null) /* some names UserContext */

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()


const AuthProviders = ({ children }) => {
    //TODO ekhane ja cai full site e share korbo 
    // const user = { displayName: 'Sagor nodi' }
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () =>{ /* must name logOut cz fb has signOut */
        return signOut(auth)
    }

    // observe auth state change
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;