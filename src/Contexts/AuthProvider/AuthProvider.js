import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;