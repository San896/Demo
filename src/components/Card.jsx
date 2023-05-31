import React from 'react';
import style from './Card.module.css'

function Card({ name, price, detail, image, stock }) {
    return (
        <div className={style.card}>
            <div className={style.divimg}>
            <img src={image} alt="product img failed" />
            </div>
         <div className={style.info}>
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <h5>stock: {stock}</h5>

            <section>
                <button className={style.btn}> Comprar </button>
                <button className={style.btn}> +Info <h5>{detail}</h5> </button>
                
            </section>
         </div> 
        </div>
    );
}

export default Card;