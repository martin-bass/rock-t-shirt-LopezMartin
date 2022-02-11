import React, {useState} from 'react';
import { Link } from 'react-router-dom'

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia, Button } from '@mui/material';

//Components
import ItemCount from '../ItemCount/ItemCount';

//Estilos
import './ItemDetail.css'

function ItemDetail({producto}) {
    const [compra, setCompra] = useState (0);

    const cantidadComprada = (e) => {
        console.log (e.target.parentNode.parentNode.children);
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
                    <ItemCount stock={5} className='ItemCount-deatail'/>      
                </CardActions>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <Button 
                        onClick={cantidadComprada}
                        className='btn-finalizar-seleccion'
                        variant="contained" 
                        size="large" 
                        color="success">
                            Finalizar compra
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default ItemDetail;
