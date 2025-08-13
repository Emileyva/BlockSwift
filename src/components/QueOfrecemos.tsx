import React from 'react';
import queOfrecemosImg from '../assets/imagenes/fondos/queOfrecemos.png';

const QueOfrecemos: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            ¿QUÉ OFRECEMOS?
          </h2>
          <p className="text-md text-white/70 max-w-4xl mx-auto">
            Nuestra red global de partners efectúa transferencias internacionales en cuestión de horas, 
            asegurando que tu dinero llegue a su destino de manera rápida y segura.
          </p>
        </div>

        {/* Rectángulo principal con imagen */}
        <div 
          className="relative rounded-xl overflow-hidden min-h-[300px] flex items-center"
          style={{
            background: `
              linear-gradient(139.72deg, #1a1a1a 0%, rgba(84, 84, 84, 0.3) 100%),
              linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.04) 35%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.04) 65%, transparent 75%),
              linear-gradient(-45deg, transparent 15%, rgba(160, 160, 160, 0.06) 25%, rgba(200, 200, 200, 0.1) 50%, rgba(160, 160, 160, 0.06) 75%, transparent 85%),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.02) 100%)
            `
          }}
        >
          {/* Efecto metálico adicional */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: `
                radial-gradient(ellipse at 15% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
                radial-gradient(ellipse at 85% 75%, rgba(160, 160, 160, 0.12) 0%, transparent 60%),
                radial-gradient(ellipse at 50% 10%, rgba(220, 220, 220, 0.08) 0%, transparent 40%),
                linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.03) 20%, rgba(255, 255, 255, 0.06) 40%, rgba(255, 255, 255, 0.03) 60%, transparent 80%),
                linear-gradient(90deg, transparent 0%, rgba(180, 180, 180, 0.04) 25%, rgba(220, 220, 220, 0.07) 50%, rgba(180, 180, 180, 0.04) 75%, transparent 100%)
              `
            }}
          ></div>
          {/* Imagen de fondo */}
          <div className="absolute inset-0 flex justify-end items-center">
            <img 
              src={queOfrecemosImg} 
              alt="Qué Ofrecemos" 
              className="h-full w-auto object-cover opacity-80"
            />
          </div>
          
          {/* Contenido del rectángulo */}
          <div className="relative z-10 w-full flex items-center p-6 lg:p-12">
            
            {/* Cards de servicios distribuidas horizontalmente */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
              
              {/* Card 1 - Giros Internacionales */}
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Giros Internacionales
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Realizamos transferencias al exterior desde 
                    <span className="text-white font-semibold"> $10,000 USD </span>
                    en adelante, garantizando rapidez y seguridad.
                  </p>
                </div>
              </div>

              {/* Card 2 - Compra/Venta Cripto */}
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 16l-4-4 4-4"/>
                    <path d="M17 8l4 4-4 4"/>
                    <path d="M3 12h18"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Compra/Venta Cripto
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Facilitamos operaciones con criptomonedas, 
                    ofreciendo una alternativa monetaria y 
                    eficiente para tus necesidades financieras.
                  </p>
                </div>
              </div>

              {/* Card 3 - Pagamos en dólares */}
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Pagamos en dólares.
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Trabajamos con una estructura a través de la 
                    cual podemos recibir en diferentes países del 
                    mundo los pagos de exportaciones y 
                    pagar en Dólares.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueOfrecemos;
