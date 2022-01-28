import React from 'react';

//Estilos
import './ItemListContainer.css'

//Components
import ItemCount from '../../components/ItemCount/ItemCount';

function ItemListContainer() {
  return (
        <div className='ItemListContainer'>
            <ItemCount stock={18} />
        </div>
  );
};

export default ItemListContainer;