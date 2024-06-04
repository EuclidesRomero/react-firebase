import HeaderProtegido from '../Components/HeaderProtegido';
import Footer from '../Components/Footer';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthLayout = () => {
const {usuario} = useAuth();
   return (
        <>
        {usuario ? (
            <div>
                <HeaderProtegido/>
                 <div>
                    <Outlet />
                 </div>
                <Footer />
            </div>
        ) : <Navigate to="/" />  }
        </>
    )
}

export default AuthLayout
