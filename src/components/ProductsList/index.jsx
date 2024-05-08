import { useContext, useEffect } from 'react';
import './styles.css'
import { ProductsContext } from '../../context/productsContext';
import CardItem from '../CardItem';

const ProductList = () => {
    const { products, getProducts } = useContext(ProductsContext);

    useEffect(() => {
        getProducts()
    }, [])

    return <div className="product-list-wrapper">
        {products.map(item => <CardItem
            key={item.title}
            title={item.title}
            img={item.img}
            price={item.price}
            id={item.id}
            mesureType={item.mesureType}
        />)}
    </div>
}

export default ProductList;