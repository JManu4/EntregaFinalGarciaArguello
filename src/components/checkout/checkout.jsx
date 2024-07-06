import { useContext, useState } from 'react';
import { ShopContext } from '../../contexts/shopContext'
import './checkout.css'
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { Link } from 'react-router-dom'

const CheckOut = () => {

    const { carrito,setCarrito, borrarDelCarrito } = useContext(ShopContext)
    const PrecioTotal = carrito.reduce( (acc,item) => acc + item.price*item.quantity, 0)
    const [ idCompra, setIdCompra ] = useState()

// from ANTD - form
    const validateMessages = {
        required: '${label} es requerido!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    }
    const onFinish = (inputValues) => {
        const orderData = { ...inputValues, items: carrito, total: PrecioTotal }

        const orderCollection = collection (db, 'orders')
        addDoc(orderCollection, orderData)
            .then( ( {id} ) => {
                setIdCompra(id) 
                Modal.success({
                    title: 'ID Orden Creada:',
                    content: ( <p>{id ?? '-'} </p> )
                })
                setCarrito([])
            })
            .catch( (error) => {
                Modal.error({
                    title: 'This is an error message',
                    content: ( <p>{error ?? '-'} </p> )
                  });
            })
    };

    return (
        <div className='CarritoDeCompra'>
            <h1>Carrito De Compra</h1>
            {carrito.length > 0 ? ( 
                    <div className='CarritoDeCompraProductos'>
                        {carrito?.map( (itemInCart, index) =>  
                            <div key={index} className='CarritoDeCompraProducto'>
                                <p className='nameInCart' key={index}>{itemInCart.name}</p> 
                                <div className='quantityNpriceInCart'>
                                    <p className='quantityInCart'>{itemInCart.quantity}</p>
                                    <p className='priceInCart'>$ {itemInCart.price * itemInCart.quantity}</p>
                                    <button onClick={ ()=> borrarDelCarrito(index)}><DeleteOutlined /></button>
                                </div>
                            </div>        
                        )}
                        <div className='formYtotal'>
                            <Form
                                name="nest-messages"
                                onFinish={onFinish}
                                style={{ maxWidth: 1000, width: "50%" }}
                                validateMessages={validateMessages}
                                className='formulario'
                            >
                                <Form.Item name={['buyer', 'name']} label="Name" rules={[ { required: true,} ]} >
                                    <Input placeholder="Juan Perez" />
                                </Form.Item>
                                <Form.Item name={['buyer', 'phone']} label="Phone" rules={[ { required: true, type: 'number' } ]}>
                                    <InputNumber placeholder="1234567890" style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item name={['buyer', 'email']} label="Email" rules={[ { required: true, type: 'email'} ]}>
                                    <Input placeholder="juan@coder.com" />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" className='realizarPedidoBtn'>
                                    Realizar Pedido
                                </Button>
                            </Form>
                            <p className='PrecioTotal'>Total: $ {PrecioTotal}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>Su carrito de compra está vacío...</h2>
                        <Link to={`/`} >
                            <button className='regresarInicio'>Regresar al Inicio</button>
                        </Link>
                    </>
                )
            }
        </div>
    )
}
export default CheckOut