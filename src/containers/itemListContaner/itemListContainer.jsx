import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { useParams, Link } from 'react-router-dom'

const ItemListContainer = ( { categoria } ) => {

    // const parametrosDeRoutes = useParams()
    // esto regresa un objeto parametrosDeRoutes={idCategoria: electronicoss}
    // se llama con parametrosDeRoutes.idCategori
    // se desestructura así
    // const {idCategoria} = useParams()
    const { idCategoria } = useParams()
    
    const [ productos, setProductos ] = useState([])
    useEffect( () => {
        // if (categoria === 'todos') {
        //     fetch('https://fakestoreapi.com/products')
        //         .then( res => res.json() )
        //         .then( json => setProductos(json) )
        //         .catch( e => console.error(e) )
        // } else {
        //     fetch(`https://fakestoreapi.com/products/category/${categoria}`)
        //         .then( res => res.json() )
        //         .then( json => setProductos(json) )
        //         .catch( e => console.error(e) )
        // }
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
        <>
            {/* <h1>{idCategoria? "la categoria" : "no hay nada"}</h1> */}
            <div className='ItemListContainer'>
                {productos.map( (item) => 
                    <div className='productCard' key={item.id}>
                        <img src={item.image} className='productImage'/>
                        <p>Precio: ${item.price}</p>
                        <p>{item.title}</p>
                        <Link to={`/item/${item.id}`} >
                            <button className='botonDetalles'>Detalles</button>
                        </Link>
                    </div>
            )}
            </div>
        </> 
    )
}
export default ItemListContainer