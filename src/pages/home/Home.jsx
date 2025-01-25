import React, { useEffect, useState } from 'react';
import style from "./Home.module.css";
import Navbar from '../../component/navbar/navbar';
import Header from '../../component/header/Header';
import Wrapper from "../../component/container/Wrapper";
import Products from '../../component/products/Products';
import Footer from "../../component/footer/Footer";
import Explore from "../../component/explore/explore";
import { getApi } from "../../services/api";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getApi()
            .then((result) => {
                setData(result.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("error");
                setIsLoading(false);
            })
    }, [])

    return (
        <div className={style.home}>
            <Navbar />
            <Wrapper><Header /></Wrapper>
            <Wrapper><Products /></Wrapper>
            {
                isLoading ? <p>Loading ...</p> : <div>
                    {
                        data.map(item => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>title: {item.title}</p>
                                <p>price: {item.price}</p>
                            </div>
                        ))
                    }
                    <Wrapper><Explore /></Wrapper>
                    <Footer />
                </div>
            }
        </div>
    );
}

export default Home;





