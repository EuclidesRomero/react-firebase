import { Link, useNavigate } from "react-router-dom";
import "../../src/Styles/Login.css";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const { loginUser, setLoading } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    if ([email, password].includes("")) {
      toast.error("Los campos no pueden estar vacios", {
        position: "top-center",
        style: {
          width:'400px',
        }
      });
    
      return;

    } else {
      try {
        await loginUser(email, password)
        navigate("/productos");
        setLoading(false);

      } catch (error) {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          style: {
            width:'400px',
          }
        });
      }
    }};
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100">
    <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        Inicia sesión para ver nuestros productos
      </h2>
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
        <form className="w-full md:w-1/2 flex flex-col p-4 md:p-8" onSubmit={handleFormSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-center mb-2 text-sm md:text-base">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="h-10 p-2 border rounded text-sm md:text-base"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="text-center mb-2 text-sm md:text-base">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="h-10 p-2 border rounded text-sm md:text-base"
            />
          </div>
          <input
            className="cursor-pointer bg-black text-white w-full md:w-3/4 lg:w-1/2 rounded-lg self-center mt-3 p-2 text-sm md:text-base"
            type="submit"
            value="Ingresar"
          />
          <div className="flex justify-center mt-4">
            <p className="text-sm md:text-base">
              ¿No tienes una cuenta?{" "}
              <Link to="/" className="font-bold">
                Obten una
              </Link>
            </p>
          </div>
        </form>
        <div className="hidden md:block md:w-1/2 bg-blue-600">
          <img
            src="/img/backgroundopt2.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
