import React from 'react'
import NavBar from './NavBar';

const FooterProtegido = () => {
    return (
        <footer className="bg-neutral-900 text-white py-10 mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Artesanías Colombianas</h2>
                <p className="text-sm max-w-md">
                  Traemos a tu hogar lo mejor del arte y la tradición colombiana. Cada pieza cuenta una historia única y está hecha con amor y dedicación por nuestros talentosos artesanos.
                </p>
              </div> 
              <div className="text-center">
                <h3>Siguenos</h3>
              </div>
            </div>
            <div className="text-center mt-10">
              <p className="text-sm">&copy; 2024 Artesanías Colombianas. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );
}

export default FooterProtegido
