import React from 'react'
import style from "./Home.module.css"
import Navbar from '../../component/navbar/navbar'




function Home() {
    return (
        <div className={style.home}>
            <Navbar />
        </div>
    )
}

export default Home
