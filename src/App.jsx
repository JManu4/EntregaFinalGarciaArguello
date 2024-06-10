// librerias
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import './App.css'

//components
import NavBar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContaner/itemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import Contacto from './containers/contacto/contacto'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/contacto' element={<Contacto /> } />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer /> } />
        <Route path='/item/:idItem' element={<ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
