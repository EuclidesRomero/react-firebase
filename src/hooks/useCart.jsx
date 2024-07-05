import { useContext } from "react";
import carritoContext from "../context/CarritoProvider";


const useCart = () => {
    return useContext(carritoContext);
}


export default useCart;