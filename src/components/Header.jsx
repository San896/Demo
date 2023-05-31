import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthComp';
import style from "./Header.module.css";

function Header(props) {
    const  { user, logout } =useContext(AuthContext)
    return (
        <div className = {style.divhead}>
           <h1> Silicon - Commerce</h1>
            <header> 
                  <Link to='/'> <button className = {style.btn}> home </button></Link> 

                  <Link to='/commerce'> <button className = {style.btn}> Store </button></Link>  
                  
                  {user.isAuthenticated ? <Link to='/profile'> <button className = {style.btn}> Profile </button></Link>: ''}

                 {!user.isAuthenticated ?
                  <Link to='/login'> <button className = {style.btn}> LogIn </button></Link> : 
                  <button onClick= {()=> logout()} className = {style.btn}> LogOut </button> }
                  
            </header> 
        </div>
    );
}

export default Header;