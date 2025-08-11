import React from 'react';
import logoIcon from '../assets/imagenes/logo.png';
import heroBackground from '../assets/imagenes/hero-background.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 "></div>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Efectos sutiles para complementar la imagen de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>
      
      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src={logoIcon} alt="BlockSwift Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-white text-xl font-semibold">BlockSwift</span>
          </div>
          <nav className="flex items-center gap-4">
            <button className="btn-primary">
              Comenzar
            </button>
            <button className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
              ☰
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-12">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            GIROS INTERNACIONALES<br />
            RÁPIDOS Y SEGUROS CON<br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              BLOCKSWIFT
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
            La solución rápida y segura para tus transacciones<br />
            internacionales y criptomonedas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary min-w-48">
              Crear Cuenta
            </button>
            <button className="btn-secondary min-w-48">
              Ingresar
            </button>
            <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-48">
              Contacta con nosotras
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
