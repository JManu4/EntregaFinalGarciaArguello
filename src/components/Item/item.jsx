import { Link } from 'react-router-dom'
import '../../containers/itemListContainer/itemListContainer.css'

const Item = ( {unProducto} ) => {

    return (
        <div className='productCard' key={unProducto.id}>
            <img src={unProducto.imagen} className='productImage'/>
            <p>Precio: ${unProducto.precio}</p>
            <p>{unProducto.nombre}</p>
            <Link to={`/item/${unProducto.id}`} >
                <button className='botonDetails'>Detalles</button>
            </Link>
        </div>
    )
}
export default Item