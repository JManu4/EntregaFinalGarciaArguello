import './itemListContainer.css'

const ItemListContainer = ({ greeting, producto }) => {
    return (
        <div className='ItemListContainer'>
            <p>Bienvenido a una página, este es un saludo con props: " {greeting} " </p>
            <p>Aquí vendran unas imagenes de los productos/servicios del ecommerce: {producto} </p>
        </div>
    )
}

export default ItemListContainer