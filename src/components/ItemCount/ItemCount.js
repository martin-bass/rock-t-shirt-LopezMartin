import React,  {useState} from 'react';

// MUI material
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button,CardActions } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

//Estilos
import './ItemCount.css';

function ItemCount({stock}) {
    const [initial, setInitial] = useState (1);

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
        };        
    };

    
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
                    </Button>
                </div>
            </CardActions>
        </Card>
  );
};

export default ItemCount;
