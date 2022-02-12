import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


//Components
import ItemDetail from '../../../components/ItemDetail/ItemDetail';
import Spinner from '../../../components/Spinner/Spinner';


//Estilos
import './ItemDetailContainer.css';

//Axios
import axios from 'axios';

function ItemDetailContainer() {
  const [item, SetItem] = useState ({});
  let itemID= useParams();

  const [isLoading, setIsloading] = useState (true);


  useEffect (()=> {
    axios (`https://fakestoreapi.com/products/${itemID.id}`)
    .then((response) => {SetItem(response.data)});
    setTimeout (()=>{setIsloading(false);},1000);
  },[itemID]);

  return (
    <div className='ItemDetailContainer'>
      {
        isLoading ? (<Spinner />) :
        (<ItemDetail key={itemID.id} producto={item}/>)
      }
    </div>
  );
}

export default ItemDetailContainer;
