import React from 'react';

const Contacto = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
      <p className="text-lg mb-4">Nos encantaría saber de ti. Ya sea que tengas alguna pregunta, comentario o simplemente quieras decir hola, no dudes en ponerte en contacto con nosotros.</p>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
        <p className="mb-2"><strong>Email:</strong> contacto@artesaniascolombianas.com</p>
        <p className="mb-2"><strong>Teléfono:</strong> +57 123 456 789</p>
        <p className="mb-2"><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Formulario de Contacto</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Nombre</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">Mensaje</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
