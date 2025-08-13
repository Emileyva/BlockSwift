import React from 'react';

const Services: React.FC = () => {
  const certifications = [
    {
      name: 'OFAC',
      logo: '/logos/OFAC.png',
      alt: 'Office of Foreign Assets Control'
    },
    {
      name: 'ASFI',
      logo: '/logos/asfi.png',
      alt: 'Autoridad de Supervisión del Sistema Financiero'
    },
    {
      name: 'UIF',
      logo: '/logos/uif.png',
      alt: 'Unidad de Investigaciones Financieras'
    },
    {
      name: 'CMF',
      logo: '/logos/mf.png',
      alt: 'Comisión para el Mercado Financiero'
    },
    {
      name: 'UAF',
      logo: '/logos/uaf.png',
      alt: 'Unidad de Análisis Financiero'
    },
    {
      name: 'AML',
      logo: '/logos/aml.png',
      alt: 'Anti-Money Laundering'
    },
    {
      name: 'SUMSUB',
      logo: '/logos/sumsub.png',
      alt: 'Sumsub Identity Verification'
    }
  ];

  return (
    <section className="relative pb-24 bg-black text-white overflow-hidden">
      {/* Efectos de blur */}
      <div className="absolute w-80 h-80 -left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[155px] rounded-full"></div>
      <div className="absolute w-80 h-80 -right-12 top-3/5 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[154px] rounded-full"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <div className="text-center mb-20">
          <h2 className="text-sm md:text-base font-normal text-gray-400 leading-tight mb-8">
            En <span className="font-bold text-white">Blockswift</span> desarrollamos cumplimiento con <span className="font-bold text-white">ESTÁNDARES<br />INTERNACIONALES</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-8 items-center justify-center">
          {/* Primera fila: 4 logos */}
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.slice(0, 4).map((cert, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
                style={{ width: '258px', height: '132px' }}
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <div className="relative z-10 w-full h-16 flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.alt}
                    className="max-w-44 max-h-20 object-contain filter brightness-110 contrast-110 transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Segunda fila: 3 logos centrados */}
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.slice(4, 7).map((cert, index) => (
              <div 
                key={index + 4} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
                style={{ width: '258px', height: '132px' }}
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <div className="relative z-10 w-full h-16 flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.alt}
                    className="max-w-43 max-h-20 object-contain filter brightness-110 contrast-110 transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
