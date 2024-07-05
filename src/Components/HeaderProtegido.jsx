import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "../../src/Styles/Cart.css";


const HeaderProtegido = () => {
  return (
    <>
      <div className="flex justify-between mt-5 mb-12 ">
        <div className="ml-10 w-2/6">
          <div className=" size-36 -mt-4" ><Link to="/productos"><img src='../../public/img/logoremoved.png' alt="" /></Link></div>
        </div>
        <div style={{ fontFamily: "'Roboto Serif', serif" }} className=" w-2/8 mr-10 flex justify-evenly">
         <NavBar />
        </div>
      </div>
    </>
  )
}

export default HeaderProtegido
