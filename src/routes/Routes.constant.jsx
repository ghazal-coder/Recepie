import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Product from "../pages/Product/Product"
import Mensclothes from "../pages/mensclothes/Mensclothes";
import JewelryProduct from "../pages/JewelryProduct/JewelryProduct";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
     {
        path: "/products",
        element: <Products />,
    },
       {
        path: "/product/:id",
        element: <Product />,
    },
      {
        path: "/mensclothes",
        element: <Mensclothes />,
    },
    {
        path :"/jewelry",
        element : <JewelryProduct/>
    }
]

