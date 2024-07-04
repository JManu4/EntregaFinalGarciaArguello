import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { ShopContext } from '../../contexts/shopContext'

const CartWidget = () => {

    const { carrito } = useContext(ShopContext)
    const totalDeProductos = carrito.reduce( (acc,item) => acc + item.quantity, 0)

    return (
        <>
            <Badge count={ totalDeProductos }>
                <ShoppingCartOutlined style={{ fontSize: '2rem', color: 'white' }}  /> 
            </Badge>
        </>
    )
}
export default CartWidget
