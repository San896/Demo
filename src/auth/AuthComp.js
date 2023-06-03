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

     const checkUser = (user1) => {
          const storage = sessionStorage.getItem('user')
          if(!user.isAuthenticated && !storage){
               setUser({user1, isAuthenticated: true})
               sessionStorage.setItem('user', user)
               navigate('/profile') 
          }
          if(!user.isAuthenticated && storage){
               setUser(storage)
               navigate('/profile') 
          }
          if(user.isAuthenticated || storage){
               navigate('/profile') 
          }
     }

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

                    // const user1 = user: {
                    //      username: noreply+challenge@silicon-access.com,
                    //      first_name: USER,
                    //      last_name: CHALLENGE,
                    //      email: "noreply+challenge@silicon-access.com",
                    //      groups: [
                    //      {
                    //      name: "RESIDENT",
                    //      }
                    //      ],
                    //      userprofile: null,
                    //      }

                    setUser({user1, isAuthenticated: true})
                    window.sessionStorage.setItem('user', JSON.stringify(user1))
                    // sessionStorage.setItem('user', JSON.stringify(user))
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
          window.sessionStorage.removeItem('user')
          navigate('/login')
     }

     const getLs = () => {
          const userLs = JSON.parse(window.sessionStorage.getItem('user'))
          if(userLs) return userLs
     }

     return (
          
               <AuthContext.Provider value={{user, setUser, login, logout, getLs}} >
                    <>
                        <Header/>
                        <Rutas/>
                    </>
                    
               </AuthContext.Provider>
          
     )

}