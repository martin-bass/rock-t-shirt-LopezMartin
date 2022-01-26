import React from 'react';

//Estilos
import './ItemListContainer.css'

//Components
import MultiActionAreaCard from './ItemCount'
import ItemCount from './ItemCount';

function ItemListContainer() {
  return (
        <div className='ItemListContainer'>
            <ItemCount stock="18" />
        </div>
  );
};

export default ItemListContainer;
