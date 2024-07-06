import ItemQuantitySelector from '../addToCart/itemQuantitySelector'

const ItemDetail = ( {unProducto} ) => {

    return (
        <>
            <img src={unProducto?.imagen} alt="" className="productDetailsImage"/>
            <div className="productDetailsText">
                <p className="productDetailsTextCategory">{unProducto?.categoria.toUpperCase()}</p>
                <h1 className="productDetailsTextTitle">{unProducto?.nombre}</h1>
                <p className="productDetailsTextDesc">{unProducto?.descripcion} </p>
                <p className="productDetailsTextPrice">$ {unProducto?.precio}</p>
                <hr />
                <ItemQuantitySelector unProducto={unProducto} />
            </div>
        </>
    )
}
export default ItemDetail





