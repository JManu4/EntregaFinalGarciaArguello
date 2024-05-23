import { Avatar, Badge, Space } from 'antd';

const CartWidget = () => {
    return (
        <>
            <a href="#">
                <Badge count={5}>
                    <Avatar shape="square" size="large" />
                </Badge>
            </a>
        </>
    )
}
export default CartWidget
