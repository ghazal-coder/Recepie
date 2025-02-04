import { useState } from "react";
import style from "./Article.module.css"

function Article(props) {
     const { image,title,price } = props.article;
     const [qty,setqty]=useState(0)
 
     function IncreaseQty(){
setqty((qty)=>(qty+1))
     }

      function DecreaseQty(){
    
        qty>0 && setqty((qty)=>(qty-1))
     }
    return (
        <div className={style.product}>
            <img className={style.img} src={props.article.image} alt={title} />
            <div className={style.title}>
                <p className={style.h}>{props.article.price} £</p>

                <div className={style.Btn}>   
                 <button onClick={IncreaseQty} className={style.productBtn}>+</button>
                <span>{qty}</span>
                <button onClick={DecreaseQty}  className={style.productBtn}>-</button>
                </div>

                <button>Buy Now</button>
            </div>
        </div>
    );
}

export default Article;

