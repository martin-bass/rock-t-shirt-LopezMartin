import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Components
import Item from '../Item/Item.js';
import Spinner from '../Spinner/Spinner.js';

//Estilos
import './ItemListContainer.css'

function ItemListContainer() {
  
  const {products, cargarProductosTotales, isLoading, setIsloading} = useContext (ProductosSeleccionados);

  useEffect (()=> {
    cargarProductosTotales();
    setTimeout (()=>{setIsloading(false)},2000);
    
  },[]);
  
  return (
    <div className={isLoading ? ('temListContainer-spinner'):('ItemListContainer')}>
        {
          isLoading ? (<Spinner />) : (
            products.map ((product) => {
              return (
                <Link to={`item/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                  <Item producto={product}/>
                </Link>
              );
            })
          )
        }   
    </div>
  );
};

export default ItemListContainer;