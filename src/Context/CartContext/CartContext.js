import React, {createContext, useState} from "react";

 export const ProductosSeleccionados = createContext();

 export const ProdSeleccionadosProvider = ({children}) => {
    const [productos, setProductos] = useState ([]);

    // -----------------------------Logica count-----------------------------------------
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
     // ----------------------------------------------------------------------
        


    return (
        <ProductosSeleccionados.Provider value={{
            productos, 
            stock, 
            initial,
            setInitial,
            aumentarProducto,
            decrementarProducto,
            onAdd,
            compraRealizada,
            setCompraRealizada
            }}>
            {children}
        </ProductosSeleccionados.Provider>
    )  
 };
