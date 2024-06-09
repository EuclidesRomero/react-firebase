import { createBrowserRouter } from "react-router-dom";
import LayoutPrincipal from "../Layout/LayoutPrincipal";
import App from '../App';
import Productos from "../pages/Productos";
import Login from "../pages/Login";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPrincipal />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },
    {
        path: "/products",
        element: <AuthLayout />,
        children: [
            {
                path: " ",
                element: <Productos />
            }
        ]
    }
]);

export default router;
