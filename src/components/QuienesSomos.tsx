import React from 'react';
import cubo from '../assets/imagenes/cubo.png';
import quienesSomosBg from '../assets/imagenes/fondos/quienesSomos.png';

const QuienesSomos: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Container with Background */}
        <div 
          className="relative rounded-3xl overflow-hidden min-h-[600px] flex items-center"
          style={{
            backgroundImage: `url(${quienesSomosBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Content Grid */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                ¿QUIÉNES SOMOS?
              </h2>
              
              <h3 className="text-2xl lg:text-xl font-bold text-white leading-tight">
                Generando confianza en un mundo descentralizado
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-white/90 leading-relaxed font-normal">
                  Somos una empresa fintech que ofrece servicios financieros a través 
                  de tecnología blockchain. entregamos acceso bancario a empresas y 
                  personas naturales. Conectamos lo mejor de las finanzas 
                  tradicionales y las finanzas tecnológicas.
                </p>
              </div>
              
              <div className="pt-6">
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: '#7835FF' }}
                >
                  Conoce Más
                </button>
              </div>
            </div>
            
            {/* Right Side - Cubo Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={cubo} 
                  alt="BlockSwift Technology" 
                  className="w-80 lg:w-96 h-auto object-contain drop-shadow-2xl animate-bounce-slow"
                />
                
                {/* Decorative elements with movement */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-80 animate-orbit-1"></div>
                <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-orbit-2"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-80 animate-orbit-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
