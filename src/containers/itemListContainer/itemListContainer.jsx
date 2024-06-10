import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { useParams, Link } from 'react-router-dom'

const ItemListContainer = ( { categoria } ) => {
    const { idCategoria } = useParams()
    const [ productos, setProductos ] = useState([])

    useEffect( () => {
       if (!idCategoria) {
            fetch('https://fakestoreapi.com/products')
                .then( res => res.json() )
                .then( json => setProductos(json) )
                .catch( e => console.error(e) )
        } else {
            fetch(`https://fakestoreapi.com/products/category/${idCategoria}`)
                .then( res => res.json() )
                .then( json => setProductos(json) )
                .catch( e => console.error(e) )
        }
    }, [idCategoria] )

    return (
        <div className='ItemListContainer'>
            {productos.map( (item) => 
                <div className='productCard' key={item.id}>
                    <img src={item.image} className='productImage'/>
                    <p>Precio: ${item.price}</p>
                    <p>{item.title}</p>
                    <Link to={`/item/${item.id}`} >
                        <button className='botonDetails'>Detalles</button>
                    </Link>
                </div>
            )}
        </div>
        
    )
}
export default ItemListContainer