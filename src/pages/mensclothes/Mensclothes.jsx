import { useEffect, useState } from "react"
import Footer from "../../component/footer/Footer"
import Navbar from "../../component/navbar/navbar"
import { menCategory } from "../../services/api"
import Wrapper from "../../component/container/Wrapper"
import Article from "../../component/Article/Article"
import style from "./Mensclothes.module.css"


function Mensclothes() {
 const [Products,setProducts] = useState([])
 const [IsLoading,setIsLoading] = useState(true)


 useEffect ( ()=> {
 menCategory().then((respond) => {
              setProducts(respond.data)
              setIsLoading(false)
 })
              .catch((error) => {
                console.log("error", error)
                 setIsLoading(false)
              }) 
           

 },[])




  return (
    <div>
      <Navbar />
 <Wrapper>
            {IsLoading ? (
                <p>Loading ...</p>
            ) : (
                <div className={style.product}>
                    {Products.map((product) => (
                        <Article key={product.id} article={product} /> 
                    ))}
                </div>
            )}</Wrapper>


      <Footer />
    </div>
  )
}

export default Mensclothes
