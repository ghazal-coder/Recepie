
import style from "./ProductBox.module.css";
import Category from "../Category/Category";
import men from "../../assets/men.webp";
import women from "../../assets/women.jpg";
import child from "../../assets/child.webp";

function Products() {
    return (
        <div className={style.product}>

            <Category title="Men" image={men} />
            <Category title="Child" image={child} />
            <Category title="Women" image={women} />

        </div>
    );
}

export default Products;
