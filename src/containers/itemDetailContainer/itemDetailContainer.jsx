import { useEffect, useState } from "react"
import { Spin } from 'antd';
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/itemDetail/itemDetail'
import './itemDetailContainer.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemDetailContainer = ( {} ) => {
    
    const [ producto, setProducto ] = useState ()
    const [ loading, setLoading ] = useState(true)
    const { idItem } = useParams()

// for FIREBASE 
    useEffect ( () => {
        setLoading(true)
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




