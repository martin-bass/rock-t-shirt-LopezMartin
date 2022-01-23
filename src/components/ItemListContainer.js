import React from 'react';

//Estilos
import './ItemListContainer.css'

function ItemListContainer({mensaje}) {
  return (
        <div className='ItemListContainer'>
            {mensaje}
        </div>
  );
};

export default ItemListContainer;
