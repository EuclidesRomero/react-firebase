import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import HeaderProtegido from "../Components/HeaderProtegido"

// eslint-disable-next-line react/prop-types
const LayoutPrincipal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
       <Outlet />
      </main>
      <Footer/>
    </div> 
  )
}

export default LayoutPrincipal
