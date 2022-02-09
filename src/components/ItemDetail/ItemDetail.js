import React from 'react';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';

//Components
import ItemCount from '../ItemCount/ItemCount';

//Estilos
import './ItemDetail.css'

function ItemDetail({producto}) {
  return (
    <Card className='card-detail' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                className='CardMedia-detail'
                component="img"
                image= {producto.image}
                alt="Paella dish"
            />
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
    </Card>
  );
};

export default ItemDetail;
