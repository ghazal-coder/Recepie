import React from 'react';
import style from "./Products.module.css";
import Product from '../product/Product';
import men from "../../assets/men.webp";
import women from "../../assets/women.jpg";
import child from "../../assets/child.webp";

function Products() {
    return (
        <div className={style.product}>

            <Product title="Men" image={men} />
            <Product title="Child" image={child} />
            <Product title="Women" image={women} />

        </div>
    );
}

export default Products;
