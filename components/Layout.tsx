
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import SportsTicker from './SportsTicker';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Game Day', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/contact' },
  ];

  const formattedPhone = BUSINESS_INFO.phone.replace(/\D/g, '');

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Global Sports Ticker */}
      <SportsTicker />

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <span className="text-2xl font-oswald font-bold tracking-tighter text-orange-500">PIGSKINS</span>
              <span className="hidden lg:inline text-sm font-semibold text-zinc-400">BAR & GRILL</span>
            </Link>

            <div className="flex items-center space-x-2 md:space-x-6 lg:space-x-8">
              {/* Desktop Call Link */}
              <a 
                href={`tel:${formattedPhone}`}
                className="hidden md:flex items-center text-sm font-bold text-zinc-300 hover:text-orange-500 transition-colors border-r border-zinc-800 pr-6 mr-2"
              >
                <Phone size={16} className="mr-2 text-orange-500" />
                {BUSINESS_INFO.phone}
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                      location.pathname === link.path ? 'text-orange-500' : 'text-zinc-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions: Call Button + Burger */}
              <div className="md:hidden flex items-center space-x-3">
                <a 
                  href={`tel:${formattedPhone}`}
                  className="flex items-center justify-center w-10 h-10 bg-orange-600/10 border border-orange-600/20 rounded-lg text-orange-500 hover:bg-orange-600/20 transition-all"
                  aria-label="Call Pigskins"
                >
                  <Phone size={18} />
                </a>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-bold uppercase tracking-tight rounded-md ${
                    location.pathname === link.path ? 'bg-orange-600/10 text-orange-500' : 'text-zinc-300 hover:bg-zinc-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Explicit Mobile Call Link in Menu */}
              <a 
                href={`tel:${formattedPhone}`}
                className="flex items-center px-4 py-3 text-orange-500 font-black border-t border-zinc-800 pt-6 mt-4"
              >
                <Phone size={18} className="mr-3" />
                CALL US: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer / Location Summary */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">PIGSKINS CINCINNATI</h3>
            <p className="text-zinc-400 mb-4 font-kitchen text-sm">Your neighborhood spot for sports, cold beer, and the best wings in town. No gimmicks, just good times.</p>
            <div className="flex space-x-4">
               {/* Placeholder Socials */}
               <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors text-[10px] font-bold">FB</div>
               <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-colors text-[10px] font-bold">IG</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Find Us</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <MapPin className="mr-2 text-orange-500 shrink-0 mt-0.5" size={18} />
                <div className="text-sm leading-snug">
                  {BUSINESS_INFO.address.split(', ').map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-orange-500 shrink-0" size={18} />
                <a href={`tel:${formattedPhone}`} className="hover:text-white font-bold text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Hours</h3>
            <ul className="space-y-2 text-zinc-400 text-sm font-kitchen">
              {BUSINESS_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between border-b border-zinc-800 pb-1">
                  <span>{h.day}</span>
                  <span className="text-zinc-200">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs font-kitchen">
          &copy; {new Date().getFullYear()} Pigskins Bar and Grill. All rights reserved. Built for Cincinnati.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
