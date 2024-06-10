import './navbar.css'
import CartWidget from '../cartwidget/cartwidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ( ) => {

    return (
        <div className="navBar">
            <Link to={'/'} className='marca'>
                <h1>MARCA</h1>
            </Link>
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
            </ul>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar


