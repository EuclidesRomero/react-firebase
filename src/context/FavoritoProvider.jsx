import { createContext, useEffect, useState } from "react";
import {toast, ToastContainer} from 'react-toastify'

const FavoritoContex = createContext();

const FavoritoProvider = ({children}) => {


    const obtenerFavoritos = () => {
        const datos = localStorage.getItem("favoritos")
        if(datos) {
            return JSON.parse(datos)
        } else {
            return [];
        }
    }
    const [favoritos, setFavoritos] = useState(obtenerFavoritos());

    const addFavorites = (producto) => {
        setFavoritos(prevState => ([...prevState, {...producto}]))
        toast('Añadiste un producto a tus favoritos', {
            position: 'bottom-right'
        })
    }

    const deleteFavorite = (producto) => {
        setFavoritos(prevState => prevState.filter(item => item.id !== producto.id))
        toast('Eliminaste este producto a tus favoritos', {
            position: 'bottom-right'
        })
    }
    
      const checkProductInFavorites = (producto) => {
        return favoritos.some(item => item.id === producto.id)
      }

      useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
      },[favoritos])

    return (
        <FavoritoContex.Provider value = {{favoritos, addFavorites, deleteFavorite, checkProductInFavorites }}>
            {children}
        </FavoritoContex.Provider>
    )

}

export { FavoritoContex }

export default FavoritoProvider;