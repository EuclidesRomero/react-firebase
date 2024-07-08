import './App.css'
import HomePage from './Components/HomePage'
import { AuthProvider } from './context/AuthProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './Layout/LayoutPrincipal.jsx'
import Login from './pages/Login.jsx'
import AuthLayout from './Layout/AuthLayout.jsx'
import Productos from './pages/Productos.jsx'
import About from './pages/About.jsx'
import HomePageProducts from './Components/HomePageProducts.jsx'
import { CarritoProvider } from './context/CarritoProvider.jsx'
import Favoritos from './pages/Favoritos.jsx'
import FavoritoProvider from './context/FavoritoProvider.jsx'
import Contacto from './pages/Contacto.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
          <FavoritoProvider>
            <Routes>
              <Route path='/' element={<LayoutPrincipal />}>
                <Route index element={<HomePage />} />
                <Route path='login' element={<Login />} />
                <Route path='about' element={<About />} />
                <Route path='contacto' element = {<Contacto/>} /> 
              </Route>
              <Route path='/productos' element={<AuthLayout />}>
                <Route index element={<HomePageProducts />} />
              </Route>
              <Route path='/favoritos' element={<AuthLayout />}>
                <Route index element={<Favoritos />} />
              </Route>
            </Routes>
          </FavoritoProvider>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
