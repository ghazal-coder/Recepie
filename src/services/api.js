import axios from "axios"

const client = axios.create({
    baseURL : "https://fakestoreapi.com"
});
export async function getApi (){

    const data= await client("/products")
    return data
}

export async function getProduct (id){
    const product =await client (`/products/${id}`)
    return product
}

export async function jewelry (){
    const jewelry =await client ("/products/category/jewelery")
    return jewelry
}

export async function menCategory (){
    const menClothes = await client ("/products/category/men's%20clothing")
    return menClothes
}
