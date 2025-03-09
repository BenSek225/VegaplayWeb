import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28 bg-gradient-to-r from-indigo-50 via-gray-100 to-indigo-50 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 overflow-hidden">
      {/* Partie texte; */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 animate-fade-in-up">
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-indigo-900 text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            Découvrez l’univers <span className="text-indigo-600">captivant</span> de VegaPlay
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
            Plongez dans des jeux passionnants, pariez en toute sécurité et rejoignez une communauté vibrante pour remporter des récompenses réelles !
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-4 mt-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-indigo-600 text-white border border-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300 flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
          >
            <span className="text-base font-medium">Jouer maintenant</span>
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
          >
            <span className="text-base font-medium">S’inscrire</span>
          </Link>
        </div>
      </div>

      {/* Partie image */}
      <div className="w-full lg:w-1/2 animate-fade-in-right">
        <img
          src="https://placeholder/616/640" // Remplace par une vraie image
          alt="Joueur en action sur VegaPlay"
          className="w-full h-auto max-h-[640px] object-cover rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;