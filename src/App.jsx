// librerias
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import './App.css'

// components
import NavBar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import Contacto from './components/contacto/contacto'
import ShopComponentContext from './contexts/shopContext'
import CheckOut from './components/checkout/checkout'


function App() {

  return (
    <ShopComponentContext>

      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/contacto' element={<Contacto /> } />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer /> } />
          <Route path='/item/:idItem' element={<ItemDetailContainer /> } />
          <Route path='/cart' element={<CheckOut /> } />
        </Routes>
      </BrowserRouter>

    </ShopComponentContext>
  )

}

export default App
