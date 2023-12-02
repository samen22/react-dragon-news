import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);



const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(null);


    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user is the on auth change', currentUser);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe(); 
        }
    }, [])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;