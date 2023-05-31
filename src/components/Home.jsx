import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png'
import style from './Home.module.css'

function Home(props) {
    return (
        <div className={style.home}>
            <section>
            <img src={logo} alt="" />
            </section>
            <p>
                En Silicon-Commerce ofrecemos un servicio y productos de calidad, donde podras elgir y comprar lo que mas te guste. Es necesario que inicies sesion para poder entrar a la tienda y comprar lo que quieras.
            </p>
        </div> 
    );
}

export default Home;