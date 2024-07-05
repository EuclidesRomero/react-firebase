import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "./Alerta";

const Formulario = () => {
  const { createUser, mostrarAlerta, alerta } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([name, email, password, password2].includes("")) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return;
      
    } else if (password !== password2) {
      mostrarAlerta({
        msg: 'Las contraseñas deben ser iguales',
        error: true
      });
      return;

    } else {
      const response = await createUser(email, password);
      setName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      mostrarAlerta({
        msg: 'El usuario fue creado con éxito',
        error: false
      });
     
    }
  };

  const { msg } = alerta;

  return (
    <form className="ml-5 flex flex-col justify-center w-2/3" onSubmit={handleSubmit}>
      {msg && <Alerta alerta={alerta} />}
      <h2 className="text-2xl mb-4 font-bold text-center">Regístrate</h2>
      <div className="flex flex-col space-y-4">
        <label className="text-center">Nombre</label>
        <input
          type="text"
          placeholder=""
          className="p-2 border border-gray-300 rounded-lg text-center"
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
