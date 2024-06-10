// import { useState } from "react"
import './navbar.css'
import CartWidget from '../cartwidget/cartwidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ( { handleCategoria } ) => {

    // Antes de Routes
    // esta es una forma de pasar prop a una funcion en el child
    // const cambiarCategoria = (categoria) => {
    //     handleCategoria(categoria)
    // }

    return (
        <div className="navBar">
            <h1 className='marca'>
                <a href="">MARCA</a>
            </h1>
            <ul>
                <Link to={'/'} className='linkInicio'>
                    <li>Inicio</li>
                </Link>
                <NavLink to={'/categoria/electronics'} className={ ({isActive}) => isActive? "navSelected" : "linkElectronicos" }>
                    <li>Electronicos</li>
                </NavLink>
                <NavLink to={'/categoria/jewelery'} className={ ({isActive}) => isActive? "navSelected" : "linkJoyeria" }>
                    <li>Joyeria</li>
                </NavLink>
                <NavLink to={'/contacto'} className={ ({isActive}) => isActive? "navSelected" : "linkContacto" }>
                    <li>Contacto</li>
                </NavLink>
                {/* <li><a onClick={ ()=> cambiarCategoria('todos') } href="#">Inicio</a></li>
                <li><a onClick={ ()=> cambiarCategoria('electronics') } href="#">Electronics</a></li>
                <li><a onClick={ ()=> cambiarCategoria('jewelery') } href="#">Joyeria</a></li>
                <li><a onClick={ ()=> cambiarCategoria('') } href="#">Contacto</a></li> */}
                
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}
export default NavBar


