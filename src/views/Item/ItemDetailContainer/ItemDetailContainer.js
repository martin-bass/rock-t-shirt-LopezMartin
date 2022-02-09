import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Components
import ItemDetail from '../../../components/ItemDetail/ItemDetail';

//Estilos
import './ItemDetailContainer.css';

//Axios
import axios from 'axios';

function ItemDetailContainer() {
  const [item, SetItem] = useState ({});
  let itemID= useParams();

  
  
  useEffect (()=> {
    axios (`https://fakestoreapi.com/products/${itemID.id}`)
    .then((response) => {SetItem(response.data)})
  },[itemID]);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail key={itemID.id} producto={item}/>
    </div>
  );
}

export default ItemDetailContainer;
