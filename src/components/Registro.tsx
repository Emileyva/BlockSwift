import React, { useState } from 'react';
import cubo from '../assets/imagenes/cuboGala.png';

const Registro: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string>('');

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Sombra verde desde el centro hacia abajo */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] opacity-30 blur-[120px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #07B7A8 0%, #07B7A800 70%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Cubo galáctico */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={cubo} 
                alt="BlockSwift Galaxy Cube" 
                className="w-80 lg:w-96 h-auto object-contain drop-shadow-2xl cube-float"
              />
              
              {/* Efectos de partículas alrededor del cubo */}
             
            </div>
          </div>
          
          {/* Lado derecho - Formulario */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-md p-8 rounded-3xl backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Registrarme en el whitelist
              </h2>
              
              <form className="space-y-6">
                {/* Campo Nombre */}
                <div>
                  <label 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'nombre' ? 'text-[#07B7A8]' : 'text-white'
                    }`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Agregar Nombre"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07B7A8] focus:bg-gray-800/70 transition-all duration-300"
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Campo Apellido */}
                <div>
                  <label 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'apellido' ? 'text-[#07B7A8]' : 'text-white'
                    }`}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07B7A8] focus:bg-gray-800/70 transition-all duration-300"
                    onFocus={() => setFocusedField('apellido')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Campo Email */}
                <div>
                  <label 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-[#07B7A8]' : 'text-white'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07B7A8] focus:bg-gray-800/70 transition-all duration-300"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Campo Teléfono */}
                <div>
                  <label 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'telefono' ? 'text-[#07B7A8]' : 'text-white'
                    }`}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="012"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07B7A8] focus:bg-gray-800/70 transition-all duration-300"
                    onFocus={() => setFocusedField('telefono')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Campo Mensaje */}
                <div>
                  <label 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'mensaje' ? 'text-[#07B7A8]' : 'text-white'
                    }`}
                  >
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Explica Qué Es Lo Que Te Interesa Del Proyecto"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#07B7A8] focus:bg-gray-800/70 transition-all duration-300 resize-none"
                    onFocus={() => setFocusedField('mensaje')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Botón Enviar */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#7835FF' }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para la animación del cubo */}
      <style>{`
        .cube-float {
          animation: float-cube 4s ease-in-out infinite;
        }

        @keyframes float-cube {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default Registro;
