
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

  // Antes de routes
   const [ categoria, setCategoria ] = useState('todos')



  return (
    <BrowserRouter>
      <NavBar handleCategoria={setCategoria} />
      <Routes>
        {/* <ItemListContainer categoria={categoria} />*/}
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/contacto' element={<Contacto /> } />
        
        {/* lo que esta despues del :zzz será la ruta configurada en el "LINK" (en NavBar). este :zzz se pasa como parametro al elemento, se captura con el hook useParams */}
        <Route path='/categoria/:idCategoria' element={<ItemListContainer /> } />

        {/* <ItemDetailContainer idProducto={4}/> */}
        <Route path='/item/:idItem' element={<ItemDetailContainer /> } />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
