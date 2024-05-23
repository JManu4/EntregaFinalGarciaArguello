// import { useState } from "react"
import './navbar.css'
import CartWidget from '../cartwidget/cartwidget'


const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className='marca'>
                <a href="">MARCA</a>
            </h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}
export default NavBar


