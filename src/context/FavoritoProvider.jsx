import { createContext, useState } from "react";


const FavoritoContex = createContext();

const FavoritoProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);

    const addFavorites = (producto) => {
        setFavoritos(prevState => ([...prevState, {...producto}]))
    }

    const deleteFavorite = (producto) => {
        setFavoritos(prevState => prevState.filter(item => item.id !== producto.id))
    }
    
      const checkProductInFavorites = (producto) => {
        return favoritos.some(item => item.id === producto.id)
      }
    

    return (
        <FavoritoContex.Provider value = {{favoritos, addFavorites, deleteFavorite, checkProductInFavorites }}>
            {children}
        </FavoritoContex.Provider>
    )

}

export { FavoritoContex }

export default FavoritoProvider;