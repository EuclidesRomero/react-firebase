import Home from '../pages/Home'
import Formulario from './Formulario'

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mt-5 '>
        <div className='w-full md:w-8/12 lg:w-9/12'>
          <Home />
        </div>
        <div className='w-full md:w-4/12 lg:w-3/12 mb-20  h-auto md:h-85 mt-5 md:mt-0 md:ml-5 flex justify-center'>
          <Formulario />
        </div>
      </div>
    </>
  )
}

export default HomePage
