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
                setProduct(result.data);
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
                    <img src={product?.image} alt={product?.title} />
                    <div>
                    <p>{product?.title}</p>
                    <p>{product?.price}</p>
                    </div>
           
                </>
}</div>
<Footer />
        </div>
    );
}

export default Product;



