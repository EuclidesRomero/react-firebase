/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../credenciales'



const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const db = getFirestore();

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([])


    const createUser = (email, password) => {
        setLoading(true);
        try {
            return createUserWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false)
        }
    }

    const loginUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        await signOut(auth);
        setLoading(true);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
                setLoading(false);
            } else {
                setUsuario(null);
            }
        })
        return () => unsubscribe();
    }, []);

    if(usuario ){
        
    }
    useEffect(() => {
        const fetchProducts = async () => {
            if (loading) return;
            else {
                try {
                    const querySnapshot = await getDocs(collection(db, "Productos"));
                    const arrProductos = [];
                    querySnapshot.forEach((doc) => {
                        arrProductos.push({ id: doc.id, ...doc.data() });
                    });
                    setProductos(arrProductos);

                } catch (error) {
                    console.error('Error');
                }
            }
        };
        fetchProducts();
    }, [loading]);


    return (
        <AuthContext.Provider value={{ usuario, createUser, loginUser, logOut, loading, setLoading, productos }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
