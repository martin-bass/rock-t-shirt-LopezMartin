import React,{useState, useEffect, useContext} from 'react';


//MUI material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

//Components
import Form from '../Form/Form';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './CheckOut.css'

function CheckOut() {
    const {prodsDelCarrito, valorFinalCompra, setValorFinalCompra, valorFinal} = useContext (ProductosSeleccionados);

    const totalDeProdcutos = () => {
        return prodsDelCarrito.reduce ((acc, value)=> acc + value.cantidad, 0)
    };

    useEffect(() => {
        setValorFinalCompra(valorFinal()); 
    }, [valorFinal]);
    

    //Modal Form
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Checkbox medios de pago
    const [valuePago, setValuePago] = useState('Efectivo');
    const handleChangePago = (event) => {
        setValuePago(event.target.value);
    };
    
    //Checkbox medios envio
    const [valueEnvio, setValueEnvio] = useState('retiro');    
    const handleChangeEnvio = (event) => {
        setValueEnvio(event.target.value);
        if(valueEnvio!="envio"){
            console.log(valorFinal ()+ 700)
            setValorFinalCompra (valorFinal ()+ 700);
        } else {
            setValorFinalCompra (valorFinal);
        };    
    }; 

    return (
        <div className='CheckOut'>
            <Card >
                <CardContent>
                    <Typography  color="text.secondary">
                    Cantidad Total de Productos: {totalDeProdcutos()}
                    </Typography>
                    <Typography variant="h5" component="div">
                    TOTAL: ${valorFinalCompra} 
                    </Typography>
                    <br />
                    <div className='checkbox-formas-de-pago'>
                        <RadioGroup
                            className='Medios-de-pago'
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valuePago}
                            onChange={handleChangePago}
                        >
                            <Typography className='tituloMedio-envio' variant="body1">
                            Medio de Pago:                   
                            </Typography>
                            <div className='chek-item-container'>
                                <LocalAtmIcon /><FormControlLabel className='chek-item' value='Efectivo' control={<Radio />} label="Efectivo" />
                            </div>
                            <div className='chek-item-container'>
                                <CreditCardIcon /><FormControlLabel className='chek-item'  value="Tarjeta" control={<Radio />} label="Tarjeta de Crédito" />
                            </div>
                            <div className='chek-item-container'>
                                <AccountBalanceIcon /><FormControlLabel className='chek-item'  value="Transferencia" control={<Radio />} label="Transferencia Bancaria" />
                            </div>
                            <div className='chek-item-container'>
                                <CardGiftcardIcon /><FormControlLabel className='chek-item'  value="Mercado-Pago" control={<Radio />} label="Mercado-Pago" />
                            </div> 
                        </RadioGroup>
                        <RadioGroup
                            id='envio-check'
                            className='envio'
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valueEnvio}
                            onChange={handleChangeEnvio}
                        >
                            <Typography className='tituloMedio-envio' variant="body1">
                            Medio de Envío:                   
                            </Typography>
                            <div className='chek-item-container'>
                                <StorefrontIcon /><FormControlLabel className='chek-item'  value='retiro' control={<Radio />} label="Retiro por Sucursal" />
                            </div>
                            <div className='chek-item-container'>
                                <LocalShippingIcon /><FormControlLabel className='chek-item'  value="envio" control={<Radio />} label="Envío a Domicilio ($ 700)" />
                            </div>
                        </RadioGroup>
                    </div>
                    <br />
                    <Typography variant="body2">
                    Acepto sin reservas las condiciones generales                    
                    </Typography>
                </CardContent>
                <CardActions className='btn-finalizar-compra-container'>
                <div className='modal-form'>
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                         <Form handleClose={handleClose}/> 
                    </Modal>
                </div>
                    <Button
                    className='btn-confirmar-compra'
                    variant="contained" 
                    size="large" 
                    color="success" 
                    onClick={handleOpen}
                    >
                        Confirmar Compra
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CheckOut;