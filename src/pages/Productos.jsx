import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useFavorites from "../hooks/useFavorites";

import { useState } from "react";
import Pagination from "../Components/Pagination";
import { formatearDinero } from "../Helpers/helpers";
import { AddAtoCart, RemoveFavorites, RemoveCart, Favorite } from "../Components/Icons";

const Productos = () => {
  const { productos } = useAuth();
  const { cart, addToCart, removeFromCart, creckProductInCart } = useCart();
  const { addFavorites, favoritos, deleteFavorite, checkProductInFavorites } = useFavorites();
  const [dataQt, setDataQt] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const indexFin = currentPage * dataQt;
  const indexIni = indexFin - dataQt;
  const data = productos.slice(indexIni, indexFin);
  const nPges = Math.ceil(productos.length / dataQt);

  console.log(favoritos);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.length ? (
              data.map((producto) => {
                const isProductInCart = creckProductInCart(producto);
                const isProductInFavorite = checkProductInFavorites(producto);
                return (
                  <div
                    key={producto.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="p-4">
                      <h2 className="text-center mb-2 font-bold text-lg">{producto.name}</h2>
                      <div className="flex justify-center">
                        <img
                          className="w-56 object-cover rounded-lg"
                          src={producto.img}
                          alt={producto.name}
                        />
                      </div>
                      <div className="mt-4 text-gray-600">{producto.description}</div>
                      <div className="flex justify-around mt-4">
                        <button
                          onClick={() => !isProductInCart ? addToCart(producto) : removeFromCart(producto)}
                          className={`flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
                            isProductInCart ? 'bg-red-500 hover:bg-red-700' : ''
                          }`}
                        >
                          {isProductInCart ? <RemoveCart /> : <AddAtoCart />}
                        </button>
                        <button
                          onClick={() => !isProductInFavorite ? addFavorites(producto) : deleteFavorite(producto)}
                          className="flex items-center justify-center bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
                        >
                          {!isProductInFavorite ? <RemoveFavorites /> : <Favorite />}
                        </button>
                      </div>
                      <div className="mt-4 flex justify-center">
                        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 font-semibold text-green-600 text-2xl">
                          {formatearDinero(producto.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="col-span-3 text-center text-gray-500">Cargando productos...</p>
            )}
          </div>
          <div className="mt-8 flex justify-center">
            {data.length === 0 ? (
              <span className="col-span-4 flex justify-center">...</span>
            ) : (
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                nPges={nPges}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
