import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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

    const authInfo = {
        user,
        createUser,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;