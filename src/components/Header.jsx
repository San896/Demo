import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

function Header(props) {
    return (
        <div className = {style.divhead}>
           <h1> Silicon - Commerce</h1>
            <header> 
                  <Link to='/'> <button className = {style.btn}> home </button></Link> 
                  <Link to='/commerce'> <button className = {style.btn}> Store </button></Link> 
                 <Link to='/profile'> <button className = {style.btn}> Profile </button></Link>
                 <Link to='/login'> <button className = {style.btn}> LogIn </button></Link>
            </header> 
        </div>
    );
}

export default Header;