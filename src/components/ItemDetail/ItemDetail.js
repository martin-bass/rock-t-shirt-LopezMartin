import React, {useState} from 'react';
import { Link } from 'react-router-dom'

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Components
import ItemCount from '../ItemCount/ItemCount';

//Estilos
import './ItemDetail.css'

function ItemDetail({producto}) {

    const stock= 9;
    const [initial, setInitial] = useState (1);
    const [compraRealizada, setCompraRealizada] = useState (false);

    const aumentarProducto = () => {
        if (initial < stock) {
            setInitial (initial +1)
        };
    };

    const decrementarProducto= () => {
        if (initial > 1) {
            setInitial (initial -1);
        };
    };

    const onAdd = () => {
        if (stock != 0){
            setInitial(initial);
            console.log(initial);
            setCompraRealizada (true);
            alert (`Cantidad seleccionada ${initial} unidades!`)
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
                    compraRealizada ? (null) : (
                        <ItemCount 
                        className='ItemCount-deatail'
                        stock={stock} 
                        initial= {initial}
                        aumentarProducto={aumentarProducto}
                        decrementarProducto={decrementarProducto}
                        onAdd={onAdd}
                    />
                    )
                }
                </CardActions>
                <div className='btn-finalizar'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button 
                            className='btn-finalizar-seleccion'
                            variant="contained" 
                            size="large">
                                Seguir comprando
                            <ArrowBackIcon style={{ marginLeft: '10px' }}/>
                        </Button>
                    </Link>
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <Button 
                            className='btn-finalizar-compra'
                            variant="contained" 
                            size="large" 
                            color="success">
                                Finalizar compra
                            <ShoppingCartIcon style={{ marginLeft: '10px' }}/>
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default ItemDetail;
