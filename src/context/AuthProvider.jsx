/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from "../credenciales";

const AuthContext = createContext();
const auth = getAuth(appFirebase);

const AuthProvider = ({ children }) => {
const [usuario, setUsuario] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
            } else {
                setUsuario(null);
            }
        })
        return () => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={{ usuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
