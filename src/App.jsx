import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from './pages/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavCustom from './components/NavCustom/NavCustom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Context/CartContext';



function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavCustom />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/productos' element={<ItemListContainer />} />
            <Route exact path='/categoria/:id' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
