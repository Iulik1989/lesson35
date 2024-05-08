import { useNavigate } from 'react-router-dom';
import ShopingCartIcon from '../../assets/shopping-cart.png';
import './styles.css';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';


const CardItem = ({ title, img, price, id, mesureType }) => {
    const navigate = useNavigate()
    const { handleAddToCart } = useContext(ProductsContext)

    const handleClick = () => {
        navigate(`/product/${id}`)
    }

    const handleAddProduct = (e) => {
        e.stopPropagation()
        handleAddToCart({ title, img, price, id, mesureType })
    }

    return (
        <div className="card-wrapper" onClick={handleClick}>
            <img className="card-image" src={img} alt={`${title}-image`} />
            <p className="card-title">{title}</p>
            <span className="card-price">{price}$</span>
            <div onClick={handleAddProduct}>
                <img className='card-shoping-cart' src={ShopingCartIcon} alt='shopping-cart' />
            </div>
        </div>
    );
}

export default CardItem;