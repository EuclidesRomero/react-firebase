import useFavorites from "../hooks/useFavorites";
import { Favorite } from "../Components/Icons";
import { formatearDinero } from "../Helpers/helpers";

const Favoritos = () => {
  const { favoritos, deleteFavorite } = useFavorites();

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4 mt-40">Tus Favoritos</h1>
      <div className="flex flex-col items-center mt-20">
      
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {favoritos.length === 0 ? (
            <span className="col-span-full text-center">Aún no hay nada en favoritos</span>
          ) : (
            favoritos.map((producto) => {
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
                      <div className="flex justify-around mt-4">
                        <button
                          onClick={() => deleteFavorite(producto)}
                          className="flex items-center justify-center bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
                        >
                          {<Favorite /> }
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
          )}
        </div>
      </div>
    </>
  );
};

export default Favoritos;
