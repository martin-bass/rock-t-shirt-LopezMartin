import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

//Context
import { ProductosSeleccionados } from '../../../Context/CartContext/CartContext';

//Components
import ItemDetail from '../../../components/ItemDetail/ItemDetail';
import Spinner from '../../../components/Spinner/Spinner';


//Estilos
import './ItemDetailContainer.css';

//Axios
import axios from 'axios';

function ItemDetailContainer() {
  // const [item, SetItem] = useState ({});
  // let itemID= useParams();

  // const [isLoading, setIsloading] = useState (true);

  const {item, itemID, cargarProducto, isLoading1, setIsloading1, products} = useContext (ProductosSeleccionados);
  
  console.log(products)
  console.log(item);

  useEffect (()=> {
    //axios (`https://fakestoreapi.com/products/${itemID.id}`)
    //.then((response) => {SetItem(response.data)});
    cargarProducto();
    setTimeout (()=>{setIsloading1(false);},1000);
  },[]);

  return (
    <div className='ItemDetailContainer'>
      {
        isLoading1 ? (<Spinner />) :
        (<ItemDetail key={itemID.id} producto={item}/>)
      }
    </div>
  );
}

export default ItemDetailContainer;
