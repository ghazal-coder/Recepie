import React from 'react';
import style from "./Product.module.css";


function Product({ title, image }) {
    return (
        <div className={style.product}>
            <img className={style.img} src={image} alt={title} />
            <div className={style.title}>
                <p className={style.h}>{title}</p>
            </div>
        </div>
    );
}

export default Product;
