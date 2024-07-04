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
                <NavLink to={'/categoria/ropa'} className={ ({isActive}) => isActive? "navSelected" : "linkElectronicos" }>
                    <li>Ropa</li>
                </NavLink>
                <NavLink to={'/categoria/accesorios'} className={ ({isActive}) => isActive? "navSelected" : "linkJoyeria" }>
                    <li>Accesorios</li>
                </NavLink>
                <NavLink to={'/contacto'} className={ ({isActive}) => isActive? "navSelected" : "linkContacto" }>
                    <li>Contacto</li>
                </NavLink>                
            </ul>
            <Link to={'/cart'}>
                <CartWidget />
            </Link>
            {/* <div>
                <CartWidget />
            </div> */}
        </div>
    )
}

export default NavBar


