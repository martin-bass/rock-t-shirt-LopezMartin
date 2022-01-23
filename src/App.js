//import './App.css';

//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje="Sitio en desarrollo..."/>
    </div>
  );
};

export default App;