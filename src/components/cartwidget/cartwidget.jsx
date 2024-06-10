import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'

const CartWidget = () => {
    return (
        <a href="">
            <Badge count={4}>
                <ShoppingCartOutlined style={{ fontSize: '2rem', color: 'white' }}  /> 
            </Badge>
        </a>
    )
}

export default CartWidget
