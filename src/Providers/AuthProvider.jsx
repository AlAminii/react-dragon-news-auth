import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from "../firebase/firebase.congig";

export const  AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLOading] = useState(true)

    const createUser = (email, password)=>{
        setLOading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLOading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  const logOut = () =>{
    setLOading(true)
    return signOut(auth)
  }

    useEffect(() =>{

        const unsubcribe = onAuthStateChanged(auth, currentUser =>{

            console.log('user the on auth state changed', currentUser)
            setUser(currentUser)
            setLOading(false)
        })

        return () =>{
            unsubcribe()
        }

    }, [])

    
    const authInfo = {
        user,
    loading,
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