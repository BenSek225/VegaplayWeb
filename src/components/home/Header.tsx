import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Détection du scroll;
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="accueil"
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-2xl md:text-3xl font-['Georgia'] text-indigo-600">Vegaplay</span>
        </Link>

        {/* Menu pour écrans larges */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center gap-6">
            {[
              { to: 'game', label: 'Jeux en ligne' },
              { to: 'paris', label: 'Paris sécurisés' },
              { to: 'gain', label: 'Gains réels' },
              { to: 'promote', label: 'Promotions', hasIcon: true },
            ].map((item, index) => (
              <li key={item.to} className="group relative">
                <div className="flex items-center gap-1">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={1000}
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-base font-medium font-['Roboto']"
                  >
                    {item.label}
                  </ScrollLink>
                  {item.hasIcon && (
                    <svg
                      className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Boutons d'action pour écrans larges */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/register"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-300 font-medium"
          >
            Jouer
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 bg-indigo-600 text-white border border-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 font-medium"
          >
            Connexion
          </Link>
        </div>

        {/* Bouton de menu mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4">
          {[
            { to: 'game', label: 'Jeux en ligne' },
            { to: 'paris', label: 'Paris sécurisés' },
            { to: 'gain', label: 'Gains réels' },
            { to: 'promote', label: 'Promotions' },
          ].map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={1000}
                onClick={toggleMenu}
                className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-lg font-medium font-['Roboto']"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-between px-6 py-4 border-t border-gray-200">
          <Link
            to="/register"
            onClick={toggleMenu}
            className="flex-1 mr-2 px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-300 text-center font-medium"
          >
            Jouer
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="flex-1 ml-2 px-5 py-2 bg-indigo-600 text-white border border-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 text-center font-medium"
          >
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;