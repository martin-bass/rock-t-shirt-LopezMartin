import React from 'react';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

//Estilos
import './Item.css';

function Item({producto}) {
    
    return (
        <Card className='card-item' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    className='CardMedia-item'
                    component="img"
                    image={producto.image}
                    alt="Paella dish"
                />
                <CardContent className='CardContent-item'>
                    <Typography gutterBottom variant="h6" component="div">
                        {producto.title}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Precio: $ {producto.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='btn-card-container-item'>
                    <Button 
                        className='btn-agregar-item'
                        variant="contained" 
                        size="small" 
                        color="primary">
                            Agregar al Carrito
                    </Button>
            </CardActions>
        </Card>
  );
};

export default Item;