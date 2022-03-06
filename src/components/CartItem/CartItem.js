import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

//Estilos
import './CartItem.css';

function CartItem({prodComprado}) {

    const {prodsDelCarrito,setProdsDelCarrito, setCartEmpty} = useContext (ProductosSeleccionados);


    const eliminarCard = (IDaEliminar) =>{
        const actualizarProdsComprados = prodsDelCarrito.filter (item => 
            item.id!==IDaEliminar);
        setProdsDelCarrito(actualizarProdsComprados);
        
        if(actualizarProdsComprados.length===0){
            setCartEmpty(true);
        };    
    };

    return (
        <div className='CartItem'>
               <Card className='CartItem-content'>
                   <CardActionArea className='CartItem-area'>
                       <div className='CartItem-img-container'>
                            <CardMedia
                            className='CartItem-img'
                            component="img"
                            image={prodComprado.foto}
                            alt="CartItem-img"
                            />
                       </div>
                       <CardContent className='CardContent-cartItem'>
                           <Typography className='titulo-cart-item' gutterBottom variant="h5" component="div">
                               {prodComprado.articulo}
                           </Typography>
                           <Typography className='cantidad-cart-item' variant="body2" color="text.secondary">
                               <p>Cantidad Seleccionada:</p><text>{prodComprado.cantidad} unidad(es)</text>
                           </Typography>
                           <Typography className='precio-cart-item' variant="body2" color="text.secondary">
                               <p>Precio:</p><text>${prodComprado.precio}</text> 
                           </Typography>
                       </CardContent>
                       <div className='btn-edit-close-container'>
                            <HighlightOffIcon 
                                onClick={()=>{
                                    eliminarCard(prodComprado.id)
                                }}
                                className='HighlightOffIcon'
                            />
                            <Link to={`/items/item/${prodComprado.id}`} key={prodComprado.id} style={{ textDecoration: 'none' }}>
                                <EditIcon 
                                    className='EditIcon'
                                    onClick={()=>{
                                        eliminarCard(prodComprado.id)
                                    }}
                                />
                            </Link>
                       </div>
                   </CardActionArea>
               </Card>
           </div> 
    )
}

export default CartItem;