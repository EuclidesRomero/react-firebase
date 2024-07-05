import { Link } from "react-router-dom"
import '../App.css'
const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-5 mb-12 ">
        <div className="ml-10 w-2/6">
          <div className=" size-36 -mt-4" ><Link to="/"><img src='../../public/img/logoremoved.png' alt="" /></Link></div>
        </div>
        <div style={{ fontFamily: "'Roboto Serif', serif" }} className=" w-2/6 mr-10 flex justify-evenly">
          <nav className="flex flex-row justify-center">
            <ul className="flex gap-10 mt-4">
              <li className="text-1xl font-bold"><Link to="/">Inicio</Link></li>
              <li className="text-1xl font-bold"><Link to="/about">About</Link></li>
              <li className="text-1xl font-bold"><Link to="/contacto">Contacto</Link></li>
              <li className="text-1xl font-bold"><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
