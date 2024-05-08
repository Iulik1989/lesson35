import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

import './styles.css'


const ProductPage = () => {
    const { id } = useParams()
    const { getProduct } = useContext(ProductsContext)
    const { product } = getProduct(id)

    return (
        <div className="product-page-container">
            <div className="product-page-details">
                <div>
                    <img className="product-page-iamge" src={product.img} alt={product.title} />
                </div>
                <div className="product-page-description">
                    <h2>{product.title}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sed perspiciatis sint beatae nesciunt consequatur consectetur
                        earum molestiae quia nihil eligendi commodi alias ad veniam
                        odio similique optio, sit, vel voluptas?</p>
                    <p>{product.price}$</p>  
                </div>
            </div>
        </div>
    )
}

export default ProductPage;