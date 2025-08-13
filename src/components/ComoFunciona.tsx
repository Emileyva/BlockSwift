import React from 'react';
import redImage from '../assets/imagenes/red.png';
import comoFuncionaBg from '../assets/imagenes/fondos/comoFunciona.png';

const ComoFunciona: React.FC = () => {
  return (
    <section 
      id="como-funciona"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Sombras decorativas */}
      <div className="absolute w-60 h-60 md:w-80 md:h-80 -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[100px] md:blur-[155px] rounded-full"></div>
      <div className="absolute w-60 h-60 md:w-80 md:h-80 -right-6 md:-right-12 top-3/5 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[100px] md:blur-[154px] rounded-full"></div>
      <div className="absolute w-60 h-60 md:w-80 md:h-80 -left-6 md:-left-12 top-10 md:top-0 transform md:-translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[100px] md:blur-[155px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-lg text-white/80 mt-4">
            Compra USDT y solicita tus pagos internacionales
          </p>
        </div>

        {/* Rectángulo con imagen de fondo */}
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${comoFuncionaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay para mejor legibilidad */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Contenido del rectángulo */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full p-8 lg:p-16">
            
            {/* Lado izquierdo - Imagen de red */}
            <div className="flex-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <img 
                src={redImage} 
                alt="BlockSwift Network" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
            
            {/* Lado derecho - Pasos */}
            <div className="flex-1 space-y-8 lg:pl-16">
              
              {/* Step 1 */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-[#7835FF]">Step 1</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  CREA TU CUENTA Y VERIFÍCATE
                </h3>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-[#7835FF]">Step 2</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  COMPRA USDT
                </h3>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-[#7835FF]">Step 3</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  SOLICITA TU PAGO SWIFT
                </h3>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
