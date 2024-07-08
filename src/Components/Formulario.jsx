import { useState } from "react";
import useAuth from "../hooks/useAuth";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Formulario = () => {
  const { createUser} = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([name, email, password, password2].includes("")) {
      toast.error("Los campos no pueden estar vacios", {
        position: "top-center",
        style: {
          width:'400px',
        }
      });
      return;
      
    } else if (password !== password2) {
      toast.error('Las contraseñas no coinciden',{
        position: "top-right",
        style: {
          width:'400px',
        }
  
       })
      return;

    } else {
      const response = await createUser(email, password);
      setName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      toast.success('usuario registrado de manera exitosa',{
        position: "top-center",
        style: {
          width:'400px',
        }
  
       })
     
    }
  };



  return (
    <form className="ml-5 flex flex-col justify-center w-2/3" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4 font-bold text-center">Regístrate</h2>
        <ToastContainer />
      <div className="flex flex-col space-y-4">
        <label className="text-center">Nombre</label>
        <input
          type="text"
          placeholder=""
          className="p-2 border border-gray-300 rounded-lg "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-center">Correo electrónico</label>
        <input
          type="email"
          placeholder=""
          className="p-2 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-center">Password</label>
        <input
          type="password"
          placeholder=""
          className="p-2 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <label className="text-center">Confirma tu password</label>
        <input
          type="password"
          placeholder=""
          className="p-2 border border-gray-300 rounded-lg"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <input type="submit" value="Registrarse" className="bg-black rounded-lg mt-5 w-60 m-auto cursor-pointer text-white" />
    </form>
  );
};

export default Formulario;
