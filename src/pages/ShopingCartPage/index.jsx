import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import './styles.css'

const ShopingCartPage = () => {
    const {cart} = useContext(ProductsContext)

    console.log(cart)

    //if(cart.length = 0) return <div>cart is empty</div>

    const renderShopingList = cart.map((product) => {
        return (
            <div className="cart-item">
                <p>{product.title}</p>
                <p>{product.amount}</p>
                <p>Price per {product.mesureType}: {product.price}</p>
                <p>Cost: {product.amount * Number(product.price)}</p>
            </div>
        )        
    })

    return <div className="shoping-cart-wrapper">
        {renderShopingList}
    </div>

}

export default ShopingCartPage;