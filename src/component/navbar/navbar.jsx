import { useState } from "react";
import style from "./navbar.module.css"
import { Link } from 'react-router-dom'




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={style.navbar} >

            <h1>E-Commerce </h1>
           
            <ul className={isOpen ? style.link : style.showMenu}>

                <li><Link to="/" tabIndex="0"> Home </Link></li>
                <li><Link to="/mensclothes" tabIndex="0">Men</Link> </li>
                <li><Link to="/jewelry" tabIndex="0">Women</Link></li>
                <li><Link to="/" tabIndex="0">Baby Colection</Link></li>
                <li><Link to="/about" tabIndex="0">Contact</Link> </li>
            </ul>
            <div className={style.searchParofileCart}>
                <input type="search" placeholder='  Search' />
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
