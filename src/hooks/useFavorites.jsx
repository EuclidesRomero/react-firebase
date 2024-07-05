import { useContext } from "react";
import { FavoritoContex } from "../context/FavoritoProvider";

const useFavorites = () => {
  return useContext(FavoritoContex)
}

export default useFavorites

