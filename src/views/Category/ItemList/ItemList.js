import React, {useState, useEffect} from 'react';

//Components
import Item from '../../Item/Item/Item';

//Estilos
import './ItemList.css'

function ItemList() {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => setProducts(products))
    },[]);

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
