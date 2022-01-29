import React from 'react';

//Estilos
import './ItemListContainer.css'

//Components
//import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
  return (
        <div className='ItemListContainer'>
            <ItemList />
        </div>
  );
};

export default ItemListContainer;
