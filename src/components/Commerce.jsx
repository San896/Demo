import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthComp';
import products from '../products.json'
import Card from './Card';
import style from './Commerce.module.css'



function Commerce(props) {

    const  { user } =useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user.isAuthenticated){
            alert('Tenes que iniciar sesion para entrar')
            navigate('/login')
        }
    },[])

    return (
        <div className={style.cards}>
            
            { products.results.map( p => {
                return (
                <Card 
                    name = {p.name}
                    detail = {p.detail}
                    image = {p.image}
                    price = {p.price}
                    stock = {p.stock}                
                />)
            })}

        </div>
    );
}

export default Commerce;