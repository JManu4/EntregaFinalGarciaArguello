import AddToCart from '../../components/addToCart/addToCart'

const ItemDetail = ( {unProducto} ) => {

    return (
        <>
            <img src={unProducto?.image} alt="" className="productDetailsImage"/>
            <div className="productDetailsText">
                <p className="productDetailsTextCategory">{unProducto?.categoria}</p>
                <h1 className="productDetailsTextTitle">{unProducto?.nombre}</h1>
                <p className="productDetailsTextDesc">{unProducto?.description} </p>
                <p className="productDetailsTextPrice">$ {unProducto?.precio}</p>
                <hr />
                <AddToCart unProducto={unProducto} />
            </div>
        </>
    )
}
export default ItemDetail