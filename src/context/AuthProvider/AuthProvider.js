import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  

  const [user, setUser] = useState(null);

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(()=>{

     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
     } )

   return  ()=>{
    unsubscribe()

     }

  },[])

  const info = { googleLogin, setUser, user };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
