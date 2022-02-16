import React, {useContext} from 'react';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './CartCount.css';


function CartCount() {

    const {prodsDelCarrito} = useContext (ProductosSeleccionados);

    const totalDeProdcutos = () => {
        return prodsDelCarrito.reduce ((acc, value)=> acc + value.cantidad, 0)
    };

    return (
        <div className='CartCount'>
            <span>{totalDeProdcutos()}</span>
        </div>
    )
}

export default CartCount;