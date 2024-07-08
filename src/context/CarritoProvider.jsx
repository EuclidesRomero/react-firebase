import { createContext, useEffect, useState } from "react";
import {toast, ToastContainer} from 'react-toastify'

const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    
    const obtenerCarrito = () => {
        let datos = localStorage.getItem('cart');
        if(datos) {
            return JSON.parse(datos)
        } else {
            return [];
        }
    }
    const [cart, setCart] = useState(obtenerCarrito());

    
    const addToCart = producto => {
       const productInCart = cart.findIndex(item => item.id == producto.id);
       if(productInCart >= 0) {
        const newCart = structuredClone(cart);
        newCart[productInCart].quantity +=1;
        return setCart(newCart)
       }
       setCart(prevState => ([...prevState, {...producto, quantity: 1}]))

       toast.success('Producto añadido al carrito ', {
        autoClose: 3000,
        position: "bottom-right"
        }  
    );
    return
    }

    const removeFromCart = producto => {
        setCart(prevState => prevState.filter(item =>  item.id !== producto.id))
        toast.info('Este producto fue retirado del carrito ', {
            autoClose: 3000,
            position: "bottom-right"
            } );
       
    }

    const creckProductInCart = (producto) => {
        return cart.some( item => item.id === producto.id);
      };

      const clearCart = () => {
        setCart([])

      }

      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
      }, [cart]);

    return (
        <CarritoContext.Provider value={{cart, addToCart, removeFromCart, creckProductInCart, clearCart}}>
            {children}
        </CarritoContext.Provider>
    )
    
}
export {CarritoProvider};

export default CarritoContext; 