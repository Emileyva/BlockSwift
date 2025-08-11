import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                BlockSwift
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              La solución rápida y segura para tus transacciones internacionales y criptomonedas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:scale-125 transition-transform duration-300" aria-label="Twitter">🐦</a>
              <a href="#" className="text-2xl hover:scale-125 transition-transform duration-300" aria-label="LinkedIn">💼</a>
              <a href="#" className="text-2xl hover:scale-125 transition-transform duration-300" aria-label="Telegram">📱</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-100">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Transferencias</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Criptomonedas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Cambio de Divisas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">API para Empresas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-100">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Acerca de</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Contacto</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Carreras</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Prensa</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">
              &copy; 2025 BlockSwift. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Términos de Servicio</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">Seguridad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
