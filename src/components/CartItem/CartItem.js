import React, {useEffect, useContext} from 'react';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//Estilos
import './CartItem.css';


function CartItem({prodComprado}) {

    const {prodsDelCarrito,setProdsDelCarrito} = useContext (ProductosSeleccionados);

    const eliminarCard = (IDaEliminar) =>{
        const actualizarProdsComprados = prodsDelCarrito.filter (item => 
            item.id!==IDaEliminar);

        setProdsDelCarrito(actualizarProdsComprados);

        
    };


    return (
        <div className='CartItem'>
               <Card className='CartItem-content'>
                   <CardActionArea className='CartItem-area'>
                       <CardMedia
                       className='CartItem-img'
                       component="img"
                       image={prodComprado.foto}
                       alt="CartItem-img"
                       />
                       <CardContent className='CardContent-cartItem'>
                           <Typography className='titulo-cart-item' gutterBottom variant="h5" component="div">
                               {prodComprado.articulo}
                           </Typography>
                           <Typography className='cantidad-cart-item' variant="body2" color="text.secondary">
                               <h6>Cantidad Seleccionada:</h6><p>{prodComprado.cantidad} unidad(es)</p>
                           </Typography>
                           <Typography className='precio-cart-item' variant="body2" color="text.secondary">
                               <h6>Precio:</h6><p>${prodComprado.precio}</p> 
                           </Typography>
                       </CardContent>
                       <HighlightOffIcon 
                           onClick={()=>{
                               eliminarCard(prodComprado.id)
                           }}
                           className='HighlightOffIcon'
                       />
                   </CardActionArea>
               </Card>
           </div> 
    )
}

export default CartItem;