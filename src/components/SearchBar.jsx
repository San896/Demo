import React, { useContext } from "react";
import { useState } from'react';
import style from './SearchBar.module.css'
import { ImSearch } from 'react-icons/im';
import { AuthContext } from "../auth/AuthComp";

export default function SearchBar(){

    const  { searchName } = useContext(AuthContext)

    const[ name, setName ] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value.toLowerCase())
    }



    function handleSubmitBtn(e){
        e.preventDefault()
        searchName(name)
        setName('') 
        document.getElementById('id').value = '';
    }




    return (
        <div className={style.container}>
            <button className={style.btn} type="submit" onClick={ (e) => handleSubmitBtn(e) }> <ImSearch className={style.icon} /> </button>
            
            <input id="id"  type="text" placeholder="Search Product.." onChange={(e)=> handleInputChange(e) } className={style.bar}/>
        </div>
    )
}