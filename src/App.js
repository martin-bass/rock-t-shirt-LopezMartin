//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemList from '../src/views/Category/ItemList/ItemList';
import ItemDetailContainer from '../src/views/Item/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/cart/cart';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import { ProdSeleccionadosProvider } from './Context/CartContext/CartContext';

function App() {
  return (
    <ProdSeleccionadosProvider>
      <Router>
        <div className="App">
          <NavBar/> 
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/items' element={<ItemListContainer />}></Route>
              <Route path='/category/:category' element={<ItemList />}></Route>
              <Route path='items/item/:id' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          <Footer />
        </div>
      </Router>
    </ProdSeleccionadosProvider>  
  );
};

export default App;