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

function ItemCount({stock}) {
    const [initial, setStock] = useState (1);
    const stockProducto = parseInt (stock);

    const aumentarProducto = () => {
        if (initial < stockProducto) {
            setStock (initial +1)
        };
    };

    const decrementarProducto= () => {
        if (initial > 1) {
            setStock (initial -1);
        };
    };

    const onAdd = () => {
        if (stock != 0){
            alert (`Cantidad agregada: ${initial} unidades!`)
        };        
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
            </CardContent>
        </CardActionArea>
        <CardActions>
            <div className='btn-card-container'>
                <div className='botones-suma-resta'>
                    <IndeterminateCheckBoxOutlinedIcon
                        className='btn-resta'
                        onClick={decrementarProducto}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {initial}
                    </Typography>
                    <AddBoxOutlinedIcon 
                        className='btn-suma'
                        onClick={aumentarProducto}
                    />
                </div>
                <Button 
                    onClick={onAdd}
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

export default ItemCount;
