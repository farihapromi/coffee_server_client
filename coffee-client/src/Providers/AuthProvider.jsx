import React, { createContext, useState } from 'react'
 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    //user create
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passsword)
    }
    const userInfo={
        user,
        loading,
        createUser,

    }
  return (
   <AuthContext.Provider value={userInfo}>
    {children}

   </AuthContext.Provider>
  )
}

export default AuthProvider
