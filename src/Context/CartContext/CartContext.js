import React, {createContext, useState} from "react";

//Axios
import axios from 'axios';

//FIREBASE - FIRESOTRE
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig/firebaseConfig';

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


    const cargarProductosTotales = async () => {
        const q = query (collection(db, "remeras"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=> {
            docs.push({...doc.data(), id: doc.id})
        });
        setProducts(docs);
    };

    //---------------------------Lógica eliminar card---------------------------------------
    

    // -------------------------------Lógica Cart--------------------------------------------
        //Esta es la variable que actua como carrito de compras. Aqui se guardan nuestros productos
    const [prodsDelCarrito, setProdsDelCarrito] = useState ([]);
    const [cartEmpty, setCartEmpty] = useState (true); 

    // -------------------------------------------------------------------------------------
    return (
        <ProductosSeleccionados.Provider value={{ 
            prodsDelCarrito,
            setProdsDelCarrito,
            cartEmpty,
            setCartEmpty,
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
            }}>
            {children}
        </ProductosSeleccionados.Provider>
    )  
 };
