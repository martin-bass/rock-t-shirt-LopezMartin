import React from 'react';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';

//Estilos
import './ItemDetail.css'

function ItemDetail({}) {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                className='CardMedia'
                component="img"
                //image= {producto.image}
                alt="Paella dish"
            />
            <CardContent className='CardContent'>
                <Typography className='titulo' gutterBottom variant="h5" component="div">
                    jojo
                </Typography>
                <Typography className='descripcion' gutterBottom variant="h6" component="div">
                    <p>Descripción del Producto:</p>
                </Typography>
                <Typography className='precio' variant="body1" color="text.primary">
                    Precio: $ koko
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className='btn-card-container'>
                <Button
                    className='btn-comprar'
                    variant="contained" 
                    size="small" 
                    color="primary">
                        Comprar
                </Button>
        </CardActions>
    </Card>
  );
};

export default ItemDetail;
