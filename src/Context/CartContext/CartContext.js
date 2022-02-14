import React, {createContext, useState} from "react";
import { useParams } from 'react-router-dom';

//Axios
import axios from 'axios';

 export const ProductosSeleccionados = createContext();

 export const ProdSeleccionadosProvider = ({children}) => {

    // -----------------------------Lógica count-----------------------------------------
    const stock= 9;
    const [initial, setInitial] = useState (1);
    const [compraRealizada, setCompraRealizada] = useState (false);

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
            setCompraRealizada (!compraRealizada);
            alert (`Cantidad seleccionada ${initial} unidades!`)
        };        
    };
    //-------------------------------Lógica Cards Inicio-------------------------------------
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsloading] = useState (true);

    const cargarProductosTotales = () => {
        axios ('https://fakestoreapi.com/products')
        .then((response) => {setProducts(response.data)})
    };

    //-------------------------------Lógica Card Detail---------------------------------------
    const [item, SetItem] = useState ({});
    let itemID= useParams();
    
    
  
    const [isLoading1, setIsloading1] = useState (true);

    const cargarProducto = () => {
        axios(`https://fakestoreapi.com/products/${item.id}`)
        .then((response) => {SetItem(response.data)})
    };


     // -------------------------------Lógica Cart---------------------------------------
    const [prodsDelCarrito, setProdsDelCarrito] = useState ([]);


    return (
        <ProductosSeleccionados.Provider value={{ 
            products,
            isLoading,
            setIsloading,
            cargarProductosTotales,
            stock, 
            initial,
            setInitial,
            aumentarProducto,
            decrementarProducto,
            onAdd,
            compraRealizada,
            setCompraRealizada,
            item,
            itemID,
            cargarProducto,
            isLoading1,
            setIsloading1
            }}>
            {children}
        </ProductosSeleccionados.Provider>
    )  
 };
