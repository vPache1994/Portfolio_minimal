import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4" >
      <div className="container mx-auto flex justify-between items-center">
        {/* Nombre */}
        <div className="text-2xl font-bold text-gray-800">
          Víctor Pache Portfolio
        </div>
        {/* Menú */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#sobre-mi"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-110"
                data-aos="fade-down"    // Animación al hacer scroll
                data-aos-duration="1000" // Duración de la animación
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#estudios"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-110"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="100" // Añade un pequeño retraso
              >
                Estudios
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-110"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-gray-900 transition-colors  duration-300 transform hover:-translate-y-1 hover:scale-110"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Contacto
              </a>
              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
