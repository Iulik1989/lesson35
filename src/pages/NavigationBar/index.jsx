import { Link, useNavigate } from 'react-router-dom';
import ShopingCartIcon from '../../assets/shopping-cart.svg';
import './styles.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

const NavigationBar = () => {
    const { cart } = useContext(ProductsContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/cart`)
    }

    return (
        <div className='navigation-bar-container'>
            <Link className='navigation-bar-link' to="/">Home</Link>
            <div className='navigation-bar-cart' onClick={handleClick}>
                <img className='navigation-bar-icon' src={ShopingCartIcon} alt='shoping-cart' />
                {Boolean(cart.length) && <div className='navigation-bar-cart-amount'>{cart.length}</div>}
            </div>
        </div>
    )
}

export default NavigationBar;