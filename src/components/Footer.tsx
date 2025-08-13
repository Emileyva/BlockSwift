import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import icon  from '../assets/imagenes/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#7835FF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={icon} alt="BlockSwift" className="w-52 h-10" />
              
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
              Blockswift es una empresa de soluciones blockchain dedicada a proteger los ecosistemas digitales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Producto */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">API de cadena de bloques</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Panel</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Documentación</a></li>
            </ul>
          </div>
          
          {/* Compañía */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Compañía</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">acerca de</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Carreras</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">Contacta con nosotros</a></li>
            </ul>
          </div>

          {/* Download App Card */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-6 text-white">Download our App</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white/60">Get it on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.17 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white/60">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Blockswift. Todos los derechos reservados. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Terms of Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
