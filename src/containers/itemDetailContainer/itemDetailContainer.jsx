import { useEffect, useState } from "react"
import './itemDetailContainer.css'
import { Spin } from 'antd';
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/itemDetail/itemDetail'

import { doc, getDoc, collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemDetailContainer = ( { idProducto } ) => {
    
    const [ producto, setProducto ] = useState ()
    const [ loading, setLoading ] = useState(true)
    const { idItem } = useParams()

    // useEffect ( () => {
    //     setLoading(true)
    //     fetch(`https://fakestoreapi.com/products/${idItem}`)
    //         .then( res => res.json() )
    //         .then( json => setProducto(json) )
    //         .catch( e => console.error(e) )
    //         .finally ( () => setLoading(false)  )
    // }, [idProducto])

// for FIREBASE 
    useEffect ( () => {
        setLoading(true)
    // accedo a un objeto/documento
        // const productRef = doc (base de datos, "nombre_collection", "documento")
        // const productRef = doc (db, "productos", "b8QFo4rfqiQCqauNYs26")
        // const getProducts = () => {
        //     getDoc(productRef)
        //         .then(( snapshot => {
        //             if ( snapshot.exists() ) {
        //                 const miProducto = {
        //                     id: snapshot.id,
        //                     ...snapshot.data()
        //                 }
        //                 console.log( miProducto )
        //             }
        //     }))
        // }
        // getProducts()
    // acceso a una collection de documentos
    // const productRef = collection (base de datos, "nombre_collection")
    //          esta referencia trae TODO
    //                const productsRef = collection (db, "productos")
    //          esta referencia trae filtrada
    //                 const productsRefFilter = query (
    //                     collection(db, "productos"),
    //                     where("categoria", "==", "ropa"),
    //                     // where("inventario", "<", 20),
    //                     limit(10)
    //                 )
    //     const getProductos = async () => {
    //         const data = await getDocs(productsRefFilter)
    //         const dataFiltrada = data.docs.map( (doc) => ( {...doc.data(), id: doc.id} )  )
    //         console.log(dataFiltrada)
    //     }
    //     getProductos()
    

        const productsRef = doc (db, 'productos', `${idItem}`)
        getDoc (productsRef)
            .then ( ( snapshot => {
                const unProducto =  {...snapshot.data(), id: snapshot.id}
                setProducto(unProducto)
            })
            )
            .catch ( e => console.error(e) )
            .finally ( () => setLoading(false) )

    }, [])


// Loading spin
    const contentStyle = { padding: 50, background: 'rgba(0, 0, 0, 0.05)', borderRadius: 4 };
    const content = <div style={contentStyle} />;
    if (loading) {
        return (
            <h2><Spin tip="Cargando..." size="large">{content}</Spin></h2>
        )
    }

    return (
        <div className='containerProductDetails'>
            <div className="productDetails">
                <ItemDetail unProducto={producto}/>
            </div>
        </div>
    )
}
export default ItemDetailContainer