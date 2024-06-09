import './App.css'
import Formulario from './Components/Formulario'
import Home from './pages/Home'


const App = () => {
   return (
    <>
      <div className='flex justify-between mt-5'>
        <div className='w-9/12'>
         <Home />
        </div>
        <div className='w-2/6 h-85 mr-5 flex justify-center'>
          <Formulario />
        </div>
      </div>
  
    </>
  )
}

export default App
