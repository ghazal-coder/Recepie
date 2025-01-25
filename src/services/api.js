import axios from "axios"


export async function getApi (){

    const data= await axios.get("https://fakestoreapi.com/products")
    return data
}


