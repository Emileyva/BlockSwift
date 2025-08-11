import React from 'react';

const Services: React.FC = () => {
  const certifications = [
    {
      name: 'OFAC',
      logo: '/logos/ofac.svg',
      alt: 'Office of Foreign Assets Control'
    },
    {
      name: 'ASFI',
      logo: '/logos/asfi.svg',
      alt: 'Autoridad de Supervisión del Sistema Financiero'
    },
    {
      name: 'UIF',
      logo: '/logos/uif.svg',
      alt: 'Unidad de Investigaciones Financieras'
    },
    {
      name: 'CMF',
      logo: '/logos/cmf.svg',
      alt: 'Comisión para el Mercado Financiero'
    },
    {
      name: 'UAF',
      logo: '/logos/uaf.svg',
      alt: 'Unidad de Análisis Financiero'
    },
    {
      name: 'AML',
      logo: '/logos/aml.svg',
      alt: 'Anti-Money Laundering'
    },
    {
      name: 'SUMSUB',
      logo: '/logos/sumsub.svg',
      alt: 'Sumsub Identity Verification'
    }
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Efectos de blur */}
      <div className="absolute w-80 h-80 -left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[155px] rounded-full"></div>
      <div className="absolute w-80 h-80 -right-12 top-3/5 transform -translate-y-1/2 bg-gradient-to-r from-purple-400 to-purple-600 opacity-25 blur-[154px] rounded-full"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
            En <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-semibold">Blockswift</span> desarrollamos cumplimiento con<br />
            <span className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ESTÁNDARES INTERNACIONALES
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              
              <div className="relative z-10 w-full h-12 flex items-center justify-center">
                <img 
                  src={cert.logo} 
                  alt={cert.alt}
                  className="max-w-24 max-h-10 object-contain filter brightness-110 contrast-110 transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
