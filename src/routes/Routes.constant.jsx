import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Product from "../pages/Product/Product"


export const routes = [
    {
        path: "/",
        element: <Home />,
    },
     {
        path: "/products",
        element: <Products />,
    },
       {
        path: "/product/:id",
        element: <Product />,
    }
]

