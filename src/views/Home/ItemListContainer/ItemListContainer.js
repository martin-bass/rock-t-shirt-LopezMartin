import React from 'react';

//Estilos
import './ItemListContainer.css'

//Components
import ItemList from '../../Category/ItemList/ItemList';
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer() {
  return (
        <div className='ItemListContainer'>
          <ItemList />
        </div>
  );
};

export default ItemListContainer;
