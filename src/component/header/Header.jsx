import React from 'react'
import style from "./Header.module.css"
import image01 from "../../assets/01.png"

function Header() {
    return (
        <div className={style.header}>
            <p className={style.p} >Sale up to 50%!Hurry up limited perriod offer,shop now! </p>
            <div>

                <div className={style.TextPic}>
                    <div className={style.text}>
                        <h1>Minimal Mens Style</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitdolor sit,<br /> amet consectetur adipisicing.Dicta voluptas deserunt optio,<br />  vero eos incidunt repellendus. Nihil sit architecto,<br />  ab quisquam ea facere incidunt aspernatur expedita officia providen </p>
                        <button>Shop Now</button>
                    </div>
                    <img src={image01} />
                </div>
            </div>
        </div>
    )
}

export default Header
