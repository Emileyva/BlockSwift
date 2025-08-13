import React from 'react';
import monedas from '../assets/imagenes/monedas.png';
import seguridad from '../assets/imagenes/seguridad.png';
import rayo from '../assets/imagenes/rayo.png';

const Caracteristicas: React.FC = () => {
  return (
    <section className="pb-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            CARACTERÍSTICAS
          </h2>
          <p className="text-white/70 text-sm md:text-base">
            Somos una FINTECH que te brinda
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card Liquidez */}
          <div 
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'linear-gradient(140.78deg, rgba(232, 188, 121, 0.75) -42.84%, rgba(84, 84, 84, 0.075) 80.06%)'
            }}
          >
            <div className="relative z-10">
              <div className="mb-4 md:mb-6">
                <img 
                  src={monedas} 
                  alt="Liquidez" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Liquidez
              </h3>
              <p className="text-white/80 text-sm md:text-xs leading-relaxed">
                Alta Liquidez Para Operaciones OTC
              </p>
            </div>
          </div>

          {/* Card Seguridad */}
          <div 
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'linear-gradient(140.78deg, rgba(145, 146, 229, 0.75) -42.84%, rgba(84, 84, 84, 0.075) 80.06%)'
            }}
          >
            <div className="relative z-10">
              <div className="mb-4 md:mb-6">
                <img 
                  src={seguridad} 
                  alt="Seguridad" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Seguridad
              </h3>
              <p className="text-white/80 text-sm md:text-xs leading-relaxed">
                Procesos De Seguridad y Cumplimiento
                <br />
                <span className="text-sm text-white">KYC - KYB - KTY</span>
              </p>
            </div>
          </div>

          {/* Card Rapidez */}
          <div 
            className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-sm md:col-span-2 lg:col-span-1"
            style={{
              background: 'linear-gradient(140.78deg, rgba(212, 139, 208, 0.75) -42.84%, rgba(84, 84, 84, 0.075) 80.06%)'
            }}
          >
            <div className="relative z-10">
              <div className="mb-4 md:mb-6">
                <img 
                  src={rayo} 
                  alt="Rapidez" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Rapidez
              </h3>
              <p className="text-white/80 text-sm md:text-xs leading-relaxed">
                Operaciones Swift Dentro Del Mismo Día
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
