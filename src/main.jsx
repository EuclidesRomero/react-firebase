import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrincipal from './Layout/LayoutPrincipal.jsx'
import AuthLayout from './Layout/AuthLayout.jsx'
import Productos from './pages/Productos.jsx'
import { AuthProvider } from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LayoutPrincipal />}>
            <Route index element={<App />} />
            <Route path='iniciar-sesion' element={<Login />} />
          </Route>
          <Route path='/productos' element={<AuthLayout />}>
            <Route path='all-products' element={<Productos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
