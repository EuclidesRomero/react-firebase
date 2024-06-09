import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HeaderProtegido from "../Components/HeaderProtegido";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return (
      <>
        <HeaderProtegido />
          <Outlet/>
        <Footer />
      </>
    );
  }

  return <Navigate to="/login" />;
};

export default AuthLayout;
