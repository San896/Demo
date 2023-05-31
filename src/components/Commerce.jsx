import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthComp';



function Commerce(props) {

    const  { user } =useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user.isAuthenticated){
            navigate('/login')
        }
    },[])

    return (
        <div>
            <p>la tienda aaa</p>
        </div>
    );
}

export default Commerce;