import React,  {useState} from 'react';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

//Estilos
import './ItemCount.css';

export default function ItemCount({stock}) {
    const [initial, onAdd] = useState (1);
    const stockProducto = parseInt (stock);

    const aumentarProducto = () => {
        if (initial < stockProducto) {
            onAdd (initial +1)
        };
    };

    const decrementarProducto= () => {
        if (initial > 1) {
            onAdd (initial -1);
        };
    };

    const finalizarCompra = () => {
        alert (`Cantidad agregada: ${initial} unidades!`)
    };
    
    return (
        <Card className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Producto de Ejemplo
            </Typography>
            <Typography variant="body1" color="text.primary">
                Stock: {stock} unidades
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cantidad: {initial}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <div className='btn-card-container'>
                <div className='botones-suma-resta'>
                    <IndeterminateCheckBoxOutlinedIcon
                        className='btn-resta'
                        onClick={decrementarProducto}/>
                    <AddBoxOutlinedIcon 
                        className='btn-suma'
                        onClick={aumentarProducto}/>
                </div>
                <Button 
                    onClick={finalizarCompra}
                    className='btn-agregar'
                    variant="contained" 
                    size="small" 
                    color="primary">
                        Agregar al Carrito
                </Button>
            </div>
        </CardActions>
        </Card>
  );
};
