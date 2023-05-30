import { createContext, useContext, useState } from "react"
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import { Profile } from '../components/Profile'
import Rutas from "../rutas/Rutas";


const AuthContext = createContext();

export const AuthData = () => useContext(AuthContext);


export const AuthComp = () => {

     const [ user, setUser ] = useState({email: "", password:"", isAuthenticated: false})

     const login = (email, password) => {

          // Make a call to the authentication API to check the username
          
        //   return async () => await axios.post(
        //     'http://demotest.silicon-access.com/fapi/auth/login/',
        //    {
        //      username:"noreply+challenge@silicon-access.com",
        //      password:"bienvenido123"
        //    })
        //    .then((res) => setUser({res, isAuthenticated: true })).catch((error) => console.log('err:', error));

          return new Promise((resolve, reject) => {

               if (password) {
                    setUser({name: email, isAuthenticated: true})
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