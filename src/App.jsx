
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
        <Route path='/Item/:idItem' element={ <ItemDetailContainer/> }/>

      </Routes>
    </BrowserRouter>
    
    {/* <ItemListContainer/>
    <ItemDetailContainer/> */}
    </>
  );
}

export default App;
