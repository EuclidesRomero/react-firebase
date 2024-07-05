import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información del sitio */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Artesanías Colombianas</h2>
            <p className="text-sm max-w-md">
              Traemos a tu hogar lo mejor del arte y la tradición colombiana. Cada pieza cuenta una historia única y está hecha con amor y dedicación por nuestros talentosos artesanos.
            </p>
          </div>
          {/* Redes sociales */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <a  href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm">&copy; 2024 Artesanías Colombianas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
