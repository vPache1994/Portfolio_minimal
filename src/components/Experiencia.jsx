import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Experiencia() {
    return (
        <div className="flex flex-col items-center min-h-screen py-8  mt-24" id="experiencia"> {/* Asegura que el contenedor tenga altura mínima */}
            {/* Título principal */}
            <h1 className="text-3xl font-bold mb-24" data-aos="fade-down">Experiencia</h1>

            <div className="flex items-start space-x-16 mt-8"> {/* Añadido espacio entre los dos elementos */}
                {/* Contenedor de la línea de tiempo y eventos */}
                <div className="flex flex-col items-center relative">
                    {/* Línea vertical */}
                    <div 
                        className="absolute border-l-2 border-gray-300" 
                        style={{ height: '100%', left: '8px' }}
                        data-aos="fade-down"
                    ></div>

                    {/* Puntos de la línea de tiempo */}
                    <div className="flex flex-col space-y-12">
                        <div className="relative flex items-start" data-aos="fade-right">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                            <div className="ml-4 text-left">
                                <div className="font-bold">Programador Junior</div>
                                <div className="text-sm">INFORTEC SL</div>
                                <div className="text-sm italic">Abril 2019 - Junio 2019</div>
                            </div>
                        </div>
                        <div className="relative flex items-start" data-aos="fade-right" data-aos-delay="100">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                            <div className="ml-4 text-left">
                                <div className="font-bold">Consultor IT</div>
                                <div className="text-sm">SILVERSTORM SL</div>
                                <div className="text-sm italic">Junio 2019 - Noviembre 2019</div>
                            </div>
                        </div>
                        <div className="relative flex items-start" data-aos="fade-right" data-aos-delay="200">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                            <div className="ml-4 text-left">
                                <div className="font-bold">Editor Video e Imagen</div>
                                <div className="text-sm">Freelance</div>
                                <div className="text-sm italic">Enero 2018 - Actualmente</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texto a la derecha */}
                <div 
                    className="max-w-md text-lg font-medium text-left  "
                    data-aos="fade-left"
                    data-aos-delay="300"
                >
                    Aunque mi experiencia como programador es limitada, estoy profundamente motivado y comprometido con mi desarrollo profesional. Tengo muchas ganas de aprender, mejorar y crecer en este campo. Estoy convencido de que, con dedicación y esfuerzo, puedo alcanzar un alto nivel de competencia y aportar valor en cualquier equipo de trabajo.
                </div>
            </div>
        </div>
    );
}

export default Experiencia;
