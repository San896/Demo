import { createContext, useContext, useState } from "react"
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import { Profile } from '../components/Profile'
import Rutas from "../rutas/Rutas";


export const AuthContext = createContext();

// export const AuthData = () => useContext(AuthContext);


export const AuthComp = () => {

     const [ user, setUser ] = useState({email: "", password:"", isAuthenticated: false})

     const login = (email, password) => {



          return new Promise((resolve, reject) => {

               if (password) {
                    // setUser({email: email, isAuthenticated: true})
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })
          
          
     }
     const logout = () => {

          setUser({...user, isAuthenticated: false})
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                        <Header/>
                        <Rutas/>
                    </>
                    
               </AuthContext.Provider>
          
     )

}