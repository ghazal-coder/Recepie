import { useState } from "react";
import style from "./navbar.module.css"
import { Link } from 'react-router-dom'




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={style.navbar} >

            <h1>Recepie </h1>
           
         <ul className={isOpen ? `${style.link} ${style.showMenu}` : style.link}>
                <li><Link className={style.link} to="/" tabIndex="0"> Home </Link></li>
                <li><Link className={style.link} to="/" tabIndex="0">All</Link></li>
            </ul>
            <div className={style.searchParofileCart}>
                <p>Profile</p>
                <p>Cart</p>
            </div>
 <button className={style.burgerMenu} onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        </div >
    )
}

export default Navbar
