import React, {useState, useEffect} from 'react';

//Components
import Item from '../Item/Item';

//Estilos
import './ItemList.css'

function ItemList() {
    const [products, setProdcuts] = useState ([]);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => setProdcuts(products))
    },[]);

    console.log (products)
  return (
    <div className='ItemList'>
        {
          products.map ((product) => {
            return (
              <Item key={product.id} producto={product}/>
            );
          })
        }   
    </div>
  );
};

export default ItemList;
