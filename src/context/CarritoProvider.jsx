import { createContext, useEffect, useState } from "react";


const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    }

    const addToCart = producto => {
       const productInCart = cart.findIndex(item => item.id == producto.id);
       if(productInCart >= 0) {
        const newCart = structuredClone(cart);
        newCart[productInCart].quantity +=1;
        return setCart(newCart)
       }
       setCart(prevState => ([...prevState, {...producto, quantity: 1}]))

    }
    const removeFromCart = producto => {
        setCart(prevState => prevState.filter(item =>  item.id !== producto.id))
    }

    const creckProductInCart = (producto) => {
        return cart.some( item => item.id === producto.id);
      };

    return (
        <CarritoContext.Provider value={{cart, addToCart, clearCart, removeFromCart, creckProductInCart}}>
            {children}
        </CarritoContext.Provider>
    )
    
}
export {CarritoProvider};

export default CarritoContext; 