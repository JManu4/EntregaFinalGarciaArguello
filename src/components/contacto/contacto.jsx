import { useState } from "react"
import { Button, Form, Input, Modal } from 'antd';

const Contacto = () => {

    const [ razonesValidas, setRazonesValidas ] = useState(false)

    const layout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } }
    const validateMessages = {
        required: '${label} es requerido!',
        types: { email: '${label} no es un correo valido!' }
    }
    const onFinish = () => {        
        Modal.success({ title: 'Datos enviados' })
    };

    return (
        <div style={{padding: '1rem', backgroundColor: 'white', width: '60%', margin: '2rem auto', borderRadius: '1rem'}}>
            <h1 style={{textAlign: 'center'}}>Contacto</h1>
            <section>
                <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }} validateMessages={validateMessages} >
                    <Form.Item name={['user', 'name']} label="Nombre" rules={[ { required: true } ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'email']} label="Correo" rules={[ { type: 'email' } ]}>
                        <Input />  
                    </Form.Item>

                    <Form.Item name={['user', 'comments']} label="Comentarios">
                        <Input.TextArea />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }} >
                        <Button type="primary" htmlType="submit"> Enviar</Button>
                        <Button htmlType="reset">Borrar</Button>
                    </Form.Item>
                </Form>
            </section>
            <p>Esta será la página de contacto, perdón tutores y profe, no me dio el tiempo para mejorarla</p>
            <button onClick={() => setRazonesValidas(!razonesValidas)}>{ razonesValidas ? "Ocultar Razones" : "Ver razones" }</button>
            <p>{razonesValidas && "Culpa de la copa américa y de la euro" }</p>
        </div>
    )
}
export default Contacto


