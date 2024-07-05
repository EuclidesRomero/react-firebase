import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HeaderProtegido from "../Components/HeaderProtegido";
import FooterProtegido from "../Components/FooterProtegido";


const AuthLayout = () => {
  const { loading, usuario } = useAuth();
  if (loading) return '...cargando'

  if (usuario) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderProtegido />
        <main className="flex-grow">
          {<Outlet/> }
        </main>
        <FooterProtegido />
      </div>
    );
  }
  return <Navigate to="/login" />;
 
};

export default AuthLayout;
