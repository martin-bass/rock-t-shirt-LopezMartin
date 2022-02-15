import React, { useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductosSeleccionados } from '../../../Context/CartContext/CartContext';

//Components
import Item from '../../../components/Item/Item';
import Spinner from '../../../components/Spinner/Spinner';
import Carrousel from '../../../components/Carrousel/Carrousel';

//Estilos
import './ItemListContainer.css'

function ItemListContainer() {
  
  const {products, cargarProductosTotales, isLoading, setIsloading} = useContext (ProductosSeleccionados);

  useEffect (()=> {
    cargarProductosTotales();
    setTimeout (()=>{setIsloading(false)},1000);
  },[]);
  
  return (
    <div className='ItemListContainer-wrap'>
      <Carrousel />
      <div className='ItemListContainer'>
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
    </div>
  );
};

export default ItemListContainer;
