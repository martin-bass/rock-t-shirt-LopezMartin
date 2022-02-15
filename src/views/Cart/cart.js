import React, {useContext} from 'react';

//Components
import CartItem from '../../components/CartItem/CartItem';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';


//Estilos
import './cart.css'

function Cart() {
  const {prodsDelCarrito} = useContext (ProductosSeleccionados);

  return (
    <div className='CartList-container'>
      <div className='CartList'>
      {
        prodsDelCarrito.map ((prodComprado)=>{
          return (
            <CartItem key={prodComprado.id} prodComprado={prodComprado}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart;