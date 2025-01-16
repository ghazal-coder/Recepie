import React from 'react'
import style from "./navbar.module.css"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className={style.navbar} >

            <h1>E-Commerce </h1>
            <ul className={style.link}>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about">About</Link> </li>
                <li><Link to="/contact">Contact</Link> </li>
            </ul>

        </div >
    )
}

export default Navbar
