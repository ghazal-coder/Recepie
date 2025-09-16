import style from "./Products.module.css";
import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/navbar";
import Wrapper from "../../component/container/Wrapper";
import Footer from "../../component/footer/Footer";
import { getApi, searchMeals } from "../../services/api";
import Article from "../../component/Article/Article";
import { Link } from "react-router-dom";

function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  async function fetchData() {
    setIsLoading(true);
    try {
      const meals = searchTerm
        ? await searchMeals(searchTerm)   
        : await getApi();              
      setData(meals);
    } catch (err) {
      console.error(err);
      setData([]);
    }
    setIsLoading(false);
  }

 
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div className={style.home}>
      <Navbar />
      <Wrapper>
      
        <div className={style.searchBox}>
          <input
            type="text"
            placeholder="Search meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className={style.Products}>
            {data.length > 0 ? (
              data.map((item) => (
                <Link to={`/product/${item.idMeal}`} key={item.idMeal}>
                  <Article
                    strMealThumb={item.strMealThumb}
                    strMeal={item.strMeal}
                    id={item.idMeal}
                  />
                </Link>
              ))
            ) : (
              <p>No meals found.</p>
            )}
          </div>
        )}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Products;