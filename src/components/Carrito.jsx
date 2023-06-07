import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthComp';

function Carrito(props) {

    const  { user } =useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        
        if(!user.isAuthenticated){
            alert('Tenes que iniciar sesion para entrar')
            navigate('/login')
        }
    },[user])

    return (
        <div>
            <h1>proximamnete</h1>
            <ul>
                <li>Detalle compra</li>
                <li> Agregar otro prducto</li>
                <li> Ir a pagar </li>
                <li> Cancelar </li>
            </ul>
        </div>
    );
}

export default Carrito;