import style from "./Products.module.css"
import { useEffect, useState } from 'react';
import Navbar from '../../component/navbar/navbar';
import Wrapper from "../../component/container/Wrapper";
import Footer from "../../component/footer/Footer";
import { getApi } from "../../services/api";
import Article from "../../component/Article/Article";
import { Link } from 'react-router-dom';


function Products() {
       const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getApi()
        .then((result) => {
            console.log(result.data);  
            setData(result.data);
            setIsLoading(false);
        })
        .catch(() => {
            console.error("error");
            setIsLoading(false);
        });
}, []);

  return (
   
      <div className={style.home}>
            <Navbar />
          
            <Wrapper>
            {
                isLoading ? <p>Loading ...</p> : <div className={style.Products}>
                   {
                         data.map((item) => (
                          <Link to={`/product/${item.id}`} key={item.id}>
                          <Article article={item} />
                           </Link>


    ))
}
                    
                </div>
            }</Wrapper>
           
                    <Footer />
        </div>
    );
}




export default Products
