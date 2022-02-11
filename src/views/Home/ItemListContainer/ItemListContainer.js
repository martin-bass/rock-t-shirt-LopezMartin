import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//Axios
import axios from 'axios';

//Components
import Item from '../../../components/Item/Item';

//Estilos
import './ItemListContainer.css'

function ItemListContainer() {
  const [products, setProducts] = useState ([]);
  console.log(products);
  useEffect (()=> {
    axios ('https://fakestoreapi.com/products')
    .then((response) => {setProducts(response.data)})
  },[]);
  console.log(products);
  return (
    <div className='ItemListContainer'>
        {
          
          products.map ((product) => {
            return (
              <Link to={`item/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                <Item producto={product}/>
              </Link>
            );
          })

        }   
    </div>
  );
};

export default ItemListContainer;
