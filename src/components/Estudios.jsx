import React from 'react';

const Estudios = () => {
    const estudios = [
      {
        titulo: "Grado Medio Sistemas microinformáticos y redes",
        institucion: "IES Arcipreste de Hita",
        fecha: "2017",
      },
      {
        titulo: "Grado Superior Desarrollo de Aplicaciones Web",
        institucion: "IES Arcipreste de Hita",
        fecha: "2019",
      },
    ];
  
    return (
      <section id="estudios" className="py-12  mb-24" data-aos="fade-down" data-delay="300">
        <h2 className="text-4xl font-bold text-center mb-24">
          Mis Estudios
        </h2>

        <div className='container mx-auto px-24 mb-24'>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-8 px-24  justify-center">
            {estudios.map((estudio, index) => (
                <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{estudio.titulo}</h3>
                    <p className="font-medium">{estudio.institucion}</p>
                    <p className="text-sm text-gray-500">{estudio.fecha}</p>
                </div>
                <p className="text-gray-700">{estudio.descripcion}</p>
                </div>
            ))}
            </div>
        </div>
        


      </section>
    );
  };
  
  export default Estudios;
  