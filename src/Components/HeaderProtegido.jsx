import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const HeaderProtegido = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate ();

  const handleSingOut =  async () => {
    try {
      await logOut () ;
        console.log("Saliendo satisfactoriamente");
        navigate("/login")
      
      
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <>
      <div className="flex justify-between mt-5 mb-12 ">
        <div className="ml-10 w-2/6">
          <div className=" size-36 -mt-4" ><Link to="/productos"><img src='../../public/img/logoremoved.png' alt="" /></Link></div>
        </div>
        <div style={{ fontFamily: "'Roboto Serif', serif" }} className=" w-2/8 mr-10 flex justify-evenly">
          <nav className="flex flex-row justify-center bgr">
            <ul className="flex gap-10 mt-4">
              <li className="text-1xl font-bold"><Link to="/productos/all-products">Inicio</Link></li>
              <li className="text-1xl font-bold"><Link to="/productos/all-products">Productos</Link></li>
              <li className="text-1xl font-bold"><Link to="/">Chat Online whit AI</Link></li>
              <li className="text-1xl font-bold"> <button onClick={handleSingOut}>LogOut</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderProtegido
