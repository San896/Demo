import React, { useContext, useEffect } from 'react';
import style from './Profile.module.css'
import img from '../imagenes/img.png'
import { AuthContext } from '../auth/AuthComp';
import { useNavigate } from "react-router-dom";

export  function Profile(props) {
  
  const  { user, logout } =useContext(AuthContext)
  const navigate = useNavigate()

      useEffect (() => {
        if(!user.isAuthenticated){
          alert('error al iniciar sesion')
          navigate('/login')
      }
      },{})

    return (
        <div className={style.gral}>

          <div className={style.divimg}>
            <img src={img} alt="img failed" height='227rem' width='227rem'/>
          </div>
          
         
          <div className={style.info}>
            <label> Nombre </label>
             <h3> first_name juancho </h3>
            <label> Apellido </label>
             <h3> last_name juanchooo </h3>
            <label> Email </label>
             <h3> username o email sadasd@silicon.com </h3>
            <label> Tipo </label>
             <h3> groups.name resident </h3>
          </div>
             
          
        </div>
    );
}

