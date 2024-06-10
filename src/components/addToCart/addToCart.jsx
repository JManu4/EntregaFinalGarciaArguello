import { useState } from 'react'
import './addToCart.css'

const AddToCart = () => {
    const [num, setNum] = useState(1)

    const suma = () => {
        setNum(num + 1)
    }
    const resta = () => {
        if ( num !== 1 ) {
            setNum(num - 1)
        }
    }

    return (
        <div className='addToCart'>
            <button onClick={ resta } className='quitar'>-</button> 
            <p className='cantidad'>{num}</p>
            <button onClick={ suma } className='agregar'>+</button> 
        </div>
    )
}

export default AddToCart