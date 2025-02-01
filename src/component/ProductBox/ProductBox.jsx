
import style from "./ProductBox.module.css";
import Category from "../Category/Category";
import men from "../../assets/men.webp";
import women from "../../assets/women.jpg";
import child from "../../assets/child.webp";
import { Link } from "react-router-dom";

function Products() {
    return (
        <div className={style.product}>

           <Link to="/mensclothe" ><Category title="Men" image={men} /> </Link>
            <Category title="Child" image={child} />
           <Link to="/jewelry"> <Category title="Women" image={women} /> </Link>  

        </div>
    );
}

export default Products;
