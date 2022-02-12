//import './App.css';

//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/views/Home/ItemListContainer/ItemListContainer';
import ItemList from '../src/views/Category/ItemList/ItemList';
import ItemDetailContainer from '../src/views/Item/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:category' element={<ItemList />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;