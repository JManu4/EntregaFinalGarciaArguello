import { createContext, useState } from 'react';

export const ShopContext = createContext()

const ShopComponentContext = ( { children } ) => {

    // const [ cantidad, setCantidad ] = useState(0)
    const [ carrito, setCarrito ] = useState([])
    const addSameToCart = ( ) => {
        setCarrito( [ ...carrito] )          
    }
    const addNewToCart = ( elProducto ) => {
        setCarrito( [ ...carrito, elProducto ] )          
    }
    const borrarDelCarrito = (index) => {
        setCarrito([
            ...carrito.slice(0, index),
            ...carrito.slice(index + 1)
        ]);
    }

    return (
        <ShopContext.Provider value={ { carrito, addNewToCart, addSameToCart, borrarDelCarrito, setCarrito } }>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopComponentContext