import React, { useState } from 'react';
import cubo from '../assets/imagenes/cuboGala.png';

const Registro: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string>('');

  return (
    <section 
      id="registro"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(139.72deg, #000000 0%, rgba(84, 84, 84, 0.1) 100%)'
      }}
    >
      {/* Sombra verde - círculo pegado al top, solo se ve la mitad inferior */}
      <div 
        className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-[963px] h-[963px]"
        style={{
          background: 'radial-gradient(circle, rgba(7, 183, 168, 0.34) 0%, rgba(7, 183, 168, 0) 70%)',
          filter: 'blur(154px)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          
          {/* Lado izquierdo - Cubo galáctico */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={cubo} 
                alt="BlockSwift Galaxy Cube" 
                className="w-72 md:w-80 lg:w-96 h-auto object-contain cube-float"
              />
            </div>
          </div>
          
          {/* Lado derecho - Formulario */}
          <div className="flex-shrink-0">
            <div 
              className="w-full max-w-lg p-8 rounded-2xl"
              style={{
                background: 'rgba(40, 40, 40, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(80, 80, 80, 0.3)'
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Registrarme en el whitelist
              </h2>
              
              <form className="space-y-4">
                {/* Fila Nombre y Apellido */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className={`block text-xs font-medium mb-1 transition-colors duration-300 ${
                        focusedField === 'nombre' ? 'text-[#5B47CE]' : 'text-gray-400'
                      }`}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Agregar Nombre"
                      className="w-full px-3 py-2.5 bg-gray-700/80 border-0 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B47CE] transition-all duration-300"
                      onFocus={() => setFocusedField('nombre')}
                      onBlur={() => setFocusedField('')}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className={`block text-xs font-medium mb-1 transition-colors duration-300 ${
                        focusedField === 'apellido' ? 'text-[#5B47CE]' : 'text-gray-400'
                      }`}
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="w-full px-3 py-2.5 bg-gray-700/80 border-0 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B47CE] transition-all duration-300"
                      onFocus={() => setFocusedField('apellido')}
                      onBlur={() => setFocusedField('')}
                    />
                  </div>
                </div>

                {/* Fila Email y Teléfono */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      className={`block text-xs font-medium mb-1 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#5B47CE]' : 'text-gray-400'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2.5 bg-gray-700/80 border-0 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B47CE] transition-all duration-300"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className={`block text-xs font-medium mb-1 transition-colors duration-300 ${
                        focusedField === 'telefono' ? 'text-[#5B47CE]' : 'text-gray-400'
                      }`}
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="012"
                      defaultValue="012"
                      className="w-full px-3 py-2.5 bg-gray-700/80 border-0 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5B47CE] transition-all duration-300"
                      onFocus={() => setFocusedField('telefono')}
                      onBlur={() => setFocusedField('')}
                    />
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div>
                  <textarea
                    placeholder="Explica Qué Es Lo Que Te Interesa Del Proyecto"
                    rows={3}
                    className="w-full px-3 py-2.5 bg-gray-700/80 border-0 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2  transition-all duration-300 resize-none"
                    onFocus={() => setFocusedField('mensaje')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                {/* Botón Enviar */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 mt-6"
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
          animation: float-cube 6s ease-in-out infinite;
        }

        @keyframes float-cube {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Registro;
