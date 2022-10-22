import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [loading , setLoading] = useState(true)

  const [user, setUser] = useState(null);
///sing in with google ////
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  useEffect(()=>{
 setLoading(true)
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
     } )

   return  ()=>{
    unsubscribe()

     }

  },[])

  const info = { googleLogin, setUser, user,loading};

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
