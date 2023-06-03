import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthComp';
import style from "./Header.module.css";
import logosolo  from '../imagenes/logosolo.png'


function Header(props) {
    
    const  { user, logout } =useContext(AuthContext)
    const getUserStorage = JSON.parse(window.sessionStorage.getItem('user')) 
    
    return (
        <div className = {style.divhead}>
           <h1>  Silicon - Commerce <img src={logosolo}alt="" /></h1>
            <header> 
                  <NavLink to='/'  >
                        {({ isActive }) => (
                            <button className = {isActive ? style.btnactive : style.btn}> home </button>
                        )}
                 </NavLink> 

                  <NavLink to='/commerce'> 
                        {({ isActive }) => (
                            <button className = {isActive ? style.btnactive : style.btn}> Store </button>
                        )}
                    </NavLink>  
                  
                  {user.isAuthenticated || getUserStorage ? 
                    <NavLink to='/profile'>
                        {({ isActive }) => (
                            <button className = {isActive ? style.btnactive : style.btn}> Profile </button>
                        )}
                     </NavLink>
                    : ''}

                 { !user.isAuthenticated && !getUserStorage ?
                    <NavLink to='/login'>
                        {({ isActive }) => (
                            <button className = {isActive ? style.btnactive : style.btn}> LogIn </button>
                        )}
                    </NavLink> 
                  :  <button onClick= {()=> logout() } className = {style.btn}> LogOut </button> } 
                  
            </header> 
        </div>
    );
}

export default Header;