import React,  {useState} from 'react';

// MUI material
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Estilos
import './ItemCount.css';

function ItemCount({stock, initial, aumentarProducto, decrementarProducto, onAdd}) {
    
    return (
        <Card>
            <CardActions>
                <div className='btn-card-container-count'>
                    <div className='stock-count'>
                        <h6>Stock Disponible:{stock}</h6>
                    </div>
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
                        className='btn-agregar-count'
                        variant="contained" 
                        size="small" 
                        color="primary">
                            Agregar al Carrito
                        <ShoppingCartIcon style={{ marginLeft: '10px' }}/>
                    </Button>
                </div>
            </CardActions>
        </Card>
  );
};

export default ItemCount;
