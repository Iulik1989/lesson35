import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/productsContext";


const ProductPage = () => {
    const {id} = useParams()
    const {getProduct} = useContext(ProductsContext)
    const {product} = getProduct(id)

    return <CardItem title={product.title} img={product.img} price={product.price} id={product.id}/>
}

export default ProductPage;