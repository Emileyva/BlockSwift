import React from 'react';
import heroBackground from '../assets/imagenes/hero-background.png';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 "></div>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Efectos sutiles para complementar la imagen de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-12">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            GIROS INTERNACIONALES<br />
            RÁPIDOS Y SEGUROS CON<br />
            <span className="bg-[#7835FF] bg-clip-text text-transparent">
              BLOCKSWIFT
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
            La solución rápida y segura para tus transacciones<br />
            internacionales y criptomonedas.
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            {/* Primera fila: dos botones */}
            <div className="flex flex-row gap-4 justify-center items-center">
              <button className="bg-[#7835FF] text-white font-semibold py-3 px-3 md:px-10 rounded-xl  transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Crear Cuenta
              </button>
              <button className="bg-black/60 border border-[#7835FF] backdrop-blur-sm text-white font-semibold py-3 px-8 md:px-16 rounded-xl  transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Ingresar
              </button>
            </div>
            {/* Segunda fila: un botón centrado */}
            <div className="flex justify-center">
              <button className="bg-white text-[#7835FF] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contacta con nosotras
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
