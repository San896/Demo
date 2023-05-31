import { createContext, useContext, useState } from "react"
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import { Profile } from '../components/Profile'
import Rutas from "../rutas/Rutas";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export const AuthContext = createContext();

// export const AuthData = () => useContext(AuthContext);


export const AuthComp = () => {

     const [ user, setUser ] = useState({email: "", password:"", isAuthenticated: false})
     const navigate = useNavigate()

     const  login = async (email, password) => {
          
                const axiosPost = await axios.post(
                    'http://demotest.silicon-access.com/fapi/auth/login/',
                    {
                         username: email,
                         password,
                    }
                    )
                    if(!axiosPost){
                         throw new Error('failed login')
                    }
                    const user1 = axiosPost.data.user
                     setUser({user1, isAuthenticated: true})
                     console.log('user')
                    navigate('/profile') 
               
               }


          // return new Promise((resolve, reject) => {

          //      if (password) {
          //           setUser({email: email, isAuthenticated: true})
          //           resolve("success")
          //      } else {
          //           reject("Incorrect password")
          //      }
          // })
          
          
     
     const logout = () => {

          setUser({...user, isAuthenticated: false})
          navigate('/login')
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}} >
                    <>
                        <Header/>
                        <Rutas/>
                    </>
                    
               </AuthContext.Provider>
          
     )

}