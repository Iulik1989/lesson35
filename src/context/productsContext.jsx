import { createContext, useState } from "react"


const mockData = [
    {
      title: 'tomato',
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRemk0pOj3avWb06RvabQarkPJ-BUaZPIT9UjLWrwM6xL8TyRbj',
      price: '3.55',
      mesureType: 'kg',
      id: '1'
    },
    {
      title: 'cucumber',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RNXr2NWtTna5uP9Dtd0IiJmv4vlMNu4xB2lOWrZH_A&s',
      price: '1.5',
      mesureType: 'kg',
      id: '2'
    },
    {
      title: 'cherry',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8p7lAa8aCXTc8l5zU1lgRRtKY80dsqpg-3SnuIW_Ig&s',
      price: '2.00',
      mesureType: 'kg',
      id: '3'
    },
    {
      title: 'chicken',
      img: 'https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg',
      price: '5.67',
      mesureType: 'pice',
      id: '4'
    },
    {
      title: 'salmon',
      img: 'https://lasa-masafiu.eu/wp-content/uploads/2021/09/fresh-salmon-fillet-with-basil-white-background_120872-25364.jpeg',
      price: '20.50',
      mesureType: 'kg',
      id: '5',
    },
    {
      title: 'potato',
      img: 'https://m.media-amazon.com/images/I/313dtY-LOEL._AC_UF1000,1000_QL80_.jpg',
      price: '1.5',
      mesureType: 'kg',
      id: '6'

    },
    {
      title: 'beef',
      img: 'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
      price: '20.55',
      mesureType: 'kg',
      id: '7'

    },
    {
      title: 'pork',
      img: 'https://images.yummy.ph/yummy/uploads/2021/02/porkcutlet.jpg',
      price: '14.20',
      mesureType: 'kg',
      id: '8'

    },
    {
      title: 'onion',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG',
      price: '3.6',
      mesureType: 'kg',
      id: '9'

    },
    {
      title: 'strawberry',
      img: 'https://stoller.com.au/wp-content/uploads/2021/08/dreamstime_xxl_114284301-scaled-e1630045644758.jpg',
      price: '8.90',
      mesureType: 'pice',
      id: '10'

    },
    {
      title: 'watermelon',
      img: 'https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg',
      price: '5.60',
      mesureType: 'pice',
      id: '11'

    },
    {
      title: 'brokoli',
      img: 'https://dww3ueizok6z0.cloudfront.net/food/banner/4031-b52842e16737cbf6a27914e419131863ac6b03f5',
      price: '9.99',
      mesureType: 'pice',
      id: '12'

    }
  ]

  const fetchData = () => {
    return new Promise((res) => res(mockData))
  }

  export const ProductsContext = createContext([])

  export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const getProducts = () => {
        fetchData().then(data => setProducts([...data]))
    }

    const getProduct = (id) => {
        return { product: mockData.find(item => item.id === id)}
    }

    const handleAddToCart = (product) => {
      const alreadyAdded = cart.some(item => item.id === product.id)

      if(alreadyAdded) {
        setCart(prev => prev.map(item => item.id === product.id ? { ...item, amount: item.amount++ } : item))
        return;

      };
      setCart(prev => [...prev, {...product, amount: 1}])
    }

    return (
        <ProductsContext.Provider value={{products, getProducts, getProduct, handleAddToCart, cart}}>
            {children}
        </ProductsContext.Provider>
    )
  }

  