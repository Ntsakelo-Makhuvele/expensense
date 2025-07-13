import { createContext, useContext, useEffect, useState } from "react";
import { type User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./UserAuth";

const AuthContext = createContext<{user: User | null,loading:boolean}>({
    user:null,
    loading:true
})

export const AuthProvider = ({children}:any) => {
   const [user,setUser] = useState<User | null>(null);
   const [loading,setLoading] = useState(true);

   useEffect(() => {
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        console.log("Auth listener starting...");
        console.log("onAuthStateChanged triggered:", firebaseUser);
        setUser(firebaseUser);
        setLoading(false);
      })

      return () => unsub();
   },[])
 
   return (
    <AuthContext.Provider value={{user,loading}}>
        {children}
     </AuthContext.Provider>   
   )

}

export const useAuth = () => useContext(AuthContext);