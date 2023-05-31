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
    },[])

    return (
        <div>
            proximamnete
        </div>
    );
}

export default Carrito;