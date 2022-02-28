import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';

//MUI material
import { FormControl, TextField, Box, Typography, Button, Alert } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//FIREBASE - FIRESOTRE
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig/firebaseConfig';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './Form.css';

const initialState = {
    Nombre : '',
    Apellido : '',
    email : '',
    Telefono : ''
}

function Form ({handleClose})  {

    const { setCartEmpty, prodsDelCarrito, setProdsDelCarrito, IDDelPedido, SetIDDelPedido } = useContext (ProductosSeleccionados);

    const [values, SetValues] = useState (initialState);
    

    const onChange = (e) =>{
        const {value, name} = e.target;
        SetValues ({...values, [name]: value, productos: prodsDelCarrito})
    };

    const [errorMessage, setErrorMessage] = useState (false);
    const [errorMailMessage, setErrorMailMessage] = useState (false);

    const onSubmit = async (e) =>{
        e.preventDefault();

        if (values.Nombre=="" || values.Apellido=="" || values.email=="" || values.Telefono=="") {
            setErrorMessage (true);
            
        } else if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(values.email))) {
            setErrorMailMessage (true);
        } else {
            const docRef = await addDoc(collection(db, "pedidos"), {
                values
              });
              setErrorMessage (false);
              setErrorMailMessage (false);
              SetIDDelPedido (docRef.id)
              SetValues(initialState); 
              setProdsDelCarrito([]); 
        };        
    };

    const finalizarCompra = () => {
        setCartEmpty(true);
        SetIDDelPedido('');
        setProdsDelCarrito([]); 
    };
    

    return (
        <form className='Form'>
            <FormControl fullWidth={true}>
                <Box className='box-modal'>
                    {
                        IDDelPedido ? (null) 
                        :
                        (
                            <div>
                                <HighlightOffIcon 
                                    onClick={handleClose}
                                    className='HighlightOffIcon-form'
                                />
                            </div> 
                        )
                    }
                    {
                       errorMessage && 
                        <Alert severity="error">Por favor, completa todos los campos.</Alert>
                    }
                    {
                       errorMailMessage &&
                       <Alert severity="error">Por favor, introduce un e-mail válido.</Alert>
                    }
                    {
                        IDDelPedido ? (
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Revisa tu casilla de correo!
                            </Typography>
                        ) 
                        :
                        (
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Completa tus datos
                            </Typography>
                        )
                    }
                    {
                        IDDelPedido ? (null)
                        :
                        (
                            <>
                                <TextField 
                                    className='box-modal-textfield' 
                                    id="outlined-basic" 
                                    label="Nombre" 
                                    variant="outlined" 
                                    name="Nombre"
                                    value={values.Nombre}
                                    onChange={onChange}/>
                                <TextField 
                                    className='box-modal-textfield' 
                                    id="outlined-basic" 
                                    label="Apellido" 
                                    variant="outlined" 
                                    name="Apellido"
                                    value={values.Apellido}
                                    onChange={onChange}/>
                                <TextField 
                                    className='box-modal-textfield' 
                                    id="outlined-basic" 
                                    label="e-mail" 
                                    variant="outlined" 
                                    name="email"
                                    value={values.email}
                                    onChange={onChange}/>
                                <TextField 
                                    type="number"
                                    className='box-modal-textfield' 
                                    id="outlined-basic" 
                                    label="Telefono" 
                                    variant="outlined" 
                                    name="Telefono"
                                    value={values.Telefono}
                                    onChange={onChange}/>
                            </>
                        )
                    }    
                    {
                       IDDelPedido ? (null) 
                       :
                       (
                        <Link to='/items' style={{ textDecoration: 'none' }}> 
                            <Button 
                                className='btn-finalizar-compra'
                                onClick={onSubmit}
                                variant="contained" 
                                size="large" 
                                color="success" 
                                >
                                    finalizar compra
                            </Button>
                        </Link> 
                       )
                    }
                    
                    {
                        IDDelPedido && (
                        <>
                            <Alert className="Alert-compra" severity="success">Felicitaciones! Tu código de compra es: {IDDelPedido}</Alert>
                            <Link to='/items' style={{ textDecoration: 'none' }}> 
                                <Button 
                                    onClick={finalizarCompra}
                                    className='btn-retornar'
                                    variant="contained" 
                                    size="large" 
                                    >
                                        Volver al menu principal
                                </Button>
                            </Link> 
                        </>
                     )
                    }
                </ Box>
            </FormControl>
        </form>
    )
}

export default Form;