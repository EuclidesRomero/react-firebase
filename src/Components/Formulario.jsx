import { useState } from "react"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import appFirebase from "../credenciales";

const auth = getAuth(appFirebase);

const Formulario = () => {
  const [name, setnaName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPaswword1] = useState("")
  const [password2, setPaswword2] = useState("")

  const HandledSubmit = async (e) =>{
    e.preventDefault();
    if([name, email, password, password2].includes("")){
      console.log('Todos los campos son obligatorios');
    } else if(password !== password2) {
      console.log("Las contraseñas no coincideb")
    }
    else {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    }

  }
  return (
    <form className="ml-5 flex flex-col justify-center w-2/3 " onSubmit={HandledSubmit}>
      <h2 className="text-2xl mb-4 font-bold text-center">Regístrate</h2>
      <div className="flex flex-col space-y-4 ">
        <label className="text-center">Nombre</label>
        <input type="text" placeholder="" className="p-2 border border-gray-300 rounded-lg text-center" onChange={e => setnaName(e.target.value)}></input>
        <label className="text-center">Correo electrónico</label>
        <input type="email" placeholder="" className="p-2 border border-gray-300 rounded-lg" onChange={e => setEmail(e.target.value)}></input>
        <label className="text-center" >Password</label>
        <input type="password" placeholder="" className="p-2 border border-gray-300 rounded-lg" onChange={e => setPaswword1(e.target.value)}></input>
        <label className="text-center">Confirma tu password</label>
        <input type="password" placeholder="" className="p-2 border border-gray-300 rounded-lg" onChange={e => setPaswword2(e.target.value)}></input>
      </div>
        <input type="submit" value="Registrarse" className="bg-black rounded-lg mt-5 w-28 m-auto cursor-pointer text-white"/>
    </form>
  )
}

export default Formulario
