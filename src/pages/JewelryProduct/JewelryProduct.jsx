import { useEffect, useState } from "react";
import { jewelry} from "../../services/api";
import Navbar from "../../component/navbar/navbar";
import Article from "../../component/Article/Article";
import style from "./JewelryProduct.module.css"
import Footer from "../../component/footer/Footer";
import Wrapper from "../../component/container/Wrapper";

function JewelryProduct() {
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        jewelry()
            .then((response) => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Wrapper>
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                <div className={style.product}>
                    {products.map((product) => (
                        <Article key={product.id} article={product} /> 
                    ))}
                </div>
            )}</Wrapper>
           
                    <Footer />
        </div>
    );
}

export default JewelryProduct;

