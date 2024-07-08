import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "../../src/Styles/Cart.css";
import '../App.css'


const HeaderProtegido = () => {
  return (
    <>
      <div className="flex justify-between header">
        <div className="ml-10 w-2/6 mt-2">
          <div className=" size-36 -mt-4" ><Link to="/productos"><img src='../../public/img/logoremoved.png' alt="" /></Link></div>
        </div>
        <div style={{ fontFamily: "'Roboto Serif', serif" }} className=" w-2/8 mr-10 flex justify-evenly mt-2">
         <NavBar />
        </div>
      </div>
    </>
  )
}

export default HeaderProtegido
