import React from 'react';

//Estilos
import './ItemListContainer.css'

//Components
//import ItemCount from '../../components/ItemCount/ItemCount';
//import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer() {
  return (
        <div className='ItemListContainer'>
            <ItemDetailContainer />
        </div>
  );
};

export default ItemListContainer;
