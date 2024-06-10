import './App.css'
import HomePage from './Components/HomePage'
import { AuthProvider } from './context/AuthProvider.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LayoutPrincipal from './Layout/LayoutPrincipal.jsx'
import Login from './pages/Login.jsx'
import AuthLayout from './Layout/AuthLayout.jsx'
import Productos from './pages/Productos.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>      
        <Routes>
          <Route path='/' element ={<LayoutPrincipal/>}>
            <Route index element ={ <HomePage />}/>
            <Route path='login' element ={<Login />} />
          </Route>
          <Route path='/productos' element ={<AuthLayout />}>
            <Route  index element = {<Productos />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
