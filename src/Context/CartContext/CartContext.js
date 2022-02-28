import React, {createContext, useState} from "react";

//FIREBASE - FIRESOTRE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig/firebaseConfig';

export const ProductosSeleccionados = createContext();

export const ProdSeleccionadosProvider = ({children}) => {

    // -----------------------------Lógica count-----------------------------------------
    const [stock, setStock]= useState(0)
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

    // -------------------------------Lógica Cart--------------------------------------------
        //Esta es la variable que actua como carrito de compras. Aqui se guardan nuestros productos
    const [prodsDelCarrito, setProdsDelCarrito] = useState ([]);
    const [cartEmpty, setCartEmpty] = useState (true); 
    
    const valorFinal = () => {
        return prodsDelCarrito.reduce ((acc, value)=> acc + (value.precio*value.cantidad), 0);
    };

    const [valorFinalCompra, setValorFinalCompra] = useState(valorFinal())

    // -------------------Variables y funciones ID de compra---------------------------
    const [IDDelPedido, SetIDDelPedido] = useState('');

    // -------------------Variables y funciones para elContext----------------------------

    const contextValues = {
        prodsDelCarrito: prodsDelCarrito,
        setProdsDelCarrito: setProdsDelCarrito,
        cartEmpty: cartEmpty,
        setCartEmpty: setCartEmpty,
        products: products,
        isLoading: isLoading,
        setIsloading: setIsloading,
        cargarProductosTotales: cargarProductosTotales,
        stock: stock,
        setStock: setStock, 
        initial: initial,
        setInitial: setInitial,
        aumentarProducto: aumentarProducto,
        decrementarProducto: decrementarProducto,
        onAdd: onAdd,
        compraRealizada: compraRealizada,
        setCompraRealizada: setCompraRealizada,
        valorFinalCompra: valorFinalCompra,
        setValorFinalCompra: setValorFinalCompra,
        valorFinal: valorFinal,
        IDDelPedido: IDDelPedido,
        SetIDDelPedido: SetIDDelPedido
    };
    
    return (
        <ProductosSeleccionados.Provider value={contextValues}>
            {children}
        </ProductosSeleccionados.Provider>
    )  
 };
