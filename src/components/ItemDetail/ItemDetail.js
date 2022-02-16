import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Components
import ItemCount from '../ItemCount/ItemCount';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './ItemDetail.css'

function ItemDetail({producto}) {
    const {compraRealizada, setCompraRealizada, initial, setInitial, prodsDelCarrito, setProdsDelCarrito, setCartEmpty} = useContext (ProductosSeleccionados);

    useEffect(() => {
        setInitial (1);
        setCompraRealizada(true);
    }, []) 

    const agregarProducto = (prodID) => {
        //Buscamos el prodcuto en el array para ver si hay diplicados
        const buscarProducto = prodsDelCarrito.find((prod) => {
            return prod.id === prodID});
        
        //Momentaneamente, si hay duplicado, se avisa mediante alert y se suma la nueva cantidad. De lo contrario, se agrega como un producto nuevo.
        if (buscarProducto) {
            prodsDelCarrito.map ((index) => {
                if (index.id===prodID) {
                    index.cantidad= index.cantidad + initial;
                };
            });
            alert ("Atencion! Este producto ya está agregado. Sin embargo, sumaremos la cantidad sugerida al mismo item del carrito de compras");
        } else {
        prodsDelCarrito.push({
            id:producto.id, 
            articulo: producto.title,
            foto: producto.image, 
            precio: producto.price, 
            cantidad: initial,
            agregado:true
        });

        setProdsDelCarrito(prodsDelCarrito);
        setCartEmpty(false);
        };
    };

    return (
        <Card className='card-detail'>
            <div className='card-img-detail'>
                <CardMedia
                        className='CardMedia-detail'
                        component="img"
                        image= {producto.image}
                        alt="Paella dish"
                    />
            </div>
            <div className='card-info-detail'>
                <CardActionArea>
                    <CardContent className='CardContent-detail'>
                        <Typography className='titulo' gutterBottom variant="h5" component="div">
                            {producto.title}
                        </Typography>
                        <Typography className='descripcion-detail' gutterBottom variant="h6" component="div">
                            <p>Descripción del Producto:</p>{producto.description}
                        </Typography>
                        <Typography className='precio-detail' variant="body1" color="text.primary">
                            Precio: ${producto.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='btn-card-container-detail'>
                {
                    compraRealizada ? (
                    <div className='btn-counts-container'>
                        <ItemCount />
                        <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button 
                                    className='btn-finalizar-volver'
                                    variant="contained" 
                                    size="small">
                                        Volver al menú
                                    <ArrowBackIcon style={{ marginLeft: '10px' }}/>
                                </Button>
                            </Link>
                    </div>    
                    
                    ) : (null)
                }
                </CardActions>
                {
                    compraRealizada ? (null) : (

                        <div className='btn-finalizar'>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button 
                                    onClick={()=>{
                                        setCompraRealizada(!compraRealizada);
                                        agregarProducto(producto.id)
                                    }}
                                    className='btn-finalizar-seleccion'
                                    variant="contained" 
                                    size="large">
                                        Seguir comprando
                                    <ArrowBackIcon style={{ marginLeft: '10px' }}/>
                                </Button>
                            </Link>
                            <Link to='/cart' style={{ textDecoration: 'none' }}>
                                <Button 
                                    onClick={()=>{
                                        setCompraRealizada(!compraRealizada);
                                        agregarProducto(producto.id)
                                    }}
                                    className='btn-finalizar-compra'
                                    variant="contained" 
                                    size="large" 
                                    color="success">
                                        Finalizar compra
                                    <ShoppingCartIcon style={{ marginLeft: '10px' }}/>
                                </Button>
                            </Link>
                        </div>
                    )
                }     
            </div>
        </Card>
    );
};

export default ItemDetail;
