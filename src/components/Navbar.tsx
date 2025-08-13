import { useState } from 'react';
import icon  from '../assets/imagenes/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-10 rounded-full border border-white/20 backdrop-blur-md md:mx-12 p-4">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#inicio" className="flex items-center">
          <img src={icon} alt="BlockSwift" className="h-5 md:h-16 w-auto" />
        </a>
      </div>

      {/* Botón "Comenzar" */}
      <div className="flex items-center gap-3">
        <a
          href="#registro"
          className="bg-[#7835FF] text-white px-8 py-4 rounded-full font-semibold text-md hover:opacity-90 transition cursor-pointer"
        >
          Comenzar
        </a>
        
        {/* Menú hamburguesa - visible en todas las resoluciones */}
        <button
          className="bg-[#7835FF] text-white p-4 rounded-full hover:opacity-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1c0b0b] text-white rounded-xl shadow-lg p-6 border border-white/10 backdrop-blur-sm">
          <button className="w-full bg-[#7835FF] text-white px-4 py-3 rounded-full font-semibold">
            Comenzar
          </button>
        </div>
      )}
    </nav>
  );
}
