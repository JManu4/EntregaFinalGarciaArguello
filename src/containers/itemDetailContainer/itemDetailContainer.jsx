// Minuto 53 del afterClass

import { useEffect, useState } from "react"
import './itemDetailContainer.css'
import { useParams } from 'react-router-dom'
import AddToCart from '../../components/addToCart/addToCart'

const ItemDetailContainer = ( { idProducto } ) => {
    
    const [ producto, setProducto ] = useState ()
    const { idItem } = useParams()

    useEffect ( () => {
        // fetch(`https://fakestoreapi.com/products/${idProducto}`)
        fetch(`https://fakestoreapi.com/products/${idItem}`)
            .then( res => res.json() )
            .then( json => setProducto(json) )
            .catch( e => console.error(e) )
    }, [idProducto])

    console.log(producto)
    return (
        <div className='detailedProductDetails'>
            <div className="productDetails">
                <img src={producto?.image} alt="" className="productDetailsImage"/>
                <div className="productDetailsText">
                    <p className="productDetailsTextCategory">{producto?.category}</p>
                    <h1 className="productDetailsTextTitle">{producto?.title}</h1>
                    <p className="productDetailsTextDesc">{producto?.description} </p>
                    <p className="productDetailsTextPrice">$ {producto?.price}</p>
                    <hr />
                    <AddToCart />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer