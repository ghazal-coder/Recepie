import React from 'react'
import style from "./Home.module.css"
import Navbar from '../../component/navbar/navbar'
import Header from '../../component/header/Header'
import Wrapper from "../../component/container/Wrapper"
import Products from '../../component/products/Products'
import Footer from "../../component/footer/Footer"
import Explore from "../../component/explore/explore"



function Home() {
    return (
        <div className={style.home}>
            <Navbar />
            <Wrapper><Header /></Wrapper>
            <Wrapper><Products /></Wrapper>
            <Wrapper><Explore /></Wrapper>
            <Footer />

        </div>
    )
}

export default Home
