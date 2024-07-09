import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, MenuIcon, CloseIcon } from "./Icons.jsx"; 
import useAuth from '../hooks/useAuth.jsx';
import Carrito from "./Carrito.jsx";
import "../../src/Styles/Cart.css";

const NavBar = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await logOut();
            console.log("Saliendo satisfactoriamente");
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" text-neutral-950">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="hidden md:flex gap-10">
                    <ul className="flex gap-10 ">
                        <li className="text-lg font-bold"><Link to="/productos">Inicio</Link></li>
                        <li className="text-lg font-bold"><Link to="/productos">Productos</Link></li>
                        <li className="text-lg font-bold"><Link to="/favoritos">Favoritos</Link></li>
                        <li><button onClick={handleSignOut}><LogOut /></button></li>
                        <li><Carrito /></li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-black">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        <li className="text-lg font-bold"><Link to="/productos" onClick={toggleMenu}>Inicio</Link></li>
                        <li className="text-lg font-bold"><Link to="/productos" onClick={toggleMenu}>Productos</Link></li>
                        <li className="text-lg font-bold"><Link to="/favoritos" onClick={toggleMenu}>Favoritos</Link></li>
                        <li><button onClick={() => { handleSignOut(); toggleMenu(); }}><LogOut /></button></li>
                        <li><Carrito /></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
