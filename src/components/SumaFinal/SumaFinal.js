import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//MUI material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './SumaFinal.css'

function SumaFinal() {
    const {prodsDelCarrito, setCartEmpty} = useContext (ProductosSeleccionados);

    const totalDeProdcutos = () => {
        return prodsDelCarrito.reduce ((acc, value)=> acc + value.cantidad, 0)
    };

    const valorFinal = () => {
        return prodsDelCarrito.reduce ((acc, value)=> acc + (value.precio*value.cantidad), 0)
    };

    const finalizarCompra = () => {
        alert("Muchas gracias por su compra!");
        setCartEmpty(true);
    };


    return (
        <div className='SumaFinal'>
            <Card >
                <CardContent>
                    <Typography  color="text.secondary">
                    Cantidad Total de Productos: {totalDeProdcutos()}
                    </Typography>
                    <Typography variant="h5" component="div">
                    TOTAL: ${valorFinal()} 
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography variant="body2">
                    Acepto sin reservas las condiciones generales                    
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button 
                        size="small"
                        onClick={()=>{finalizarCompra()}}
                        >
                            Finalizar Compra
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default SumaFinal;