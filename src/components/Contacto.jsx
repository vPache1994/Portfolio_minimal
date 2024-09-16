// Contacto.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9yasjcj', 'template_k1g2n3i', e.target, 'KAoZ8ly5VaulWpUNn')
      .then((result) => {
        console.log(result.text);
        setEnviado(true);
        setError(null);
        setFormData({ nombre: '', email: '', mensaje: '' }); // Limpiar el formulario
      }, (error) => {
        console.log(error.text);
        setEnviado(false);
        setError('Ocurrió un error al enviar el mensaje.');
      });
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-white to-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-center mb-8">Contacto</h2>
            {enviado && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
                <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
                <p>{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700 text-sm font-semibold mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-12">Información de Contacto</h3>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700">Azuqueca de Henares, Guadalajara</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700">+34 636 91 60 36</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700">victorpachemartin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
