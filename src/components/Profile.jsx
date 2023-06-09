import React, { useContext, useEffect } from 'react';
import style from './Profile.module.css'
import img from '../imagenes/img.png'
import { AuthContext } from '../auth/AuthComp';
import { useNavigate } from "react-router-dom";

export  function Profile(props) {
  
  const  { user, setUser, getLs } =useContext(AuthContext)
  const navigate = useNavigate()

      useEffect (() => {
        const user1 = getLs()
        if(user1 && !user.isAuthenticated){
          setUser({user1, isAuthenticated:  true})
          navigate('/profile')
        }else if(!user.isAuthenticated && !user1){
          alert('para tener un perfin inicia sesion')
          navigate('/login')
      }
      },[user])

    return (
        <div className={style.gral}>

          <div className={style.divimg}>
            <img src={img} alt="img failed" height='227rem' width='227rem'/>
          </div>
          
         
          <div className={style.info}>
            <label> Nombre </label>
             <h3> {user.user1?.first_name} </h3>
            <label> Apellido </label>
             <h3> {user.user1?.last_name} </h3>
            <label> Email </label>
             <h3>  {user.user1?.email} </h3>
            <label> Tipo </label>
             <h3> {user.user1?.groups[0].name} </h3>
          </div>
             
          
        </div>
    );
}

