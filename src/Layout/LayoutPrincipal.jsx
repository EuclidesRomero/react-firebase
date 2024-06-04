import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

// eslint-disable-next-line react/prop-types
const LayoutPrincipal = () => {
  return (
    <>
      <Header/>
      <main>
       <Outlet />
      </main>
      <Footer/>
    </> 
  )
}

export default LayoutPrincipal
