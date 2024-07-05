import { useEffect, useId } from "react";
import { Cart } from "./Icons";
import "../../src/Styles/Cart.css";
import useCart from "../hooks/useCart";

const Carrito = () => {
  const cartCeckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  
  return (
    <>
      <label className="cart-button" htmlFor={cartCeckBoxId}>
        <Cart />
      </label>
      <input id={cartCeckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <p className="text-black block mt-10 mb-5 font-bold text-center">
          {cart.length === 0 ? (
            <h3 className="font-bold text-2xl">No hay nada en el carrito</h3>
          ) : (
            <h3 className="font-bold text-2xl">Este es tu carrito</h3>
          )}
        </p>
        {cart.map((producto) => (
          <div key={producto.id} className="cart-item flex items-center p-4 border-b border-gray-200">
            <img
              src={producto.img}
              alt={producto.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex flex-col flex-1">
              <h4 className="text-lg font-semibold mb-1 text-center w-64">{producto.name}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">{producto.price}</span>
                <div className="flex items-center">
                  <small className="mr-4 font-bold">Cantidad: {producto.quantity}</small>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    onClick={() => addToCart(producto)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cart.length !== 0 && (
          <button
            onClick={() => clearCart()}
            className="bg-red-500 text-white w-full py-2 mt-4 hrounded-md hover:bg-red-600"
          >
            Limpiar carrito
          </button>
        )}
      </aside>
    </>
  );
};

export default Carrito;
