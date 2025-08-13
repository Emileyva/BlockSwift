import React from 'react';
import proximamenteImg from '../assets/imagenes/fondos/Poximamente.png';
import cardsImg from '../assets/imagenes/cards.png';

const Proximamente: React.FC = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Rectángulo principal con imagen de fondo */}
        <div 
          className="relative rounded-xl overflow-hidden min-h-[400px] flex items-center"
          style={{
            backgroundImage: `url(${proximamenteImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Contenido del rectángulo */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 gap-8">
            
            {/* Texto a la izquierda */}
            <div className="flex-1 lg:max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                PRÓXIMAMENTE
              </h2>
              <div className="space-y-2">
                <p className="text-lg lg:text-xl text-white font-medium">
                  CAMBIA LA FORMA DE
                </p>
                <p className="text-lg lg:text-xl text-white font-medium">
                  MOVER <span className="text-purple-400 font-bold">TU DINERO</span>
                </p>
              </div>
            </div>
            
            {/* Imagen de cards a la derecha */}
            <div className="flex-shrink-0">
              <img 
                src={cardsImg} 
                alt="Cards" 
                className="w-full max-w-sm lg:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proximamente;
