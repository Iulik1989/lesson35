import { createContext, useState } from "react"


const mockData = [
    {
      title: 'tomato',
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRemk0pOj3avWb06RvabQarkPJ-BUaZPIT9UjLWrwM6xL8TyRbj',
      price: '3.55',
      id: '1'
    },
    {
      title: 'cucumber',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RNXr2NWtTna5uP9Dtd0IiJmv4vlMNu4xB2lOWrZH_A&s',
      price: '1.5',
      id: '2'
    },
    {
      title: 'cherry',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8p7lAa8aCXTc8l5zU1lgRRtKY80dsqpg-3SnuIW_Ig&s',
      price: '2.00',
      id: '3'
    },
    {
      title: 'chicken',
      img: 'https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg',
      price: '5.67',
      id: '4'
    },
    {
      title: 'salmon',
      img: 'https://lasa-masafiu.eu/wp-content/uploads/2021/09/fresh-salmon-fillet-with-basil-white-background_120872-25364.jpeg',
      price: '20.50',
      id: '5',
    }
  ]

  const fetchData = () => {
    return new Promise((res) => res(mockData))
  }

  export const ProductsContext = createContext([])

  export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetchData().then(data => setProducts([...data]))
    }

    const getProduct = (id) => {
        return { product: mockData.find(item => item.id === id)}
    }

    return (
        <ProductsContext.Provider value={{products, getProducts, getProduct}}>
            {children}
        </ProductsContext.Provider>
    )
  }

  