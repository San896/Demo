import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthComp';
import Card from './Card';
import style from './Commerce.module.css'
import { orderName, orderPrice } from '../helpers';
import SearchBar from './SearchBar';
import { IoReload } from 'react-icons/io5';
import { type } from '@testing-library/user-event/dist/type';



function Commerce(props) {

    const  { user,getLs, setUser, prods, setProds, searchName } =useContext(AuthContext)
    const navigate = useNavigate()
    

    useEffect(() => {
        const user1 = getLs()
        if(user1 && !user.isAuthenticated){
          setUser({user1, isAuthenticated:  true})
          
        }else if(!user.isAuthenticated && !user1){
            alert('Tenes que iniciar sesion para entrar')
          navigate('/login')
      } 
      
    },[user, prods, setProds])


    function handleOrder(e){
        e.preventDefault();
       const ordenado = orderName(prods, e.target.value)
       setProds(orderName(prods, e.target.value) )
    }


    function handlePrice(e){
        e.preventDefault();
       const ordenado = orderPrice(prods, e.target.value)
       setProds(ordenado)
    }


    function handleClick(e) {
        searchName()
    }

    return (
        <div className={style.cards}>

            <button className={style.btnrecargar} onClick={e => handleClick(e)}>
              <IoReload/>
             </button> 

            <SearchBar/>

            <section className={style.section}> 
                <select className={style.selects} onChange={e => handleOrder(e)} >
                    <option> Order </option>
                    <option value="asc"> A - Z </option>
                    <option value="desc"> Z - A </option>
                </select>
        
                <select className={style.selects}  onChange={e => handlePrice(e)}>
                    <option> Price </option>
                    <option value="asc"> Higher </option>
                    <option value="desc"> Lower </option>
                </select>
            </section>

            
            {   prods?.map( p => {
                return (
                <Card 
                    key={p.name}
                    name = {p.name}
                    detail = {p.detail}
                    image = {p.image}
                    price = {p.price}
                    stock = {p.stock}                
                />) 
            }) 
            }

        </div>
    );
}

export default Commerce;