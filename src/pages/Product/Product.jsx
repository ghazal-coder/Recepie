import ProductStyle from "./Product.module.css";
import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/Footer";

function Product() {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then((result) => {
                setProduct(result);
                setIsLoading(false);
            })
            .catch(() => {
                console.error("error");
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div >
          <Navbar />
          <div className={ProductStyle.container}>
            {isLoading ? 
                <p>Loading...</p>
             : 
                <>
                    <img src={product?.strMealThumb} alt={product?.strMeal} />
                    <div>
                    <p>{product?.strMeal}</p> <hr />
                    <p>{product?.strArea}</p> <br />
                    <p>{product?.strCategory}</p> <br />
                    <p>{product?.strInstructions}</p>
                    </div>
           
                </>
}</div>
<Footer />
        </div>
    );
}

export default Product;




