import React from 'react';

const SobreMi = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100" data-aos="fade-down" data-aos-duration="1000">
      {/* Fondo blanco */}
      <div className="absolute inset-0 bg-white z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-4xl mx-auto p-8">
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre Mí</h2>
          <p className="text-lg text-gray-700">
             Soy un programador apasionado con un enfoque creativo para resolver problemas. Me encanta transformar 
             ideas en soluciones digitales y siempre estoy buscando aprender y mejorar. Estoy emocionado por la
              oportunidad de contribuir con mi creatividad y habilidades en un equipo dinámico.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative w-1/2 md:w-1/3 mt-8 md:mt-0">
          <img
            src="file.jpg" 
            alt="Victor Pache"
            className="rounded-full shadow-lg w-60 h-60 object-cover mx-auto duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
