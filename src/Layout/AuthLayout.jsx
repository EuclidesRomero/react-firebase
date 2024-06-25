import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HeaderProtegido from "../Components/HeaderProtegido";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const AuthLayout = () => {
  const { loading, usuario } = useAuth();
  if (loading) return <span className="loading loading-dots loading-lg">Cargando ...</span>;

  if (usuario) {
    return (
      <>
        <HeaderProtegido />
          {<Outlet/>}
        <Footer />
      </>
    );
  }

  return <Navigate to="/login" />;
};

export default AuthLayout;
