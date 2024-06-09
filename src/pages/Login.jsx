import { Link, useNavigate } from "react-router-dom";
import "../../src/Styles/Login.css";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser } = useAuth();

  const functAuth = async (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if ([email, password].includes(" ")) {
      console.log("Los campos no pueden estar vacíos");
    }

    await loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/products");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center -mt-48">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-10">Login</h2>
        <div className="flex rounded-lg overflow-hidden">
          <form className="w-2/5 flex flex-col p-8" onSubmit={functAuth}>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-center mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="h-10 p-2 border rounded"
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="text-center mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="h-10 p-2 border rounded"
              />
            </div>
            <input
              className="cursor-pointer bg-black text-white w-60 rounded-lg self-center mt-3 p-2"
              type="submit"
              value="Login"
            />
            <div className="flex justify-center h-full">
              <div className="flex justify-center items-end">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/" className="font-bold">
                    {" "}
                    Obten una
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="bg-blue-600 w-3/5">
            <img
              src="../../public/img/background3.jpg"
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
