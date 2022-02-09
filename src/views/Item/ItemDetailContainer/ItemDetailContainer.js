import React, {useState, useEffect} from 'react';
//Components
import ItemDetail from '../ItemDetail/ItemDetail';

//Estilos
import './ItemDetailContainer.css';

//Axios
import axios from 'axios';

function ItemDetailContainer() {
  const [objeto, SetObjeto] = useState ({});

  useEffect (()=> {
    axios ('https://fakestoreapi.com/products/1')
    .then((response) => {SetObjeto(response.data)})
  },[]);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail key={objeto.id} producto={objeto}/>
    </div>
  );
}

export default ItemDetailContainer;
