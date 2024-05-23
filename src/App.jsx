
import './App.css'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContaner/itemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenid@'} producto={'productos'} />
    </> 
  )
}

export default App
