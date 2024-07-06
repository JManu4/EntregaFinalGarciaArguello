import Item from '../Item/item'

const ItemList = ( {todosLosProductos} ) => {
    return (
        <>         
            {todosLosProductos?.map( (item, index) =>  <Item key={index} unProducto={item} /> )}
        </>
    )
}
export default ItemList