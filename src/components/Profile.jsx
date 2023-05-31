import React from 'react';
import style from './Profile.module.css'
import img from '../imagenes/img.png'

export  function Profile(props) {
    return (
        <div className={style.gral}>
          <h1> Perfil </h1>

          <div>
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

